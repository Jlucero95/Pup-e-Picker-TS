import { Component } from "react";
import { ClassSection } from "./ClassSection";
import { ClassDogs } from "./ClassDogs";
import { ActiveTab } from "../types";
// import { ClassCreateDogForm } from "./ClassCreateDogForm";

export class ClassApp extends Component<Record<string, never>> {
	state = {
		activeTab: "none",
		favCount: 0,
		unFavCount: 0,
	};
	render() {
		const { favCount, unFavCount } = this.state;
		return (
			<div
				className="App"
				style={{ backgroundColor: "goldenrod" }}
			>
				<header>
					<h1>pup-e-picker (Class Version)</h1>
				</header>
				<ClassSection
					activeTab={(tab: ActiveTab) => {
						this.setState({ activeTab: tab });
					}}
					favCount={favCount}
					unFavCount={unFavCount}
				>
					<ClassDogs
						favCount={(count) => {
							this.setState({ favCount: count });
						}}
						unFavCount={(count) => {
							this.setState({ unFavCount: count });
						}}
					/>
				</ClassSection>

				{/* should be inside of the ClassSection component using react children */}
				{/* <ClassCreateDogForm /> */}
			</div>
		);
	}
}
