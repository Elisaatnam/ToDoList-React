import { useContext } from "react";
import SingleToDo from "./SingleToDo";
import AddToDo from "./AddToDo";
import {
	ListeninhaltContext,
	OpenEditorContext,
	UpdateTextContext,
	UpdateIndexContext,
} from "../context/Context";

const ToDoList = () => {
	const { alleToDos, setAlleToDos } = useContext(ListeninhaltContext); // Zugriff auf den Zustand der Todos über den Context
	const { openEditor, setOpenEditor } = useContext(OpenEditorContext);
	const { updateText, setUpdateText } = useContext(UpdateTextContext);
	const { updateIndex, setUpdateIndex } = useContext(UpdateIndexContext);

	const editText = () => {
		if (updateText !== "") {
			const updatedTodos = alleToDos.map((todo, index) =>
				index === updateIndex ? { ...todo, beschreibung: updateText } : todo,
			);
			setAlleToDos(updatedTodos);
			setOpenEditor(false);
			setUpdateText("");
		} else {
			alert("Bitte Änderungen eingeben");
		}
	};

	const abbrechen = () => {
		setOpenEditor(false);
		// Löscht string der schon in iputfeld war.
		setUpdateText("");
	};

	return (
		<section>
			<h1>Meine Todo's</h1>
			<section
				className='edit-section'
				style={openEditor ? { display: "flex" } : { display: "none" }}
			>
				<div className='inner'>
					<label htmlFor='edit'>Edit Todo:</label>
					<input
						id='edit'
						value={updateText}
						onChange={e => setUpdateText(e.target.value)}
						placeholder='Edit your Todo title'
						type='text'
					/>
					<button onClick={editText}>Done</button>
					<button onClick={abbrechen}>Abbrechen</button>
				</div>
			</section>
			{alleToDos.map((einzelnesToDo, index) => (
				<SingleToDo
					einzelnesToDoProp={einzelnesToDo.beschreibung}
					key={
						index
					} /* Verwendung des Index als Schlüssel (empfohlen: Verwenden Sie stattdessen eine eindeutige ID, wenn möglich) */
					index={index} /* Übergeben des Index an die SingleToDo-Komponente */
				/>
			))}
			<AddToDo /> {/* Rendert das AddToDo-Formular */}
		</section>
	);
};

export default ToDoList;
