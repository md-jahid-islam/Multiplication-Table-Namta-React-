 import React from 'react';
 import { Link } from 'react-router-dom';

 const AboutCompo = () => {
  return (
    <>
      <div className="nav">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="menu flex justify-center items-center flex-wrap my-5">
            <h2 className="text-2xl font-bold text-[#000] text-center">
              Multiplication Table Namta
            </h2>
          </div>

          {/* Table of Contents */}
          <div className="flex justify-center items-center mt-5">
            <p className="text-xl font-bold text-[#000]">Table of Contents</p>
          </div>

          {/* Description Section */}
          <div className="mt-5">
            <h2 className="text-2xl font-bold text-[#000]">Description</h2>
            <p className="mt-4 text-gray-700">
              This project is a dynamic multiplication table created using React. Taillwind.css  The table is responsive, allowing users to input
              any number, which will generate the multiplication table for that number up to 10. Users can also extend the table
              range beyond 10. The app uses several useful libraries such as:
            </p>
            <ul className="mt-4 list-disc pl-6 text-gray-700">
              <li>react-hook-form for handling form validations</li>
              <li>react-icons for adding icons</li>
              <li>react-router-dom for navigation</li>
              <li>react-spinners for loading spinners</li>
              <li>react-spring for smooth animations</li>
              <li>react-toastify for toast notifications</li>
            </ul>
          </div>

          {/* Usage Section */}
          <div className="mt-5">
            <h2 className="text-2xl font-bold text-[#000]">Usage</h2>
            <p className="mt-4 text-gray-700">
              Open the index.html file in your web browser after setting up the project. Enter the number you want to generate the multiplication table for in the input field.
              The multiplication table will be displayed for that number up to 10 by default. If you want the table to go beyond 10, you can easily modify the React component
              to extend the table size dynamically based on your input.
            </p>
          </div>

          {/* Features Section */}
          <div className="mt-5">
            <h3 className="text-2xl font-bold text-[#000]">Features</h3>
            <ul className="mt-4 list-disc pl-6 text-gray-700">
              <li>Dynamic Table Generation: Enter any number and generate its multiplication table.</li>
              <li>Customizable Range: Users can extend the table range beyond 10.</li>
              <li>Interactive Interface: Offers an easy-to-use input field.</li>
              <li>Voice Feedback: Optional support for SpeechSynthesis API for table narration.</li>
              <li>Responsive Design: Works seamlessly on desktops and mobile devices.</li>
              <li>Smooth Animations: React-spring animations for interactivity.</li>
            </ul>
            <div className="mt-4">
              <Link
                className="text-blue-500 hover:underline" to="/Demo" >
                Demo   
              </Link>
             </div>
             <div>
                <h2 className=' text-[#000] mt-5'> Installation</h2>
                <p> Clone the repository (if you have the project in a GitHub repo):</p>
                <Link className=' text-blue-500 hover:underline' to={'https://github.com/md-jahid-islam/Multiplication-Table-Namta-React-.git'}> git clone https://github.com/your-username/multiplication-table-namta.git
                cd multiplication-table-namta
                </Link>
             </div>
             <div>
                <h3 className='text-[#000] mt-5'> How to Extend the Table Beyond 10</h3>
                <p className='  text-gray-700 '> To extend the multiplication table beyond 10, you can modify the range state in your React component and dynamically generate the table. Here’s a simple approach:</p>
             </div>
             <div className=" mt-2">
              <Link
                className="text-blue-500 hover:underline" to="#" >
                <p className=''>You can try the project live by hosting it on a platform like Netlify or Vercel.</p>
              </Link>
             </div>
             <div>
             <h2 className=' text-2xl font-bold text-[#000] mt-5'> Additional Notes</h2>
             <p className=' mt-5 text-gray-700'> Voice Feedback: The project includes functionality to speak the multiplication results. For instance, if you hover over a cell, it will read out the multiplication (e.g., "2 গুন 3 সমান 6").
             Mobile-First Design: The layout adjusts for mobile views and is simple and clean, ensuring users on smaller devices also have a good experience.</p>
             <h4 className=' mt-5 text-gray-700'> Feel free to modify and extend this project according to your requirements! Let me know if you need any further assistance or code adjustments.</h4>
             </div>
             <div>
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCompo;
