import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import './Portfolio.css'
import Toast from './Toast'
import AddChannelBtn from './AddChannelBtn'

function Portfolio(props) {
  const { sidebarOpen, setSidebarOpen, setMessages } = props
  const [channels, setChannels] = useState([])

  let currentChannelId =
    localStorage.getItem('channelId') || '5f325c4598326349ea89ef84'
  let history = useHistory()

  useEffect(() => {
    axios
      .get('https://chat-app-server-linh.herokuapp.com/chat/channels')
      .then((res) => {
        setChannels(() => res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  function onClickGetMessage(e) {
    const channelId = e.target.dataset.id

    axios
      .get(
        `https://chat-app-server-linh.herokuapp.com/chat/channel/${channelId}`,
        {
          headers: {
            authorization: localStorage.getItem('jwt'),
          },
        },
      )
      .then((res) => {
        if (res.data.error) {
          localStorage.clear()

          Toast.fire({
            icon: 'error',
            title: res.data.error,
          })
          return history.push('/signin')
        }

        localStorage.setItem('channelId', res.data.channelId)
        setMessages(() => res.data.messages)
      })
      .catch((err) => console.log(err))
  }
  return (
    <>
      <div className={classNames('sidebar', { nonVisible: !sidebarOpen })}>
        <div className="logo d-flex justify-content-between">
          <div className="logo-name">
            <img
              src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Flogo.4dbbacd2.svg?v=1597420315594"
              alt=""
            />
            TIKO
          </div>
          <img
            onClick={() => setSidebarOpen(false)}
            src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Fcross.svg?v=1596721763254"
            alt=""
          />
        </div>
        <div className="vertical-menu pt-2">
          <ul>
            <li>
              <img
                src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Ficons8-menu-rounded-50.png?v=1596541736150"
                alt=""
              />
              <span>All unreads</span>
            </li>
            <li>
              <img
                src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Fconversation.svg?v=1596542126344"
                alt=""
              />
              <span>Threads</span>
            </li>
            <li>
              <img
                src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Fcopy.svg?v=1596543073128"
                alt=""
              />
              <span>Drafts</span>
            </li>
            <li>
              <img
                src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Fbookmark.svg?v=1596542475338"
                alt=""
              />
              <span>Saved items</span>
            </li>
          </ul>
          <ul className="channels">
            <li className="d-flex justify-content-between">
              <span className="menu-title">CHANNELS</span>
              <AddChannelBtn channels={channels} setChannels={setChannels} />
            </li>
            {channels.length &&
              channels.map((channel, index) => (
                <li
                  className={classNames('channel-item', {
                    'color-focus': currentChannelId === channel._id,
                  })}
                  key={index}
                  onClick={(e) => onClickGetMessage(e)}
                >
                  <span data-id={channel._id}># {channel.channelName}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
      {/* <header className="header fixed-top header-animated">
        <nav className="navbar navbar-expand-lg navbar-light py-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img
                className="logo"
                src="https://d33wubrfki0l68.cloudfront.net/cfaf67e8d5403f3add0475ab49a825edb5c01651/2b845/img/logo.png"
                alt="..."
                width="200"
              />
            </a>
            <button
              className="navbar-toggler navbar-toggler-end"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item-1">
                  <a
                    className="nav-link-1"
                    href="/"
                  >
                    BACK TO HOMEPAGE
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header> */}
    </>
  )
}

export default Portfolio
