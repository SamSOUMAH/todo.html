import ListElem from "./Components/ListElem";
import FilterList from "./Components/FilterList"
import AddList from "./Components/AddList"


function App() {
  return (
    <div className="App">
      <AddList></AddList>
      <hr />
      <FilterList ></FilterList>
      <ListElem></ListElem>
      
    </div>
  );
}

export default App;
