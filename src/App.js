import "./App.css";
import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
function App() {
  return (
    <div>
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
