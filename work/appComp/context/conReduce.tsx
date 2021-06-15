export const conReduce = (state: any, action: any) => {
  switch (action.type) {
    case 'addMyListMovies':
      const originalArray = [...state.myListMovies, action.payload];

      return { ...state, myListMovies: originalArray };
    
    case 'addMyListSeries':
      const originalArray2 = [...state.myListSeries, action.payload];

      return {...state, myListSeries:  originalArray2 };
    
    case 'addMyListShows':
      const originalArray3 = [...state.myListShows, action.payload];
      
      return {...state, myListShows:  originalArray3 };

    default:
      throw new Error();
  }
};
