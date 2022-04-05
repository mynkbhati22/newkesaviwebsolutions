import React from "react";
import Erc20Navbar from "../Erc20Navbar";
import Footer from "../Footer";

export default function Faq() {
  return (
    <div>
      <Erc20Navbar />
      <section>
        <div className="faq-container">
          <div className="faq-heading text-center my-4">
            <h3>FAQ</h3>
          </div>
          <div className="accordion px-3" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What is ERC20?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  This DApp allows users to send thousands of tokens to multiple
                  addresses efficiently by batching the transfers and automating
                  the process. This tool enables users to save time by
                  automatically generating transactions on MetaMask. Multisender
                  also allows users to keep their account secure by delegating
                  the trust of their private keys to a safe MetaMask wallet.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Is it a safe tool?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Yes. This tool is in production since 2018. It accounts for
                  over 20,000 transactions on Mainnet, which is equivalent to
                  several billion dollars. You can find the Multisender Smart
                  contract along with all previous transactions on Etherscan.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How much time does multisending take?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  It depends on the gas price and network congestion. It
                  typically takes 3 to 5 minutes.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  How do I use the tool?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <iframe
                    className="video"
                    src="https://www.youtube.com/embed/OF6GBccHCJk"
                    frameborder="0"
                    title="How to airdrop any ERC20 token"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Which wallets can I use?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  You can use Metamask, hardware wallets or any wallet that is
                  supported by WalletConnect.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  How much does it cost to use ERC20?
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  The cost of the transaction depends on your specific ERC-20
                  token implementation, the number of addresses, network
                  specifics, and the number of tokens to be sent. The best way
                  to estimate the fee is to engage in using the tool, and the
                  cost of the planned multisend will be displayed prior to
                  confirmation. It will only take 2-3 minutes.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  What does VIP offer?
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  With VIP, all your transactions will be free. You will only
                  need to pay for the network fees. VIP makes using Multisender
                  cheaper when you have a large list of addresses.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEight">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  What if it's too expensive for me?
                </button>
              </h2>
              <div
                id="collapseEight"
                className="accordion-collapse collapse"
                aria-labelledby="headingEight"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  In order to apply for our discount program, please contact us
                  on Telegram.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingNine">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                >
                  Can I test the app on a Testnet?
                </button>
              </h2>
              <div
                id="collapseNine"
                className="accordion-collapse collapse"
                aria-labelledby="headingNine"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Absolutely! You can use Goerli or Kovan for testing to make
                  sure that everything is working as expected.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTen">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTen"
                  aria-expanded="false"
                  aria-controls="collapseTen"
                >
                  What is the maximum number of addresses to which you can send
                  at one time?
                </button>
              </h2>
              <div
                id="collapseTen"
                className="accordion-collapse collapse"
                aria-labelledby="headingTen"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  There are no restrictions. You can send unlimited tokens to as
                  many addresses as you want.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEleven">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEleven"
                  aria-expanded="false"
                  aria-controls="collapseEleven"
                >
                  How many addresses are in a batch?
                </button>
              </h2>
              <div
                id="collapseEleven"
                className="accordion-collapse collapse"
                aria-labelledby="headingEleven"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  With Multisender, your recipients' addresses are grouped by
                  batches to be split into multiples transactions. Each batch
                  can hold 200-400 addresses depending on your specific ERC-20
                  token implementation.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwelve">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwelve"
                  aria-expanded="false"
                  aria-controls="collapseTwelve"
                >
                  What is a deflationary token?
                </button>
              </h2>
              <div
                id="collapseTwelve"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwelve"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  It's a token that doesn't follow ERC-20 standards. Usually,
                  it’s a token that burns a certain amount at each transfer.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThirteen">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThirteen"
                  aria-expanded="false"
                  aria-controls="collapseThirteen"
                >
                  Which chains does Multisender support?
                </button>
              </h2>
              <div
                id="collapseThirteen"
                className="accordion-collapse collapse"
                aria-labelledby="headingThirteen"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  The application currently supports Ethereum Mainnet, Binance
                  Smart Chain, Avalanche C Chain, Fantom Opera, Polygon Chain,
                  Gnosis Chain, Arbitrum One, Moonriver, Moonbeam, Metis,
                  Cronos, Huobi ECO Chain, Celo, Harmony Mainnet and IoTeX.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFourteen">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFourteen"
                  aria-expanded="false"
                  aria-controls="collapseFourteen"
                >
                  How do I switch from one chain to another?
                </button>
              </h2>
              <div
                id="collapseFourteen"
                className="accordion-collapse collapse"
                aria-labelledby="headingFourteen"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  By clicking on the button with the chain icon in the upper
                  right corner of the page.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFifteen">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFifteen"
                  aria-expanded="false"
                  aria-controls="collapseFifteen"
                >
                  What does «Approve» mean?
                </button>
              </h2>
              <div
                id="collapseFifteen"
                className="accordion-collapse collapse"
                aria-labelledby="headingFifteen"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  You give permission to the app contract to send your tokens to
                  the addresses you provided.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSixteen">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSixteen"
                  aria-expanded="false"
                  aria-controls="collapseSixteen"
                >
                  At the second step, I get the following error message:
                  Insufficient balance on your account.
                </button>
              </h2>
              <div
                id="collapseSixteen"
                className="accordion-collapse collapse"
                aria-labelledby="headingSixteen"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  The app simulates a multisend to make sure that everything is
                  in order and will go well. For this operation, your balance
                  must be greater than the amount on the error message. Please
                  add funds to your balance.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeventeen">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeventeen"
                  aria-expanded="false"
                  aria-controls="collapseSeventeen"
                >
                  What is a self-generated key?
                </button>
              </h2>
              <div
                id="collapseSeventeen"
                className="accordion-collapse collapse"
                aria-labelledby="headingSeventeen"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  This is the fastest recommended way to use Multisender. The
                  app generates a burner key on your device. After the burner
                  key receives the funds, it will automatically post all your
                  transactions on the blockchain.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEighteen">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEighteen"
                  aria-expanded="false"
                  aria-controls="collapseEighteen"
                >
                  How to make a multisend using a self-generated key?
                </button>
              </h2>
              <div
                id="collapseEighteen"
                className="accordion-collapse collapse"
                aria-labelledby="headingEighteen"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <iframe
                    className="video"
                    src="https://www.youtube.com/embed/OF6GBccHCJk"
                    frameborder="0"
                    title="How to airdrop any ERC20 token"
                  ></iframe>
                  <p className="py-3">Multisend using self-generated key</p>
                  <p>
                    If the app calculated 5 or more transactions, you can
                    proceed with a self-generated key. It will generate a burner
                    key on your device in your browser storage and will
                    automatically post all transactions to the blockchain.
                  </p>
                  <ol>
                    <li>Connect your wallet to the app.</li>
                    <li>
                      Select your token and specify a list of addresses in CSV
                      format; if you don't know what CSV is, click the 'Show
                      Sample CSV' button.
                    </li>
                    <li>Click 'Send' and proceed to the next step.</li>
                    <li>Click 'Approve' and confirm in the wallet.</li>
                    <li>Click 'Proceed' and go to the third step.</li>
                    <li>
                      This step shows the total estimate. You can also change
                      the value of gas price, but we don't recommend changing
                      this field.
                    </li>
                    <li>
                      Select 'self-generated key', click 'Sign key' and sign the
                      message in your wallet.
                    </li>
                    <li>
                      Click 'Proceed with self-generated key' and confirm the
                      transaction in the wallet.
                    </li>
                    <li>
                      Done! You don't have to do anything else. You don't need
                      to press any buttons. Everything is already done. Just
                      wait until all transactions are mined.
                    </li>
                    <li>
                      After the multisend is completed, your self-generated key
                      may be some funds remaining. To receive these funds, go to
                      the 'Profile' page and click 'Refund' button under the
                      field with your private key. Keep in mind that the key
                      will be stored in your browser cache until you start a new
                      multisend.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingNineteen">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNineteen"
                  aria-expanded="false"
                  aria-controls="collapseNineteen"
                >
                  How can I restore my self-generated key?
                </button>
              </h2>
              <div
                id="collapseNineteen"
                className="accordion-collapse collapse"
                aria-labelledby="headingNineteen"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  There is no way to restore a self-generated key. However, you
                  can ask for a refund on the profile page.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwenty">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwenty"
                  aria-expanded="false"
                  aria-controls="collapseTwenty"
                >
                  Does Multisender have API?
                </button>
              </h2>
              <div
                id="collapseTwenty"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwenty"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>You can prefill the form with query parameters</p>
                  <p>Query Parameters:</p>
                  <ul>
                    <li>TOKEN - token address</li>
                    <li>CSV - your list separated with</li>
                  </ul>
                  <p>Example</p>
                  <p>
                    https://multisender.app/?token=0x000000000000000000000000000000000000
                    <br />
                    bEEF&csv=0x0039f22efb07a647557c7c5d17854cfd6d489ef3,1\n0xC8c30Fa8
                    <br />
                    03833dD1Fd6DBCDd91Ed0b301EFf87cF,2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
