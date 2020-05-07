import React, { Component } from "react";

import { connect } from "react-redux";

class CartItems extends Component {
  render() {
    let i = 0;
    // console.log("cart=", this.props.items);
    const disp = this.props.items.map(item => {
      return (
        <article key={(i = i + 1)} className="ArticleStyle">
          <div>{item.name}</div>
        </article>
      );
    });
    return <div>{disp}</div>;
  }
}

const mapStateToProps = state => {
  //console.log("f", state.cartItems);
  const item = [...state.cartItems];
  return {
    items: item
  };
};

export default connect(mapStateToProps)(CartItems);
