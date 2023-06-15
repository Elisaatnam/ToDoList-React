import { useContext } from "react";
import SingleToDo from "./SingleToDo";
import AddToDo from "./AddToDo";
import { ListeninhaltContext } from "../context/Context";

const ToDoList = () => {
	const { alleToDos } = useContext(ListeninhaltContext); // Zugriff auf den Zustand der Todos über den Context

	return (
		<section>
			<h1>Meine Todo's</h1>
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
