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
                This blog contains pictures I took at each of the sites as well as pictures took at the National Archaeological Museum
                in Athens. Unfortunately I only took pictures of the Mycenaean artifacts at the museum, and I forgot to take pictures of
                the Akrotiri exibit in the Museum, which contained many interesting artifacts from Akrotiri.
            </p>
            <br/>
            <h2>
                Making this blog
            </h2>
            <p>
                This blog was made using React, stylized with CSS, and hosted on Heroku. 
            </p>
        </div>
    )
}

export default About;