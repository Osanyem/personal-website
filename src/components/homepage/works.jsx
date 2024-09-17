import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work History"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./theScore.png"
								alt="theScore"
								className="work-image"
							/>
							<div className="work-title">TheScore</div>
							<div className="work-subtitle">
								Software Developer Co-op
							</div>
							<div className="work-duration">
								May 2024 - Aug 2024
							</div>
						</div>

						<div className="work">
							<img
								src="./theScore.png"
								alt="theScore"
								className="work-image"
							/>
							<div className="work-title">TheScore</div>
							<div className="work-subtitle">
								Software Test Engineer Co-op
							</div>
							<div className="work-duration">
								Jan 2023 - Sep 2023
							</div>
						</div>

						<div className="work">
							<img
								src="./theScore.png"
								alt="theScore"
								className="work-image"
							/>
							<div className="work-title">TheScore</div>
							<div className="work-subtitle">
								Software Developer in Test Co-op
							</div>
							<div className="work-duration">
								May 2022 - Dec 2022
							</div>
						</div>

						<div className="work">
							<img
								src="./moat.png"
								alt="moat web solutions"
								className="work-image"
							/>
							<div className="work-title">Moat Web Solutions</div>
							<div className="work-subtitle">
								Software Developer Intern
							</div>
							<div className="work-duration">
								Aug 2019 - Sep 2020
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
