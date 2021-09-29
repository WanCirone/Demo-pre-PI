import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards.jsx';
import { getCities } from './redux/actions';


function App() {
  const dispatch = useDispatch();
  const cities = useSelector(state => state.cities);

  console.log(cities)
  

  useEffect( () => {
    dispatch(getCities())
  },[dispatch])

  return (
    <div className="App">
      <Route exact path='/'> 
        <Cards cities={cities}/>
      </Route>
    </div>
  );
}

export default App;
