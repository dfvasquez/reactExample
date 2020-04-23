import React from 'react';
import axios from 'axios';
import Table from '../components/Table.jsx';
import ReactPaginate from 'react-paginate';



class Characters extends React.Component{
  constructor() {
    super()
    this.state = {
      characters: [2],
      prev: '',
      actual: 'https://rickandmortyapi.com/api/character/',
      next: ''
    }
  }

  componentDidMount(){
    console.log("AQUI");
    axios.get(this.state.actual)
      .then(res =>{
        this.setState({
          characters: res.data.results,
          prev: res.data.info.prev,
          next: res.data.info.next
        })
      })
  }

  handlePageClick  = data => {
    let nextPage = data.selected + 1;
    console.log(data.selected);
    let url = this.state.actual + '?page=' + nextPage;
    console.log(url);
    axios.get(url)
      .then(res =>{
        this.setState({
          characters: res.data.results,
          prev: res.data.info.prev,
          next: res.data.info.next
        })
      }).catch((error) => {
          console.log(error);
      });       
  }

render(){
  return(
    <div align='center'>
    <Table ch={this.state.characters}/>
    <ReactPaginate
        //previousLabel={'previous'}
        //nextLabel={'next'}
        //breakLabel={'...'}
        //breakClassName={'break-me'}
        pageCount={25}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={this.handlePageClick.bind(this)}
        //containerClassName={'pagination'}
        //subContainerClassName={'pages pagination'}
        //activeClassName={'active'}
    />
    </div>
  )
}
}
export default Characters;




        