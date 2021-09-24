import "./App.css";
import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <div>
      <Header />
      <Cart />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
