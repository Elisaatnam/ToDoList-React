import { useState } from "react";

const SingleToDo = props => {
	const [istErledigt, setIstErledigt] = useState(false);
	const [loeschen, setLoeschen] = useState(false);

	const erledigt = () => {
		setIstErledigt(prev => !prev);
	};

	const deleteToDo = () => {
		setLoeschen(true);
	};

	return (
		<>
			<div style={loeschen ? { display: "none" } : {}}>
				<input type='checkbox' onClick={erledigt} />
				<p
					className='to-do-p'
					style={istErledigt ? { textDecoration: "line-through" } : {}}
				>
					{props.einzelnesToDoProp}
				</p>
				<img
					className='waste'
					onClick={deleteToDo}
					width='50'
					height='50'
					src='https://img.icons8.com/ios-filled/50/waste.png'
					alt='waste'
				/>
			</div>
		</>
	);
};

export default SingleToDo;
