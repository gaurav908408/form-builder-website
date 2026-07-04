import Response from "../models/Response.js";
import Form from "../models/Form.js";

// ======================
// Submit Response
// ======================

export const submitResponse = async (req, res) => {
  try {
    const { formId, answers } = req.body;

    if (!formId) {
      return res.status(400).json({
        success: false,
        message: "Form ID is required",
      });
    }

    const form = await Form.findById(formId);

    if (!form) {
      return res.status(404).json({
        success: false,
        message: "Form not found",
      });
    }

    const response = await Response.create({
      formId,
      answers,
    });

    return res.status(201).json({
      success: true,
      message: "Response Submitted Successfully",
      response,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ======================
// Get Responses By Form
// ======================

export const getResponses = async (req, res) => {
  try {

    const responses = await Response.find({
      formId: req.params.id,
    });

    return res.status(200).json({
      success: true,
      count: responses.length,
      responses,
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};