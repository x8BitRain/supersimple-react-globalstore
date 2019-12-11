import React from 'react';

// import the connector from react-context-global-store
import { connect } from 'react-context-global-store';



class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  // the two functions below change the value inside the global store by using
  // using this.props.setStore({}), basically the same as this.setState()

  goUp = () => {
    this.props.setStore({
      counter: {
        value: ++this.props.store.counter.value,
        test: 0
      }
    })
  }

  // function that decrements global store value.
  goDown = () => {
  this.props.setStore({
    counter: {
      value: --this.props.store.counter.value
    }
  })
}


  render() {
    return (
      <div>
        {/*first button increments global store value up, second button decrements*/}
        <button onClick={this.goUp}>UP</button>
        <button onClick={this.goDown}>DOWN</button>
      </div>
    );
  }
}

// Enable the connection to the global store by exporting with
// the name of your global store next to your component name in an array as a string.
export default connect(Counter, ['counter']);
