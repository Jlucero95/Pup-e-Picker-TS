import { Component } from "react";
import { ActiveTabAndSetCount, Dog } from "../types";
import { Requests } from "../api";
import { getSelectedDogs } from "../Shared/GetSelectedDogs";
import { showDogs } from "../Shared/ShowSelectedDogsList";

export class ClassDogs extends Component<{
	activeTabAndSetCount: ActiveTabAndSetCount;
}> {
	state = {
		allDogs: [],
		favDogs: [],
		unFavDogs: [],
		isCardLoading: false,
	};

	componentDidMount() {
		this.refetchDogs();
	}

	refetchDogs = () => {
		const favArr: Dog[] = [];
		const unFavArr: Dog[] = [];
		Requests.getAllDogs()
			.then((dogs: Dog[]) => {
				this.setState({ allDogs: dogs });
				dogs.map((dog: Dog) => {
					if (dog.isFavorite) {
						favArr.push(dog);
						this.setState({ favDogs: favArr });
					} else if (!dog.isFavorite) {
						unFavArr.push(dog);
						this.setState({ unFavDogs: unFavArr });
					}
				});
			})
			.finally(() => {
				this.props.activeTabAndSetCount.favCount(favArr.length);
				this.props.activeTabAndSetCount.unFavCount(unFavArr.length);
				this.setState({ isCardLoading: false });
			});
	};

	render() {
		const { activeTab } = this.props.activeTabAndSetCount;
		const { allDogs, favDogs, unFavDogs, isCardLoading } = this.state;

		const selectedDogs = getSelectedDogs({
			favAndDogData: {
				allDogs,
				favDogs,
				unFavDogs,
				activeTab,
			},
		});

		return (
			<>
				{showDogs({
					dogAndActionInformation: {
						dogs: selectedDogs,
						isTrashClicked: () => {
							this.setState({ isCardLoading: true });
							this.refetchDogs();
						},
						isEmptyHeartClicked: () => {
							this.setState({ isCardLoading: true });
							this.refetchDogs();
						},
						isHeartClicked: () => {
							this.setState({ isCardLoading: true });
							this.refetchDogs();
						},
						isLoading: isCardLoading,
					}
				})}
			</>
		);
	}
}
