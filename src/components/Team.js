import{ React} from "react";
import "./Team.css";

function Team() {
  return (
    <>
      <div className="our-team">
        <div className="ot">
          <div className="ot-1">OUR TEAM</div>
          <p className="ot-para">
            We are a team of young and dynamic <br />
            leaders!
          </p>
        </div>
        <div className="cards d-flex align-items-center justify-content-around">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://d33wubrfki0l68.cloudfront.net/1f2d731d5f5d6c25137b154fcf18a109cb627dcb/2775d/img/nikhil.jpg"
              className="card-img-top"
              alt="imglogo"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <a href="/" className="btn btn-primary">
              Go somewhere
            </a> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="leader-images">
          <div className="leader-image">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/54478b2d20a7aba5bf58fd6612422b7c24a330c1/e51c0/img/lalita.jpg"
              alt=""
              className="leader"
            />
            <p className="name">
              Lalita
              <br />
            </p>
          </div>
          <div className="leader-image">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/1f2d731d5f5d6c25137b154fcf18a109cb627dcb/2775d/img/nikhil.jpg"
              alt=""
              className="leader "
            />
            <p className="name">
              Nikhil Rana
              <br />
            </p>
          </div>
          <div className="leader-image">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/5d498adfe47b77d68c2775ac91768cdf58f6531c/a2e8b/img/mustafa.jpg"
              alt=""
              className="leader"
            />
            <p className="name">
              Mustafa Siddique
              <br />
            </p>
          </div>
        </div> */}
    </>
  );
}

export default Team;
