import { DogAndTabInformation } from "../types";

export const getSelectedDogs = ({
	favAndDogData,
}: {
	favAndDogData: DogAndTabInformation;
}) => {
	const { activeTab, favDogs, unFavDogs, allDogs } = favAndDogData;

	if (activeTab === "favourite") {
		return favDogs;
	}
	if (activeTab === "unFavourite") {
		return unFavDogs;
	}

	return allDogs;
};
