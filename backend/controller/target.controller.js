const Target = require("../model/target.model");

const createTargetHandler = async (req, res) => {
  try {
    const targetData = req.body;

    const newTarget = new Target(targetData);
    const savedTarget = await newTarget.save();

    return res.status(201).json({
      success: true,
      message: "Target created",
      target: savedTarget,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error", error });
  }
};

const readTargetHandler = async (req, res) => {
  try {
    const targets = await Target.find();
    return res.status(200).json({ success: true, targets });
  } catch (error) {
    console.error("Error fetching targets:", error);
    return res
      .status(500)
      .json({ success: false, error, message: "Internal Server Error" });
  }
};

const deleteTargetHandler = async (req, res) => {
  try {
    const { targetId } = req.params;
    const foundTarget = await Target.findById(targetId);
    if (!foundTarget) {
      return res
        .status(404)
        .json({ success: false, message: "Target not found." });
    }
    await Target.findByIdAndRemove(targetId);
    return res.status(200).json({ success: true, message: "Target deleted" });
  } catch (error) {
    console.error("Error deleting target:", error);
    return res
      .status(500)
      .json({ success: false, error, message: "Internal Server Error" });
  }
};

module.exports = {
  deleteTargetHandler,
  createTargetHandler,
  readTargetHandler,
};
