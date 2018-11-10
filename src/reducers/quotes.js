import { QUOTE_ERROR, FETCH_QUOTES, GET_QUOTES } from '../constants/quote';

const initialState = {
  quotes: [
    {
      quote: "Maybe this world is another planet's Hell.",
      author: 'Aldous Huxley',
      category: 'Famous',
    },
    {
      quote: "I'm king of the world!",
      author: 'Titanic',
      category: 'Movies',
    },
    {
      quote: "Whether you think that you can, or that you can't, you are usually right.",
      author: 'Henry Ford',
      category: 'Famous',
    },
    {
      quote: "You can't handle the truth!",
      author: 'A Few Good Men',
      category: 'Movies',
    },
    {
      quote: "A boy's best friend is his mother.",
      author: 'Psycho',
      category: 'Movies',
    },
    {
      quote: 'Nobody puts Baby in a corner.',
      author: 'Dirty Dancing',
      category: 'Movies',
    },
    {
      quote: 'Political correctness is tyranny with manners.',
      author: 'Charlton Heston',
      category: 'Famous',
    },
    {
      quote: "Wait a minute, wait a minute. You ain't heard nothin' yet!",
      author: 'The Jazz Singer',
      category: 'Movies',
    },
    {
      quote: 'Sex and religion are closer to each other than either might prefer.',
      author: 'Saint Thomas More',
      category: 'Famous',
    },
    {
      quote: 'Greed, for lack of a better word, is good.',
      author: 'Wall Street',
      category: 'Movies',
    },
  ],
  count: 10,
  isFetching: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case QUOTE_ERROR:
      return {
        initialState,
      };
    case FETCH_QUOTES:
      return {
        ...state,
        quotes: payload,
      };
    case GET_QUOTES:
      return {
        ...state,
        quotes: payload,
        isFetching: false,
      };
    default:
      return state;
  }
}
