"use strict";
const welcome = {
  template: `

  <section class="welcome">
    <p>welcome page</p>  
  
    <h1>The Grand Escape</h1>
   
    <a href="#!/rules">Click to Play</a>
  </section>
  `,


  
}

angular.module("app").component("welcome", welcome);