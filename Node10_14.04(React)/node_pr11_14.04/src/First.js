import photo from "./1984.jpg"
export default function First(){
    return(
        <flex style={{display: "flex"}}>
            <img src={photo} alt="1984" style={{width: "20%"}} ></img>
            <div>
            <h1>1984</h1>
            <h2>8 June 1949</h2>
            <h3>George Orwell</h3>
            <h4>Genre - Dystopian</h4>
            <h5>328 pages</h5>
            </div>
        </flex>
    )
}