export const FETCH_RESULT = "FETCH_RESULT";

// ACTION_1
export const fetchResult = (query) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query, {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        },
      });

      if (response.ok) {
        let { data } = await response.json();

        dispatch({
          type: FETCH_RESULT,
          payload: data,
        });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
