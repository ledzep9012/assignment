import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

const Quotes = (props) => {
  const { quotes } = props;
  return (
    <React.Fragment>
      {quotes.map((quote, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Quote quote={quote} key={index} />
      ))}
    </React.Fragment>
  );
};

Quotes.propTypes = {
  quotes: PropTypes.instanceOf(Array).isRequired,
};

export default Quotes;
