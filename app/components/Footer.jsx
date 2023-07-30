import React from 'react'
import { SocialMediaLinks } from './SocialMediaLinks'

export const Footer = () => {
  return (
/*Footer Start*/
<footer className="box mt-5 py-5" id="footer">
  <div className="container">
    <div className="row pt-5 text-center">
      <div className="col-md-4">
        <h6>للتواصل معي من خلال</h6>

        <SocialMediaLinks />

      
      </div>
      <div className="col-md-4 text-center">
        <h6>الموقع من تصميم وتنفيذ</h6>
        <span>Mohammad Khlouf</span><br />
        <span>mohammad.khlouf@gmail.com</span>
      </div>
      <div className="col-md-4">
        <h6>راسلني عبر</h6>
        <span>eiba.abutaha@gmail.com</span>
      </div>
    </div>
  </div>
</footer>
/*Footer End*/
  )
}
