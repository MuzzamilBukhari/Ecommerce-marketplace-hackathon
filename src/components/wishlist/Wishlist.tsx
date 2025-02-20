import { useWishlist } from '@/context/wishlistContext';
import { useRouter } from 'next/navigation';
import React from 'react'
import { Button } from '../ui/Button';
import EmptyCard from '../ui/EmptyCard';
import WishlistSection from './WishlistSection';

const Wishlist = () => {
    const router = useRouter();
  const { wishlist } = useWishlist();

  return (
   <div>
     {wishlist.length > 0 ? (
          <WishlistSection />
        ) : 
        <EmptyCard title='Wishlist'/>
        }
   </div>
  )
}

export default Wishlist