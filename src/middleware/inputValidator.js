import joi from "joi";

const userSchema = joi.object({
  name: joi.string().trim().required(),
  email: joi.string().email().required(),
});

const userByIdSchema = joi.object({
  id: joi
    .string()
    .pattern(/^[a-fA-F0-9]{24}$/)
    .required(),
});

export const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ status: 400, message: error.details[0].message });
  }
  next();
};

export const validateUserById = (req, res, next) => {
  const { error } = userByIdSchema.validate(req.params);
  if (error) {
    return res
      .status(400)
      .json({ status: 400, message: "User id must be a valid MongoDB id" });
  }
  next();
};
