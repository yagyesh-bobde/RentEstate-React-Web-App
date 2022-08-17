import { Grid } from '@mui/material'
import React from 'react'
import MarkEmailUnreadTwoToneIcon from '@mui/icons-material/MarkEmailUnreadTwoTone';
import PhoneTwoToneIcon from '@mui/icons-material/PhoneTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import InventoryTwoToneIcon from '@mui/icons-material/InventoryTwoTone';

const Footer = () => {
  return (
    <div className='footer'>
    <Grid container className='footer_container' spacing={2} >
      <Grid item xs={4} md={3} lg={4} >
        <h2 className='footer_item_heading'>Services</h2>
        <div className='footer_items_div'>
            <div><HomeTwoToneIcon /><a href='/' target='_blank'>Rent</a></div>
            <div><ShoppingCartTwoToneIcon /><a href='/buy' target='_blank'> Buy</a></div>
            <div><InventoryTwoToneIcon /><a href='/sell' target='_blank'> Sell</a></div>

        </div>
      </Grid>
      <Grid item xs={4} md={3} lg={4} >
        <h2 className='footer_item_heading'>Contact</h2>
        <div className='footer_items_div'>
            <div><MarkEmailUnreadTwoToneIcon /><a href='' target='_blank'>Mail</a></div>
            <div><PhoneTwoToneIcon/><a href='' target='_blank'> +123 456 789</a></div>
        </div>
      </Grid>
      <Grid item  xs={4} md={3} lg={4} >
        <h2 className='footer_item_heading'>About Us</h2>
        <div className='footer_items_div'>
            <div><a href='https://rapidapi.com/apidojo/api/realty-in-ca1/' target='_blank'>API Used</a></div>
          <div><a href='' target='_blank'>Project</a></div>
        </div>
      </Grid>
        <div style={{ width: '100%', margin: '1.5% 0' }} className='footer_items_div'>
          <div style={{ display: 'flex', justifyContent: 'space-evenly', color: 'white !important' }} >
            <a href='https://www.linkedin.com/in/bobde-yagyesh/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BUieEc2dVTSaTeQ4HpxrMyw%3D%3D' target='_blank'><i className="fa-brands fa-linkedin"></i></a>

            <a href='https://github.com/yagyesh-bobde' target='_blank'><i className="fa-brands fa-github"></i></a>
            <a href='https://twitter.com/bobde_yagyesh' target='_blank'><i className="fa-brands fa-square-twitter"></i></a>
            <a href='https://www.instagram.com/bobde_yagyesh/' target='_blank'><i className="fa-brands fa-square-instagram"></i></a>
          </div>
          
      </div>
        <div style={{ color: 'grey', marginTop: '1%' }}>
          <span >RentEstate @ 2022</span>
        </div>
    </Grid>
    
    </div>
  )
}

export default Footer
