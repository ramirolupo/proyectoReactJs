import './App.css';
import NavBar from './components/NavBar/NavBar'
import CardItem from './components/Card/Card'
import {Container, Grid} from '@mui/material';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1> Pádel Manía</h1>
      <Container>
        <Grid container className='general-container'>
          <Grid item md={3}>
            <CardItem title={"BullPadel Hack 03"} price={95000}/>
          </Grid>
          <Grid item md={3}>
            <CardItem title={"Adidas Metalbone 3.1"} price={110000}/>
          </Grid>
          <Grid item md={3}>
            <CardItem title={"Head Delta Pro"} price={83000}/>
          </Grid>
          <Grid item md={3}>
            <CardItem title={"NOX AT10 Genius"} price={85000}/>
          </Grid>
        </Grid>
      </Container>
      
    </div>
  );
}


export default App;
