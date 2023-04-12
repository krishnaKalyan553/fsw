import React from 'react';
import '../../App.css';

function Faqs(){
  return(
  <>
    <div id='faqs'>
      <details >
        <summary className="tab-control">Who can participate in this hackathon?</summary>
        <p>
          Any student from any college/university can participate
        </p>
      </details>
      <details >
        <summary className="tab-control">What is the registration fee?</summary>
        <p>
          Registration fee for an individual is Rs-500,for a team of 2 is Rs-800,for a team of 4 is 1600.
        </p>
      </details>
      <details >
        <summary className="tab-control">What all domains are there?</summary>
        <p>
          The four domains are AgroTech, HealthCare, Smart Education and Road Safety
        </p>
      </details>

      <details>
        <summary className="tab-control">What all prizes are there?</summary>
        <p>
          There are 3 prizes for each domain.
          WINNER -INR 20,000
          FIRST RUNNER UP-INR 10,000
          SECOND RUNNER UP-INR 5,000
          THIRD RUNNER UP-INR 5,000

        </p>
      </details>


      <details >
        <summary className="tab-control">I've submitted wrong details in the registration form, how can I correct them?</summary>
        <p>
          Kindly contact us through mail ID: epitome23@grietsdc.in
        </p>
      </details>


      <details >
        <summary className="tab-control">I cannot attend the event for some reason, can anyone attend in my place?</summary>
        <p>
          Kindly contact through mail ID: epitome23@grietsdc.in
        </p>
      </details>


      <details>
        <summary className="tab-control">Can I cancel my registration?</summary>
        <p>
          No, we don't provide any refunds upon cancellation.
        </p>
      </details>


      <details >
        <summary className="tab-control">Do I need to have any specific qualification to be a participant of hackathon?</summary>
        <p>
          |Just basic coding skills are required.
        </p>
      </details>


      <details >
        <summary className="tab-control">What kind of solutions will be accepted?</summary>
        <p>

          Both hardware and software solutions are accepted.


        </p>
      </details>


      <details >
        <summary className="tab-control">Is it an individual or team event?</summary>
        <p>
          Participants can participate individually or as a team.
        </p>
      </details>


      <details >
        <summary className="tab-control">Can we form our own teams, or will be allotted to a specific team?</summary>
        <p>
          You need to form your own teams.
        </p>
      </details>

      <details >
        <summary className="tab-control">Can a college have multiple teams?</summary>
        <p>
          Yes, multiple teams from the same college are allowed.
        </p>
      </details>


      <details >
        <summary className="tab-control">Can participants of a team be from different colleges?</summary>
        <p>
          Yes, students from various colleges can form a team together.
        </p>
      </details>


      <details >
        <summary className="tab-control">Does one need to be online or be available entire time for the hackathon?</summary>
        <p>
          The candidate must be on campus for the entire duration of the hackathon.
        </p>
      </details>


      <details >
        <summary className="tab-control">Are there any restrictions on using number of prebuilt libraries?</summary>
        <p>
          There are no restrictions regarding the usage of libraries. It can be done according to their convenience
        </p>
      </details>

      <details >
        <summary className="tab-control">Where can I get the event details?</summary>
        <p >
          Website: https://vivitsu.netlify.app/
        </p>
        </details>
        </div>
      </>);
}

export default Faqs;