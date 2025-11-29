import React from 'react';
import { Image } from '@imagekit/react';

const Images = ({src,className,w,h,alt}) => {
  return (
    <Image 
        urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
        src={src} 
        alt={alt} 
        className={className}
        loading="lazy" 
        width={w}
        height={h}
    />
  )
}

export default Images