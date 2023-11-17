import React, { useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import ReactPlayer from 'react-player';

const ContentPreview = ({ courses }) => {
    const { lesson } = courses;
    const [playingIndex, setPlayingIndex] = useState(null);

    const playVideo = (index) => {
        setPlayingIndex((prevIndex) => (prevIndex === index ? null : index));
    };
//   TODO: When the student enrolls, he will not be able to see all the videos, but he will see one or two videos 
    return (
        <div className='px-8 pb-8'>
            <h3 className='text-gray-800 text-3xl font-semibold mb-4 '> Course Video</h3>
            <div className='p-8  border-2 mt-4'>
                <div className='gride grid-cols-2'>
                    {lesson?.map((ls, index) => (
                      <>
                      <div className='flex gap-4 items-center my-4' key={index}>
                            <span
                                className='cursor-pointer text-pink-500'
                                onClick={() => playVideo(index)}
                                style={{
                                    transform:
                                        playingIndex === index ? 'rotate(90deg)' : 'none',
                                    transition: 'transform 0.3s ease-in-out',
                                }}
                            >
                                <FaPlayCircle size={24} />
                            </span>
                            <h3 className='text-2xl font-semibold text-gray-800'>{ls?.title}</h3>
                          
                        </div>
                        <div>
                              {playingIndex === index && (
                           <ReactPlayer
                           url={ls?.videoUrl}
                           controls
                           width="100%"  
                           height="600px"
                       />
                            )}
                        </div>
                      </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContentPreview;
