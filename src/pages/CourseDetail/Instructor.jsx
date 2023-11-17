import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { FaLanguage, FaRegCheckSquare, FaRegFileAlt, FaUserGraduate } from 'react-icons/fa';
import "@smastrom/react-rating/style.css";
const Instructor = ({courses}) => {
    const {instructor,category,rating,title,students} = courses
//     name
// bio
// email
// instructor_img
    return (
        <div className='p-8  border-2 mt-4'>
           <div className='md:flex justify-between items-center '>
            <div className='flex items-center gap-4'>
            <div className="avatar">
  <div className="w-16 rounded-full">
    <img src={instructor?.instructor_img} />
  </div>
            </div>
            <div>
                <p className='text-gray-800 font-bold '>Instructor</p>
                <p className='text-gray-500'>{instructor?.name}</p>   
        <p className='text-gray-500'>{instructor?.email}</p>
            </div>
           </div>
            <div className='flex items-center gap-4'>
            <span className='text-pink-500'><FaRegCheckSquare size={32} /></span>
                 <div>
                 <p className='text-gray-800 font-bold '>Category</p>
                <p className='text-gray-500'>{category}</p>
                 </div>
            </div>
            <div>
            <p className='text-gray-800 font-bold '>Review</p>
            <Rating
              style={{ maxWidth: 100,  }}
              value={rating}
              readOnly
            />
            </div>
        </div>
    <div className='md:flex gap-8 items-center mt-8'>
   <div className='flex  items-center gap-2 text-pink-500 '>
   <FaRegFileAlt /> <p className='text-gray-500'>{instructor?.bio.slice(0, 50)} ...Read More</p>
   </div>
   <div className='flex items-center gap-2 text-pink-500 '>
    <FaUserGraduate/> <p className='text-gray-500'>{students} students</p>
    </div>
   
    <div className='flex items-center gap-2 text-pink-500 '>
        <FaLanguage /> <p className='text-gray-500'>English</p>
    </div>
    </div>
           <div></div>
        </div>
    );
};

export default Instructor;