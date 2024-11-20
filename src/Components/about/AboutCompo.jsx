 import React from 'react'

 const AboutCompo = () => {
  return (
  <>
  
  <div className="nav">
    <div className="container">
        <div className="menu flex justify-center items-center flex-wrap ">
        <h2 className=' text-2xl font-bold text-[#000]'> Multiplication Table Namta</h2>
        </div>
        <div className=' flex justify-center items-center mt-5'>
        <p className=' text-xl font-bold text-[#000]'>Table of Contents</p>
        
        </div>
        <div>
            <h2 className=' text-2xl text-[#000] mt-5'> Description</h2>
            <p className=' mt-4 text-gray-700 '> This project is a dynamic multiplication table created using React. The table is responsive, allowing users to input
            any number, which will generate the multiplication table for that number up to 10. Users can also extend the table 
            range beyond 10. The app uses several useful libraries such as:</p>

            <h2 className=' mt-4 text-gray-700'> react-hook-form for handling form validations
            react-icons for adding icons like password visibility toggle
            react router dom for navigation (if applicable)
            react-spinners for loading spinners (during API calls or calculations)
            react-spring for smooth animations
            react-toastify for toast notifications (for user feedback like successful login or actions)
            </h2>
        </div>
        <div>
         <h2 className=' text-2xl text-[#000] mt-5'> Usage</h2>
         <p className=' mt-5'> Open the index.html file in your web browser after setting up the project.
          Enter the number you want to generate the multiplication table for in the input field.
          The multiplication table will be displayed for that number up to 10 by default.
          If you want the table to go beyond 10, you can easily modify the React component to extend the table size dynamically based on your input.</p>
        </div>
        <div>
            <h3 className=' text-2xl text-[#000] mt-5 '> Features</h3>
            <p className='  mt-4 text-gray-700 '> Dynamic Table Generation: Enter any number and generate its multiplication table.
             Customizable Range: By default, the table will go up to 10, but users can extend the range by modifying the code or input.
             Interactive Interface: The project offers an easy-to-use input field where users can enter the number for the table.
             Voice Feedback (Optional): Using the browser's SpeechSynthesis API, the app can read out the table for users in Bengali or any other language. This can help visually impaired users.
             Responsive Design: The app adapts to different screen sizes, ensuring it's usable on both desktop and mobile devices.
             Smooth Animations: With react-spring, hovering over cells in the multiplication table triggers smooth animations to make the UI more interactive.</p>
        </div>
        <div>
            
        </div>
    </div>
  </div>
  
  </>
  )
 }

 export default AboutCompo