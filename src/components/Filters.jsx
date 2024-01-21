import React from 'react'
import Sidebar from './Sidebar'
import './Filters.scss'
import filter1 from '../imgs/filter1.png'
import filter2 from '../imgs/filter2.png'
import filter3 from '../imgs/filter3.png'
// import filter4 from '../assets/filter4.png'

const Filters = () => {


    // function classToggle() {
    //     var el = document.querySelector('.icon-cards__content');
    //     el.classList.toggle('step-animation');
    //   }

    //   document.querySelector('#toggle-animation').addEventListener('click', classToggle);


    return (
        <div className='App'>
            <div className='AppGlass'>
                <Sidebar />
                
                <div className='filtercustom' style={{position:'absolute',right:'30%'}}>
                <div className="filters_section">
                <figure class="icon-cards mt-3">
                    <div class="icon-cards__content">
                        <div class="icon-cards__item d-flex align-items-center justify-content-center">
                            <a target='blank' href="https://www.snapchat.com/lens/6a483d9fc80249089058f81520d7c7e0?sender_web_id=2e335d0b-1ca8-43d3-85f4-790245bae120&device_type=desktop&is_copy_url=true">
                                <span class="fh1">
                                    <img src={filter1} alt="" className='card-img' />
                                </span></a>
                        </div>
                        <div class="icon-cards__item d-flex align-items-center justify-content-center"><span class="fh1">
                            <img src={filter2} alt="" className='card-img' />
                        </span></div>
                        <div class="icon-cards__item d-flex align-items-center justify-content-center"><span class="fh1"><img src={filter3} alt="" className='card-img' /></span></div>

                    </div>
                </figure>

            </div>
                </div>
            </div>
        </div>
    )
}

export default Filters