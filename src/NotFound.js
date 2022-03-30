import seagull from "./assets/seagull.svg";
const NotFound = () => {
    return ( 
        <div className="app_not-found">
            <div className="not-found_content">
                <h1 className="content_titel">404</h1>
                <h2 className="content_msg1">We’re sorry<br/>
                    we - can’t Find the page your looking for </h2>
                <div  className="content_msg2">
                    <h3 className="msg2_part1">But look, the screen is empty, It's the best</h3> 
                    <h3 className="msg2_part2">Opportunity to enjoy the amazing scene behind </h3>
                    <img src={seagull} className="content_background"  alt=""/>
                </div>              
                <div className="content_msg3">
                    <h2 className="msg3_part1">Otherwise we can go back Home</h2>
                    <i className="msg3_icon"/>
                    <h2 className="msg3_part2">toghether.</h2>
                </div>
                
            </div> 
        </div>
     );
}
 
export default NotFound;