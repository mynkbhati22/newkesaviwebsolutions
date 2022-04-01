import React from "react";
import Erc20Navbar from "../Erc20Navbar";

export default function Tutorial() {
  return (
    <div>
    <Erc20Navbar />
      <section>
        <div className="tutorial-conatiner d-flex flex-column   ">
          <div className="caption text-center" style={{ marginBottom: "50px" }}>
            <h3>How to send ERC20 Token</h3>
          </div>

          <div className="preparation m-auto">
            <h5>Preparation</h5>
            <ol className="preparation-link">
              <li>Connect your wallet</li>
              <li>Select the network you want</li>
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
