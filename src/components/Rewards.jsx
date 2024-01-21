import React from 'react'
import Sidebar from './Sidebar'
import './Rewards.css'
// import './Assets'
import r1 from '../imgs/r1.png'
import r2 from '../imgs/r2.png'
import r3 from '../imgs/r3.png'
import r4 from '../imgs/r4.png'
import r5 from '../imgs/r5.png'

const Rewards = () => {
  return (
    <div className='App'>
      <div className="AppGlass" style={{gridTemplateColumns: '12rem auto'}}>
        <Sidebar/>

<div className="rewardpage">
        <div className="coinreward" style={{display:'flex', gap:'5rem',paddingTop:'1rem'}}>
            <div className="rewardcontent">
            

<div className="rUpdates">
      
          <div className="rupdate" >
           <h1>Claim Your Rewards in 5 simple steps ✨</h1>
           <h4>1. Copy the link of your Anti-drug social media video.</h4>
           <h4>2. Paste it on the Upload link popup.</h4>
           <h4>3. Wait till your video gets approved.</h4>
           <h4>4. Earn Points based on your reach, influence and Quality.</h4>
           <h4>5. Redeem Various Rewards through your earned coins.</h4>
            </div>
        
    </div>

            </div>
            <div className="coinbox" style={{marginTop:'3rem'}}>
            <img width='250px' src="https://www.onlygfx.com/wp-content/uploads/2020/11/stack-of-gold-coins-5.png" alt="" />
            <h2 style={{marginTop:'1rem'}}>Coins Earned : 3000</h2>
            </div>
            
        </div>

<div className="rewards" style={{marginTop:'2rem'}}>
    <h2>Hot Deals Of the Day</h2>
        <div className="r1" style={{marginTop:'2rem'}}>
            
        <figure className="rfigure">
    <img src={r1} width="250px" height="300px" alt="Mountains" />
    <figcaption>Canon Mini 611</figcaption>
</figure>
<figure className="rfigure"  >
    <img src={r2}  width="250px" height="300px" alt="Mountains"/>
    <figcaption>Nike Max 2</figcaption>
</figure>
<figure className="rfigure">
    <img src={r3}  width="250px" height="300px" alt="Mountains"/>
    <figcaption>Hublot X</figcaption>
</figure>
<figure className="rfigure"  >
    <img src={r4}  width="px" height="300px" alt="Mountains"/>
    <figcaption>Amazon Gift card</figcaption>
</figure>
<figure className="rfigure"  >
    <img src={r5}   height="300px" alt="Mountains"/>
    <figcaption>H&M Gift card</figcaption>
</figure>

</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Rewards
