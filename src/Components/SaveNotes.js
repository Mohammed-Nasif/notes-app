export const saveNotes = (notes) => {
  return localStorage.setItem("notes", JSON.stringify(notes));
};
export const getNotes = () => {
  return JSON.parse(localStorage.getItem("notes")) || [];
};
