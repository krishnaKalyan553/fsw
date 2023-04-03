import React from 'react'
import '../../App.css';

function Card(props){
  return(<>
      <div class="card">
        <img src="face.jpg" alt={props.name} />
        <div class="card-text">
          <h4>{props.name}</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id justo eget enim malesuada rhoncus. Integer ultrices sapien vel metus bibendum vestibulum.</p>
        </div>
      </div>
  </>);
}

function AboutUs() {
  return(
  <>
    <Card name="hansika"></Card>
    <Card name="ketan"></Card>
    <Card name="abhishek"></Card>
    <Card name="xyz"></Card>
    <Card name="yml"></Card>
    <Card name="bml"></Card>
  </>);
}

export default AboutUs