import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Instructor from './Instructor';
import CourseContent from './CourseContent';
import Review from './Review';
import ContentPreview from './ContentPreview';

const CourseDetail = () => {
    const [courses,setCourse] =useState([])
    console.log(courses)
    const { id } = useParams();
    useEffect(() => {
    fetch(` https://electra-poll-server-2pqs2aw2n-hridoy281810.vercel.app/course/${id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setCourse(data)
    })
    }, []);
    return (
        <div className='my-container'>
           {/* <Instructor courses={courses}/> */}
           <CourseContent courses={courses}/>
           <Review courses={courses}/>
           <ContentPreview courses={courses}/>
        </div>
    );
};

export default CourseDetail;