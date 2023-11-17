import React, { useContext } from 'react';
import { FaAppStoreIos, FaNetworkWired, FaRegClock, FaRegFileVideo, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Instructor from './Instructor';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const CourseContent = ({courses}) => {
  console.log(courses)
  const {user} = useContext(AuthContext)
    const {image,instructor,category,rating,title,students,price,courseContent,syllabus} =courses
  const handleEnroll = () =>{
    
    Swal.fire(
      'warning!',
      'Login first then try to enroll!',
      'Warning'
    )
  }
    return (
<>
<div className=' px-8 pt-8 mt-4 '>
           <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 md:grid-cols-4 gap-4'>
            <div className='md:col-span-4 lg:col-span-4 sm:col-span-1  col-span-1'>
            <h1 className='text-gray-800 text-4xl font-bold mb-4 md:mb-8'>{title}</h1>

            <p className='text-gray-500 md:pr-6'>{courseContent}</p>
              <div className='mt-4 '>
             <h3 className='text-gray-800 text-3xl font-semibold mb-4 '> Course Syllabus</h3>
             <div className='rounded border-2 p-8'>
             <ul>
                {syllabus?.map((item, index) => (
                  <li key={index}> {index + 1} {item}</li>
                ))}
              </ul>
             </div>
              </div>
              <h3 className='text-gray-800 text-3xl font-semibold my-4 '> Course instructor</h3>
              <Instructor courses={courses}></Instructor>
            </div>
            {/* ................... */}
            <div className='md:col-span-2 '>
            <div className="max-w-sm flex flex-col rounded overflow-hidden border-2  pb-2">
      <img
        className="w-full h-[200px] object-fill"
        src={image}
        alt="Mountain"
      />

      <div className="px-6 py-4 ">
        <p className='text-gray-800 font-bold text-3xl'>$ {price}</p>
   
   { user ?
     <Link to='/enroll' >
     <button className="btn btn-block bg-pink-500 shadow hover:bg-pink-800 text-white my-10">Enroll Now</button>
     </Link> :  <button onClick={handleEnroll} className="btn btn-block bg-pink-500 shadow hover:bg-pink-800 text-white my-10">Enroll Now</button>
   }

   <div className='mb-4'>
   <div className='flex items-center text-pink-500 gap-2 mb-2'>
<FaUserFriends />
<p className='text-gray-500'>Total Enrolled {students}</p>
</div>
<div className='flex items-center  text-pink-500 gap-2 mb-2'>
<FaRegClock />
<p className='text-gray-500'>Time Required 138 hours</p>
</div>
<div className='flex items-center text-pink-500 gap-2 mb-2'>
<FaRegFileVideo />
<p className='text-gray-500'>300 Videos</p>
</div>

<div className='flex items-center text-pink-500 gap-2 mb-2'>
<FaNetworkWired />
<p className='text-gray-500'>12 Assignment</p>
</div>
<div className='flex items-center text-pink-500 gap-2 mb-2 '>
<FaAppStoreIos />
<p className='text-gray-500'>70+ Resource</p>
</div>
   </div>
      </div>
    </div>

            </div>
        </div>
     </div>
</>
    );
};

export default CourseContent;