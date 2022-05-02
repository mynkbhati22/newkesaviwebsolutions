import React, { useState } from "react";
import DappNavbar from "../DappNavbar";
import { SiEthereum, SiBinance } from "react-icons/si";
import { BiInfinite } from "react-icons/bi";
import "../EBMTokens.css";

export default function ETH() {
  const [owner, setOwner] = useState(false);

  const ShowOwner = () => {
    if (!owner) {
      setOwner(true);
    } else {
      setOwner(false);
    }
  };

  return (
    <div>
      <DappNavbar />
      <div className="globalContainer">
        <div className="row">
          <div
            className="col-6 col-md-4  my-5 border border-2"
            style={{
              borderTopLeftRadius: "25px",
              borderBottomLeftRadius: "25px",
              background: "#22ABE3",
            }}
          >
            <div className="link-items d-grid">
              <a
                href="/"
                style={{
                  border: "2px solid black",
                  background:"#E5E7E9",
                  textAlign: "center",
                  marginRight: "20px",
                  marginTop: "20px",
                  padding: "5px",
                  textDecoration: "none",
                  color:"black",
                  cursor:"default"
                }}
              >
                <SiEthereum  color="#22abe3"/> ETH
              </a>
              <a
                href="/"
                style={{
                  border: "2px solid",
                  textAlign: "center",
                  marginRight: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  padding: "5px",
                  textDecoration: "none",
                }}
              >
                <SiBinance /> BSC
              </a>
              <a
                href="/"
                style={{
                  border: "2px solid",
                  textAlign: "center",
                  marginRight: "20px",
                  marginBottom: "20px",
                  padding: "5px",
                  textDecoration: "none",
                }}
              >
                <BiInfinite /> Polygon
              </a>
            </div>
            <div className="token-content">
              <h3 className="text-center" style={{ marginTop: "8rem", color:"white" }}>
                Create ERC20 Token
              </h3>
              <p className="text-center py-3 text-white">
                Simple, Fast, Convenient
                <br /> No programming skills required <br /> Get 100% ownership
                of generated tokens <br /> Custom token name, symbol and initial
                supply <br />
                Automatic verified and published contract source code
              </p>
            </div>
            <div className="bottom-buttons">
              <button className=" btn btn-outline-light mx-3">
                Create token view
              </button>
              <button className="btn btn-outline-light">Token Admin</button>
            </div>
          </div>

          <div
            className="col-sm-6 col-md-8 border border-2 my-5"
            style={{
              borderTopRightRadius: "25px",
              borderBottomRightRadius: "25px",
              background: "#F0F2F5",
            }}
          >
            <div
              className="create-container border border-1 rounded-pill"
              style={{ width: "86%" }}
            >
              <a href="/" className="token-link">
                Create Token
              </a>
            </div>
            <form action="" className="token-form">
              <div className="token-row">
                <label htmlFor="tokenName" className="col-sm-2 col-form-label">
                  <span className="required text-danger fs-5">*</span> Token
                  Name:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control2"
                    placeholder="e.g. Good Luck Token"
                    id="tokenName"
                    required
                  />
                </div>
              </div>
              <div className="token-row">
                <label htmlFor="symbol" className="col-sm-2 col-form-label">
                  <span className="required text-danger fs-5">*</span> Symbol:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control2"
                    placeholder="e.g. GLT"
                    id="symbol"
                    required
                  />
                </div>
              </div>
              <div className="token-row">
                <label
                  htmlFor="initialSupply"
                  className="col-sm-2 col-form-label"
                >
                  <span className="required text-danger fs-5">*</span> Initial
                  Supply:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control3"
                    id="initialSupply"
                    required
                  />
                </div>
              </div>
              <div className="token-row ">
                <label
                  htmlFor="initialSupply"
                  className="col-sm-2 col-form-label"
                >
                  <span className="required text-danger fs-5">*</span>
                  Decimals(1-18):
                </label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control3"
                    id="initialSupply"
                    required
                  />
                </div>
              </div>
              <div className="form-switch1">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  onChange={() => ShowOwner()}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  Advanced Settings
                </label>
              </div>

              {owner ? (
                <div className="token-row">
                  <label
                    htmlFor="create/owner"
                    className="col-sm-2 col-form-label"
                  >
                    <span className="required text-danger fs-5">*</span>
                    Create/Owner:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control2"
                      placeholder="0x111111...."
                      id="create/owner"
                      required
                    />
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="token-row d-flex">
                <label
                  htmlFor="initialSupply"
                  className="col-sm-2 col-form-label"
                >
                  <span className="required text-danger fs-5">*</span> Other
                  Config:
                </label>
                <div className="configure ">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                      data-bs-toggle="tooltip"
                      title="This check specifies whether your tokens can be burned to decrease the supply."
                    >
                      Can Burn
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox3"
                      data-bs-toggle="tooltip"
                      title="Minting specifies the opposite, whether more tokens can be created to increase the initial supply."
                    >
                      Can Mint
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                      value="option3"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox4"
                      data-bs-toggle="tooltip"
                      title="This check specifies whether your token and all associated operations can be halted and resumed whenever needed.
                             This pausing operation can be used in case of a software vulnerability or a malicious attack.
                             Be aware that enabling pausing gives authority to whoever is allowed to pause or unpause,
                            such as the creator of the token, and this central authority may not suit certain use cases."
                    >
                      Can Pause
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox4"
                      value="option4"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox5"
                      data-bs-toggle="tooltip"
                      title="Accounts can also be blacklisted if they act malicius.
                              Depending on the use case, it may be better for some tokens to have this feature turned off.
                              Similar to the pausing feature, enabling blacklists causes central authority, which may 
                              not suit certain use cases."
                    >
                      Blacklist
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox5"
                      value="option5"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox6"
                      data-bs-toggle="tooltip"
                      title="every transaction charges transaction Taxs and burns tokens"
                    >
                      Deflation
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox6"
                      value="option6"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox2"
                      data-bs-toggle="tooltip"
                      title="every transaction charges transaction Taxs and burns tokens"
                    >
                      Super Deflation
                    </label>
                  </div>
                </div>
              </div>
              <div className="warning-container">
                <div
                  className="alert alert-warning alert-dismissible fade show bg-secondary text-white"
                  role="alert"
                >
                  <p className="p-3">
                    {" "}
                    All tokens have been reviewed by the security audit company
                    and passed the contract security audit!
                  </p>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
                <div
                  className="alert alert-warning alert-dismissible fade show bg-warning text-white"
                  role="alert"
                >
                  <p className="p-3">
                    {" "}
                    It only takes 10 seconds to create successfully, without
                    manual intervention, the token will be automatically
                    transferred to the address of the creator/owner after the
                    creation is successful. The token does not have any
                    copyright, it is automatically deployed to the main network
                    and verified!
                  </p>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
              <div className="token-button">
                <button
                  className="btn-primary fw-normal"
                  style={{
                    marginLeft: "180px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    padding: "8px",
                  }}
                >
                  Create Token
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
