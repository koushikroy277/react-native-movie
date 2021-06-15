import React, {useState, useReducer, createContext, useContext} from 'react';
import {conReduce} from './conReduce';
import { Animated } from 'react-native';

const globalInit: any = {};
export const AppContext = createContext(globalInit);

interface ReduceInterface {
  myListMovies: any[];
  myListSeries: any[];
  myListShows: any[];
};

const initialState: ReduceInterface = {
  myListMovies: [],
  myListSeries: [],
  myListShows: [],
};

const HEADER = 200;

const Context: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(conReduce, initialState);
  const [movieLoad, setMovieLoad] = useState<boolean>(false);
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const animatedValue2 = React.useRef(new Animated.Value(0)).current;
  const animatedValue3 = React.useRef(new Animated.Value(0)).current;

  const _bgAnimation = animatedValue.interpolate({
    inputRange: [0, HEADER + 50],
    outputRange: ['transparent', '#000'],
  });
  const _bgAnimation2 = animatedValue2.interpolate({
    inputRange: [0, HEADER + 50],
    outputRange: ['transparent', '#000'],
  });
  const _bgAnimation3 = animatedValue3.interpolate({
    inputRange: [0, HEADER + 50],
    outputRange: ['transparent', '#000'],
  });
   // reducer functions
  const addMyListMovies = (movieList: any) => dispatch({
    type: 'addMyListMovies',
    payload: movieList
  })
  const addMyListSeries = (seriesList: any) => dispatch({
    type: 'addMyListSeries',
    payload: seriesList
  })
  const addMyListShows = (showsList: any) => dispatch({
    type: 'addMyListShows',
    payload: showsList
  })

  return (
    <AppContext.Provider
      value={{
        state,
        _bgAnimation,
        _bgAnimation2,
        _bgAnimation3,
        animatedValue,
        animatedValue2,
        animatedValue3,

        //hooks
        movieLoad,
        setMovieLoad,

        //reducer functions
        addMyListMovies,
        addMyListSeries,
        addMyListShows,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default Context;
