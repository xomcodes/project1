import React from 'react'
import "./Header.css"
import apps from '../apps.png'
import account from '../account.png'

const Header = () =>{
    return (
        <div className= "heading">
          <a href= "/#" class ="head">Gmail</a>  
          <a href = "/#" class ="head">Images</a>
          {/* <div className="img-sect"> */}
          <img className="shapps" src={apps} alt= "apps"></img>
          <img className="shaccount" src={account} alt= "account"></img>
          {/* </div> */}
        </div>
    )
}



export default Header


