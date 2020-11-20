import React from 'react';

class PageIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='pageIndexContainer'>
        <button className = 'mentionsSec' onClick = {this.handleClick}>Previous</button>
        <button className = 'mentionsPrim' onClick = {this.handleClick}>Next</button>

      </div>
    );
  }
}

export default PageIndex;