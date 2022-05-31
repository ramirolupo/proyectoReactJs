import './App.css';
import NavBar from './components/NavBar/NavBar'
// import CardList from './components/CardList/CardList'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <div className='general-container'>
        <CardList/>
      </div> */}
      <ItemDetailContainer/>

    </div>
  );
}


export default App;
