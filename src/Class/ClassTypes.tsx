import { ReactNode } from "react";
import { ActiveTab } from "../types";

export type TabAndCountInformation = {
	children: ReactNode;
	activeTab: (activeTab: ActiveTab) => void;
	favCount: number;
	unFavCount: number;
};
