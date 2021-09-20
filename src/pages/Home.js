import React from 'react';
import Image from 'react-bootstrap/Image';
import homeImg from '../images/home.jpg';

function Home() {
  return (
    <div>
        <div class="home text-left">
          <img class="img-responsive" src={homeImg} style={{ height: '100%', width: '100%' }} />
          <div class="caption">
            <p class="p1">“The journey of a thousand miles begins with a single step.”</p>
            <p class="p2">“Travel is an investment in yourself.”</p>
          </div>
        </div>

    </div>
  );
}

export default Home;
