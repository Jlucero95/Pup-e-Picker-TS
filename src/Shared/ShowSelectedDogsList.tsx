import { DogCard } from "./DogCard";
import { Requests } from "../api";
import { Dog, DogAndActionInformation } from "../types";
import toast from "react-hot-toast";

export const showDogs = ({
	dogAndActionInformation,
}: {
	dogAndActionInformation: DogAndActionInformation;
}) => {
	const {
		dogs,
		isTrashClicked,
		isHeartClicked,
		isEmptyHeartClicked,
		isLoading,
	} = dogAndActionInformation;

	return dogs.map((dog: Dog) => (
		<DogCard
			dog={{
				id: dog.id,
				image: dog.image,
				description: dog.description,
				isFavorite: dog.isFavorite,
				name: dog.name,
			}}
			key={dog.id}
			onTrashIconClick={() => {
				Requests.deleteDog({ dog: dog }).then(() => {
					isTrashClicked({ isTrashClicked: true });
					toast.success(`deleted ${dog.name} 😢`);
				});
			}}
			onHeartClick={() => {
				Requests.updateDog({ dog: dog }).then(() => {
					isHeartClicked({ isHeartClicked: true });
					toast.success(`un-favorited ${dog.name}`);
				});
			}}
			onEmptyHeartClick={() => {
				Requests.updateDog({ dog: dog }).then(() => {
					isEmptyHeartClicked({ isEmptyHeartClicked: true });
					toast.success(`favorited ${dog.name}`);
				});
			}}
			isLoading={isLoading}
		/>
	));
};
