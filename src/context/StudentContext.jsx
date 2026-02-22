import { createContext, useState } from "react";
import toast from "react-hot-toast";



export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (student) => {
    if (!favourites.find((s) => s.id === student.id)) {
      setFavourites([...favourites, student]);
      toast.success(`${student.name} added to favourites ✅`);
    } else {
      toast.error(`${student.name} is already in favourites ❌`);
    }
  };

  const removeFavourite = (id) => {
    const student = favourites.find((s) => s.id === id);
    setFavourites(favourites.filter((s) => s.id !== id));
    toast(<span className="flex items-center gap-2">
    <img src='./trash.png' alt="Trash" className="w-5 h-5" />
    {student?.name} removed from favourites 
  </span>
);
  };

  return (
    <StudentContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </StudentContext.Provider>
  );
};

