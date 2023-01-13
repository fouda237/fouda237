import React ,{FunctionComponent, useEffect, useState}from 'react';
import POKEMONS from './models/mock-pokemon'; 
import Pokemon from './models/pokemon';
import PokemonList from './pages/pokemon-list';
import { Link, Switch, BrowserRouter as Router,Route } from 'react-router-dom';
import PokemonsDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';
const App: FunctionComponent = () => {
//  const [name,setName]=useState<String>('React');
 
 const [POKEMON,setPokemons]=useState<Pokemon[]>([]); 
 useEffect(()=>{
   setPokemons(POKEMONS);
 },[]);
 return (
    <Router>
      <div>
        {/* La barre de navigation commun à toutes les pages*/} 
        <nav>
          <div className='nav-wrapper teal'>
            <Link to="/" className='brand-logo center'>Pokédex</Link>
           
          </div>
        </nav>
        {/* Le système  de gestion des routes de notre application */}
        <Switch>
          <PrivateRoute exact path="/" component={PokemonList}/>
          <Route exact path="/login" component={Login}/>
          <PrivateRoute exact path="/pokemons" component={PokemonList}/>
          <PrivateRoute exact path="/pokemons/add" component={PokemonAdd}/>
          <PrivateRoute exact path="/pokemons/edit/:id" component={PokemonEdit}/>
          <PrivateRoute exact path="/pokemons/:id" component={PokemonsDetail}/>
          <Route  component={PageNotFound}/>
        </Switch>
      </div>
      
    </Router>
    
 )
}
  
export default App; 