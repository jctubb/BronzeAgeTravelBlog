import ImageListAkrotiri from './imageListAkrotiri';
import React, { Component }  from 'react';
import './info.css'

function Akrotiri() {
    return (
        <div>
            <div className='info'>
                <h1>
                    Akrotiri
                </h1>
                <p>
                    Akrotiri is a ruined Bronze Age town located on the island of Santorini (Also called Thera). 
                    This settlement was covered in ash by the Thera Eruption that took place sometime around 1600 - 1500 BC.
                    Due to this Eruption, this site is very well preserved and gives us a much better insight into Minoan culture,
                    as well as being fascinating to see. This site is an active archaeological site, but visitors are welcome.
                    Some even theorize that Akrotiri is in fact the lost city of Atlantis, which I would like to believe,
                    if only to say I have visited Atlantis itself. Despite being on a very crowded, tourist-heavy island, 
                    the site of Akrotiri was not busy at all when I went. I would definitely recommend checking this site out 
                    should you find yourself in Greece as it is very interesting to visit. Also, do not forget to check out the 
                    Thera exibit at the National Archaeological Museum in Athens. I did not take any pictures when I went 
                    unfortunately, but many of the important frescoes and artifacts reside there such as the boxer fresco.
                </p>
            </div>
            <div>
                <ImageListAkrotiri/>
            </div>
        </div>
    )
}

export default Akrotiri;