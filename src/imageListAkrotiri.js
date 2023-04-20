import React, { Component }  from 'react';
import './imageList.css';


const images = [
  {
    id: 1,
    title: 'Caldera of Santorini',
    description: 'This image displays then center island of Santorini and, through the fog, more of the outer ring. The ring shape of Santorini is due to volcanic activity. Interestingly, when swimming around the central island, the water is very warm.',
    imageSrc: './Caldera.JPG',
  },
  {
    id: 2,
    title: 'Akrotiri Buildings',
    description: 'A view of the ruins of Akrotiri including a large complex on the left. You can see the ',
    imageSrc: './AkroBuildings.JPG',
  },
  {
    id: 3,
    title: 'Pier and Door Partitions?',
    description: 'Possible Pier and Door Partitions under this collapsing beam.',
    imageSrc: './AkroPierDoor.JPG',
  },
  {
    id: 4,
    title: 'Akrotiri Pottery',
    description: 'Painted pottery at the site of Akrotiri. This building may have been a storage facility or workshop (Or it is just where the archaeologists put the pots).',
    imageSrc: './AkroPottery.JPG',
  },
  {
    id: 5,
    title: 'Akrotiri Pottery Pt. 2',
    description: 'Another view of the painted pots.',
    imageSrc: './AkroPots2.JPG',
  },
  {
    id: 6,
    title: 'Collapsing Stairs',
    description: 'A collapsing staircase that appears to be inside a building, likely damaged by an earthquake. The flat stone flooring is an interesting look into Akrotirian interior design.',
    imageSrc: './AkroStairs.JPG',
  },
  {
    id: 7,
    title: 'Kitchen/Workshop',
    description: 'A look inside a window to see what I believe is a kitchen or pottery workshop.',
    imageSrc: './AkroKitchen.JPG',
  },
  {
    id: 8,
    title: 'Tripods',
    description: 'A room containing pots, including many (often broken) three-legged pots.',
    imageSrc: './AkroTripods.JPG',
  },
  {
    id: 9,
    title: 'Window',
    description: 'A window surrounded by wooden beams. It\'s very interesting how the wood has been preserved by the ash after all this time.',
    imageSrc: './AkroWindow.JPG',
  },
];

const ImageListAkrotiri = () => (
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

export default ImageListAkrotiri;