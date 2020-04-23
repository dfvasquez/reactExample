import React from 'react';

const Table = (props) => {
  return(
    <div align='center'>
    <table className='uc-table' >
  <thead >
  <tr >
      <th style={{backgroundColor:'#173F8A'}}> Nombre </th>
      <th style={{backgroundColor:'#173F8A'}}> Estado</th>
      <th style={{backgroundColor:'#173F8A'}}> Especie</th>

  </tr>
  </thead>
  <tbody>

  {props.ch.map(x =>
      <tr>
    <td>{x.name}</td>
    <td>{x.status}</td>
    <td>{x.species}</td>
      </tr>
  )}
  </tbody>
</table>
    </div>
  )
}

export default Table;
