const express = require("express");
const router = express.Router();
const {
  getEnvelopes,
  getEnvelopeById,
  addEnvelope,
  updateEnvelope,
  deleteEnvelope,
  transferBudget,
} = require("../controllers/envelopesController");

router.get("/", getEnvelopes);

router.get("/:id", getEnvelopeById);

router.post("/", addEnvelope);

router.put("/:id", updateEnvelope);

router.delete("/:id", deleteEnvelope);

router.put("/:fromId/transfer/:toId", transferBudget)

module.exports = router;
