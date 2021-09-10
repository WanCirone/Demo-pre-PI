import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards.jsx';
import Form from './components/Form';
import { getCities } from './redux/actions';


function App() {
  const dispatch = useDispatch();
  const cities = useSelector(state => state.cities);

  console.log(cities)
  

  useEffect( () => {
    dispatch(getCities())
  },[])

  return (
    <div className="App">
      <Route exact path='/'> 
        <Nav/>
        <Cards cities={cities}/>
      </Route>
      <Route
        exact path='/post'
        component={Form}
      />
    </div>
  );
}

export default App;
