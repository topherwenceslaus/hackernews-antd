export const combineReducers = (...reducers) => (state, action) => {
  return reducers.reduce((y, f) => f(y, action), state);
};
