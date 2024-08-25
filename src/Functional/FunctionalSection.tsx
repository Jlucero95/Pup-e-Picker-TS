// you can use this type for react children if you so choose
import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { ActiveTab } from "../types";

export type FunctionalSectionProps = {
	activeTab: (activeTab: ActiveTab) => void;
	favCount: number;
	unFavCount: number;
};

export const FunctionalSection = ({
	functionalSectionProps,
	children,
}: {
	functionalSectionProps: FunctionalSectionProps;
	children: ReactNode;
}) => {
	const [activeTabState, setActiveTabState] = useState<ActiveTab>("none");

	const { activeTab, favCount, unFavCount } = functionalSectionProps;

	const handleTabClick = (tab: ActiveTab) => {
		if (activeTabState !== tab) {
			setActiveTabState(tab);
			activeTab(tab);
		} else {
			setActiveTabState("none");
			activeTab("none");
		}
	};

	return (
		<section id="main-section">
			<div className="container-header">
				<div className="container-label">Dogs: </div>
				<Link
					to={"/class"}
					className="btn"
				>
					Change to Class
				</Link>
				<div className="selectors">
					{/* This should display the favorited count */}
					<div
						className={`selector ${
							activeTabState === "favourite" ? "active" : ""
						}`}
						onClick={() => {
							handleTabClick("favourite");
						}}
					>
						favorited ( {favCount} )
					</div>

					{/* This should display the unfavorited count */}
					<div
						className={`selector  ${
							activeTabState === "unFavourite" ? "active" : ""
						}`}
						onClick={() => {
							handleTabClick("unFavourite");
						}}
					>
						unfavorited ( {unFavCount} )
					</div>
					<div
						className={`selector ${
							activeTabState === "create" ? "active" : ""
						}`}
						onClick={() => {
							handleTabClick("create");
						}}
					>
						create dog
					</div>
				</div>
			</div>
			<div className="content-container">{children}</div>
		</section>
	);
};
