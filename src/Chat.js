import React, { Component } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

export class Chat extends Component {

    constructor() {
        super();
        this.state = {
            input: ''
        }
    }


    onInputChange = (e) => {
        if (e.key === 'Enter') {
            this.setState({ input: e.target.value })
        }
    }

    onMsgSend = ({url}) => {
        return (
            <div className='chat_message chat_receiver'>
                <span className='name'>Rahul</span>
                {url}
                <span className='time'>{new Date().toUTCString()}</span>
            </div>
        )
    }

    /*onMessageSend = (e) => {
        e.preventDefault();
        this.setState({ input: e.target.value })
        let html = document.getElementById('chat');
        if (e.keyCode === 13) {
            let htmlString = `<div className='chat_message chat_receiver'>
                        <span className='name'>Rahul</span>
                            ${this.state.input}
                        <span className='time'>{new Date().toUTCString()}</span>
                    </div>`
            html.innerHTML += htmlString;
        }
    }*/

    render() {

        return (
            <div className='chat'>
                <div className='chat_header'>
                    <Avatar src='https://avatars.githubusercontent.com/u/65230939?v=4' />
                    <div className='chat_header_info'>
                        <h3>Roshan</h3>
                        <p>Last seen at...</p>
                    </div>
                    <div className='chat_headerRight'>
                        <IconButton>
                            <SearchOutlined />
                        </IconButton>
                        <IconButton>
                            <AttachFile />
                        </IconButton>
                        <IconButton>
                            <MoreVert />
                        </IconButton>
                    </div>
                </div>
                <div id='chat' className='chat_body'>
                    <div className='chat_message'>
                        <span className='name'>Roshan</span>
                            Hello, Rahul
                        <span className='time'>{new Date().toUTCString()}</span>
                    </div>

                    <div className='chat_message chat_receiver'>
                        <span className='name'>Rahul</span>
                            Hi, Roshan
                        <span className='time'>{new Date().toUTCString()}</span>
                    </div>

                    <div className='chat_message'>
                        <span className='name'>Roshan</span>
                            Do you know, we both are same
                        <span className='time'>{new Date().toUTCString()}</span>
                    </div>

                    <this.onMsgSend url = {this.state.input}/>

                </div>

                <div className='chat_footer'>
                    <InsertEmoticonIcon />
                    <form>
                        <input id='message' onKeypress={this.onInputChange} placeholder='Type a message' type='text' />
                        <button type='submit'>Send a message</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default Chat;
