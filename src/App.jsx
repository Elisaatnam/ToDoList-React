import "./App.css";
import ToDoList from "./components/ToDoList";
import {
	ListeninhaltContext,
	OpenEditorContext,
	UpdateTextContext,
	UpdateIndexContext,
} from "./context/Context";
import { useState } from "react";

function App() {
	const [alleToDos, setAlleToDos] = useState([]); // Zustand für die Liste der Todos und die Funktion, um sie zu aktualisieren
	const [openEditor, setOpenEditor] = useState(false);
	const [updateText, setUpdateText] = useState("");
	const [updateIndex, setUpdateIndex] = useState("");

	return (
		<UpdateIndexContext.Provider value={{ updateIndex, setUpdateIndex }}>
			<UpdateTextContext.Provider value={{ updateText, setUpdateText }}>
				<OpenEditorContext.Provider value={{ openEditor, setOpenEditor }}>
					<ListeninhaltContext.Provider value={{ alleToDos, setAlleToDos }}>
						<ToDoList />
					</ListeninhaltContext.Provider>
				</OpenEditorContext.Provider>
			</UpdateTextContext.Provider>
		</UpdateIndexContext.Provider>
	);
}

export default App;
