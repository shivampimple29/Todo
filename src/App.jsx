import Navbar from "./Navbar";
import Footer from "./Footer";
import Todo from "./Todo";

function App() {
  return (
    <div className="min-h-screen flex flex-col
                    bg-gradient-to-br from-indigo-900 via-purple-900 to-black">

      <Navbar />
        <Todo />
    

      <Footer />

    </div>
  );
}

export default App;