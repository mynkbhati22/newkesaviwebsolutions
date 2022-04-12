import React from "react";
import DappNavbar from "../DappNavbar";

export default function Tutorial() {
  return (
    <div>
      <DappNavbar />

      <section>
        <div className="about-container my-5">
          <div className="heading">
            <h3 className="text-center my-3">About us</h3>
            <p
              className="about-text"
              style={{ maxWidth: "768px", margin: "auto" }}
            >
              This DApp allows users to send thousands of tokens to multiple
              addresses efficiently by batching the transfers and automating the
              process. This tool enables users to save time by automatically
              generating transactions on MetaMask. Multisender also allows users
              to keep their account secure by delegating the trust of their
              private keys to a safe MetaMask wallet. This tool is in production
              since 2018. It accounts for over 20,000 transactions on Mainnet,
              which is equivalent to several billion dollars. You can find the
              Multisender Smart contract along with all previous transactions on
              Etherscan .
            </p>
          </div>

          <div className="video-tutorial">
            <h3 className="text-center my-5">Video Tutorial</h3>
          </div>
          <div className="iframe">
            <iframe
              style={{
                maxWidth: "768px",
                height: "50vh",
                border: "10px solid #22ABE3",
              }}
              className="video"
              src="https://www.youtube.com/embed/OF6GBccHCJk"
              frameBorder="0"
              title="How to airdrop any ERC20 token"
            ></iframe>
          </div>
        </div>
      </section>
      <section>
        <div className="tutorial-conatiner d-flex flex-column ">
          <div
            className="caption text-center"
            style={{ marginBottom: "50px", marginTop: "50px" }}
          >
            <h3>How to send ERC20 Token</h3>
          </div>

          <div className="preparation m-auto">
            <h5>Preparation</h5>
            <ol className="preparation-link">
              <li>Connect your wallet</li>
              <li>
                Select your token and specify a list of addresses in CSV format;
                if you don't know what CSV is, click the 'Show Sample CSV'
                button.
              </li>
              <li>
                Select desired token from the list. Or insert token address (the
                address must be an ERC721 or ERC1155 contract)
              </li>
              <li>
                Provide list of recipients, you can upload file(CSV, XLS, XLSX)
                or manually enter addresses with token IDs separated by comma
              </li>
              <li>Click Proceed button</li>
            </ol>
          </div>
          <div
            className="preparation my-4"
            style={{ width: "64%", margin: "auto" }}
          >
            <h5>Approving</h5>
            <ol className="preparation-link">
              <li>
                Click the checkbox of service of conditions and click the
                Continue button
              </li>
              <li>
                Before the system checks all the conditions, approve the
                transaction in your wallet
              </li>
              <li>
                Please wait until the transaction is completed and you will
                automatically be redirect to the Distribution step
              </li>
            </ol>
          </div>
          <div
            className="Distribution"
            style={{ width: "64%", margin: "auto" }}
          >
            <h5>Distribution</h5>
            <ol className="preparation-link">
              <li>Click MoltiSend button</li>
              <li>Confirm the transaction in your wallet</li>
              <li>Wait till your transactions will be mined</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
