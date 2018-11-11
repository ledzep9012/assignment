import React from 'react';
import PropTypes from 'prop-types';

const Quote = (props) => {
  const { quote } = props;
  return (
    <div className="card">
      <div className="container">
        <h2>
          <b>{quote.quote}</b>
        </h2>
        <div>
          <p>
            <span role="img" aria-label="movies">
              {quote.category === 'Movies' ? '🎬' : '🧓'}
            </span>
            &nbsp;
            {' '}
            <span style={ {color: 'darkgrey'} }>{quote.author}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

Quote.propTypes = {
  quote: PropTypes.shape({ quote: '', author: '', category: '' }).isRequired,
};

export default Quote;
