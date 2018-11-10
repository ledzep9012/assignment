import React from 'react';
import PropTypes from 'prop-types';

const Quote = (props) => {
  const { quote } = props;
  return (
    <div className="card">
      <div className="container">
        <h4><b>{quote.quote}</b></h4>
        <p>{quote.author}</p>
        <p>{quote.category}</p>
      </div>
    </div>
  );
};

Quote.propTypes = {
  quote: PropTypes.shape({ quote: '', author: '', category: '' }).isRequired,
};

export default Quote;
