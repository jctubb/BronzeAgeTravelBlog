import ImageListMycenae from './imageListMycenae';
import React, { Component }  from 'react';
import './info.css'


function Mycenae() {
    return (
    <div>
        <div className='info'>
            <h1>
                Mycenae
            </h1>
            <p>
                Mycenae is a Mycenaean (hence the name) palatial site located in the Peloponnese region of Greece. 
                This site is mainly known for its tremendous architecture, which is very interesting to see.
                It is said that Mycenae was believed by later Greeks to be built by the Cyclops due to the presence
                of massive stone blocks in much of the site's buildings, especially the walls. Due to these giant 
                blocks, the architectural style was named "Cyclopean Masonry". The most famous example of this at
                Mycenae is the Lions Gate. Another interesting piece of architecture at Mycenae are the various burial 
                site such as the grave circles and the tholos tombs. The tholos tombs are especially interesting to 
                see as some of them still have their roof intact. These beehive-shaped, massive tombs are built with
                presicely cut stone blocks referred to as "Ashlar Masonry". Lastly, the artifacts and grave goods found
                at Mycenae are quite cool to see. Some notable examples of these include the Mask of Agamemnon, the lion 
                daggers, gold jewelry, cups, weapons, and Rhyta. While many of the best artifacts have been shipped to the 
                National Archaeological Museum in Athens, the museum at Mycenae is still definitely worth visiting. Overall,
                the site of Mycenae is definitely worth visiting, as it is truly awesome to see and not terribly far from Athens.
            </p>
        </div>
        <div>
            <ImageListMycenae/>
        </div>
    </div>
    )
}

export default Mycenae;