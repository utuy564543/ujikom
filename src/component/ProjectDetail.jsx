import React from "react";

const ProjectDetail = (props) => {
  const { project } = props;

  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card large">
          <img src={project.image} alt={project.name} className="rounded" />
          <section className="section-dark">
            <h3 className="strong">
              <strong>{project.name}</strong>
            </h3>
            <p>{project.description}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
