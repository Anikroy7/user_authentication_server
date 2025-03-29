import { Schema, model } from "mongoose";
import config from "../../config";
import { TUser, UserModel } from "./user.interface";
import bcrypt from "bcrypt";

const userSchema = new Schema<TUser, UserModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["active", "blocked"],
      default: "active",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

// Remove password from output after saving
userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

userSchema.methods.isPasswordMatched = async function (
  plainTextPassword: string
): Promise<boolean> {
  return await bcrypt.compare(plainTextPassword, this.password);
};

export const User = model<TUser, UserModel>("User", userSchema);
