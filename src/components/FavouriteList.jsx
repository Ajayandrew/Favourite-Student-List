import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import StudentCard from "./StudentCard";

const FavouriteList = () => {
    const { favourites } = useContext(StudentContext);

    return (
        <div>
            <h2 className="text-3xl font-bold mb-6 text-pink-600 flex items-center gap-2">
                ❤️ Favourite Students
            </h2>

            {favourites.length === 0 ? (
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg shadow-md text-center">
                    <p className="text-gray-500 italic">No favourite students added yet.</p>
                    <p className="text-sm text-gray-400 mt-2">
                        Use the ⭐ button on student cards to add them here!
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {favourites.map((student) => (
                        <StudentCard key={student.id} student={student} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FavouriteList;