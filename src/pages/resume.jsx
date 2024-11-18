import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/articles.css"; // You may want to rename this file to something more generic, e.g. `resume.css`

const Resume = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "resume");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Resume | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>

            <div className="page-content">
                <NavBar active="resume" />
                <div className="content-wrapper">
                    <div className="resume-logo-container">
                        <div className="resume-logo">
                            <Logo width={46} />
                        </div>
                    </div>

                    <div className="resume-main-container">
                        <div className="title resume-title">
                            {INFO.resume.title}
                        </div>

                        <div className="subtitle resume-subtitle">
                            {INFO.resume.description}
                        </div>

                        <div className="resume-container">
                            <iframe
                                src="./resume.pdf" // Update this path to the actual location of your PDF
                                width="100%"
                                height="800px"
                                style={{ border: "none" }}
                                title="Resume PDF"
                            ></iframe>
                        </div>
                    </div>

                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Resume;
