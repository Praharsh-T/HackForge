import "../styles/About.css";
import { Helmet } from "react-helmet";
const AboutHackJNU = () => {
  return (
    <div>
      <Helmet>
        <title>HackJNU | About</title>
        <meta
          name="description"
          content="About HackJNU 3.0, a 24 hour offline hackathon organised by Jawaharlal Nehru University"
        />
      </Helmet>
      <div className="cardset-body flex flex-row w-3/4 mx-auto h-auto animatedContent">
        <div className="cardset w-1/3 flex">
          <div className="cardSpace">
            <div className="card h-full w-full">
              <div className="card-body">
                <div className="card-title ">
                  <span className="heavy">WHAT </span>
                  is Hackriti?
                </div>
                <div className="card-text">
                  Hackriti is a state level hackathon arranged by one of the top
                  universities in India , The Jawaharlal Nehru University .
                  After the immense success of HackJNU and HackJNU 2.0 , we are
                  back in game with HackJNU3
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cardset w-2/3 flex flex-wrap">
          <div className="cardSpace w-full">
            <div className="card w-full h-full">
              <div className="card-body">
                <div className="card-title">
                  <span className="heavy">How </span>
                  Can I Register?
                </div>
                <div className="card-text">
                  Registration is live
                  <br />
                  <div className="DevfolioButton">
                    <div className="flex items-center justify-center h-11 w-80 bg-gradient-to-r from-pink-500 to-purple-700 text-white text-lg font-bold uppercase rounded-lg shadow-md cursor-pointer transition duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                      Apply
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cardSpace w-1/2">
            <div className="card w-full h-full">
              <div className="card-body">
                <div className="card-title">
                  <span className="heavy">Who </span>
                  All Can Register?
                </div>
                <div className="card-text">
                  College students from all over India pursuing any graduation
                  degree can register for this Hackathon
                </div>
              </div>
            </div>
          </div>
          <div className="cardSpace w-1/2">
            <div className="card w-full h-full">
              <div className="card-body">
                <div className="card-title">
                  <span className="heavy">Where </span>
                  will it be held?
                </div>
                <div className="card-text">
                  HackJNU will be held Offline at the{" "}
                  <a href="#" className="card-link">
                    Convention Centre, JNU
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHackJNU;
