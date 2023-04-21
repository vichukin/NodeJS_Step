
import './App.css';
import {MyDate,Time} from './MyDate';
import User from "./User"

function App() {
  let name = "Dmytro";
  return (
      <>
        <div>{name}</div>
        <MyDate></MyDate>
        <Time></Time>
        <User></User>
      </>
  );
}

export default App;
