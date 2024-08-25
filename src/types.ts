// Add your own custom types in here
export type Dog = {
	id: string;
	image: string;
	description: string;
	isFavorite: boolean;
	name: string;
};

export type DogAndActionData = {
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

export type FavAndDogData = {
	activeTab: ActiveTab;
	allDogs: Dog[];
	favDogs: Dog[];
	unFavDogs: Dog[];
};

export type ActiveTab = "favourite" | "unFavourite" | "create" | "none";

export type FavAndUnFavData = {
	activeTab: ActiveTab;
	favCount: (favCount: number) => void;
	unFavCount: (unFavCount: number) => void;
};
