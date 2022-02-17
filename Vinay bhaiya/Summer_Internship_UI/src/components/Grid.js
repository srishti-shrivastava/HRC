import React, { Component } from 'react'
import './grid.css'
import edt from './images/Path 18191.png'
import srch from './images/search-24px (3).png'
import GridButton from './GridButton'
import TableMake from "./Table";

import TableScroll from "./TableScroll"
export class Grid extends Component {
   
    render() {
            
          return (
         
            <div>
            <div className="table">
            <GridButton/>
            
            <div className="newtbl">
            <TableScroll/>
           
            </div>
            </div>
            </div>    

          


           
        )
    }
}

export default Grid
