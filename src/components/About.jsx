import React from 'react';
import Navigation from './Navigation';
import AnimationTransition from './AnimationTransition'


export default function About(){
  return (
    <>
      <AnimationTransition>
      <Navigation />
      <section class="about_page">
    <h1 class="header1">About App</h1>
        <p>This App is a Counter App, which has increament, decrement, reset value, and set value functions. It also has SEO, ErrorBoundary and Page 404 functions added to it.</p>
      </section>
      </AnimationTransition>
    </>
  )
}