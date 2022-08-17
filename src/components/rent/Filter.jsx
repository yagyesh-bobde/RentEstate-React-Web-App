import { Button, Grid } from '@mui/material'
import React, { useContext } from 'react'
import FilterListTwoToneIcon from '@mui/icons-material/FilterListTwoTone';
import { RentContext } from '../../context/RentState';

const Filter = () => {
  const { getProperties, setproperties } = useContext(RentContext);
  
  const handleSubmit= (e) => {
    e.preventDefault()
    setproperties([])
    // page=1 ,sortby=1, Min=0, Max=999999, type=3
    let Min = document.querySelector('#min_rent').value;
    let Max = document.querySelector('#max_rent').value;
    let type = document.querySelector('#transaction_type').value;
    let sortby = document.querySelector('#sort_by').value;
    console.log(sortby, Min, Max, type)

    getProperties(1, sortby, Min, Max , type);

  }

  return (
    <form className='filter-form' onSubmit={(e) => handleSubmit(e)}>
    <Grid className='filter_form_items' container spacing={3}>
    {/* FILTER 1: RENTMIN */}
        <Grid item className='filter_boxes_each' xs={4} md={2} lg={2}>
          <label disabled className='filter-box'>
            Min Rent
            {/* <Box sx={{ width: 150 }}> */}
            <select id='min_rent' name="min-rent">
              <option value={0} >- - - -</option>
              <option value={1} >$ 0</option>
              <option value={1000} >$ 500</option>
              <option value={1000} >$ 1000</option>
              <option value={2000} >$ 2000</option>
              <option value={5000} >$ 5,000</option>
              <option value={10000} >$ 10,000</option>
              <option value={25000} >$ 25000</option>
              <option value={50000} >$ 50000</option>
            </select>
              
            {/* </Box> */}
          </label>

        </Grid>
    
    {/* FILTER 2 RENT MAX*/}
        <Grid item className='filter_boxes_each' xs={4} md={2} lg={2}>
          <label disabled className='filter-box'>
            Max Rent
            <select id='max_rent' name='max-rent' >
              <option value={9999999} >- - - -</option>
              <option value={1000} >$ 500</option>
              <option value={2000} >$ 1,000</option>
              <option value={5000} >$ 5,000</option>
              <option value={10000} >$ 10,000</option>
              <option value={25000} >$ 25,000</option>
              <option value={50000} >$ 50,000</option>
            </select>
          </label>

        </Grid>

    {/* FILTER 3  SORT BY */}
      <Grid item className='filter_boxes_each' xs={4} md={2} lg={2}>
          <label disabled className='filter-box'>
            Rent or Buy
            <div>
              <select id='sort_by'  name='sort_by' defaultValue={3} >
                <option value={2} >Sale</option>
                <option value={3} >Rent</option>
              </select>
            </div>
          </label>

        </Grid>

        {/* FILTER: 4: TRANSACTION TYPE */}
        <Grid item className='filter_boxes_each' xs={4} md={2} lg={2}>
          <label disabled className='filter-box'>
            Sort By
            <div>
              <select id='transaction_type' name='transaction_type' defaultValue={1} >
                <option value={1} >Price</option>
                <option value={6} >Date</option>
                <option value={11}>Virtual Tour</option>
                <option value={12}>Open Houses</option>
              </select>
            </div>
          </label>

        </Grid>

      <Grid item  className='filter_boxes_each' xs={3} md={4} lg={3}  >
        <Button type='submit'>
            <FilterListTwoToneIcon />
          Apply Filters
        </Button>
      </Grid>
    </Grid>
    </form>
  )
}

export default Filter
