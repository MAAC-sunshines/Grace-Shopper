import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AllCategories extends Component {

  componentDidMount() {
    this.props.loadAllCategories();
  }

  render() {
    const allCategories = this.props.allCategories;
    console.log(this.props);
    return (
      <div>
        <h2>Categories</h2>
        <ul>
          {
            allCategories && allCategories.map(category => {
              return (
                <li key={category.id}>
                  <h2>{category.name}</h2>

                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
