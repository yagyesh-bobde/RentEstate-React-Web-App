import { Grid } from '@mui/material'
import React from 'react'
import MarkEmailUnreadTwoToneIcon from '@mui/icons-material/MarkEmailUnreadTwoTone';
import PhoneTwoToneIcon from '@mui/icons-material/PhoneTwoTone';

const Footer = () => {
  return (
    <div className='footer'>
    <Grid container className='footer_container' spacing={2} >
      <Grid item xs={4} md={3} lg={4} >
        <h2 className='footer_item_heading'>Services</h2>
        <div className='footer_items_div'>
          <p><a href='' target='_blank'>Rent Properties</a></p>
          <p><a href='' target='_blank'>Buy Properties</a></p>
            <p><a href='' target='_blank'>Sell Properties</a></p>
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
    </Grid>
    </div>
  )
}

export default Footer
