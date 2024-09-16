/* eslint-disable no-mixed-spaces-and-tabs */
import {useState } from "react";
import { FunctionalCreateDogForm } from "./FunctionalCreateDogForm";
import { FunctionalDogs } from "./FunctionalDogs";
import { FunctionalSection } from "./FunctionalSection";
import { ActiveTab } from "../types";

export function FunctionalApp() {
	const [activeTab, setActiveTab] = useState<ActiveTab>("none");
	const [favCount, setFavCount] = useState<number>(0);
	const [unFavCount, setUnFavCount] = useState<number>(0);

	return (
		<div
			className="App"
			style={{ backgroundColor: "skyblue" }}
		>
			<header>
				<h1>pup-e-picker (Functional)</h1>
			</header>
			<FunctionalSection
				tabSelection={{
					activeTab(activeTab) {
						setActiveTab(activeTab);
					},
					favCount: favCount,
					unFavCount: unFavCount,
				}}
			>
				{activeTab === "create" ? (
					<FunctionalCreateDogForm />
				) : activeTab === "favourite" ||
				  activeTab === "unFavourite" ||
				  activeTab === "none" ? (
					<FunctionalDogs
						tabSelectorInformation={{
							activeTab: activeTab,
							favCount: (favCount: number) => {
								setFavCount(favCount);
							},
							unFavCount: (unFavCount: number) => {
								setUnFavCount(unFavCount);
							},
						}}
					/>
				) : null}
			</FunctionalSection>
		</div>
	);
}
