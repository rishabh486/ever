import "./App.css";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import TableComponent from "./Components/TableComponent";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Main />
        <div className="table">
          <TableComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
