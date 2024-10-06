import mongoose from "mongoose";
import bcrypt from "bcrypt";

// Define user schema
const userSchema = new mongoose.Schema(
  {
    // User's personal details
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true, // Remove leading and trailing spaces
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, // Email validation regex
        "Please fill a valid email address",
      ],
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
      match: [
        /^\d{10}$/, // Phone number validation (assuming 10-digit phone numbers)
        "Please fill a valid phone number",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    role: {
      type: String,
      enum: ["user", "recruiter"],
      required: true,
      default: "user",
    },

    // User's profile details
    profile: {
      bio: {
        type: String,
        trim: true,
      },
      skills: {
        type: [String],
        validate: {
          validator: Array.isArray,
          message: "Skills must be an array of strings",
        },
      },
      resume: {
        type: [String],
        validate: {
          validator: Array.isArray,
          message: "Resume must be an array of strings",
        },
      },
      resumeOriginalName: {
        type: String,
      },

      // User's educational background
      education: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Education",
        },
      ],

      // User's professional experience
      experience: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Experience",
        },
      ],

      // User's social links
      socialLinks: {
        linkedIn: {
          type: String,
          trim: true,
          match: [
            /^https?:\/\/(www\.)?linkedin\.com\/.*$/,
            "Please fill a valid LinkedIn URL",
          ],
        },
        github: {
          type: String,
          trim: true,
          match: [
            /^https?:\/\/(www\.)?github\.com\/.*$/,
            "Please fill a valid GitHub URL",
          ],
        },
        twitter: {
          type: String,
          trim: true,
          match: [
            /^https?:\/\/(www\.)?twitter\.com\/.*$/,
            "Please fill a valid Twitter URL",
          ],
        },
      },
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

// Pre-save hook to hash the password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Create and export the User model
const User = mongoose.model("User", userSchema);
export default User;
