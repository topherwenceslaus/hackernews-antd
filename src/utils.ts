export const combineReducers = (...reducers) => (state, action) => {
  return reducers.reduce((y, f) => f(y, action), state);
};

export const fetchData = async (url: string) => {
  return await (await fetch(url)).json();
};
