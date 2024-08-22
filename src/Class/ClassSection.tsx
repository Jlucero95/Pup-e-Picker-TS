// you can use `ReactNode` to add a type to the children prop
import { Component } from "react";
import { Link } from "react-router-dom";
import { ClassSectionProps } from "./ClassTypes";
import { SectionSelector } from "../Shared/Selectors";
import { ActiveTab } from "../types";
type ClassSectionState = { activeTabState: ActiveTab };

export class ClassSection extends Component<ClassSectionProps> {
	state: ClassSectionState = {
		activeTabState: "none",
	};

	render() {
		const { activeTabState } = this.state;
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
							activeClass={activeTabState === "favourite" ? "active" : ""}
							count={favCount}
							onClick={() => {
								if (activeTabState !== "favourite") {
									this.setState({ activeTabState: "favourite" });
									this.props.activeTab("favourite");
								} else {
									this.setState({ activeTabState: "none" });
									this.props.activeTab("none");
								}
							}}
							section="favorited"
						/>

						<SectionSelector
							section="unfavorited"
							activeClass={activeTabState === "unFavourite" ? "active" : ""}
							count={unFavCount}
							onClick={() => {
								if (activeTabState !== "unFavourite") {
									this.setState({ activeTabState: "unFavourite" });
									this.props.activeTab("unFavourite");
								} else {
									this.setState({ activeTabState: "none" });
									this.props.activeTab("none");
								}
							}}
						/>
						<div
							className={`selector ${
								activeTabState === "create" ? "active" : ""
							}`}
							onClick={() => {
								if (activeTabState !== "create") {
									this.setState({ activeTabState: "create" });
									this.props.activeTab("create");
								} else {
									this.setState({ activeTabState: "none" });
									this.props.activeTab("none");
								}
							}}
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
