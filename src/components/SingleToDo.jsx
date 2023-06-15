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
		<article>
			<div
				style={loeschen ? { display: "none" } : {}}
				className='single-to-do-div'
			>
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
					onClick={deleteToDo}
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
