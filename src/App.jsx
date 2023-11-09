import Header from "./components/Header/Header.jsx";
import Examples from "./components/Examples.jsx";
import CoreConepts from "./components/CoreConepts.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
