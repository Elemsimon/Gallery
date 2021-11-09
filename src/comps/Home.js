import React, { useState } from 'react';

import Title from './Title';

import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import Modal from './Modal';
import Profile from './Profile';


function Home({handleLogout, user}) {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>
        <div className="App"> 
            <Title handleLogout={handleLogout}/>
            <UploadForm />
            <ImageGrid setSelectedImg={setSelectedImg} />
            { selectedImg && (
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
          
        </div>
    </div>
    
  )
}

export default Home;