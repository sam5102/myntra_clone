import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import Header from '../Header';

const url = "https://myntra-clone.onrender.com/products?categoryId="
//http://localhost:9500/products?categoryId=
const filterUrl = "https://myntra-clone.onrender.com/products/"

const Listing = ({ match }) => {
  const [itemList, setItemList] = useState([]);
  const [names, setNames] = useState([])

  useEffect(() => {
    productList()
  }, [match.params.category]);

  const filterBrand = (categoryName, filterId) => {
    axios.get(`${filterUrl}${categoryName}?brand=${filterId}`).then((res) => {
        console.log(res.data, "sdfsdfds");
        setItemList(res.data);
      });
}

const productList = () => {
  let categoryId = match.params.category;
    if (categoryId === "Decoration & Lighting") {
        categoryId = "Decoration-Lighting"
    }
    sessionStorage.setItem('categoryId', categoryId);
    axios.get(`${url}${categoryId}`).then((res) => {
      console.log(res.data, categoryId);
      setItemList(res.data);
      setNames(res.data);
    });
}

  return (
    <>
      <Header />
      <ListingDisplay listData={itemList} filterBrand={filterBrand} productList={productList} filterQuery={names}/>
    </>
  );
};

export default Listing;

// import React, { Component } from 'react'
// import axios from 'axios'
// import ListingDisplay from './listingDisplay'

// const url = "http://localhost:9500/products?categoryId="

// export default class Listing extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       itemList: ""
//     }
//   }

//   render() {
//     return (
//       <ListingDisplay listData={this.state.itemList}/>
//     )
//   }

//     //api with axios
//     componentDidMount() {
//       let categoryId = this.props.match.params.category
//       console.log(categoryId);
//       if (categoryId === "Decoration & Lighting") {
//          categoryId = "Decoration-Lighting"
//       }
//       sessionStorage.setItem("categoryId", categoryId)
//       axios.get(`${url}${categoryId}`)
//       .then((res) => {
//         console.log(res.data, categoryId);
//         this.setState({itemList: res.data})
//       })      
//     }
// }

