import React from 'react'
import Sidebar from './Sidebar'
import './Rewards.css'

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
           <h1>Claim Your Coins</h1>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque autem minima quae ratione eius voluptatum similique iure veniam, harum deleniti iusto vel aperiam, repudiandae quisquam. Hic, et? Consequatur nulla velit error veniam illo corrupti dolorem, deserunt laboriosam laudantium non quas maxime omnis qui? Reprehenderit quia molestias itaque voluptatum in doloribus?</p>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, aliquid. Incidunt minus neque debitis doloribus quod nostrum similique officia. Nisi.</p>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, laudantium?</p>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, laudantium?</p>
            </div>
        
    </div>

            </div>
            <div className="coinbox" style={{marginTop:'3rem'}}>
            <img width='250px' src="https://www.onlygfx.com/wp-content/uploads/2020/11/stack-of-gold-coins-5.png" alt="" />
            <h2>Coins Earned : 3000</h2>
            </div>
            
        </div>

<div className="rewards" style={{marginTop:'2rem'}}>
    <h2>Hot Deals Of the Day</h2>
        <div className="r1" style={{marginTop:'2rem'}}>
            
        <figure>
    <img src="https://picsum.photos/id/287/250/300" alt="Mountains"/>
    <figcaption>The Day</figcaption>
</figure>
<figure  >
    <img src="https://picsum.photos/id/475/250/300" alt="Mountains"/>
    <figcaption>The Night</figcaption>
</figure>
<figure>
    <img src="https://picsum.photos/id/287/250/300" alt="Mountains"/>
    <figcaption>The Day</figcaption>
</figure>
<figure  >
    <img src="https://picsum.photos/id/475/250/300" alt="Mountains"/>
    <figcaption>The Night</figcaption>
</figure>
<figure  >
    <img src="https://picsum.photos/id/475/250/300" alt="Mountains"/>
    <figcaption>The Night</figcaption>
</figure>

</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Rewards
