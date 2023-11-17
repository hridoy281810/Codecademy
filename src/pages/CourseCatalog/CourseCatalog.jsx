import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import Navbar from '../../components/Navbar/Navbar';

const CourseCatalog = () => {
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [minRating, setMinRating] = useState(0);

    useEffect(() => {
        fetch(` https://electra-poll-server-2pqs2aw2n-hridoy281810.vercel.app/all-course`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCourses(data);
            });
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleRatingChange = (e) => {
        setMinRating(Number(e.target.value));
    };


    const filteredCourses = courses.filter((course) => {
        const isIncludedInSearch =
            course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.instructor.name.toLowerCase().includes(searchTerm.toLowerCase());

        const isInSelectedCategory =
            selectedCategory === 'All' || course.category === selectedCategory;

        const hasMinRating = course.rating >= minRating;

        return isIncludedInSearch && isInSelectedCategory && hasMinRating;
    });

    return (
        <>
            <Navbar></Navbar>
            <div className='my-container bg-white pt-8 '>
                <div className='flex justify-center items-center mb-8'>
                    <select
                        className='select select-bordered select-secondary w-full max-w-xs ml-4'
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                    >
                        <option value='All'>All Categories</option>
                        {/* Add options for your categories dynamically */}
                        <option value='Programming'>Programming</option>
                        <option value='Web Development'>Web Development</option>
                        <option value='Data Science'>Data Science</option>
                    </select>
                    <input
                        type='text'
                        placeholder='Search by title or instructor'
                        className='input input-bordered input-secondary w-full max-w-xs ml-4'
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <input
                        type='number'
                        min='0'
                        max='5'
                        step='0.1'
                        className='input input-bordered input-secondary w-16 ml-2'
                        value={minRating}
                        onChange={handleRatingChange}
                    />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8'>
                    {filteredCourses.map((course) => (
                        <CourseCard key={course._id} course={course}></CourseCard>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CourseCatalog;
