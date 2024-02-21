import React from 'react'
import CardDisplay from '../components/CardDisplay'



const HomePage = () => {

  const title1 = 'This is Card1';
  const title2 = 'This is Crad2';
  const detail1 = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, eveniet!';
  const detail2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quaerat id nobis minus, illo omnis.';

  return (
    <div>
      <h1>This is a HomePage</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cum obcaecati vero, sed nam tenetur ducimus atque illum tempore iste.</p>

      <div className='flex justify-center space-x-10 px-4'>
        
      <CardDisplay title = {title1} detail={detail1}/>
      <CardDisplay title = {title2} detail={detail2}/>
      </div>
    </div>
    
  )
}

export default HomePage
