import { useEffect, useState } from "react";
import { Dog, FavAndUnFavData } from "../types";
import { Requests } from "../api";
import { getSelectedDogs } from "../Shared/GetSelectedDogs";
import { showSelectedDogsList } from "../Shared/ShowSelectedDogsList";

// Right now these dogs are constant, but in reality we should be getting these from our server
export const FunctionalDogs = ({
	favAndUnFavData,
}: {
	favAndUnFavData: FavAndUnFavData;
}) => {
	const [allDogs, setAllDogs] = useState<Dog[]>([]);
	const [favDogs, setFavDogs] = useState<Dog[]>([]);
	const [unFavDogs, setUnFavDogs] = useState<Dog[]>([]);
	useState<boolean>(false);
	const [isCardLoading, setIsCardLoading] = useState<boolean>(false);

	const { favCount, unFavCount, activeTab } = favAndUnFavData;

	useEffect(() => {
		refetchDogs();
	}, []);

	const refetchDogs = () => {
		const favArr: Dog[] = [];
		const unFavArr: Dog[] = [];

		Requests.getAllDogs()
			.then((dogs: Dog[]) => {
				setAllDogs(dogs);
				dogs.map((dog: Dog) => {
					if (dog.isFavorite) {
						favArr.push(dog);
						setFavDogs(favArr);
					} else if (!dog.isFavorite) {
						unFavArr.push(dog);
						setUnFavDogs(unFavArr);
					}
				});
			})
			.finally(() => {
				setIsCardLoading(false);
				favCount(favArr.length);
				unFavCount(unFavArr.length);
			});
	};

	const selectedDogs = getSelectedDogs({
		favAndDogData: {
			activeTab: activeTab,
			allDogs: allDogs,
			favDogs: favDogs,
			unFavDogs: unFavDogs,
		},
	});
	return (
		//  the "<> </>"" are called react fragments, it's like adding all the html inside
		// without adding an actual html element
		<>
			{showSelectedDogsList({
				dogAndActionData: {
					dogs: selectedDogs,
					isTrashClicked() {
						setIsCardLoading(true);
						refetchDogs();
					},
					isHeartClicked() {
						setIsCardLoading(true);
						refetchDogs();
					},
					isEmptyHeartClicked() {
						setIsCardLoading(true);
						refetchDogs();
					},

					isLoading: isCardLoading,
				},
			})}
		</>
	);
};
