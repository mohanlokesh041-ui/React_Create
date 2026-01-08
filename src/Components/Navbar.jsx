import React from 'react'
import images from '../assets/Images/1.jpg'

const Navbar = () => {
  return (
  <>
    <div style={{backgroundColor:'black',color:'white',alignItems:'center',display:'flex',justifyContent:'center' }}>
      <div>
        <h1>This Is My Story</h1>
    </div>

    <center>

          <div>
            <img src={images} alt={images} />
          </div>
          
          </center>
          </div>


    </>
  )
}

export default Navbar