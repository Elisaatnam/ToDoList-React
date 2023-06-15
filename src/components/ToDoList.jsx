import { useContext, useState } from "react";
import SingleToDo from "./SingleToDo";
import AddToDo from "./AddToDo";
import { ListeninhaltContext } from "../context/Context";

const ToDoList = () => {
	const { alleToDos, setAlleToDos } = useContext(ListeninhaltContext);

	return (
		<section>
			<h1>Meine Todo's</h1>

			{alleToDos.map((einzelnesToDo, index) => (
				<SingleToDo
					einzelnesToDoProp={einzelnesToDo.beschreibung}
					key={index}
					index={index}
				/>
			))}

			<AddToDo />
		</section>
	);
};

export default ToDoList;
