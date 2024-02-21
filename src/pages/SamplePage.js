import React from 'react'
import { useParams } from 'react-router'

const SamplePage = () => {

  const somes = useParams();
  console.log(somes);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default SamplePage
