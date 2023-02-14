import React, { Component } from 'react'
import axios from 'axios'
import ListingDisplay from './listingDisplay'

const url = "http://localhost:9500/products?categoryId="

export default class Listing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      itemList: ""
    }
  }

  render() {
    return (
      <ListingDisplay listData={this.state.itemList}/>
    )
  }

    //api with axios
    componentDidMount() {
      let categoryId = this.props.match.params.category
      console.log(categoryId);
      if (categoryId === "Decoration & Lighting") {
         categoryId = "Decoration-Lighting"
      }
      sessionStorage.setItem("categoryId", categoryId)
      axios.get(`${url}${categoryId}`)
      .then((res) => {
        console.log(res.data, categoryId);
        this.setState({itemList: res.data})
      })      
    }
}
