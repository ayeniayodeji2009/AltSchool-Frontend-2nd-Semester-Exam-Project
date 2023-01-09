import React from 'react';
import Navigation from './Navigation';
import AnimationTransition from './AnimationTransition'


export default function Contact(){
  return(
    <>
    <AnimationTransition>
    <Navigation />


<div class="w3-container w3-light-grey" id="contact">
    <h1 class="header1">Contact Us</h1>
  <p class="w3-center w3-large">Lets get in touch. Send us a message:</p>
  <div>
    <p><i class="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i> Lagos, Nigeria</p>
    <p><i class="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone: +234 7082754499</p>
    <p><i class="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"></i> Email: ayeniayodeji2009@gmail.com</p>
    <br />
    <form action="/action_page.php" target="_blank">
      <input class="w3-input w3-border" type="text" placeholder="Name" required name="Name" />
      <br />
      <input class="w3-input w3-border" type="text" placeholder="Email" required name="Email" />
      <br />
      <input class="w3-input w3-border" type="text" placeholder="Subject" required name="Subject" />
      <br />
      <textarea class="w3-input w3-border" type="text" placeholder="Message" required name="Message" />
      <p>
        <button class="w3-button w3-black" type="submit">
          <i class="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
      </p>
    </form>
      {/*Image of location/map*/}
    <img src="/w3images/map.jpg" class="w3-image w3-greyscale" />
      </div>
</div>
    </AnimationTransition>
    </>
  )
}