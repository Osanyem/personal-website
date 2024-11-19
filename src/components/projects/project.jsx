import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./styles/project.css";

const Project = (props) => {
    const { logos, title, description, linkText, liveLink, sourceCodeLink } = props;

    return (
        <React.Fragment>
            <div className="project">
                <div className="project-container">
                    <div className="project-logo">
                        {logos.map((logo, index) => (
                            <img key={index} src={logo} alt={`logo-${index}`} />
                        ))}
                    </div>
                    <div className="project-title">{title}</div>
                    <div className="project-description">{description}</div>

                    {/* Conditionally render the linkText if the link is not an empty string */}
                    {liveLink && linkText && (
                        <Link to={liveLink}>
                            <div className="project-link">
                                <div className="project-link-icon">
                                    <FontAwesomeIcon icon={faLink} />
                                </div>
                                <div className="project-link-text">{linkText}</div>
                            </div>
                        </Link>
                    )}

                    {/* Always show the source code link */}
                    <Link to={sourceCodeLink}>
                        <div className="project-link">
                            <div className="project-link-icon">
                                <FontAwesomeIcon icon={faGithub} />
                            </div>
                            <div className="project-link-text">
                                View Source Code (GitHub)
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Project;
