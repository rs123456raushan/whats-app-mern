import React, { Component } from 'react';
import './Sidebar.css'
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';

export class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className='sidebar'>
                    <div className='sidebar_header'>
                        <Avatar src='https://media-exp1.licdn.com/dms/image/C4D03AQH2UOGCNr6vdQ/profile-displayphoto-shrink_800_800/0/1590508386976?e=1622073600&v=beta&t=HTuGKsER3nN6r77Bs9kOc0Xz_FX5_a8OIbcZXBVXG5M' />
                        <div className='sidebar_header_right'>
                            <IconButton>
                                <ChatIcon />
                            </IconButton>
                            <IconButton>
                                <ShareIcon />
                            </IconButton>
                            <IconButton>
                                <KeyboardArrowDownIcon />
                            </IconButton>
                        </div>
                    </div>
                    <div className='search'>
                        <SearchOutlined />
                        <input placeholder='Search a person' type='text' />
                    </div>
                    <div className='users'>
                        <Avatar src='https://avatars.githubusercontent.com/u/65230939?v=4' />
                        <div className='user1'>
                            <h3>Roshan</h3>
                            <p>Hi, there</p>
                        </div>
                    </div>
                    <div className='users'>
                        <Avatar src='https://media-exp1.licdn.com/dms/image/C4D03AQH2UOGCNr6vdQ/profile-displayphoto-shrink_800_800/0/1590508386976?e=1622073600&v=beta&t=HTuGKsER3nN6r77Bs9kOc0Xz_FX5_a8OIbcZXBVXG5M' />
                        <div className='user1'>
                            <h3>Rahul</h3>
                            <p>Hi, there</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;