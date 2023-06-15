import { useContext, useState } from "react";
import { ListeninhaltContext } from "../context/Context";

const SingleToDo = props => {
	const { alleToDos, setAlleToDos } = useContext(ListeninhaltContext); // Zugriff auf den Zustand der Todos und die Funktion, um sie zu aktualisieren

	const [istErledigt, setIstErledigt] = useState(false); // Zustand, um den Erledigt-Status des Todos zu verfolgen

	const erledigt = () => {
		setIstErledigt(prev => !prev); // Funktion zum Umkehren des Erledigt-Status
	};

	const deleteToDo = id => {
		const neueListe = alleToDos.filter((todo, index) => index !== id); // Filtern der Todos, um das zu löschende Todo anhand des Index auszuschließen
		setAlleToDos(neueListe); // Aktualisierung des Zustands mit der neuen Liste der Todos
	};

	return (
		<article>
			<div className='single-to-do-div'>
				<div>
					<input type='checkbox' onClick={erledigt} />
					<p
						className='to-do-p'
						style={istErledigt ? { textDecoration: "line-through" } : {}} // Hinzufügen einer Durchstreichung, wenn das Todo erledigt ist
					>
						{props.einzelnesToDoProp}
					</p>
				</div>

				<img
					className='waste'
					onClick={() => deleteToDo(props.index)} // Aufruf der deleteToDo-Funktion mit dem Index des Todos als Argument
					width='50'
					height='50'
					src='https://img.icons8.com/ios-filled/50/waste.png'
					alt='waste'
				/>
			</div>
		</article>
	);
};

export default SingleToDo;
