import "./App.css";
import IllustrationSVG from "./Components/Image";
import LogoSVG from "./Components/LogoSVG";
import Registration from "./Components/Registration";

function App() {
  return (
    <div className="container">
      <div className="logo-container">
        <LogoSVG />
        <IllustrationSVG />
        <div className="start">
          <h1>Start for free & Get</h1>
          <h1>Attractive offers Today !</h1>
        </div>
      </div>
      <div className="form-container">
        <Registration />
      </div>
    </div>
  );
}

export default App;
