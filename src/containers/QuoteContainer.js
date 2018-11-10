import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getQuotes from '../actions/quote.actions';
import Quotes from '../components/Quotes';

export class QuoteContainer extends Component {
  componentDidMount() {
    const { fetchQuotes } = this.props;
    fetchQuotes({ cat: 'famous', count: 10 });
  }

  render() {
    const { quotes, isFetching } = this.props;
    return (
      <React.Fragment>
        {isFetching ? <h1>Fetching Quotes...</h1> : <Quotes quotes={quotes} />}
      </React.Fragment>
    );
  }
}

QuoteContainer.propTypes = {
  fetchQuotes: PropTypes.func.isRequired,
  quotes: PropTypes.instanceOf(Object).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const { quote } = state;
  const { quotes, isFetching } = quote;
  return {
    quotes,
    isFetching,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchQuotes: props => getQuotes(props)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuoteContainer);
