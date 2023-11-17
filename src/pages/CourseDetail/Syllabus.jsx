import React from 'react';

const Syllabus = ({courses}) => {
    return (
        <div>
              
        <div key={index} className='shadow-sm p-8 mt-4'>
         
          <ul>
            {courses.syllabus.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {/* Rest of your component code */}
        </div>
   
    </div>
     
    );
};

export default Syllabus;