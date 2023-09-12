import logo from './logo.svg';
import './App.css';
import {FirstJSX,FirstCreate} from './first';
import Second from './second';
import Third from './third';

function App() {
  return (
    <>
      <hr></hr>
      <h1>First:</h1>
      <FirstJSX></FirstJSX>
      <FirstCreate></FirstCreate>
      <hr></hr>
      <h1>Second:</h1>
      <Second></Second>
      <hr></hr>
      <h1>Third:</h1>
      <Third></Third>
      <hr></hr>
    </>
  );
}
export default App;
