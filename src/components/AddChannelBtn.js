import React, { useState } from 'react'

import { Modal, Button, Input } from 'antd'
import axios from 'axios'

import Toast from './Toast'

function AddChannelBtn(props) {
  const { setChannels } = props
  const [channelName, setChannelName] = useState('')
  const [visible, setVisible] = useState(false)

  function handleOk() {
    axios
      .post(`https://chat-app-server-linh.herokuapp.com/chat/create-channel`, {
        channelName,
      })
      .then((res) => {
        setVisible(() => false)

        if (res.data.error)
          return Toast.fire({
            icon: 'error',
            title: res.data.error,
          })

        setChannels(() => res.data.newChannel)
        setChannelName(() => '')

        return Toast.fire({
          icon: 'success',
          title: res.data.message,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <span>
      <img
        onClick={() => setVisible(true)}
        className="add-channel-btn"
        src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Fadd.svg?v=1597129203908"
        alt=""
      />
      <Modal
        visible={visible}
        title="Channel Name"
        onOk={handleOk}
        onCancel={() => setVisible(false)}
        footer={[
          <Button key="back" onClick={() => setVisible(false)}>
            Return
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
          </Button>,
        ]}
      >
        <Input
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
          placeholder="Enter channel name"
        />
      </Modal>
    </span>
  )
}

export default AddChannelBtn
