import { React, useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { SiBinance } from "react-icons/si";
import DappNavbar from "./DappNavbar";

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
  return (
    <div>
      <DappNavbar />
      <section>
        <div className="airdrop-container">
          <div className="airdrop py-5 my-4">
            <h4 className="text-center h3 fs-2 fw-bold">
              Welcome to{" "}
              <span className="kws-airdrop" style={{ color: "#22ABE3" }}>
                KWS Airdrop
              </span>
            </h4>
            <p className="text-center py-4">
              A tool that allows you to batch send ERC20 tokens
            </p>
            <div className="coins text-center">
              <FaEthereum />
              <span style={{ paddingRight: "40px" }}>Ethereum Mainnet</span>
              <SiBinance />
              <span>BNB Smart Chain</span>
            </div>
            <div className="token-address">
              <div className="search">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Token Address
                </label>
                <input
                  type="search"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Select your Token"
                />
              </div>
              <div className="form-check form-switch">
                <label
                  htmlFor=""
                  className="d-block"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="please ignore this if your token isn't 
                  deflationary. Most tokens are not so 
                  leave it as is"
                >
                  Deflationary
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  style={{ border: "2px solid #22ABE3" }}
                />
              </div>
            </div>
            <div className="TXS-conatiner d-flex justify-content-evenly align-items-start">
              <div className="txs ms-2">List of Addresses in CSV</div>
              <button
                type="button"
                className="border-0 bg-transparent"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <p className="text-info">Show Sample CSV</p>
              </button>

              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        Modal title
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">...</div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Understood
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="textarea"
              style={{ maxWidth: "768px", margin: "auto" }}
            >
              <form action="" id="csv-form" onSubmit={ShowResult}>
                <textarea
                  className="form-control1"
                  id="exampleFormControlTextarea1"
                  rows="7"
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
                  {/* <button className="btn btn-primary btn-lg fw-normal">Upload csv</button> */}

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
                    className="btn btn-primary d-block m-auto"
                    id="liveAlertBtn"
                  >
                    Next
                  </button>
                </div>{" "}
              </form>
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
        </div>
      </section>

    </div>
  );
}
