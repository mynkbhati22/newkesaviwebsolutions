import { React, useState, useEffect } from 'react'
import { FaEthereum } from 'react-icons/fa'
import { SiBinance } from 'react-icons/si'
import meta from './image/meta.png'
import connect from './image/connect.svg'
import { BiSearchAlt2 } from 'react-icons/bi'
// import DappNavbar from "./DappNavbar";
import { AiOutlineLogout } from 'react-icons/ai'
import { getAccount } from './Balance'
import './Dapp.css'
import { DisconnectWallet } from './web3'
import Web3 from 'web3'
import Hello from './Hello'

const web3 = new Web3(window.ethereum)
console.log(web3)

export default function Dapp() {
  const [csvFile, setCsvFille] = useState()
  const [account, setAccount] = useState()
  const [chainid, setChainId] = useState(0)
  const [datavalue, setDatavalue] = useState()
  const [getbalance, setGetBalance] = useState('')
  const [isconnected, setIsConnected] = useState(false)
  const [showdropdown, setShowDropDown] = useState(false)
  const [shownative, setShowNative] = useState(false)
  const [showmessage, setShowMessage] = useState(false)
  const [line, setLine] = useState(false)
  const [result, setResult] = useState(false)
  const [headers, setHeaders] = useState([])

  const processCSV = (str) => {
    setHeaders(str.slice(str.indexOf('\n') + 1).split('\n'))

    return headers
  }

  const upload = () => {
    const file = csvFile
    const reader = new FileReader()

    reader.onload = function (e) {
      const text = e.target.result
      console.log(text)
      processCSV(text)
    }

    reader.readAsText(file)
  }

  //  RESULTS

  const ShowResult = (e) => {
    e.preventDefault()
    setResult(!result)
  }

  // connect wallet

  const connectMetamask = async () => {
    if (window.ethereum) {
      const add = await window.ethereum.enable()
      setAccount(add[0])
      setIsConnected(!isconnected)
      console.log(window.ethereum)
    }
  }

  // Disconnect
  const logOut = async () => {
    await DisconnectWallet()
    setIsConnected(!isconnected)
    setAccount(undefined)
    window.localStorage.removeItem('WC')
    window.account = false
  }

  // Change Network
  const changeNetwork = async (chainId) => {
    if (window.ethereum) {
      try {
        await web3.currentProvider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: web3.utils.toHex(chainId) }],
        })
      } catch (e) {}
    }
  }

  // get chainID  & dynamic value
  useEffect(async () => {
    const ID = await web3.eth.getChainId()

    setChainId(ID)
    const account = await getAccount()
    web3.eth.getBalance(account, function (err, result) {
      if (err) {
        console.log(err)
      } else {
        setGetBalance(web3.utils.fromWei(result, 'ether') + '')
        console.log(web3.utils.fromWei(result, 'ether') + ' ETH')
      }
    })
    setGetBalance(account)
    await connectMetamask()
    await DisconnectWallet()
    document.getElementById('alertAnim')
    document.getElementById('alertAnim')
  }, [])

  try {
    window.ethereum.on('chainChanged', async () => {
      console.log('chain changed.')
      window.location.reload()
    })
  } catch (e) {
    //
  }
  // icon disappear and logout

  // get balance
  console.log('address', getbalance)

  const ShowBalance = () => {
    setGetBalance(getbalance)
  }
  // eth native currency

  const Showdropdown = () => {
    setShowDropDown(!showdropdown)
    // setDisableicon(!disableicon);
  }

  // show Natvie
  const Shownative = () => {
    setShowNative(!shownative)
  }

  const handleChange = () => {
    //
  }

  const ShowMessage = () => {
    setShowMessage(!showmessage)
    console.log('alert')
  }

  const ShowLine = () => {
    setLine(!line)
  }

  return (
    <div>
      {/* <DappNavbar /> */}
      <section>
        <div className="global-container">
          <div className="nav2-area" style={{ marginTop: '50px' }}>
            <div className="breadcrumb-area">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a
                      href="/"
                      style={{ textDecoration: 'none', color: '#47a5e9' }}
                    >
                      Home
                    </a>
                  </li>
                  {/* <li className="breadcrumb-item">
                    <a
                      href="/createToken/ETH"
                      style={{ textDecoration: "none", color: "#47a5e9" }}
                    >
                      Create Token
                    </a>
                  </li> */}
                </ol>
              </nav>
            </div>

            {/* SWITCH NETWORK */}

            <button
              type="button"
              className="btn btn-outline-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style={{ marginLeft: 'auto' }}
            >
              {chainid === undefined ? <FaEthereum /> : ''}
              {chainid === 1 ? <FaEthereum /> : ''}
              {chainid === 56 ? <SiBinance /> : ''}
              {chainid === 4 ? <FaEthereum color="black" /> : ''}
              {chainid === 3 ? <FaEthereum color="red" /> : ''}
              {chainid === 97 ? <SiBinance /> : ''}
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      // onClick={() => Reloadpage()}
                    ></button>
                  </div>
                  <div className="modal-body">
                    {' '}
                    <div className="content d-grid">
                      <p
                        style={{
                          border: '1px solid',
                          padding: '7px',
                          textAlign: 'center',
                          cursor: 'default',
                          background: 'black',
                          color: 'white',
                        }}
                        onClick={() => changeNetwork(56)}
                      >
                        <SiBinance />
                        Binance Smart Chain
                      </p>
                      <p
                        style={{
                          border: '1px solid',
                          padding: '7px',
                          textAlign: 'center',
                          cursor: 'default',
                          background: 'black',
                          color: 'white',
                        }}
                        onClick={() => changeNetwork(97)}
                      >
                        <SiBinance />
                        Binance Smart Chain TESTNET
                      </p>
                      <p
                        style={{
                          border: '1px solid',
                          padding: '7px',
                          textAlign: 'center',
                          marginLeft: '10px',
                          cursor: 'default',
                          background: 'black',
                          color: 'white',
                        }}
                        onClick={() => changeNetwork(1)}
                      >
                        <FaEthereum />
                        ETHEREUM MAINNET
                      </p>
                      <p
                        style={{
                          border: '1px solid',
                          padding: '7px',
                          textAlign: 'center',
                          marginLeft: '10px',
                          cursor: 'default',
                          background: 'black',
                          color: 'white',
                        }}
                        onClick={() => changeNetwork(4)}
                      >
                        <FaEthereum />
                        RIKNEBY TESTNET
                      </p>
                      <p
                        style={{
                          border: '1px solid',
                          padding: '7px',
                          textAlign: 'center',
                          marginLeft: '10px',
                          cursor: 'default',
                          background: 'black',
                          color: 'white',
                        }}
                        onClick={() => changeNetwork(3)}
                      >
                        <FaEthereum />
                        ROPSTEN TESTNET
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CONNECT WALLET MODAL */}

            <div className="connect-wallet-area">
              <button
                type="button"
                className="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#connectModal"
                style={{ marginLeft: '10px', cursor: 'default' }}
              >
                {account
                  ? account.slice(0, 4) + '...' + account.slice(38)
                  : 'connect'}
              </button>

              {isconnected ? (
                <AiOutlineLogout
                  className="logout"
                  onClick={() => logOut()}
                  style={{
                    marginLeft: '5px',
                    cursor: 'pointer',
                    border: '1px solid #0d6efd',
                    padding: '5px',
                    color: '0d6efd',
                    transition: '0.5s',
                  }}
                  size={30}
                />
              ) : (
                ''
              )}
            </div>
          </div>

          <div
            className="modal fade"
            id="connectModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div
                className="modal-content"
                style={{ height: '290px', width: '350px' }}
              >
                <div className="modal-header">
                  <h5
                    className="modal-title m-auto text-black"
                    id="exampleModalLabel "
                  >
                    Please Select Your Web3 Wallet
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body d-block m-auto">
                  <div className="wallets-link">
                    <button
                      style={{
                        padding: '10px',
                        borderRadius: '12px',
                        background: 'transparent',
                      }}
                      onClick={connectMetamask}
                    >
                      <img
                        src={meta}
                        alt=""
                        style={{
                          width: '87px',
                          display: 'block',
                          margin: 'auto',
                        }}
                      />
                      <h4
                        className="wallets"
                        style={{
                          fontSize: '12px',
                          fontWeight: 'bold',
                          textAlign: 'center',
                          marginTop: '10px',
                        }}
                      >
                        MetaMask
                      </h4>{' '}
                    </button>
                  </div>
                  <div
                    className="wallets-link 
                   w-25"
                  >
                    <button
                      style={{
                        padding: '10px',
                        borderRadius: '12px',
                        background: 'transparent',
                      }}
                    >
                      <img
                        src={connect}
                        alt=""
                        style={{
                          width: '70px',
                          display: 'block',
                          margin: 'auto',
                        }}
                      />
                      <h4
                        className="wallets"
                        style={{
                          fontSize: '12px',
                          fontWeight: 'bold',
                          textAlign: 'center',
                          marginTop: '10px',
                        }}
                      >
                        WalletConnect
                      </h4>{' '}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container" style={{ marginTop: '65px' }}>
            <div className="kws-airdrop">
              <div className="kws-airdrop-content text-center">
                <h2>
                  <strong>Welcome to</strong>{' '}
                  <span style={{ color: '#22abe3' }}>
                    <b>KWS Airdrop</b>
                  </span>
                </h2>
                <p className="fs-5 py-3">
                  A tool that allows you to batch send ERC20 tokens
                </p>
              </div>
              <div className="token-container text-center">
                <span className="eth">
                  <FaEthereum color="#22abe3" /> Ethereum Mainnet
                </span>
                <span className="bnb mx-3 fs-6">
                  <SiBinance color="#22abe3" /> BNB Smart Chain
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container"
          style={{ maxWidth: '912px', margin: 'auto' }}
        >
          <div className="airdrop-area">
            <div className="form-area position-relative">
              <form action="">
                <div className="labels d-flex justify-content-between">
                  <label htmlFor="exampleInputSearch1" className="form-label">
                    Token address
                  </label>
                  {getbalance && account && datavalue ? (
                    <label htmlFor="exampleInputSearch1" className="form-label">
                      Balance: {getbalance}
                    </label>
                  ) : (
                    ''
                  )}
                </div>
                <div className="heroSearch">
                  <BiSearchAlt2 id="searchIco" />
                  <input
                    type="text"
                    value={datavalue}
                    onChange={handleChange}
                    placeholder="Select your Token"
                    onClick={() => {
                      Showdropdown()
                      Shownative()
                    }}
                  />
                </div>

                {/* WHEN WALLET IS CONNECTED */}
                {chainid === 1 && account && showdropdown ? (
                  <div className="dropdown">
                    <div className="dropdown-area-box">
                      <p
                        style={{
                          color: '#000000',
                          marginBottom: '12px',
                          padding: '10px 23px 0px',
                          textAlign: 'start',
                          cursor: 'default',
                        }}
                        onClick={() => {
                          setShowDropDown(false)
                          ShowBalance()
                          setDatavalue(`Ethereum Mainnet Native Currency`)
                        }}
                      >
                        ETH-{getbalance}-Ethereum Mainnet Native Currency
                      </p>
                    </div>
                  </div>
                ) : (
                  ''
                )}
                {chainid === 97 && account && showdropdown ? (
                  <div className="dropdown">
                    <div className="dropdown-area-box">
                      <p
                        style={{
                          color: '#000000',
                          marginBottom: '12px',
                          padding: '10px 23px 0px',
                          textAlign: 'start',
                          cursor: 'default',
                        }}
                        onClick={() => {
                          setShowDropDown(false)
                          setDatavalue(`BNB Smart Chain Native Currency`)
                        }}
                      >
                        BNB-{getbalance}-BNB Smart Chain Native Currency
                      </p>
                    </div>
                  </div>
                ) : (
                  ''
                )}

                {/* RINKEYBY TESTNET */}

                {chainid === 4 && account && showdropdown ? (
                  <div className="dropdown">
                    <div className="dropdown-area-box">
                      <p
                        style={{
                          color: '#000000',
                          marginBottom: '12px',
                          padding: '10px 23px 0px',
                          textAlign: 'start',
                          cursor: 'default',
                        }}
                        onClick={() => {
                          setShowDropDown(false)
                          ShowBalance()
                          setDatavalue(`RINKEYBY Native Currency`)
                        }}
                      >
                        RINKYBY-{getbalance}-RINKYBY TESTNET
                      </p>
                    </div>
                  </div>
                ) : (
                  ''
                )}
                {chainid === 56 && account && showdropdown ? (
                  <div className="dropdown">
                    <div className="dropdown-area-box">
                      <p
                        style={{
                          color: '#000000',
                          marginBottom: '12px',
                          padding: '10px 23px 0px',
                          textAlign: 'start',
                          cursor: 'default',
                        }}
                        onClick={() => {
                          setShowDropDown(false)
                          ShowBalance()
                          setDatavalue(`BNB SMART CHAIN`)
                        }}
                      >
                        BNB-{getbalance}-BNB SMART CHAIN
                      </p>
                    </div>
                  </div>
                ) : (
                  ''
                )}
                {chainid === 3 && account && showdropdown ? (
                  <div className="dropdown">
                    <div className="dropdown-area-box">
                      <p
                        style={{
                          color: '#000000',
                          marginBottom: '12px',
                          padding: '10px 23px 0px',
                          textAlign: 'start',
                          cursor: 'default',
                        }}
                        onClick={() => {
                          setShowDropDown(false)
                          ShowBalance()
                          setDatavalue(`ROPSTEN Native Currency`)
                        }}
                      >
                        ROPSTEN-{getbalance}-ROPSTEN TESTNET
                      </p>
                    </div>
                  </div>
                ) : (
                  ''
                )}

                {/* WHEN WALELT IS NOT CONNECTED */}

                {!account && shownative ? (
                  <div className="dropdown">
                    <div className="dropdown-area-box">
                      <p
                        style={{
                          color: '#000000',
                          marginBottom: '12px',
                          padding: '10px 23px 0px',
                          textAlign: 'start',
                          cursor: 'default',
                        }}
                        onClick={() => {
                          setShowNative(false)
                          setDatavalue(`Ethereum Mainnet Native Currency`)
                        }}
                      >
                        Native Currency
                      </p>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </form>
            </div>

            <div className="form-check form-switch">
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Deflationary
              </label>

              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
          </div>
          <div
            className="texta-area d-flex justify-content-between align-items-center"
            style={{ maxWidth: '690px', margin: '30px auto 19px' }}
          >
            {' '}
            <label htmlFor="" className="list">
              List of Address in CSV
            </label>
            <span
              className="border border-0 bg-transparent"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              style={{ color: '#22ABE3', marginBottom: '-11px' }}
            >
              Show sample CSV
            </span>
          </div>
          {/* SAMPLE CSV MODAL */}

          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-black">
                  <ol className="sample">
                    <li className="sample-items">
                      0xD920c4E59Be4F59b5B0F5b5C4ed4C9D9f98749b6,0.000056
                    </li>
                    <li className="sample-items"> romanstorm.eth,12</li>
                    <li className="sample-items">
                      0xC8c30Fa803833dD1Fd6DBCDd91Ed0b301EFf87cF,13.45
                    </li>
                    <li className="sample-items">
                      0x7D52422D3A5fE9bC92D3aE8167097eE09F1b347d,1.049
                    </li>
                    <li className="sample-items">
                      0x64c9525A3c3a65Ea88b06f184F074C2499578A7E,1
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="textarea">
            <form action="" className="ta" id="csv-form" onSubmit={ShowResult}>
              <div className="parent-box position-relative">
                <div className="child-box ms-auto">{/* <Hello /> */}</div>
              </div>
              {/* <textarea
                id="exampleFormControlTextarea"
                rows="7"
                className="form-control"
                value={headers}
                onChange={(e) => setHeaders(e.target.value)}
              >
                
              </textarea> */}

              <div
                className="button-container"
                style={{
                  maxWidth: '768px',
                  margin: 'auto',
                  paddingLeft: '45px',
                  paddingTop: '10px',
                }}
              >
                <label
                  htmlFor="csvFile"
                  style={{
                    border: '1px solid #22ABE3',
                    padding: '7px',
                    borderRadius: '7px',
                    background: '#22ABE3',
                    color: 'white',
                    cursor: 'pointer',
                    marginLeft: '-8px',
                  }}
                >
                  Choose file
                </label>
                <input
                  className="d-none"
                  type="file"
                  accept=".csv"
                  id="csvFile"
                  onChange={(e) => {
                    setCsvFille(e.target.files[0])
                  }}
                />
                <br />
                <button
                  className="btn btn-primary fw-normal"
                  style={{ marginTop: '8px', marginLeft: '-8px' }}
                  onClick={(e) => {
                    e.preventDefault()
                    if (csvFile) upload()
                  }}
                >
                  Upload
                </button>
                {!account && showmessage ? (
                  <div
                    className="alert alert-danger"
                    role="alert"
                    style={{
                      border: '1px solid',
                      maxWidth: '630px',
                      marginLeft: '-55px',
                      marginTop: '10px',
                    }}
                  >
                    <div style={{ textAlign: 'center' }}>
                      Please select token first{' '}
                    </div>
                  </div>
                ) : (
                  ''
                )}

                {account && !datavalue && showmessage ? (
                  <div
                    className="alert alert-danger"
                    role="alert"
                    style={{
                      border: '1px solid',
                      maxWidth: '630px',
                      marginLeft: '-55px',
                      marginTop: '10px',
                    }}
                  >
                    <div style={{ textAlign: 'center' }}>
                      Please select token first{' '}
                    </div>
                  </div>
                ) : (
                  ''
                )}

                {datavalue && getbalance && line ? (
                  <div
                    className="alert alert-danger"
                    role="alert"
                    style={{
                      border: '1px solid',
                      maxWidth: '630px',
                      marginLeft: '-55px',
                      marginTop: '10px',
                    }}
                  >
                    <div style={{ textAlign: 'center' }}>
                      Line 1-0: Please provide a corresponding amount for each
                      address. Click 'Show Sample CSV' for more details. Please
                      provide at least 2 addresses
                    </div>
                  </div>
                ) : (
                  ''
                )}

                <button
                  type="submit"
                  className=" button btn btn-primary"
                  id="liveAlertBtn"
                  onClick={() => {
                    ShowMessage()
                    ShowLine()
                  }}
                >
                  Next
                </button>
              </div>
            </form>{' '}
          </div>
        </div>

        <div className="next-container">
          <div id="liveAlertPlaceholder"></div>

          {/* {result ? (
            <div
              className="textarea"
              style={{ maxWidth: "768px", margin: "auto" }}
            >
              <div
                className="alert alert-danger my-4 text-center py-4"
                role="alert"
              >
                {duplicate}
              </div>
              <div className="buttons text-center">
                <button
                  className="btn-primary p-2 fw-normal"
                  style={{ marginRight: "10px" }}
                >
                  Merge duplicates
                </button>
                <button className="btn-primary p-2 fw-normal">
                  Proceed without merging
                </button>
              </div>
            </div>
          ) : (
            ""
          )} */}
        </div>
      </section>
    </div>
  )
}
