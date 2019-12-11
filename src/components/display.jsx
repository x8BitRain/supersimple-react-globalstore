import React from 'react';
//import the connect functionality.
import { connect } from 'react-context-global-store';


class Display extends React.Component {
  // everything in the global store is accessible by props, so make sure to super(props);
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* this component reads the global store and recieves it's new value when the
        counter component changes the counter value in the global store! */}
        <h1>{this.props.store.counter.value}</h1>

      </div>
    );
  }
}

//again exporting with component name followed by the name of the global store in an array as a string.
export default connect(Display, ['counter']);
