import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getQuotes from '../actions/quote.actions';
import Quotes from '../components/Quotes';

export class QuoteContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSelectType = this.handleSelectType.bind(this);
  }

  componentDidMount() {
    const { fetchQuotes } = this.props;
    fetchQuotes({ cat: 'movies', count: 10 });
  }

  handleSelectType(event) {
    event.preventDefault();
    const { fetchQuotes } = this.props;
    const selectedType = event.target.value;
    fetchQuotes({ cat: selectedType, count: 10 });
  }

  render() {
    const { quotes, isFetching, error } = this.props;
    return (
      <React.Fragment>
        <select className="select" onChange={this.handleSelectType}>
          <option value="movies">Movies</option>
          <option value="famous">Famous</option>
        </select>
        {isFetching ? <h1>Fetching Quotes...</h1> : <Quotes quotes={quotes} />}
        {error && !isFetching && <h2>{error}</h2>}
      </React.Fragment>
    );
  }
}

QuoteContainer.propTypes = {
  fetchQuotes: PropTypes.func.isRequired,
  quotes: PropTypes.instanceOf(Object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

QuoteContainer.defaultProps = {
  error: '',
};

const mapStateToProps = (state) => {
  const { quote } = state;
  const { quotes, isFetching, error } = quote;
  return {
    quotes,
    isFetching,
    error,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchQuotes: props => getQuotes(props)(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuoteContainer);
