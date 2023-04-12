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

<div>
      <div class="background">
        <div class="transbox">
          <div  className='ins_transbox'>
            <h1 className='fsw'>FSW</h1>
            <p  className='inside_gif'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tempora porro eligendi. Nihil repellat quia atque aliquid tempore impedit suscipit neque tenetur architecto ipsa? Sit, magni quidem? Nostrum eligendi quae est officia temporibus perferendis!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eos possimus adipisci ducimus cum dolor, amet in, distinctio quisquam aperiam iure inventore vero, culpa libero facilis quasi obcaecati! Sed, perferendis?
            </p>
            </div>

            <div className='ins_transbox_temp'>
            <h1 > VIVITSU</h1>
            <p className='inside_gif'>The Free Software Wing of GRIET College is proud to announce its upcoming 24-hour hackathon, to be held on the 28th and 29th of April. The hackathon is open to all students, regardless of their major or level of expertise. It is designed to provide a platform for students to showcase their coding skills, collaborate with their peers, and develop innovative solutions.</p>
            {/* <p className='inside_gif'>The hackathon will start at 10 am on the 28th of April and continue for 24 hours, until 10 am on the 29th of April. Participants can work on any project they choose from the 10 problem statements provided. They can work individually or in teams of up to four people. Participants will receive extra points in the evaluation if the use of free softwares is included in their prototype. */}
        {/* </p> */}
        </div>
        </div>
    </div>
    </div>
  <Card name="hansika"></Card>
  <Card name="ketan"></Card>
  <Card name="abhishek"></Card>
  <Card name="xyz"></Card>
  <Card name="yml"></Card>
  <Card name="bml"></Card>
  </>);
}

export default AboutUs