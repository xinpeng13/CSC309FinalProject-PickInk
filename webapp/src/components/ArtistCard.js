import React, { Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import pic1 from '../assets/img/gallery_pic1.jpg'
import pic2 from '../assets/img/gallery_pic2.jpg'
import pic3 from '../assets/img/squidward.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../assets/css/artistCard.css";

export class ArtistCard extends Component{
  render(){
    return(
        <div className='card'>
                <h5 href="/"> @Spongebob </h5>
                <h7 class='mb-3'> Hi This is a tattooist based in Toronto </h7>
            <div className='carousel'>
                <Carousel>
                <div>
                        <img src={pic1} />
                </div>
                <div>
                        <img src={pic2} />
                </div>
                <div>
                        <img src={pic3} />
                </div>
                </Carousel>
            </div>

        </div>
  )
}
}

export default ArtistCard