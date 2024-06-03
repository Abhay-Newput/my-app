import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button onClick={() => alert("OKIE")} text={"hey "} />
    </div>
  );
}

export default App;
