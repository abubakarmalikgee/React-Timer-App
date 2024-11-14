import "./App.css";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import { useUserContext } from "./hooks/useUserContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const { user } = useUserContext() ?? {};

  return (
    <main className="min-h-screen flex flex-col justify-between items-center">
      <Header />
      {user ? <HomePage /> : <Register />}
      <Footer />
    </main>
  );
}

export default App;
