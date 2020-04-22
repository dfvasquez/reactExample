import React from 'react'
import ReactDOM from 'react-dom'

function Table (props){
  return(
    <div align='center'>
    <table className={props.className} >
  <thead >
  <tr >
      <th style={{backgroundColor:'#173F8A'}}> Hora </th>
      <th style={{backgroundColor:'#173F8A'}}>Sección</th>
  </tr>
  </thead>
  <tbody>
  <tr>
      <td><strong>9:00 - 9:30</strong></td>
      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
  </tr>
  <tr>
      <td><strong>9:00 - 9:30</strong></td>
      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut justo non eros convallis rhoncus. Nunc sit amet cursus felis. Aliquam ultricies lacus ut mollis placerat.</td>
  </tr>
  <tr>
      <td><strong>9:00 - 9:30</strong></td>
      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
  </tr>
  <tr>
      <td><strong>9:00 - 9:30</strong></td>
      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut justo non eros convallis rhoncus. Nunc sit amet cursus felis. Aliquam ultricies lacus ut mollis placerat.</td>
  </tr>
  </tbody>
</table>

    </div>
  )
}

export default Table
