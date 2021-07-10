import '../CSS/StudyPost.css';
import { useState } from 'react';

function StudyPost({ post }) {

    console.log(`Post component received: ${post}`);

    
    let [hideAnswer, setHideAnswer] = useState(true);

    function handleToggle() {
        setHideAnswer(!hideAnswer);
        console.log(hideAnswer);
    }

    return (
        <div className='study-post'>
            <p>{post.prompt}</p>
            <button className={hideAnswer === true ? 'hide' : 'show'} onClick={handleToggle} >Toggle answer</button>
            <img className={hideAnswer === true ? 'hide' : 'show'} src={`img/${post.imagePath}`} alt='Code solution' />
        </div>
    );
}

export default StudyPost;