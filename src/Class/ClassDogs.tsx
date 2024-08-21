import { Component } from "react";
import { Dog } from "../types";
import { Requests } from "../api";
import { getSelectedDogs } from "../Shared/GetSelectedDogs";
import { showSelectedDogsList } from "../Shared/ShowSelectedDogsList";

// Right now these dogs are constant, but in reality we should be getting these from our server
export class ClassDogs extends Component<{
	favCount: (favCount: number) => void;
	unFavCount: (unFavCount: number) => void;
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
				this.props.favCount(favArr.length);
				this.props.unFavCount(unFavArr.length);
				this.setState({ isCardLoading: false });
			});
	};

	render() {
		const { allDogs, favDogs, unFavDogs, isCardLoading } = this.state;
		const selectedDogs = getSelectedDogs({
			favAndDogData: {
				allDogs,
				favDogs,
				unFavDogs,
				activeTab: "none",
			},
		});
		return (
			<>
				{showSelectedDogsList({
					dogAndActionData: {
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
					},
				})}
			</>
		);
	}
}
