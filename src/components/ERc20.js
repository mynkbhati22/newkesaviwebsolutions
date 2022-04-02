import { React, useState } from "react";
import Erc20Navbar from "./Erc20Navbar";
import { FaEthereum } from "react-icons/fa";
import { SiBinance } from "react-icons/si";

export default function ERc20() {
  const [csvFile, setCsvFille] = useState();
  // []
  const [headers, setHeaders] = useState([]);

  const processCSV = (str) => {
    setHeaders(str.slice(str.indexOf("\n") + 1).split("\n"));
    // const rows = str.slice(str.indexOf("\n")+1).split("\n");
    // setHeaders(str.slice(0, str.indexOf("\n")).split(delim));
    // console.log(headers);
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
  return (
    <div>
      <Erc20Navbar />
      <section>
        <div className="airdrop-container">
          <div className="airdrop py-5 my-4">
            <h4 className="text-center h3 fs-2 fw-bold">
              Welcome to KWS Airdrop
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
                  deflationary. Most tokens are not, so 
                  leave it as is"
                >
                  Deflationary
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
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
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content text-black">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <ol>
                        <li className="my-2 w-25">
                          0x6cc2D366c05b8Bb96D02734813A76afc273964D4,0.000056
                        </li>
                        <li className="my-2">romanstorm.eth,12</li>
                        <li className="my-2">
                          0xC8c30Fa803833dD1Fd6DBCDd91Ed0b301EFf87cF,13.45
                        </li>
                        <li className="my-2">
                          0x7D52422D3A5fE9bC92D3aE8167097eE09F1b347d,1.049
                        </li>
                        <li className="my-2">
                          0x64c9525A3c3a65Ea88b06f184F074C2499578A7E,1
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="textarea"
              style={{ maxWidth: "768px", margin: "auto" }}
            >
              <textarea
                className="form-control1"
                id="exampleFormControlTextarea1"
                rows="7"
                value={headers}
              ></textarea>
            </div>

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
              <form action="" id="csv-form">
                <input
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
                  style={{ marginTop: "8px" }}
                  onClick={(e) => {
                    e.preventDefault();
                    if (csvFile) upload();
                  }}
                >
                  Upload CSV
                </button>
              </form>
            </div>
            <div className="next-container">
              <button className="btn btn-primary d-block m-auto">Next</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
