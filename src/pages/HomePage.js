import React from 'react'
import { useState } from 'react';
import { getPopular, imageUrl } from '../components/constants';
import { useApi } from '../hooks/apiHooks';

const HomePage = () => {


  const [page, setpage] = useState(1);

  const [load, err, data] = useApi(getPopular, page);
  if (load) {
    return <h1>LoaDING....</h1>;
  }
  // if (err) {
  //   return <h1>{err}</h1>
  // }
  return (
    <div>

      <div className='pages space-x-7'>
        <button onClick={() => setpage((prev) => {
          if (prev > 1) {
            return prev - 1;
          }
        })}>Previous</button>
        
        <button onClick={() => setpage((prev) => prev + 1)}>Next</button>
      </div>

      {data && data.map((movie) => {
        return <div key={movie.id}>
          <h1>{movie.title}</h1>
          <img src={`${imageUrl}${movie.poster_path}`} alt="" />
        </div>
      })}


    </div>
  )
}

export default HomePage