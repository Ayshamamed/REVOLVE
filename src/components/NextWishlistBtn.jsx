import React from 'react';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useWishlist } from 'react-use-wishlist';

const NextWishlistBtn = ({alldata}) => {
    const { isWishlistEmpty, totalWishlistItems, items, inWishlist,  removeWishlistItem,addWishlistItem } = useWishlist();
    const togglewishlistBtn=()=>{
        if (inWishlist(alldata.id)) {
            removeWishlistItem(alldata.id)
            
        }else{
            addWishlistItem(alldata)
        }
    }
    return (
        <div>
            <button onClick={()=>togglewishlistBtn(alldata)} className='three-icon1 ' alt="/" href='/'>
                {
                    inWishlist(alldata.id)? <FavoriteOutlinedIcon  style={{fontSize:"30px"}} /> :  <FavoriteBorderOutlinedIcon style={{fontSize:"30px"}}/> 
                }
            </button>
        </div>
    )
}

export default NextWishlistBtn