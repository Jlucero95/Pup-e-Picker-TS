// you can use `ReactNode` to add a type to the children prop
import { Component } from "react";
import { Link } from "react-router-dom";
import { ClassSectionProps } from "./ClassTypes";
import { SectionSelector } from "../Shared/Selectors";
import { ActiveTab } from "../types";



type ClassSectionState = { activeTab: ActiveTab };

export class ClassSection extends Component<ClassSectionProps> {
	state: ClassSectionState = {
		activeTab: "none",
	};

	render() {
		const { activeTab } = this.state;
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
							activeClass={activeTab === "favourite" ? "active" : ""}
							count={favCount}
							onClick={() => {
								if (activeTab !== "favourite") {
									this.setState({ activeTabState: "favourite" });
									this.props.activeTab("favourite");
								} else {
									this.setState({ activeTab: "none" });
									this.props.activeTab("none");
								}
							}}
							section="favorited"
						/>

						<SectionSelector
							section="unfavorited"
							activeClass={activeTab === "unFavourite" ? "active" : ""}
							count={unFavCount}
							onClick={() => {
								if (activeTab !== "unFavourite") {
									this.setState({ activeTab: "unFavourite" });
									this.props.activeTab("unFavourite");
								} else {
									this.setState({ activeTab: "none" });
									this.props.activeTab("none");
								}
							}}
						/>
						<div
							className={`selector ${
								activeTab === "create" ? "active" : ""
							}`}
							onClick={() => {
								if (activeTab !== "create") {
									this.setState({ activeTab: "create" });
									this.props.activeTab("create");
								} else {
									this.setState({ activeTab: "none" });
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
