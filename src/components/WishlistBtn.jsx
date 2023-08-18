import React from 'react';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useWishlist } from 'react-use-wishlist';

const WishlistBtn = ({alldata}) => {
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
            <button onClick={()=>togglewishlistBtn(alldata)} className='heart-single p-2 ms-2 btn' alt="/" href='/'>
                {
                    inWishlist(alldata.id)? <FavoriteOutlinedIcon className='heart-single fs-1 fw-bolder'/> :  <FavoriteBorderOutlinedIcon className='heart-single fs-1 fw-bolder'/> 
                }
            </button>
        </div>
    )
}

export default WishlistBtn