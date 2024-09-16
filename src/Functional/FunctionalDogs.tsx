import { useEffect, useState } from "react";
import { Dog, ActiveTabAndSetCount } from "../types";
import { Requests } from "../api";
import { getSelectedDogs } from "../Shared/GetSelectedDogs";
import { showDogs } from "../Shared/ShowSelectedDogsList";

export const FunctionalDogs = ({
	activeTabAndSetCount,
}: {
	activeTabAndSetCount: ActiveTabAndSetCount;
}) => {
	const [allDogs, setAllDogs] = useState<Dog[]>([]);
	const [favDogs, setFavDogs] = useState<Dog[]>([]);
	const [unFavDogs, setUnFavDogs] = useState<Dog[]>([]);
	useState<boolean>(false);
	const [isCardLoading, setIsCardLoading] = useState<boolean>(false);

	const { favCount, unFavCount, activeTab } = activeTabAndSetCount;

	useEffect(() => {
		refetchDogs();
	}, []);

	const refetchDogs = () => {
		setIsCardLoading(true);
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
			{showDogs({
				dogAndActionInformation: {
					dogs: selectedDogs,
					isTrashClicked() {
						refetchDogs();
					},
					isHeartClicked() {
						refetchDogs();
					},
					isEmptyHeartClicked() {
						refetchDogs();
					},

					isLoading: isCardLoading,
				},
			})}
		</>
	);
};
