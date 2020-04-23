import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'



class Table extends React.Component{
  constructor() {
    super()
    this.state = {
      characters: [],
    }
  }

  componentDidMount(){
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res =>{
        this.setState({
          characters: res.data.results,
        })
      })
  }

render(){
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

  {this.state.characters.map(x =>
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
}
export default Table
