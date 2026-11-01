import { Contact } from "../models/Contact.js";
import { isDbConnected } from "../config/db.js";

export async function createContact(req, res, next) {
  try {
    if (req.body.website) {
      return res.status(200).json({
        ok: true,
        message: "Thank you. Your message has been sent.",
      });
    }

    if (!isDbConnected()) {
      return res.status(503).json({
        ok: false,
        message: "The contact service is temporarily unavailable. Please try again later.",
      });
    }

    await Contact.create({
      name: req.body.name,
      company: req.body.company,
      email: req.body.email,
      phone: req.body.phone,
      subject: req.body.subject,
      message: req.body.message,
    });

    return res.status(201).json({
      ok: true,
      message: "Thank you. Your message has been sent.",
    });
  } catch (error) {
    next(error);
  }
}
