import './Leaderboard.scss'
import Sidebar from "./Sidebar";
import { getByDisplayValue } from "@testing-library/react";

const Leaderboard = () => {
 const dados = [
  {
    id: 1,
    name: 'Jiya',
    image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
    level: 2,
    xp: 100,
    coins: 500,
    love: '60 K',
    beacons: 2,
    resources: 70,
  },
  {
    id: 1,
    name: 'Sarvin',
    image: 'https://cdn-icons-png.flaticon.com/512/186/186038.png',
    level: 4,
    xp: 100,
    coins: 500,
    love: '58 K',
    beacons: 2,
    resources: 55,
  },
  {
    id: 1,
    name: 'Abhishek',
    image: 'https://cdn-icons-png.flaticon.com/512/186/186036.png',
    level: 5,
    xp: 100,
    coins: 500,
    love: '45 K',
    beacons: 2,
    resources: 51,
  },
  {
    id: 1,
    name: 'Kiran Kapoor',
    image: 'https://cdn-icons-png.flaticon.com/512/186/186039.png',
    level: 8,
    xp: 100,
    coins: 500,
    love: '40 K',
    beacons: 2,
    resources: 56,
  },
  {
    id: 1,
    name: 'Yogita Mittal',
    image: 'https://cdn-icons-png.flaticon.com/512/186/186038.png',
    level: 9,
    xp: 100,
    coins: 500,
    love: '39 K',
    beacons: 2,
    resources: 41,
  },
  {
    id: 1,
    name: 'Nandini Singh',
    image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
    level: 12,
    xp: 100,
    coins: 500,
    love: '28 K',
    beacons: 2,
    resources: 39,
  },
  {
    id: 1,
    name: 'Devanshi Bansal',
    image: 'https://cdn-icons-png.flaticon.com/512/186/186036.png',
    level: 16,
    xp: 100,
    coins: 500,
    love: '26 K',
    beacons: 2,
    resources: 35,
  },
  {
    id: 1,
    name: 'Atharva Malik',
    image: 'https://cdn-icons-png.flaticon.com/512/186/186039.png',
    level: 16,
    xp: 100,
    coins: 500,
    love: '25 K',
    beacons: 2,
    resources: 34,
  },
  {
    id: 1,
    name: 'Yash Tyagi',
    image: 'https://cdn-icons-png.flaticon.com/512/186/186038.png',
    level: 16,
    xp: 100,
    coins: 500,
    love: '23 K',
    beacons: 2,
    resources: 33,
  },
  {
    id: 1,
    name: 'Disha Gangwar',
    image: 'https://cdn-icons-png.flaticon.com/512/186/186036.png',
    level: 16,
    xp: 100,
    coins: 500,
    love: '22 K',
    beacons: 2,
    resources: 31,
  },
  {
    id: 1,
    name: 'Sanchita Jha',
    image: 'https://cdn-icons-png.flaticon.com/512/186/186039.png',
    level: 16,
    xp: 100,
    coins: 500,
    love: '18 K',
    beacons: 2,
    resources: 30,
  },
  {
    id: 1,
    name: 'Pranjali Singh',
    image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
    level: 16,
    xp: 100,
    coins: 500,
    love: '16 K',
    beacons: 2,
    resources: 21,
  }
   
 
];
  return (
    <>
    <div className="App">
      <div  className="AppGlass">
    <Sidebar/>
    <div style={{marginLeft:'20%',marginTop:'3%'}} >
    <div className="l-container">
      <div className="topLeadersList">
        {dados.map((leader, index) => (
          <div className="leader" key={leader.id}>
            {index + 1 <= 3 && (
              <div className="containerImage">
                <img className="image" loading="lazy" src={leader.image} />
                <div className="crown">
                  <svg
                    id="crown1"
                    fill="#0f74b5"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 50"
                  >
                    <polygon
                      className="cls-1"
                      points="12.7 50 87.5 50 100 0 75 25 50 0 25.6 25 0 0 12.7 50"
                    />
                  </svg>
                </div>
                <div className="leaderName">{leader.name}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="playerslist">
        <div className="table">
            <div>#</div>
        
            <div>Name</div>
        
          
            <div>LVL</div>
          
            {/* <div>XP</div> */}
          
            <div>
              Coins
            </div>
          
            <div>
              Likes
            </div>
          
            {/* <div>
              Pass
            </div> */}
          
            <div>
              Video Count
            </div>
          
        </div>
        <div className="list">
          {dados.map((leader, index) => (
            <div className="player" key={leader.id}>
              <span> {index + 1}</span>
              <div className="user">
                <img className="image" src={leader.image} />
                <span> {leader.name} </span>
              </div>
              <span> {leader.level} </span>
              {/* <span> {leader.xp} </span> */}
              <span> {leader.coins} </span>
              <span> {leader.love} </span>
              {/* <span> {leader.beacons} </span> */}
              <span> {leader.resources} </span>
            </div>
          ))}
        </div>
        </div>
      </div></div>
      
      </div>
    </div>
      </>
);
}
export default Leaderboard;
// ReactDOM.render(<Leaderboard />,
// document.getElementById("root"))