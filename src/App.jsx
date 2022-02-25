import { BrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import "./styles/tablestyle.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Dashboard />
      </BrowserRouter>
    </div>
  );
}

export default App;
