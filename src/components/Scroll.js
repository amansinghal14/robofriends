import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{height: '540px', border: '1px solid #000', overflowY: 'scroll'}}>
      {
        props.children
      }
    </div>
  );
}

export default Scroll;