import { useState } from "react";
import { dogPictures } from "../dog-pictures";
import { Requests } from "../api";
import toast from "react-hot-toast";

// use this as your default selected image
const defaultSelectedImage = dogPictures.BlueHeeler;

export const FunctionalCreateDogForm = () => {
	const [dogName, setDogName] = useState("");
	const [dogDescription, setDogDescription] = useState("");
	const [dogPhoto, setDogPhoto] = useState(defaultSelectedImage);
	const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

	const postDog = () => {
		setIsFormSubmitted(true);

		return Requests.postDog({
			dog: {
				name: dogName,
				image: dogPhoto,
				description: dogDescription,
				isFavorite: false,
			},
		})
			.then(() => {
				toast.success(`created ${dogName}`);
			})
			.finally(() => {
				resetForm();
			});
	};

	const resetForm = () => {
		setIsFormSubmitted(false);
		setDogName("");
		setDogDescription("");
		setDogPhoto(defaultSelectedImage);
	};

	return (
		<form
			action=""
			id="create-dog-form"
			onSubmit={(e) => {
				e.preventDefault();
				postDog();
			}}
		>
			<h4>Create a New Dog</h4>
			<label htmlFor="name">Dog Name</label>
			<input
				type="text"
				disabled={isFormSubmitted}
				value={dogName}
				onChange={(e) => {
					setDogName(e.target.value);
				}}
			/>
			<label htmlFor="description">Dog Description</label>
			<textarea
				name=""
				id=""
				cols={80}
				rows={10}
				disabled={isFormSubmitted}
				value={dogDescription}
				onChange={(e) => {
					setDogDescription(e.target.value);
				}}
			></textarea>
			<label htmlFor="picture">Select an Image</label>
			<select
				id=""
				onChange={(e) => {
					setDogPhoto(e.target.value);
				}}
				value={dogPhoto}
				disabled={isFormSubmitted}
			>
				{Object.entries(dogPictures).map(([label, pictureValue]) => {
					return (
						<option
							value={pictureValue}
							key={pictureValue}
						>
							{label}
						</option>
					);
				})}
			</select>
			<input
				type="submit"
				disabled={isFormSubmitted}
			/>
		</form>
	);
};
