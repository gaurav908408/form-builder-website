import Form from "../models/Form.js";
import Response from "../models/Response.js";

// ====================== CREATE FORM ======================

export const createForm = async (req, res) => {
  try {
    const { title, description, fields } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Title is required",
      });
    }

    const form = await Form.create({
      title,
      description,
      fields,
      createdBy: req.user.id,
    });

    return res.status(201).json({
      success: true,
      message: "Form Created Successfully",
      form,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ====================== GET ALL FORMS ======================

export const getForms = async (req, res) => {
  try {
    const forms = await Form.find({
      createdBy: req.user.id,
    }).lean();

    const formsWithResponses = await Promise.all(
      forms.map(async (form) => {
        const responseCount = await Response.countDocuments({
          formId: form._id,
        });

        return {
          ...form,
          responseCount,
        };
      })
    );

    return res.status(200).json({
      success: true,
      count: formsWithResponses.length,
      forms: formsWithResponses,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ====================== GET SINGLE FORM ======================
// ====================== GET SINGLE FORM ======================

export const getFormById = async (req, res) => {
  try {
    const form = await Form.findOne({
      _id: req.params.id,
      createdBy: req.user.id,
    });

    if (!form) {
      return res.status(404).json({
        success: false,
        message: "Form not found",
      });
    }

    return res.status(200).json({
      success: true,
      form,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ====================== GET PUBLIC FORM ======================

export const getPublicForm = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);

    if (!form) {
      return res.status(404).json({
        success: false,
        message: "Form not found",
      });
    }

    return res.status(200).json({
      success: true,
      form,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ====================== UPDATE FORM ======================

export const updateForm = async (req, res) => {
  try {
    const { title, description, fields } = req.body;

    const form = await Form.findOneAndUpdate(
      {
        _id: req.params.id,
        createdBy: req.user.id,
      },
      {
        title,
        description,
        fields,
      },
      {
        new: true,
      }
    );

    if (!form) {
      return res.status(404).json({
        success: false,
        message: "Form not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Form Updated Successfully",
      form,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ====================== DELETE FORM ======================

export const deleteForm = async (req, res) => {
  try {
    const form = await Form.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user.id,
    });

    if (!form) {
      return res.status(404).json({
        success: false,
        message: "Form not found",
      });
    }

    // Delete all responses of this form as well
    await Response.deleteMany({
      formId: req.params.id,
    });

    return res.status(200).json({
      success: true,
      message: "Form Deleted Successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};