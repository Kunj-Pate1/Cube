import React from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifBoxIcon from '@mui/icons-material/GifBox';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Message from './Message'

function Chat() {
  return (
    <div className="chat">
        <ChatHeader />
        <div className="messages">
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
        <div className="input">
            <AddCircleIcon />
            <form>
                <input placeholder={'Enter your message here...'} />
                <button className='send' type='submit'>Send Message</button>
            </form>

            <div className="inputicons">
                <AttachFileIcon />
                <GifBoxIcon />
                <EmojiEmotionsIcon />
            </div>
        </div>
    </div>
    )
}

export default Chat