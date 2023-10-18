import React from 'react';
import "./NavBar.css"

const navbar= ()=>{
    return (
        <div>
            <div className='Nav'>
                <a href='#home'>
                    <i class="fi fi-rr-home ni"></i>
                </a>
                <a href='#edu'>
                    <i class="fi fi-rr-graduation-cap ni"></i>
                </a>
                <a href='#skills'>
                    <i class="fi fi-rr-head-side-thinking ni"></i>
                </a>
                <a href='#ECA'>
                    <i class="fi fi-rr-list ni"></i>
                </a>
                <a href='#awards'>
                    <i class="fi fi-rr-trophy-star ni"></i>
                </a>
                <a href='#contact'>
                    <i class="fi fi-rr-address-book ni"></i>
                </a>    
            </div>
        </div>
  );
}
export default navbar;