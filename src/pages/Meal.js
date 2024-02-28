import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Meal = () => {

  const [mealData, setData] = useState(null);
  const [isLoad, setLoad] = useState(false);
  const [isErr, setErr] = useState(false);
  const [id, setId] = useState(null);
   
  const getMeal = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php', {
        params: {
          'apikey': 
        },
      });
      setData(response.data.strCategory);
    } catch (err) {
      setLoad(false);
      setErr(err.message);
      
    }
    
  
    useEffect(() => {
      fetchData();
    });
    return [load, err, data];
  }
  return (
    <div>
      
    </div>
  )
}


export default Meal
