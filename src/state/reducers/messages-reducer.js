const initialState = {
  messages: []
};

const MessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return Object.assign(
        {},
        {
          messages: [...state.messages, action.message]
        }
      );
    case 'CLEAR_MESSAGES':
      return [];
    default:
      return state;
  }
};

export default MessagesReducer;
