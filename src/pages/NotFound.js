import React from 'react'
import Button from '../components/Button'

const NotFound = () => {
  return (
    <div className='not-found'>
        <div className='container'>
            <h1>4<span className='gr-txt'>0</span>4</h1>
            <p>The Page You Are Looking For Not Available!</p>
            <Button buttonType="default">Back to Home</Button>
        </div>
    </div>
  )
}

export default NotFound