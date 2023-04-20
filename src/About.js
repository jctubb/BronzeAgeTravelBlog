import React, { Component }  from 'react';
import './info.css'

function About() {
    return (
        <div className='info'>
            <h1>
                About this blog
            </h1>
            <p>
                In July of 2021 I went on a trip to Greece, and, during that trip, I visited two bronze age sites: Mycenae and Akrotiri.
                This blog contains pictures I took at each of the sites as well as pictures I took at the National Archaeological Museum
                in Athens. Unfortunately I only took pictures of the Mycenaean artifacts at the museum, and I forgot to take pictures of
                the Akrotiri exibit, which contained many interesting artifacts from Akrotiri. Greece is one of my favorite countries to
                have visited and I would highly recommend visiting should you get the chance. Likewise, both Akrotiri and Mycenae are 
                must see sites in my opinion to anyone who loves history and even those who don't. To view a description of the sites
                and pictures taken by me, click on the respective site name on the top left corner of the page.
            </p>
            <br/>
            <h2>
                Making this blog
            </h2>
            <p>
                This blog was made using React, stylized with CSS, and hosted on Heroku. All pictures taken by me. 
            </p>
        </div>
    )
}

export default About;