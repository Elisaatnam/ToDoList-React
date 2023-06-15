import "./App.css";
import ToDoList from "./components/ToDoList";
import { ListeninhaltContext } from "./context/Context";
import { useState } from "react";

function App() {
	const [alleToDos, setAlleToDos] = useState([]); // Zustand für die Liste der Todos und die Funktion, um sie zu aktualisieren
	return (
		<ListeninhaltContext.Provider value={{ alleToDos, setAlleToDos }}>
			<ToDoList />
		</ListeninhaltContext.Provider>
	);
}

export default App;
