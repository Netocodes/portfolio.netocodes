import React from 'react'
import Image from 'next/image'

type dataProps = {
    data: {
        id: number;
        image: string;
        height: number;
    }[];
}
const Masonry = ({data}: dataProps) => {
    
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-3 '>
{data && data.map((item, key) => (
    <div key={key} className={`bg-black/35 h-${item.height} rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105`}>
        <Image className={`h-${item.height} object-cover rounded-lg`} src={item.image} alt="Public Pictures" priority={false} width={300} height={100} />
    </div>
))}
    </div>
  )
}

export default Masonry
