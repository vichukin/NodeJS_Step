
import './App.css';
import ColorButton from './ColorButton';
import Counter from './Counter';
import EnhancedCounter from './EnhancedCounter';
import ItemList from './ItemList';


function App() {
  const appValue={
    title:"Availible cars",
    items:[
      "Volkswagen Jetta","Remac Nevera","Lamborghini Hooracan","Audi R8"
    ]
  }
  return <>
  <ItemList data={appValue}> </ItemList>
  <hr/>
  <Counter startValue="5" incValue="2"></Counter>
  <hr/>
  <Counter ></Counter>
  <hr/>
  <EnhancedCounter startValue={12} incValue={1}></EnhancedCounter> 
  <hr/>
  <ColorButton></ColorButton>
  </>
  
}

export default App;
