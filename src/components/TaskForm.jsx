import React, { useState } from "react";

const TaskForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    priority: "Medium",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };
  const validate = () => {
    const errors = {};

    if (!formData.title.trim()) {
      errors.title = "Title is required.";
    } else if (formData.title.length > 6) {
      errors.title = "Maximum 6 characters allowed.";
    }

    if (!formData.description.trim()) {
      errors.description = "Description is required.";
    }

    if (!formData.date) {
      errors.date = "Date is required.";
    }

    if (!formData.priority) {
      errors.priority = "Priority is required.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Task Added Successfully ✅");
      console.log(formData);

      setFormData({
        title: "",
        description: "",
        date: "",
        priority: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="add-task-card">
      <h2 style={{ marginBottom: "15px" }}>Add New Task</h2>

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div>
          <input
            type="text"
            placeholder="Task Title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          {errors.title && <span className="error-msg">{errors.title}</span>}
        </div>

        {/* Description */}
        <div>
          <textarea
            name="description"
            placeholder="Description"
            rows="3"
            value={formData.description}
            onChange={handleInputChange}
          />
          {errors.description && (
            <span className="error-msg">{errors.description}</span>
          )}
        </div>

        {/* Date & Priority */}
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ flex: 1 }}>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
            {errors.date && <span className="error-msg">{errors.date}</span>}
          </div>

          <div style={{ flex: 1 }}>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}
            >
              <option value="">Select Priority</option>
              <option value="Low">Low Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="High">High Priority</option>
            </select>
            {errors.priority && (
              <span className="error-msg">{errors.priority}</span>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div
          className="form-actions"
          style={{ display: "flex", gap: "10px", marginTop: "10px" }}
        >
          <button type="submit" className="btn-primary" style={{ flex: 1 }}>
            Add Task
          </button>
          <button
            type="reset"
            className="btn-secondary"
            style={{ flex: 1 }}
            onClick={() =>
              setFormData({
                title: "",
                description: "",
                date: "",
                priority: "",
              })
            }
          >
            Clean
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
