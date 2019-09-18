import React from 'react'
import {NavLink} from 'react-router-dom'

import ipadpro  from '../images/ipadpro.svg'
import ipadair from '../images/ipadair.svg'
import ipad from '../images/ipad_light.svg'
import ipadmini from '../images/ipadmini.svg'
import compare from '../images/ipad_comp.svg'
import applePencil from '../images/pencil.svg'
import smartKeyboard from '../images/keyboard.svg'
import accessories  from '../images/ipad_acc.svg'
import ipadOS  from '../images/ios.svg'


function Ipad(){

     return(
          <div className="iPad-nav">
               <NavLink className="iPad-column"><img className="iPads" src={ipadpro}/>iPad Pro</NavLink>
               <NavLink className="iPad-column"><img className="iPads" src={ipadair}/>iPad Air</NavLink>
               <NavLink className="iPad-column"><img className="iPads" src={ipad}/>iPad</NavLink>
               <NavLink className="iPad-column"><img className="iPads" src={ipadmini}/>iPad mini</NavLink>
               <NavLink className="iPad-column"><img className="iPads" src={compare}/>Compare</NavLink>
               <NavLink className="iPad-column"><img className="iPads" src={applePencil}/>Apple Pencil</NavLink>
               <NavLink className="iPad-column"><img className="iPads" src={smartKeyboard}/>Smart Keyboard</NavLink>
               <NavLink className="iPad-column"><img className="iPads" src={accessories}/>Accessories</NavLink>
               <NavLink className="iPad-column"><img className="iPads" src={ipadOS}/>iPadOS</NavLink>   
          </div>
          
     )
}
export default Ipad