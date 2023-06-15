import { useState } from "react";
import SingleToDo from "./SingleToDo";
import AddToDo from "./AddToDo";

const ToDoList = () => {
	const [alleToDos, setAlleToDos] = useState([]);
	return (
		<>
			<h1>Meine Todo's</h1>

			{alleToDos.map((einzelnesToDo, index) => (
				<SingleToDo
					einzelnesToDoProp={einzelnesToDo.beschreibung}
					key={index}
				/>
			))}

			<AddToDo hinzufuegen={setAlleToDos} />
		</>
	);
};

export default ToDoList;
