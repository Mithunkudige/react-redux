import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';


function App() {

  const dispatch = useDispatch();

  const data = useSelector(state => state);
  console.log(data);
 
  useEffect(() => {

    const fetchApi = async () => {
      try {
        const apiCall = await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await apiCall.json();
        dispatch({type: 'FETCH_DATA', payload: result});
      } catch (err) {
        console.log(err);
      }
    };

    fetchApi();
  }, [dispatch]);

 

  return (
    <div className="App">
      {data.map((el => <div key={el.id}>{el.title}</div>)) }
    </div>
  );
}

export default App;
