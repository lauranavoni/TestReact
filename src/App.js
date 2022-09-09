import "./App.css";
import User from "./components/User";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div class="table-responsive-sm">
    <div className="App">
      <Header></Header>
      <User></User>
      <Footer></Footer>
    </div>
    </div>
  );
}

export default App;
