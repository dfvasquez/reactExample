import React from 'react';
import axios from 'axios';
import Table from '../components/Table.jsx';
import ReactPaginate from 'react-paginate';



class Characters extends React.Component{
  constructor() {
    super()
    this.state = {
      characters: [],
      prev: '',
      actual: 'https://rickandmortyapi.com/api/character/',
      next: ''
    }
  }

  componentDidMount(){
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
    let url = this.state.actual + '?page=' + nextPage;
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
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={"uc-pagination_pages page-item"}
        breakLinkClassName={"uc-pagination uc-pagination_pages page-item page-link"}
        pageCount={25}
        marginPagesDisplayed={2}
        pageRangeDisplayed={10}
        onPageChange={this.handlePageClick.bind(this)}
        containerClassName={"uc-pagination uc-pagination_pages"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        activeClassName={"page-item active"}
        activeLinkClassName={"page-item active page-link"}
        previousClassName={"page-item blue-uc"}
        previousLinkClassName={"page-link blue-uc"}
        nextClassName={"page-item blue-uc"}
        nextLinkClassName={"page-link blue-uc"}
    /> 
    </div>
  )
}
}
export default Characters;




        