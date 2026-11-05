import * as userModel from "../models/userModel.js";

const handleResponse = (res, status, data) => {
  res.status(status).json(data);
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await userModel.getAllUsers();
    handleResponse(res, 200, users);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await userModel.getUserById(req.params.id);
    if (!user) {
      return handleResponse(res, 404, { message: "User not found" });
    }
    handleResponse(res, 200, user);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const user = await userModel.createUser(req.body.name, req.body.email);
    if (!user) {
      return handleResponse(res, 400, { message: "User not created" });
    }
    handleResponse(res, 201, user);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const user = await userModel.updateUser(req.params.id, name, email);
    if (!user) {
      return handleResponse(res, 404, { message: "User not found" });
    }
    handleResponse(res, 200, user);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const user = await userModel.deleteUser(req.params.id);
    if (!user) {
      return handleResponse(res, 404, { message: "User not found" });
    }
    handleResponse(res, 200, user);
  } catch (error) {
    next(error);
  }
};
