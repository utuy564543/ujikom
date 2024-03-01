import React, { useState } from "react";
import Project from "./Project";

const ProjectForm = ({ project: initialProject, onSave, onCancel }) => {
  const [project, setProject] = useState(initialProject);
  const [errors,setErrors] = useState ({
    name: "",
    description: "",
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!isValid()) return
    onSave(project);
  };

  const handleChange = (event) => {
    const { type, name, value, checked } = event.target;

    let updatedValue = type === "chechbox" ? checked : value;

    if (type === "number") {
      updatedValue = Number(updatedValue);
    }

    const change = {
      [name]: updatedValue,
    };

    let updatedProject;

    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    });

    setErrors(() => validate(updatedProject))
  };

  const validate = (project) => {
    let errors = {name : "", description : ""};

    if(project.name.length === 0){
      errors.name = "Name is required"
    }
    if(project.name.length > 0 && project.name.length < 3){
      errors.name = "Name need to be more than 3 character"
    }
    if(project.description.length === 0){
      errors.name = "Description is required"
    }

    return errors;
  }

  const isValid = () => {
    return(
      errors.name.length === 0 && 
      errors.description.length === 0 
    )
  }


  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="name"> Project Name </label>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={project.name}
        onChange={handleChange}
      />
      <label htmlFor="description"> Project Description </label>
      <textarea
        name="description"
        placeholder="Enter Description"
        cols="30"
        rows="1"
        value={project.description}
        onChange={handleChange}
      ></textarea>
      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button
          type="button"
          className="danger bordered medium"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;