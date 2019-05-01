import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Form from "./styles/Form";
import formatMoney from "../lib/formatMoney";

class CreateItem extends Component {
  state = {
    title: "Cool Shoes",
    description: "Love these shoes!",
    image: "dog.jpg",
    largeImage: "large-dog.jpg",
    price: 1000
  };
  handleChange = e => {
    const { name, type, value } = e.target;
    //convert value to Float if it is a number
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  render() {
    return (
      <Form
        onSubmit={e => {
          e.preventDefault();
          console.log(this.state);
        }}
      >
        <fieldset>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              required={true}
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="price">
            Price
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Price"
              required={true}
              value={this.state.price}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="description">
            Description
            <textarea
              type="text"
              id="description"
              name="description"
              placeholder="Enter a Description"
              required={true}
              value={this.state.description}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </fieldset>
      </Form>
    );
  }
}

export default CreateItem;
