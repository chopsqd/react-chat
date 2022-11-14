import React from 'react';
import socket from '../socket';

function Chat({users, messages}) {
    const [messageValue, setMessageValue] = React.useState('');

    return (
        <div className="chat">
            <div className="chat-users">
                Комната: <b>{}</b>
                <hr />
                <b>Онлайн ({users.length}):</b>
                <ul>
                    {users.map((user, index) => (
                        <li key={user + index}>{user}</li>
                    ))}
                </ul>
            </div>
            <div className="chat-messages">
                <div className="messages">
                    {messages.map((message) => (
                        <div className="message">
                            <p>{message.text}</p>
                            <div>
                                <span>{message.userName}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <form>
          <textarea
              value={messageValue}
              onChange={(e) => setMessageValue(e.target.value)}
              className="form-control"
              rows="3"/>
                    <button type="button" className="btn btn-primary">
                        Отправить
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Chat;