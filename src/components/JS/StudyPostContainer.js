import '../CSS/StudyPostContainer.css';
import StudyPost from './StudyPost';
import { useState } from 'react';

function StudyPostContainer({ posts }) {
    
    const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * posts.length));

    // let randomIndex = Math.floor(Math.random() * posts.length);
    console.log(`Starting randomIndex: ${randomIndex}`);

    function handleClick() {
        // randomIndex = Math.floor(Math.random() * posts.length);
        // console.log(`Button was clicked. New randomIndex: ${randomIndex}`);

        setRandomIndex(Math.floor(Math.random() * posts.length));
    }

    return (
        <div className='study-post-container'>
            <StudyPost post={posts[randomIndex]} />
            <button className='next-btn' onClick={handleClick} >Next</button>
        </div>
    );
}

export default StudyPostContainer;