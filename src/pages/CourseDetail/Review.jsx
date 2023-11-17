import { Rating } from '@smastrom/react-rating';
import React from 'react';
import "@smastrom/react-rating/style.css";
const Review = ({courses}) => {
    const {reviews } = courses
    
    // 
    return (
      <div className='p-8'>
         <h3 className='text-gray-800 text-3xl font-semibold mb-4 '> Reviews</h3>
          <div className='grid md:grid-cols-2  gap-8'>
            
            {
                reviews?.map((review, index)=> (
                    <div key={index} className='flex gap-14 border-2 p-8'>
                      <div className='flex flex-col items-center gap-2'>
                      <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-12">
            <span className="text-xl">{review.user.slice(0,1)}</span>
          </div>
        </div>
                    <p>{review?.user}</p>
                      </div>
                      <div className=''>
                        <h3 className='text-4xl text-yellow-600 mb-2'>{review?.rating}</h3>
                      <Rating
                      style={{ maxWidth: 100,  }}
                      value={review?.rating}
                      readOnly
                    />
                    <p className='text-gray-500 mt-2'>{review?.comment}</p>
                      </div>
                    </div>
                ))
            }
                     
                </div>
      </div>
    );
};

export default Review;