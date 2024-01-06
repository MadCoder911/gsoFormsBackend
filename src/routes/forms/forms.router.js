const express = require("express");
const formsRouter = express.Router();
const { createForms, getAllForms } = require("./forms.controller");
const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require("../../utils/verifyToken");
formsRouter.post("/forms", createForms);
formsRouter.get("/forms", verifyUser, getAllForms);
module.exports = formsRouter;
// {
//     "name": "gsuSeniorsTeam",
//     "phone": "test@gsu.com",
//     "identity": "gsuSeniorsAdmin.com",
//     "major": "gsuSeniorsAdmin.com",
//     "payment_method": "gsuSeniorsAdmin.com",
//     "registered_at": "gsuSeniorsAdmin.com",
// }
