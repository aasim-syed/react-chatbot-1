import React, { useState } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import Post from './Post'
import Link from './Link'
import '../../App.css'
const theme = {
  background: '#f5f8fb',
  fontFamily: 'arial, sans-serif',
  headerBgColor: '#0f4d',
  headerFontColor: '#000',
  headerFontSize: '15px',
  botBubbleColor: '#0f7d',
  botFontColor: '#000',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

// all available config props
const config = {
  width: '300px',
  height: '500px',
  hideUserAvatar: true,
  placeholder: 'Type your response.',
  headerTitle: 'FLOOD-INFO-BOT⚡🚀',
}

const Chatbot = (props) => {
  let [showChat, setShowChat] = useState(false)

  const startChat = () => {
    setShowChat(true)
  }
  const hideChat = () => {
    setShowChat(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: showChat ? 'none' : '' }}>
        <ChatBot
          speechSynthesis={{ enable: true, lang: 'en-US' }}
          recognitionEnable={true}
          steps={[
            {
              id: 'welcome',
              message: 'Hello!',
              trigger: 'q-firstname',
            },
            /* Paste */
            {
              id: 'q-firstname',
              message: 'What is your  name?',
              trigger: 'firstname',
            },
            {
              id: 'firstname',
              user: true,
              validator: (value) => {
                if (/^[A-Za-z]+$/.test(value)) {
                  return true
                } else {
                  return 'Please input alphabet characters only.'
                }
              },
              trigger: 'rmcbot',
            },
            {
              id: 'rmcbot',
              message:
                'Hi,{previousValue} I am G2C2🚀⚡ Bot! What can I do for you?',
              trigger: 'qtype',
            },
            {
              id: 'qtype',
              options: [
                { value: 1, label: 'Need help?', trigger: '4' },
                { value: 2, label: 'Report flood data ?', trigger: '3' },
                { value: 3, label: ' Gather flood data', trigger: '5' },
                { value: 4, label: 'More Information', trigger: '6' },
              ],
            },
            {
              id: '3',
              message:'visit https://g-2-c-2.vercel.app/',
              trigger: 'qtype',
            },
            {
              id: '4',
              message:
                'The data will be available in official website 🌦️ and sent once registered',
              trigger: 'qtype',
            },
            {
              id: '5',
              message:
                'The data will be available in official website 🌦️ and sent once registered',
              trigger: 'qtype',
            },
            {
              id: '6',
              component: <Link />,
              trigger: 'q-submit',
            },
            {
              id: 'q-submit',
              message: 'Do you have any other questions !?',
              trigger: 'submit',
            },
            {
              id: 'submit',
              options: [
                { value: 'y', label: 'Yes', trigger: 'no-submit' },
                { value: 'n', label: 'No', trigger: 'end-message' },
              ],
            },
            {
              id: 'no-submit',
              options: [
                { value: 1, label: 'Need help?', trigger: '4' },
                { value: 2, label: 'Report flood data ?', trigger: '3' },
                { value: 3, label: ' Gather flood data', trigger: '5' },
                { value: 4, label: 'More Information', trigger: '6' },
              ],
            },
            {
              id: 'end-message',
              component: <Post />,
              asMessage: true,
              end: true,
            },
          ]}
          {...config}
        />
      </div>
      <div>
        {!showChat ? (
          <button className="btn" onClick={() => startChat()}>
            <i className="fa fa-minus"></i>
          </button>
        ) : (
          <button className="btn" onClick={() => hideChat()}>
            <i className="fa fa-plus"></i>
          </button>
        )}
      </div>
    </ThemeProvider>
  )
}

export default Chatbot
