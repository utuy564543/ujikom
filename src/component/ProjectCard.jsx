import React from "react";
import { Link } from "react-router-dom";


const FormatDescription = (description) =>{
    return description.substring(0,20) + "..."
}

const ProjectCard = (props) =>{
    const {project, onEdit, onDelete}= props
    const handleEditClick = (projectBeingEdited) => {
        onEdit(projectBeingEdited)
    }
    const handleDeleteClick = (projectBeingDeleted) => {
        onDelete(projectBeingDeleted)
    }

    return(
        <div className="card">
            <img src={project.image} alt={project.name} />
            <section className="section dark ">
                <Link to={"/projects/" + project.id}>
                    <h5 className="strong">
                        <strong>{project.name}</strong>
                    </h5>
                    <p>{FormatDescription(project.description)}</p>
                </Link>
                <button className="bordered" onClick={()=>handleEditClick(project)}>
                    <span className="icon-edit"></span>
                    Edit
                </button>
                <button className="bordered secondary" onClick={() => handleDeleteClick(project)}>
                    <span className="icon-alert"></span>
                    Delete
                </button>
            </section>
        </div>
    )
}

export default ProjectCard