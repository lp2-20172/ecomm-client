const themeReducer = (state = { dark: false }, action) => {
    if (action.type === 'TOGGLE_THEME_SHADE') {
      return {
        ...state,
        dark: !state.dark,
      };
    }
    return state;
  };

  export default themeReducer