import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export const getAllUsers = async () => {
  return User.find().sort({ createdAt: -1 });
};

export const getUserById = async (id) => {
  return User.findById(id);
};

export const createUser = async (name, email) => {
  return User.create({ name, email });
};

export const updateUser = async (id, name, email) => {
  return User.findByIdAndUpdate(
    id,
    { name, email },
    { returnDocument: "after", runValidators: true },
  );
};

export const deleteUser = async (id) => {
  return User.findByIdAndDelete(id);
};
