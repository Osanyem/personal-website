import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						frameworkLogo={project.frameworkLogo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						liveLink={project.liveLink}
						sourceCodeLink={project.sourceCodeLink}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
