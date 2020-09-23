let MoodObjsFromApi = [];

// This will be for an array of moods that can be used thruout the app
export const useMoods = () => {
  return MoodObjsFromApi.slice();
};

// Here we are going to create a getMoods function to get the moods off a local JSON server.

export const getMoods = () => {
  return fetch('http://localhost:8088/moods')
    .then((Response) => Response.json())
    .then((parsedMoods) => {
      console.table(parsedMoods);
      MoodObjsFromApi = parsedMoods;
    })
    .then((_) => {
      console.log('this should be an array of moods', MoodObjsFromApi);
    });
};
