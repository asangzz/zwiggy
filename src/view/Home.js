import React from 'react' 
import Carousel from '../components/Carousal'
import Card from '../components/Card'

export default function Home() {
  return (
    <> 
    <div className='mh-100'> <Carousel/></div>
    <div className='row'>
        <div className='col-md-4'>
          <Card />
        </div>
        <div className='col-md-4'>
          <Card />
        </div>
        <div className='col-md-4'>
          <Card />
        </div>
      </div>
    
    </>
  )
}
