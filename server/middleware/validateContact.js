import { body, validationResult } from "express-validator";

function sanitize(value = "") {
  return String(value)
    .replace(/[<>]/g, "")
    .replace(/\0/g, "")
    .trim();
}

export const contactRules = [
  body("website").optional({ values: "falsy" }).isEmpty(),
  body("name").trim().isLength({ min: 1, max: 120 }).withMessage("Name is required."),
  body("company").trim().isLength({ min: 1, max: 160 }).withMessage("Company is required."),
  body("email").trim().isEmail().withMessage("Enter a valid email address.").isLength({ max: 160 }),
  body("phone")
    .optional({ values: "falsy" })
    .trim()
    .matches(/^[0-9+().\-\s]{7,30}$/)
    .withMessage("Enter a valid phone number."),
  body("subject").trim().isLength({ min: 1, max: 180 }).withMessage("Subject is required."),
  body("message").trim().isLength({ min: 10, max: 4000 }).withMessage("Please include a brief message."),
];

export function handleValidation(req, res, next) {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({
      ok: false,
      message: result.array()[0]?.msg || "Please check the form and try again.",
    });
  }

  req.body.name = sanitize(req.body.name);
  req.body.company = sanitize(req.body.company);
  req.body.email = sanitize(req.body.email).toLowerCase();
  req.body.phone = sanitize(req.body.phone || "");
  req.body.subject = sanitize(req.body.subject);
  req.body.message = sanitize(req.body.message);
  next();
}
