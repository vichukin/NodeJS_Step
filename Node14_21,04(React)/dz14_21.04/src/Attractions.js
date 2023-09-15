import React, { Component } from 'react'
import {Link, useParams} from 'react-router-dom'

export default function Attractions() {
  const arr =[
    `
    
      Orłowo Pier, located in Gdynia, Poland, is a picturesque wooden pier that stretches into the Baltic Sea. It is a popular destination for both tourists and locals, offering stunning views of the coastline and the sea. The pier is an ideal spot for leisurely strolls, fishing, or simply enjoying the fresh sea breeze. It also features a charming restaurant at the end of the pier where visitors can savor local seafood dishes while taking in the beautiful surroundings. Orłowo Pier is not only a place of relaxation but also a significant cultural and historical landmark in the region.
    `,
    `
    Kamienna Góra, located in Gdynia, Poland, is a prominent hill that holds historical significance and offers stunning panoramic views of the city and the Baltic Sea. This elevated vantage point is a popular destination for both locals and tourists, attracting nature enthusiasts, hikers, and those seeking picturesque landscapes.

Key features and aspects of Kamienna Góra include:

Historical Significance: Kamienna Góra has historical significance dating back to World War II. During the war, it served as a fortified artillery position. Visitors can explore remnants of bunkers and fortifications that still exist on the hill, providing a glimpse into the area's wartime history.

Natural Beauty: The hill is nestled within a lush, forested area, making it a delightful spot for those who enjoy spending time in nature. Hiking trails wind their way through the woods, allowing visitors to immerse themselves in the natural surroundings.

Panoramic Views: The primary draw of Kamienna Góra is its panoramic views. From the hill's summit, visitors are treated to breathtaking vistas of Gdynia's skyline, the Baltic Sea, and the surrounding countryside. It's an excellent spot for taking photographs or simply enjoying the serene beauty of the landscape.

Outdoor Activities: Apart from hiking and exploring the historical remnants, Kamienna Góra provides an opportunity for outdoor activities such as picnicking, birdwatching, and enjoying a peaceful escape from the bustling city below.

Cultural Events: Occasionally, cultural events and outdoor concerts are held on Kamienna Góra, adding to its appeal as a gathering place for the local community and visitors.

Accessibility: Kamienna Góra is easily accessible by foot or by car, and there are designated parking areas for those driving to the hill.

Overall, Kamienna Góra in Gdynia is a place where history, nature, and breathtaking views converge. It offers a tranquil escape from the urban environment and a chance to connect with the past while enjoying the natural beauty of the region.
    `,
    `
    Centrum Nauki Experyment, located in Gdynia, Poland, is a dynamic and interactive science center that invites visitors of all ages to embark on a fascinating journey of exploration and discovery. This modern science center is a hub for hands-on learning, scientific experimentation, and immersive educational experiences.

Key highlights and features of Centrum Nauki Experyment include:

Interactive Exhibits: The center boasts a wide range of interactive exhibits and displays that cover various branches of science, including physics, biology, chemistry, and technology. Visitors can engage with these exhibits, conducting experiments and experiencing scientific principles firsthand.

Hands-On Learning: Centrum Nauki Experyment encourages a hands-on approach to learning. It provides visitors with the opportunity to touch, manipulate, and experiment with different scientific phenomena, making complex concepts accessible and engaging.

Educational Programs: The center offers educational programs, workshops, and guided tours for school groups, families, and individuals. These programs are designed to cater to different age groups and levels of scientific knowledge, fostering a love for learning and curiosity about the natural world.

Planetarium: Centrum Nauki Experyment often features a planetarium with captivating astronomy shows. Visitors can explore the mysteries of the cosmos, learn about celestial objects, and gain a deeper understanding of our universe.

Temporary Exhibitions: The center frequently hosts temporary exhibitions that delve into specific scientific topics, innovations, or historical discoveries. These exhibitions provide fresh and engaging content for repeat visitors.

Events and Workshops: Throughout the year, Centrum Nauki Experyment hosts various events, science festivals, and workshops that bring together scientists, educators, and science enthusiasts. These gatherings promote collaboration and the exchange of knowledge.

Cafeteria and Gift Shop: Visitors can take a break at the on-site cafeteria and explore the science-themed gift shop, which offers a selection of educational toys, books, and souvenirs.

Accessibility: The center is designed to be accessible to people of all abilities, ensuring that everyone can enjoy and benefit from its educational offerings.

Centrum Nauki Experyment in Gdynia serves as an important educational resource in the region, inspiring a lifelong passion for science and fostering a deeper appreciation for the wonders of the natural world. It is a place where curiosity knows no bounds and where the joy of discovery is celebrated.`
  ]
  const lpic=[
    `https://www.worldisbeautiful.eu/up_files/1175-Molo-w-Orlowie.jpg`,
    `https://podroztrwa.pl/wp-content/uploads/2021/10/1920px-2021-07-10_-_Kamienna_Gora_-_krzyz-min.jpg`,
    `https://pomorskie.travel/wp-content/uploads/2012/04/Centrum-Nauki-Experyment-w-Gdyni-Pomorskie.Travel-foto.-Tomasz-Kaminski-1920x620.jpg`
  ]
  const rpic = [
    `https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/37/da/3a/molo.jpg?w=1200&h=-1&s=1`,
    `https://s-trojmiasto.pl/zdj/c/n/9/1895/1500x0/1895898-Krzyz-na-Kamiennej-Gorze-bedzie-mial-nowoczesne-oswietlenie.jpg`,
    `https://zdjecianoclegi.pl/articles/imagesfly/large/4497/13-10-36-0378.jpg`
  ];
  const {index} = useParams();
  return (
    <>
    <div className='row'>
      <div className='col'>
        <ul>
          <li><Link to="/attractions/1">Orłowo Pier</Link></li>
          <li><Link to="/attractions/2">Kamienna Góra</Link></li>
          <li><Link to="/attractions/3">Centrum Nauki Experyment</Link></li>
        </ul>
      </div>
    </div>
    <div className='row'>
      <div className='col'>
        {index>0 && index<4 && <p>{arr[index-1]}</p>}
      </div>
    </div>
    <div className='row mb-4'>
      {index>0&&index<4&&<div className='col col-6'><img src={lpic[index-1]} className='w-100'></img></div>}
      {index>0&&index<4&&<div className='col col-6'><img src={rpic[index-1]} className='w-100'></img></div>}
      
    </div>
    </>
  )
}

