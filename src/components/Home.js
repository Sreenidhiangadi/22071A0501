import React from 'react';

const Home = () => {
  const commercePicUrl = 'data:image/jpeg;base64,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'; // Replace with your actual image URL

  return (
    <div className='text-center minHeight=800vh'>
      
      <h2>Welcome to Sreenidhi E-commerce!</h2>
      <p>Explore our catalog and start shopping.</p>
      
      <img 
        src={commercePicUrl} 
        alt="Commerce" 
        style={{ 
          maxWidth: '1000px',  // Adjust width as needed
          height: 'auto',   // Maintain aspect ratio
          maxHeight: '4000px', // Set max height to prevent oversized images
         // Add some margin at the top
          borderRadius: '8px', // Optional: Add border radius for rounded corners
        }} 
      />
    </div>
  );
}

export default Home;
;

