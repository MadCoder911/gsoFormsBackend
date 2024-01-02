const FormSchema = require("../../models/form");
async function getAllForms(req, res, next) {
  const { min, max, limit, ...others } = req.query;

  try {
    const forms = await FormSchema.find({});
    if (!forms || forms.length < 1) {
      res.status(400).json({ message: "No forms found" });
    }

    res.status(200).json(forms);
  } catch (error) {
    next(error);
  }
}
async function createForms(req, res, next) {
  const newForm = new FormSchema(req.body);

  try {
    const formm = await FormSchema.find({ phone: req.body.phone });
    if (formm.length !== 0) {
      console.log(formm);
      res
        .status(200)
        .setHeader("Content-Type", "application/json")
        .json({ message: "You have already registered" });
      return;
    } else {
      const savedForm = await newForm.save();
      res
        .status(200)
        .setHeader("Content-Type", "application/json")
        .json(savedForm);
    }
  } catch (error) {
    next(error);
  }
}
module.exports = {
  createForms,
  getAllForms,
};
