import React from 'react';
import { change } from '../../../redux'
import { connect } from 'react-redux'

function Table (props) {
  return(
    <div align='center'>
    <table className='uc-table' >
  <thead >
  <tr >
      <th style={{backgroundColor:'#173F8A'}}> Nombre </th>
      <th style={{backgroundColor:'#173F8A'}}> Estado</th>
      <th style={{backgroundColor:'#173F8A'}}> Especie</th>
      <th style={{backgroundColor:'#173F8A'}}> Género</th>
      <th style={{backgroundColor:'#173F8A'}}> Origen</th>
      <th style={{backgroundColor:'#173F8A'}}> Ubicación</th>
      <th style={{backgroundColor:'#173F8A'}}> Vidas</th>

  </tr>
  </thead>
  <tbody>

  {props.ch.map(x =>
      <tr>
    <td>{x.name} </td>
    <td>{x.status}</td>
    <td>{x.species}</td>
    <td>{x.gender}</td>
    <td>{x.origin.name}</td>
    <td>{x.location.name}</td>
    <td> {props.numOfCakes}</td>
    <td><button onClick={props.change}> sd </button> </td>

      </tr>
  )}
  </tbody>
</table>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return{
    change: () => dispatch(change())
  }
    

  
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Table);
