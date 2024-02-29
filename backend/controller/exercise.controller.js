const Exercise = require("../model/exercise.model");

const createExerciseHandler = async (req, res) => {
  try {
    const exerciseData = req.body;

    const newExercise = new Exercise(exerciseData);
    const savedExercise = await newExercise.save();

    return res.status(201).json({
      success: true,
      message: "Exercise created",
      exercise: savedExercise,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error", error });
  }
};

const readExerciseHandler = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    return res.status(200).json({ success: true, exercises });
  } catch (error) {
    console.error("Error fetching exercises:", error);
    return res
      .status(500)
      .json({ success: false, error, message: "Internal Server Error" });
  }
};

const deleteExerciseHandler = async (req, res) => {
  try {
    const { exerciseId } = req.params;
    const foundExercise = await Exercise.findById(exerciseId);
    if (!foundExercise) {
      return res
        .status(404)
        .json({ success: false, message: "Exercise not found." });
    }
    await Exercise.findByIdAndDelete(exerciseId);
    return res.status(200).json({ success: true, message: "Exercise deleted" });
  } catch (error) {
    console.error("Error deleting exercise:", error);
    return res
      .status(500)
      .json({ success: false, error, message: "Internal Server Error" });
  }
};

module.exports = {
  createExerciseHandler,
  readExerciseHandler,
  deleteExerciseHandler,
};
