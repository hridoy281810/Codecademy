import React, { useContext, useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Rating } from '@smastrom/react-rating';
import "@smastrom/react-rating/style.css";
const CourseCard = ({ course }) => {
  const {_id, price, students, image, title, instructor, rating } = course;
  const {user,addToFavorites,removeFromFavorites,favorites} = useContext(AuthContext)
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    // Check if the current course ID is in the favorites array
    setIsFavorite(favorites.includes(_id));
  }, [favorites, _id]);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
    isFavorite ? removeFromFavorites(_id) : addToFavorites(_id);
  };

  const handleFavorite = ()=>{
    Swal.fire(
      'warning!',
      'Login first then try to asd Favorite list!',
      'Warning'
    )
  }
  return (
    <div className='shadow-lg bg-white overflow-hidden relative '>
      {/* Add more details as needed */}
      <div className='card bg-base-100 shadow-xl relative border-b-4 border-b-pink-500 border'>
        <figure
          className='relative'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ cursor: isHovered ? 'pointer' : 'default' }}
        >
           <img
            className='shadow h-[300px] w-full object-cover transition-transform transform scale-110'
            src={image}
            alt='cor'
            style={{
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            }}
          />

          {/* Gradient overlay */}
          <div
    className={`absolute top-0 left-0 right-0 bottom-0 bg-gray-700 opacity-0 hover:opacity-50 flex items-center justify-center rounded-lg border-2 border-gray-500`}
    style={{ opacity: isHovered ? 0.5 : 0 }} // Set initial opacity when not hovering
  ></div>

          {/* Hidden content */}
          {isHovered && (
            <div className='absolute top-0 left-0 right-0 bottom-0'>
        {user ?     <FaHeart
                size={24}
                className={`text-white absolute top-4 left-4 z-20 cursor-pointer`}
                onClick={handleFavoriteToggle}
                style={{ color: isFavorite ? 'red' : 'white' }}
              />: <FaHeart size={24}
              className={`text-white absolute top-4 left-4 z-20 cursor-pointer`}
              onClick={handleFavorite}
              color={'white'}
             
            />}
              <Link to={`courseDetail/${_id}`}><button className='btn bg-pink-500 absolute top-4 right-4  z-20'>
                Details
              </button></Link>
            </div>
          )}

          {/* Price and Student Number */}
          <div className='absolute bottom-2 left-4 right-4 flex justify-between items-center text-white '>
            <p className='text-lg font-semibold mb-2'>${price}</p>
            <p className='text-lg font-semibold mb-2'>{students} students</p>
          </div>
        </figure>

        <div className='py-6 px-5 card-body'>
          <h2 className='text-[19px] font-sans font-semibold'>{title}</h2> 
     <div className='inline-flex items-center justify-start gap-2'>
     <p>{rating}</p>   
     <div>
     <Rating
              style={{ maxWidth: 100,  }}
              value={rating}
              readOnly
            /> 
     </div>
     </div>
          <div className='flex items-center mt-5'>
            <p className='text-gray-800'>{instructor?.name}</p>
            <p className='text-gray-800 text-right'> {students} students</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
