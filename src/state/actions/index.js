export function addMessage(message) {
  return {
    type: 'ADD_MESSAGE',
    message
  };
}

export function clearMessages() {
  return {
    type: 'CLEAR_MESSAGES'
  };
}
