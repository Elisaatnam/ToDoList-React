import { useState } from "react";

const AddToDo = props => {
	const [inhalt, setInhalt] = useState("");
	return (
		<>
			<input type='text' onChange={event => setInhalt(event.target.value)} />
			<button
				onClick={() =>
					props.hinzufuegen(prev => [{ beschreibung: inhalt }, ...prev])
				}
			>
				Speichern
			</button>
		</>
	);
};

export default AddToDo;
