import React, { Component } from 'react'

class Item extends Component {
  constructor(props){
      super(props);
      this.state = {
          clicked:false
      }
  } 
  render () {
    return (
    <div>
      <h3 className='title'>Title</h3>
      <span className="price">$200.00</span>
      <p className="desc">
        desc
      </p>
      <a href='/item/1'>#1</a>
      <button type="button" onClick={() => this.setState({  clicked: true  })}>
        Buy
      </button>
      <span className="clicked">
      {
          this.state.clicked ? 'clicked': ''
      }
      </span>
    </div>
    )
  }
}

export default Item
