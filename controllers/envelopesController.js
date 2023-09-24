const { default: mongoose } = require("mongoose");
const envelopeModel = require("../models/envelopeModel");

exports.getEnvelopes = async (req, res, next) => {
  try {
    const envelopes = await envelopeModel.find();
    res.status(200).json(envelopes);
  } catch (error) {
    next(error);
  }
};

exports.getEnvelopeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error("The id must be a valid MongoDB id");
      error.status = 400;
      throw error;
    }
    const envelope = await envelopeModel.findOne({ _id: id });
    if (!envelope) {
      const error = new Error("Envelope not found");
      error.status = 404;
      throw error;
    }
    return res
      .status(200)
      .json({
        success: true,
        status: 200,
        message: "Envelope found",
        data: envelope,
      });
  } catch (error) {
    next(error);
  }
};

exports.addEnvelope = async (req, res, next) => {
  try {
    const { title, budget } = req.body;
    if (!title || !budget) {
      const error = new Error("'title' and 'budget' must be defined");
      error.status = 400;
      throw error;
    }
    if (typeof budget !== "number") {
      const error = new Error("'budget' must be a number");
      error.status = 400;
      throw error;
    }

    if (typeof title !== "string") {
      const error = new Error("'title' must be a string");
      error.status = 400;
      throw error;
    }
    const newEnvelope = await envelopeModel.create({ title, budget });
    res
      .status(201)
      .json({
        success: true,
        status: 201,
        message: "Envelope created successfully",
        data: newEnvelope,
      });
  } catch (error) {
    next(error);
  }
};

exports.updateEnvelope = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, budget } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error("The id must be a valid MongoDB id");
      error.status = 400;
      throw error;
    }

    if (typeof budget !== "number") {
      const error = new Error("'budget' must be a number");
      error.status = 400;
      throw error;
    }

    if (typeof title !== "string") {
      const error = new Error("'title' must be a string");
      error.status = 400;
      throw error;
    }

    const envelopeToChange = await envelopeModel.findOneAndUpdate(
      { _id: id },
      { title, budget },
      { new: true }
    );

    if (!envelopeToChange) {
      const error = new Error("Envelope id not found");
      error.status = 404;
      throw error;
    }

    res
      .status(201)
      .json({
        success: true,
        status: 201,
        message: "Envelope updated successfully",
        data: envelopeToChange,
      });
  } catch (error) {
    next(error);
  }
};

exports.deleteEnvelope = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error("The id must be a valid MongoDB id");
      error.status = 400;
      throw error;
    }

    const deletedEnvelope = await envelopeModel.findOneAndDelete({ _id: id });
    if (!deletedEnvelope) {
      const error = new Error("Envelope id not found");
      error.status = 404;
      throw error;
    }
    res.status(200).json({ success: true, status: 200, message: "Envelope deleted", data: deletedEnvelope });
  } catch (error) {
    next(error);
  }
};
