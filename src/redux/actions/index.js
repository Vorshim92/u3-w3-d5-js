export const FETCH_SEARCH = "FETCH_SEARCH";
export const FETCH_ROCK = "FETCH_ROCK";
export const FETCH_POP = "FETCH_POP";
export const FETCH_HIP = "FETCH_HIP";
export const FETCH_SECTION = "FETCH_SECTION";

// ACTION_1
export const fetchResult = (query, actionType) => {
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
          type: actionType,
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
// Azione per selezionare una canzone

export const SELECT_SONG = "SELECT_SONG";

export const selectSong = (songInfo) => ({
  type: SELECT_SONG,
  payload: songInfo,
});
// Azione per MI PIACE su una canzone

export const LIKED_SONG = "LIKED_SONG";

export const likedSongAction = (songId) => ({
  type: LIKED_SONG,
  payload: songId,
});

// FETCH CALL
const fetchSongs = async (query) => {
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
      return data;
    } else {
      throw new Error("Error in fetching songs");
    }
  } catch (err) {
    console.log("error", err);
  }
};

// fetch call wrapper
export const fetchSongsWrapper = (query) => {
  return async (dispatch, getState) => {
    const items = await fetchSongs(query);
    dispatch({
      type: FETCH_SECTION,
      payload: {
        items,
        label: query,
      },
    });
  };
};
