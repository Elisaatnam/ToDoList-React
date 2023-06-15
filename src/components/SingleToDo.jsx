import { useContext, useState } from "react";
import { ListeninhaltContext } from "../context/Context";

const SingleToDo = props => {
	const { alleToDos, setAlleToDos } = useContext(ListeninhaltContext);

	const [istErledigt, setIstErledigt] = useState(false);

	const erledigt = () => {
		setIstErledigt(prev => !prev);
	};

	const deleteToDo = id => {
		const neueListe = alleToDos.filter((todo, index) => index !== id);
		setAlleToDos(neueListe);
	};

	return (
		<article>
			<div className='single-to-do-div'>
				<div>
					<input type='checkbox' onClick={erledigt} />
					<p
						className='to-do-p'
						style={istErledigt ? { textDecoration: "line-through" } : {}}
					>
						{props.einzelnesToDoProp}
					</p>
				</div>

				<img
					className='waste'
					onClick={() => deleteToDo(props.index)}
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
