import React, { useContext } from 'react'
import { RentContext } from '../../context/RentState'
import { Grid } from '@mui/material';
import CardItem from './CardItem';




const HouseList = () => {
    const { properties } = useContext(RentContext)
  return (
    <div style= {{ marginTop: '5%'}}>
     <Grid container spacing={3}>
            {properties.map(rent => {
                return (
                  <Grid key={rent.Id}  item xs={6} md={4} lg={4}>
                    <CardItem property={rent} />
                  </Grid>
                )
            })}
        </Grid>

    </div>
  )
}

export default HouseList
