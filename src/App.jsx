import "./App.css";
import ToDoList from "./components/ToDoList";
import { ListeninhaltContext } from "./context/Context";
import { useState } from "react";

function App() {
	const [alleToDos, setAlleToDos] = useState([]);
	return (
		<>
			<ListeninhaltContext.Provider value={{ alleToDos, setAlleToDos }}>
				<ToDoList />
			</ListeninhaltContext.Provider>
		</>
	);
}

export default App;
