import React from 'react'
import img from './1.webp'
import img1 from './2.jpg'
import img2 from './3.jpg'
import img3 from './4.png'
export default class Second extends React.Component{
    members = ["Dan Reynolds","Wayne Sermon","Ben McKee","Daniel Platzman"];
    listmembers = this.members.map((name)=>{
        return <li><h3>{name}</h3></li>
    });
    genres = ["Pop rock","electropop","pop","indie pop","arena rock","alternative rock"]
    genreslist = this.genres.map((genre)=><li><h3>{genre}</h3></li>)
    albums = [{link: img,name:"Night Visions"},{name:"Smoke + Mirrors",link: img1},{name:"Evolve",link: img2},{name:"Origins",link: img3}];
    albumslist=this.albums.map((album)=><div style={{margin:"1%", border:"2px solid black"}}><img src={album.link} alt={album.name} style={{width:"400px"}}></img><h3 style={{textAlign:"center"}}>{album.name}</h3></div>)
    render= ()=>{
        return(
            <div>
                <h1>Imagine Dragons</h1>
                <h2>Members:</h2>
                <ul>
                    {this.listmembers}
                </ul>
                <h2>Genres:</h2>
                <ul>
                    {this.genreslist}
                </ul>
                <h2>Albums:</h2>
                <flex style={{display:"flex",flexWrap: "wrap"}}>{this.albumslist}</flex>
            </div>
        )
    }
}