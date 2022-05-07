import { React, useState, useEffect } from "react";
import { FaEthereum } from "react-icons/fa";
import { SiBinance } from "react-icons/si";
import meta from "./image/meta.png";
import connect from "./image/connect.svg";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
import DappNavbar from "./DappNavbar";
import "./Dapp.css";
import Web3 from "web3";
const web3 = new Web3(window.ethereum);
console.log(web3);

export default function Dapp() {
  const [csvFile, setCsvFille] = useState();

  // []
  const [headers, setHeaders] = useState([]);

  const duplicateInfo = [
    { walletAddress: "0x895164bc6e7db3d9293ad2941076c61a003db0580" },
    { walletAddress: "0x64336c47783acaab0e909dde629a9debc628d2470" },
    { walletAddress: "0x554525f2b50698ac681be2a8b613f1c68b72e0080" },
    { walletAddress: "0x12c5e4c6c723344f883cf32bb27f383263c63d6f0" },
    { walletAddress: "0x7fc3142e1012fbaeba9d3e076258b7911f38f8260" },
    { walletAddress: "0xa56afa9ba6220e86ed1f006c08da63b6412ef5a90" },
    { walletAddress: "0x7136289ea9ca727f3ef6e14e453a45786609625d0" },
    { walletAddress: "0x46c3c60c7419b6217a278e55651675f72a8022ca0" },
    { walletAddress: "0x7ba860b3750881a4e62c36782de0ce94d439128b0" },
    { walletAddress: "0x0de49a0983190d1feadc8ff5db8e3ed7c7f619140" },
    { walletAddress: "0xa9fe021712ff0f109a1659e74a208d2e7fd121dc0" },
    { walletAddress: "0xc3af74f2c4384876671a6199b28d042af08702150" },
    { walletAddress: "0xe0fa776d8e2a7a58130d97ced92966ecc4ddef493" },
    { walletAddress: "0x0de49a0983190d1feadc8ff5db8e3ed7c7f619141" },
    { walletAddress: "0x5bdff1c1b3d19e368578b921277a91dd2f7ff30c0" },
    { walletAddress: "0x665b11dbec10da8d809da6d5bd6c3da68adab0e70" },
    { walletAddress: "0xb46d52d4ede720b9e870e92c902be6a896979f4f2" },
    { walletAddress: "0x04366ad174c649f50dd5994900de30d27b67fd511" },
    { walletAddress: "0xa708f59e47cc43fd7d465416887cd59e9f69aa751" },
    { walletAddress: "0x2a38960e577939e0c52d154079a8c4f443a1f6cd0" },
    { walletAddress: "0x3a7c1fe8e7646e35c24fbf18ea0ec5eb0cfc90070" },
    { walletAddress: "0x64336c47783acaab0e909dde629a9debc628d2470" },
    { walletAddress: "0x73be979760466b4f874ed795eaef749869328c150" },
    { walletAddress: "0xc08288375c7130374550c0c44a73961eb28f5555" },
    { walletAddress: "0x5c5220e27824e5c3fbd6e691d8a5e67404588c2c0" },
    { walletAddress: "0x79c1c98d60c09effa32fc8260a185981bc025cfe0" },
    { walletAddress: "0xfb9ab56a9974bf0d1a91aea8e6b9e42cfc9bc3e03" },
    { walletAddress: "0x226c8d1a6ec91d86892ac6e7bb99f324aa80e7cf0" },
    { walletAddress: "0xd344ad9ab476320a1af264506a9ff0e76240fbda0" },
    { walletAddress: "0x6915c48be16d5ce7ba9f42c7c9d9f47f4722a4eb1" },
    { walletAddress: " 0x5bdff1c1b3d19e368578b921277a91dd2f7ff30c2" },
    { walletAddress: " 0x64336c47783acaab0e909dde629a9debc628d2470" },
    { walletAddress: "0x64336c47783acaab0e909dde629a9debc628d2470" },
    { walletAddress: "0xba89e424d003be75529d7f658a605d9510af3b641" },
    { walletAddress: "0x56a8cb1d72127c02ada0bfb50d59ce1cd973c4672" },
    { walletAddress: "  0x206d15c1e1b302a8da05e71f449f9bc2319256720" },
    { walletAddress: " 0xd676b495e0a18cf004df5706c73463de48509b342" },
    { walletAddress: " 0x69215121cecea39cbf5b47be8c19b75510422a4b0" },
    { walletAddress: "0xb0258a278fbabb64f8747fb305df451fa93eccf93" },
    { walletAddress: "0xcae2f947e9d91a8fc85375a1a6cead4b49dc37511" },
    { walletAddress: " 0xda06e832a4df451693b9c05fab7841836eb0ee063" },
    { walletAddress: " 0xe2f4f3f140ffd1303968d91187dc765da4de79d40" },
    { walletAddress: "    0x64336c47783acaab0e909dde629a9debc628d2470" },
    { walletAddress: " 0x2a38960e577939e0c52d154079a8c4f443a1f6cd0" },
    { walletAddress: " 0xbf9f8d168f51a56cfcd172de5ccd8a709c1099240" },
    { walletAddress: "  0xdd485999e24368ed690d2dbd241ffa53f8136cea0" },
    { walletAddress: "0x6e063fb5fe25f371e059a4f2352e120a649808440" },
    { walletAddress: "0xe2b9dc27aaa6af9968b833ee1e74e9c16e5ecb860" },
    { walletAddress: "0x5fb383687b7a481d4f2545b66fecad48075f82853" },
    { walletAddress: "0x90f9d05ba8becb789d624396ac660118867e5b440" },
    { walletAddress: "  0x454388e569cee12a60517095a150022c86e8e1902" },
    { walletAddress: "0x649799ec70421fc37bb870441a7371615a6938c70" },
    { walletAddress: "0x1797ec88024ce48c7e2e1580abfcb2add08740190" },
    { walletAddress: "0x9ce9f6c1b2401fbfe1c24286e5f8a37544437baa3" },
    { walletAddress: " 0x66851b70067f8d1bd97d4c6c2eae1e948ca682f10" },
    { walletAddress: "0xa9fe021712ff0f109a1659e74a208d2e7fd121dc0" },
    { walletAddress: "0x4d3710c2b23d03abc73bb229f15dd99e8ecde6190" },
    { walletAddress: "0x69215121cecea39cbf5b47be8c19b75510422a4b0" },
    { walletAddress: " 0xaa7db76daa94638f91d4f8a3311b064a4699a5630" },
    { walletAddress: "0x04568b8dab9db78f3c34457d92b6d52753c4eb7a0" },
    { walletAddress: " 0x2fd56ded84f5fc1e3d6b4f1465cdd124ad59014d0" },
    { walletAddress: "0xbace2df618cd21904ebb0780f5925d04acf856a00" },
    { walletAddress: "0x5bdff1c1b3d19e368578b921277a91dd2f7ff30c0" },
    { walletAddress: " 0xcd26141c9ef3551954267bc92ebbe173b5774dec2" },
    { walletAddress: "0x0ad696144b3e171dd87da86e2e184be0c65114183" },
    { walletAddress: "0x1ec6b79669b12ff28f85707ee7d67a9d3d4d12d90" },
    { walletAddress: "0x3fe035df223c09692f72c0df5928655c575787060" },
    { walletAddress: " 0x090d62732ecbce0481bd4639051cced6c238fdb60" },
    { walletAddress: "0x69215121cecea39cbf5b47be8c19b75510422a4b0" },
    { walletAddress: "0xa1e51dca0c366f69099db53a1413c7e7a0e354910" },
    { walletAddress: " 0x16e30a25a9e0e3f1937715f8a96b0ef35003c2d20" },
    { walletAddress: "  0x03aa5291cc430fe58254a0d99f8cd77d761ff17e0" },
    { walletAddress: " 0xebbbba2c029ec065229e3efb70441a691e96f1373" },
    { walletAddress: "0x87240b7c0596f785e83d04ff5225353fefaa64e50" },
    { walletAddress: " 0x77ae1f200bad7ec1421b0cf358b58255f24a42210" },
    { walletAddress: " 0x08dfed1d9581e81e3c6d889c02f6875ce6e61c530" },
    { walletAddress: "  0x1be6cf77e121ae2004bd7d32596311a738a62ab40" },
    { walletAddress: "0xc00826202ba0da703c2ee14a10bc0b6c689cf3f70" },
    { walletAddress: " 0xc00826202ba0da703c2ee14a10bc0b6c689cf3f70" },
    { walletAddress: " 0x4c2d6fd1ec46d291b09ee8d0cc4a2394a395fde60" },
    { walletAddress: " 0xcb9c8502a2e185e8be597552bf9d809119754f8a0" },
    { walletAddress: " 0x738888c0af145ec267084a1038a956a5310c24a32" },
    { walletAddress: " 0x738888c0af145ec267084a1038a956a5310c24a31" },
    { walletAddress: "0x738888c0af145ec267084a1038a956a5310c24a35" },
    { walletAddress: " 0x738888c0af145ec267084a1038a956a5310c24a36" },
    { walletAddress: "  0x738888c0af145ec267084a1038a956a5310c24a37" },
    { walletAddress: " 0x738888c0af145ec267084a1038a956a5310c24a39" },
    { walletAddress: " 0x738888c0af145ec267084a1038a956a5310c24a31" },
    { walletAddress: "0x738888c0af145ec267084a1038a956a5310c24a32" },
  ];

  // DUPLICATES
  const duplicate = new Set(
    duplicateInfo.map((currDuply) => {
      return <p>Dupicate Address {currDuply.walletAddress} </p>;
    })
  );
  // console.log(duplicate);

  const processCSV = (str) => {
    setHeaders(str.slice(str.indexOf("\n") + 1).split("\n"));

    // const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    //   // setHeaders(str.slice(0 str.indexOf("\n")).split(delim));
    // console.log(rows);
    return headers;
  };

  const upload = () => {
    const file = csvFile;
    const reader = new FileReader();

    reader.onload = function (e) {
      const text = e.target.result;
      // console.log(text);
      processCSV(text);
    };

    reader.readAsText(file);
  };

  //  RESULTS
  const [result, setResult] = useState(false);
  const ShowResult = (e) => {
    e.preventDefault();
    setResult(!result);
  };

  // connect wallet
  const [account, setAccount] = useState();

  const connectMetamask = async () => {
    if (window.ethereum) {
      const add = await window.ethereum.enable();
      setAccount(add[0]);
      setIsConnected(!isconnected);
      console.log(window.ethereum);
    }
  };

  // Change Network
  const changeNetwork = async (chainId) => {
    if (window.ethereum) {
      try {
        await web3.currentProvider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: web3.utils.toHex(chainId) }],
        });
      } catch (e) {}
    }
  };

  // switch icon
  const [chainid, setChainId] = useState(0);

  // get chainID
  useEffect(async () => {
    const ID = await web3.eth.getChainId();
    console.log("chain ID", ID);
    setChainId(ID);
    await connectMetamask();
  }, []);

  // icon disappear and logout
  const [isconnected, setIsConnected] = useState(false);
  const logOut = () => {
    setAccount(undefined);
    setIsConnected(!isconnected);
  };

  // eth native currency
  const [showdropdown, setShowDropDown] = useState(false);

  const Showdropdown = () => {
    setShowDropDown(!showdropdown);
  };

  return (
    <div>
      <DappNavbar />
      <section>
        <div className="global-container">
          <div className="nav2-area" style={{ marginTop: "50px" }}>
            <div className="breadcrumb-area">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a
                      href="/"
                      style={{ textDecoration: "none", color: "#47a5e9" }}
                    >
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a
                      href="/createToken/ETH"
                      style={{ textDecoration: "none", color: "#47a5e9" }}
                    >
                      Create Token
                    </a>
                  </li>
                </ol>
              </nav>
            </div>

            {/* SWITCH NETWORK */}
            <div id="wrapper">
              <p>
                <a className="button" href="#popup1">
                  {chainid === 1 ? <FaEthereum /> : ""}
                  {chainid === 56 ? <SiBinance /> : ""}
                </a>
              </p>
            </div>

            <div id="popup1" className="overlay">
              <div className="popup">
                <h2>Change Network</h2>
                <a className="close" href="/airdrop">
                  &times;
                </a>
                <div className="content">
                  <p
                    style={{
                      border: "1px solid",
                      padding: "7px",
                      textAlign: "center",
                      cursor: "default",
                      background: "black",
                      color: "white",
                    }}
                    onClick={() => changeNetwork(56)}
                  >
                    <SiBinance />
                    Binance Smart Chain
                  </p>
                  <p
                    style={{
                      border: "1px solid",
                      padding: "7px",
                      textAlign: "center",
                      marginLeft: "10px",
                      cursor: "default",
                      background: "black",
                      color: "white",
                    }}
                    onClick={() => changeNetwork(1)}
                  >
                    <FaEthereum />
                    ETHEREUM MAINNET
                  </p>
                </div>
              </div>
            </div>

            {/* CONNECT WALLET MODAL */}
            <div className="connect-wallet-area">
              <button
                type="button"
                className="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{ marginLeft: "10px", cursor: "default" }}
              >
                {account
                  ? account.slice(0, 4) + "..." + account.slice(38)
                  : "connect"}
              </button>

              {isconnected ? (
                <AiOutlineLogout
                  className="logout"
                  onClick={() => logOut()}
                  style={{
                    marginLeft: "5px",
                    cursor: "pointer",
                    border: "1px solid #0d6efd",
                    padding: "5px",
                    color: "0d6efd",
                    transition: "0.5s",
                  }}
                  size={30}
                />
              ) : (
                ""
              )}
            </div>
          </div>

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
                <div className="modal-body d-flex justify-content-evenly">
                  <div className="wallets-link">
                    <button
                      style={{ padding: "10px", borderRadius: "12px" }}
                      onClick={connectMetamask}
                    >
                      <img
                        src={meta}
                        alt=""
                        style={{
                          width: "87px",
                          display: "block",
                          margin: "auto",
                        }}
                      />
                      <h4
                        className="wallets"
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          textAlign: "center",
                          marginTop: "10px",
                        }}
                      >
                        MetaMask
                      </h4>{" "}
                    </button>
                  </div>
                  <div
                    className="wallets-link 
                   w-25"
                  >
                    <button style={{ padding: "10px", borderRadius: "12px" }}>
                      <img
                        src={connect}
                        alt=""
                        style={{
                          width: "70px",
                          display: "block",
                          margin: "auto",
                        }}
                      />
                      <h4
                        className="wallets"
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          textAlign: "center",
                          marginTop: "10px",
                        }}
                      >
                        WalletConnect
                      </h4>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container" style={{ marginTop: "65px" }}>
            <div className="kws-airdrop">
              <div className="kws-airdrop-content text-center">
                <h2>
                  <strong>Welcome to</strong>{" "}
                  <span style={{ color: "#22abe3" }}>
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
          style={{ maxWidth: "912px", margin: "auto" }}
        >
          <div className="airdrop-area">
            <div className="form-area position-relative">
              <form action="">
                <label htmlFor="exampleInputSearch1" className="form-label">
                  Token address
                </label>
                <div className="heroSearch">
                  <BiSearchAlt2 id="searchIco" />
                  <input
                    type="text"
                    placeholder="Select your Token"
                    onClick={() => Showdropdown()}
                  />
                </div>

                {chainid === 1 && showdropdown ? (
                  <div className="dropdown">
                    <div className="dropdown-area-box">
                      <p
                        style={{
                          color: "#000000",
                          marginBottom: "12px",
                          padding: "10px 23px 0px",
                          textAlign: "start",
                          cursor: "default",
                        }}
                        onClick={() => {
                          setShowDropDown(false);
                        }}
                      >
                        ETH-0-Ethereum Mainnet Native Currency
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {chainid === 56 && showdropdown ? (
                  <div className="dropdown">
                    <div className="dropdown-area-box">
                      <p
                        style={{
                          color: "#000000",
                          marginBottom: "12px",
                          padding: "10px 23px 0px",
                          textAlign: "start",
                          cursor: "default",
                        }}
                        onClick={() => {
                          setShowDropDown(false);
                        }}
                      >
                        BNB-0-BNB Smart Chain Native Currency
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
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
            style={{ maxWidth: "690px", margin: "20px auto" }}
          >
            {" "}
            <label htmlFor="" className="list">
              List of Address in CSV
            </label>
            <span
              className="border border-0 bg-transparent"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              style={{ color: "#22ABE3" }}
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
                    <li>0xD920c4E59Be4F59b5B0F5b5C4ed4C9D9f98749b6,0.000056</li>
                    <li> romanstorm.eth,12</li>
                    <li>0xC8c30Fa803833dD1Fd6DBCDd91Ed0b301EFf87cF,13.45</li>
                    <li>0x7D52422D3A5fE9bC92D3aE8167097eE09F1b347d,1.049</li>
                    <li>0x64c9525A3c3a65Ea88b06f184F074C2499578A7E,1</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="textarea">
            <form action="" className="ta" id="csv-form" onSubmit={ShowResult}>
              <textarea
                id="exampleFormControlTextarea"
                rows="7"
                className="form-control"
                value={headers}
                onChange={(e) => setHeaders(e.target.value)}
                required
              ></textarea>

              <div
                className="button-container"
                style={{
                  maxWidth: "768px",
                  margin: "auto",
                  paddingLeft: "45px",
                  paddingTop: "10px",
                }}
              >
                <label
                  htmlFor="csvFile"
                  style={{
                    border: "1px solid #22ABE3",
                    padding: "7px",
                    borderRadius: "7px",
                    background: "#22ABE3",
                    color: "white",
                    cursor: "pointer",
                    marginLeft: "-40px",
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
                    setCsvFille(e.target.files[0]);
                  }}
                />
                <br />
                <button
                  className="btn btn-primary fw-normal"
                  style={{ marginTop: "8px", marginLeft: "-40px" }}
                  onClick={(e) => {
                    e.preventDefault();
                    if (csvFile) upload();
                  }}
                >
                  Upload
                </button>
                <button
                  type="submit"
                  className=" button btn btn-primary"
                  id="liveAlertBtn"
                >
                  Next
                </button>
              </div>
            </form>{" "}
          </div>

          <div className="next-container">
            <div id="liveAlertPlaceholder"></div>

            {result ? (
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
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
