export type Dog = {
	id: string;
	image: string;
	description: string;
	isFavorite: boolean;
	name: string;
};

export type DogAndActionInformation = {
	dogs: Dog[];
	isTrashClicked: ({ isTrashClicked }: { isTrashClicked: boolean }) => void;
	isHeartClicked: ({ isHeartClicked }: { isHeartClicked: boolean }) => void;
	isEmptyHeartClicked: ({
		isEmptyHeartClicked,
	}: {
		isEmptyHeartClicked: boolean;
	}) => void;
	isLoading: boolean;
};

export type DogAndTabInformation = {
	activeTab: ActiveTab;
	allDogs: Dog[];
	favDogs: Dog[];
	unFavDogs: Dog[];
};

export type ActiveTab = "favourite" | "unFavourite" | "create" | "none";

export type ActiveTabAndSetCount = {
	activeTab: ActiveTab;
	favCount: (favCount: number) => void;
	unFavCount: (unFavCount: number) => void;
};

export type CountAndSetActiveTab = {
	activeTab: (activeTab: ActiveTab) => void;
	favCount: number;
	unFavCount: number;
};
