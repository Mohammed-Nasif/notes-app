import { React, useState } from "react";
import Notes from "./Components/Notes";
import AddNote from "./Components/AddNote";
import NavBar from "./Components/NavBar";
import { getNotes } from "./Components/SaveNotes";
function App() {
  const [notes, setNotes] = useState(() => getNotes());
  const [bgColor, setBgColor] = useState("#2b2a33");
  return (
    <>
      <NavBar />
      <AddNote
        setNotes={setNotes}
        notes={notes}
        setBgColor={setBgColor}
        bgColor={bgColor}
      />
      <Notes notes={notes} setNotes={setNotes} />
    </>
  );
}

export default App;
