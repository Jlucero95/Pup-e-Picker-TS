// you can use `ReactNode` to add a type to the children prop
import { Component } from "react";
import { Link } from "react-router-dom";
import { ClassSectionProps } from "./ClassTypes";
import { SectionSelector } from "../Shared/Selectors";
import { ActiveTab } from "../types";

export class ClassSection extends Component<ClassSectionProps> {
	handleTabClick = (tab: ActiveTab) => {
		this.props.activeTab(tab);
	};
	render() {
		const { children, favCount, unFavCount } = this.props;
		return (
			<section id="main-section">
				<div className="container-header">
					<div className="container-label">Dogs: </div>

					<Link
						to={"/functional"}
						className="btn"
					>
						Change to Functional
					</Link>

					<div className="selectors">
						<SectionSelector
							activeClass=""
							count={favCount}
							onClick={() => {}}
							section="favorited"
						/>

						<SectionSelector
							section="unfavorited"
							activeClass={""}
							count={unFavCount}
							onClick={() => {}}
						/>
						<div
							className="selector"
							onClick={() => {}}
						>
							create dog
						</div>
					</div>
				</div>
				<div className="content-container">{children}</div>
			</section>
		);
	}
}
