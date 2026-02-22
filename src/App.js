import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { StudentProvider, StudentContext } from "./context/StudentContext";
import StudentList from "./components/StudentList";
import FavouriteList from "./components/FavouriteList";
import { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { favourites } = useContext(StudentContext);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <div className="text-white font-bold text-xl tracking-wide">
        🎓 Student Directory
      </div>

      {/* Links */}
      <div className="flex gap-6 text-white font-semibold">
        <Link to="/" className="hover:text-yellow-300 transition">Students</Link>
        <Link to="/favourites" className="relative hover:text-yellow-300 transition">
          Favourites
          {favourites.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-pink-500 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
              {favourites.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

function App() {
  return (
    <StudentProvider>
      <Router>
        <Navbar />
        <div className="p-8 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/favourites" element={<FavouriteList />} />
          </Routes>
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </Router>
    </StudentProvider>
  );
}

export default App;