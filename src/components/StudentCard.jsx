import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const StudentCard = ({ student }) => {
    const { favourites, addFavourite, removeFavourite } = useContext(StudentContext);
    const isFavourite = favourites.some((s) => s.id === student.id);

    const initials = student.name.split(" ").map((n) => n[0]).join("").toUpperCase();

    return (
        <div className="bg-gradient-to-r from-indigo-50 to-blue-100 shadow-xl rounded-xl p-6 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            {/* Avatar */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 text-white text-lg font-bold mb-4">
                {initials}
            </div>

            {/* Info */}
            <h3 className="text-xl font-bold text-gray-800">{student.name}</h3>
            <span className="text-sm text-gray-500 mb-2">ID: {student.id}</span>

            <div className="text-sm text-gray-700 space-y-1 mb-4">
                <p><span className="font-semibold">Age:</span> {student.age}</p>
                <p><span className="font-semibold">Gender:</span> {student.gender}</p>
                <p><span className="font-semibold">Department:</span>
                    <span className="ml-1 px-2 py-0.5 bg-yellow-200 text-yellow-800 rounded-full text-xs">
                        {student.department}
                    </span>
                </p>
                <p><span className="font-semibold">Contact:</span> {student.contact}</p>
            </div>

            {/* Attractive Buttons */}
            {isFavourite ? (
                <button
                    onClick={() => removeFavourite(student.id)}
                    className="mt-auto w-full flex items-center justify-center gap-2 px-4 py-2 
                     bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold 
                     rounded-full shadow-md hover:from-red-600 hover:to-pink-600 
                     transform hover:scale-105 transition-all duration-300"
                >
                    ❌ Remove Favourite
                </button>
            ) : (
                <button
                    onClick={() => addFavourite(student)}
                    className="mt-auto w-full flex items-center justify-center gap-2 px-4 py-2 
                     bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold 
                     rounded-full shadow-md hover:from-green-600 hover:to-emerald-600 
                     transform hover:scale-105 transition-all duration-300"
                >
                    ⭐ Add to Favourite
                </button>
            )}
        </div>
    );
};

export default StudentCard;