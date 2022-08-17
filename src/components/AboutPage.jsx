import React from 'react'
import site from '../assets/images/site.png'


const AboutPage = () => {
  return (
    <div style={{ textAlign: 'center' , margin: '0 auto', padding:'1%' , background: 'lineaer-gradient(to right, black, white)'}}>
        <div>
          <h2>
            <u>Purpose: <p>This project was made as a FrontEnd Assignment.</p></u>
          </h2>
          </div>
          <hr />
          <div>
              <h2>Description of the Site</h2>
              <p>This site is a online real estate listing platform, where you can find any property for rent or sale, filter them to match your need throughout the country.</p>
          </div>
          <hr />
      <div>
        <h2>API Used</h2> 
              <p>This project was build using the <a href='https://rapidapi.com/apidojo/api/realty-in-ca1/'>Realty in CA</a> API from <a href='https://rapidapi.com/hub'>Rapid API</a>.</p>
      </div>
      <hr/>
        <div>
            <h1> Original Site of the Data</h1>
            <img style={{ width: '25%', maxHeight: '25%'}} src={site} alt='properties data origin site'></img>
              <h3> <a href='https://www.realtor.ca/'>Realtor.ca</a></h3>
        </div>
        <hr />
      
      
      <div>
            <h2>Socials</h2>
        <div style={{ display: 'flex', justifyContent:'space-evenly'}}>
                  <a href='https://www.linkedin.com/in/bobde-yagyesh/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BUieEc2dVTSaTeQ4HpxrMyw%3D%3D' target='_blank'><i className="fa-brands fa-linkedin"></i>LinkedIn</a>

                  <a href='https://github.com/yagyesh-bobde' target='_blank'><i className="fa-brands fa-github"></i>GitHub</a>
                  <a href='https://twitter.com/bobde_yagyesh' target='_blank'><i className="fa-brands fa-square-twitter"></i>Twitter</a>
                  <a href='https://www.instagram.com/bobde_yagyesh/' target='_blank'><i className="fa-brands fa-square-instagram"></i>Instagram</a>
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default AboutPage
