import { useContext, useState } from "react";
import { ListeninhaltContext } from "../context/Context";

const AddToDo = () => {
	const { alleToDos, setAlleToDos } = useContext(ListeninhaltContext); // Zugriff auf den Zustand der Todos und die Funktion, um sie zu aktualisieren

	const [inhalt, setInhalt] = useState(""); // Zustand für den Inhalt des Eingabefeldes

	const handleAddToDo = event => {
		event.preventDefault(); // Verhindert das Absenden des Formulars

		if (inhalt.trim() !== "") {
			// Überprüfung, ob der Inhalt nicht leer ist
			setAlleToDos(prev => [{ beschreibung: inhalt }, ...prev]); // Hinzufügen eines neuen Todos zum Zustand
			setInhalt(""); // Leeren des Eingabefeldes
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
