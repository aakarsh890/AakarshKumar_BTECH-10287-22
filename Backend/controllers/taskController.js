const Task = require("../models/task");

exports.createTask = async (req, res) => {
  try {
    const { title, description, due_date } = req.body;

    if (!title || !due_date) {
      return res.status(400).json({
        message: "Title and due date are required"
      });
    }

    const createdAt = new Date();       
    const dueDate = new Date(due_date);

    const status = createdAt > dueDate ? "completed" : "pending";

    const task = await Task.create({
      title,
      description,
      due_date,
      status,
      user: req.user.id
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({
      message: "Task creation failed"
    });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const filter = { user: req.user.id };

    if (req.query.status) {
      filter.status = req.query.status;
    }

    const tasks = await Task.find(filter).sort({
      createdAt: -1
    });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: "Fetching tasks failed"
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: "Task update failed"
    });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        message: "Status is required"
      });
    }

    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { status },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: "Status update failed"
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    res.json({
      message: "Task deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Task deletion failed"
    });
  }
};
