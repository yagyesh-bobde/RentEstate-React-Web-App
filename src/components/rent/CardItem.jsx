import  React , { useContext} from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import StarRateTwoToneIcon from '@mui/icons-material/StarRateTwoTone';
import LocalHotelTwoToneIcon from '@mui/icons-material/LocalHotelTwoTone';
import HotTubTwoToneIcon from '@mui/icons-material/HotTubTwoTone';
import { RentContext } from '../../context/RentState';



export default function CardItem({ property }) {
  const roomD = [
    {
      icon: <LocalHotelTwoToneIcon />,
      text: `3 Beds`
    },
    {
      icon: <HotTubTwoToneIcon />,
      text: `3 Bathrooms`
    }
  ]
  const { transactionId } = useContext(RentContext)

  let image_url = '';
  try {
    image_url = property?.Property?.Photo[0]?.HighResPath;
  } catch (error) {
    image_url = 'https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-260nw-1732584305.jpg'
  }

  let price = '';
  try {
   
      price = property.Property.Price?.split(" ")[0]
   
  } catch (error) {
    price = property.Property.LeaseRent?.split("/")[0];
  }
    

  return (
    <a target="_blank" href={`https://realtor.ca${property?.RelativeDetailsURL}`}>
    <Card className='grid-item-card' sx={{ maxWidth: 300 , boxShadow: '5px 5px 2px 4px grey', borderRadius: '5%', maxHeight: '50vh'}}>
      <CardMedia
        component="img"
        width="150"
        height="150"
        image= {image_url}
        alt="Paella dish"
      />
      
      <CardContent sx={{ justifyContent:'min-content', maxHeight: '10%'}}>
          <h1 className='typo-h2'>
            {price}
          </h1> 
          <h2 className='typo-h1'>{property.Property.Type}</h2>
          <p className='typo-p' >{property.Property.Address?.AddressText}</p>

      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: 'space-between' , borderTop: '1px solid grey', maxHeight: '40px'}}>
        <div sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          {roomD.map(room => {
            return (
              <IconButton key={room.text} aria-label="add to favorites" sx={{ display: 'inline', color: 'purple', fontSize:'1rem'}}>
                <div>
                {room.icon}
                </div>
                <div>
                {room.text}
                </div>
              </IconButton>
            )
          })}
        
        </div>
        
        <div className='badge'>
          <StarRateTwoToneIcon />
          <p>Popular</p>
        </div>
      </CardActions>
    </Card>
    </a>
  );
}
