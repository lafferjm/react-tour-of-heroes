import React from 'react';
import { connect } from 'react-redux';
import { clearMessages } from '../../state/actions';
import { ClearButton, MessagesHeader } from './styles';

const Messages = ({ messages, clearMessages }) => (
  <>
    <MessagesHeader>Messages</MessagesHeader>
    <ClearButton onClick={clearMessages}>clear</ClearButton>
    {
      messages && messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))
    }
  </>
);

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

const mapDispatchToProps = {
  clearMessages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
