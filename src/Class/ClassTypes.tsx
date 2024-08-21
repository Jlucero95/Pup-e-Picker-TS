import { ReactNode } from "react";
import { ActiveTab } from "../types";

export type ClassSectionState = {
	activeTab: ActiveTab;
	isLoading: boolean;
};

export type ClassSectionProps = {
	children: ReactNode;
	activeTab: (activeTab: ActiveTab) => void;
	favCount: number;
	unFavCount: number;
};
