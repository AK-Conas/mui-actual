import Button from "./Button";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="buttons">
        <Button variant="primary" onClick={() => console.log("small button")}>
          Small
        </Button>
        <Button
          variant="secondary"
          onClick={() => console.log("medium button")}
        >
          Medium
        </Button>
        <Button variant="third" onClick={() => console.log("large button")}>
          Large
        </Button>
      </div>
    </div>
  );
}
