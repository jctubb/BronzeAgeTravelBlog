import React, { Component }  from 'react';
import './imageList.css';
import LionsGate from './LionsGate.jpg'

const images = [
  {
    id: 1,
    title: 'Mycenae Lions Gate',
    description: 'The Lions Gate at Mycenae',
    imageSrc: LionsGate,
  },
  
  {
    id: 2,
    title: 'Lions Gate Closeup',
    description: 'Closeup of the lion statues that give the Lions Gate its name.',
    imageSrc: './LionsGateClose.jpg',
  },
  {
    id: 3,
    title: 'Grave Circle A',
    description: 'A grave circle inside the walls of Mycenae. Many important grave goods were found here.',
    imageSrc: './GraveCircleAFar.jpg',
  },
  {
    id: 4,
    title: 'Grave Circle A Interior',
    description: 'The inside of Grave Circle A. Multiple shaft graves are found here where lavish grave goods were found.',
    imageSrc: './GraveCircleAInside.jpg',
  },
  {
    id: 5,
    title: 'Tholos Tomb',
    description: 'The entrance to the \"Tomb of Clytemnesta\" tholos tomb. The roof is still intact and the stones used are a great example of ashlar masonry. Clytemnestra probably wasn\'t buried here.',
    imageSrc: './TholosTombEntrance.jpg',
  },
  {
    id: 6,
    title: 'Napping in the tomb',
    description: 'Once a tomb for a powerful leader, this tholos tomb is now a place for dogs to get some sleep in the shade.',
    imageSrc: './TholosDog1.jpg',
  },
  {
    id: 7,
    title: 'Another Dog in the tomb',
    description: 'Ancient tombs make a great place to cool off during hot summer days.',
    imageSrc: './TholosDog2.jpg',
  },
  {
    id: 8,
    title: 'Unroofed Tholos Tomb',
    description: 'View inside a tholos tomb without a roof.',
    imageSrc: './UnroofedTholos.jpg',
  },
  {
    id: 9,
    title: 'Cistern Tunnel',
    description: 'The tunnel down into the cistern at Mycenae. Unfortunately it was blocked off when I was here.',
    imageSrc: './Cistern.jpg',
  },
  {
    id: 10,
    title: 'Cult Center Ruins',
    description: 'The ruins of the cult center at Mycenae. Large amounts of evidence for religious activity were found here.',
    imageSrc: './CultCenter.jpg',
  },
  {
    id: 12,
    title: 'Mask of Agamemnon',
    description: 'Mycenaean gold artifacts at the Athens museum including the Mask of Agamemnon. Some say it\'s fake, and I wouldn\'t be surprised. It looks very different from the other gold masks.',
    imageSrc: './MaskofAg.jpg',
  },
  {
    id: 13,
    title: 'Gold Masks and Lion Daggers',
    description: 'More gold masks displayed alongside daggers containing lion related scenes. Found in the Athens museum.',
    imageSrc: './MasksAndDaggers.jpg',
  },
  {
    id: 14,
    title: 'Boar\'s Tusk Helmet',
    description: 'A Mycenaean warrior\'s helmet made out of boar tusks found in the Athens museum.',
    imageSrc: './BoarsTuskHelm.jpg',
  },
  {
    id: 15,
    title: 'Figurines',
    description: 'Various Mycenaean figurines on display in the museum of Athens.',
    imageSrc: './Figurines.jpg',
  },
  {
    id: 16,
    title: 'The North Gate of Mycenae.',
    description: 'The second best gate at Mycenae. Constructed using very large, blocky stones in typical Mycenaean fashion.',
    imageSrc: './SideGate.jpg',
  },
];

const ImageListMycenae = () => (
  <div className="image-list">
    {images.map((image) => (
      <div className="image-item" key={image.id}>
        <img src={image.imageSrc} alt={image.title} />
        <div className="image-info">
          <h2>{image.title}</h2>
          <p>{image.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default ImageListMycenae;