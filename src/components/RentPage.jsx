import React, { useContext, useEffect } from 'react'
import { Container } from '@mui/system'
import Filter from './rent/Filter'
import HouseList from './rent/HouseList'
import {  RentContext } from '../context/RentState'
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';


const RentPage = () => {
  const { getProperties, properties, paging, setproperties } = useContext(RentContext);
  
  let currPage=0;
  if (properties.length !== 0 ){
    currPage = paging.CurrentPage;
  }
  const [loading, setLoading] = React.useState(true);
  function handleClick() {
    setLoading(true);
  }

  useEffect(() => {
    getProperties()
    // eslint-disable-next-line
  }, []);

const prevPage = () => {
  getProperties(currPage-1)
  setproperties([])
}
const nxtPage = () => {
  getProperties( currPage+1)
  setproperties([])
}



  return (
    <Container>
      <header>
            <h1>Properties for Rent/Sale</h1> 
        </header>
      {(properties.length === 0) && <div><LoadingButton
        color="secondary"
        onClick={handleClick}
        loading={loading}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="contained"
      >
        Loading Properties
      </LoadingButton></div>}
      { !(properties.length === 0) && <div>
        <Filter />
        <div style={{ display:'flex' , justifyContent: 'end', color: 'black', fontWeight: '700'}}>
          <span>Total Results: {paging.TotalRecords}</span>
        </div>
        <HouseList />
        <div style={{ marginTop: '5%', display: "flex", justifyContent: 'space-between' }}>
          <Button onClick={prevPage} disabled={currPage === 1} variant="outlined"><ArrowBackTwoToneIcon /> Previous Page</Button>

          <Button variant="contained" disabled >{paging.CurrentPage}<span>/{paging.TotalPages}</span></Button>

          <Button onClick={nxtPage} disabled={ currPage === paging.TotalPages} variant="outlined">Next Page <ArrowForwardTwoToneIcon /></Button>
        </div>
      </div> }
        
    </Container>
  )
}

export default RentPage
