import { useState } from "react";

const AddToDo = props => {
	const [inhalt, setInhalt] = useState("");

	const handleAddToDo = event => {
		event.preventDefault(); // Prevent form submission

		if (inhalt.trim() !== "") {
			props.hinzufuegen(prev => [{ beschreibung: inhalt }, ...prev]);
			setInhalt(""); // Clear the input field
		}
	};

	return (
		<form onSubmit={handleAddToDo}>
			<input
				type='text'
				value={inhalt}
				onChange={event => setInhalt(event.target.value)}
				placeholder='To Do eingeben..'
				className='to-to-input'
			/>
			<button type='submit'>Speichern</button>
		</form>
	);
};

export default AddToDo;
