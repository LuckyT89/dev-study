import '../CSS/RefPost.css';

function RefPost({ prompt, imagePath }) {
    return (
        <div className='ref-post'>
            <p>{prompt}</p>
            <img src={`img/${imagePath}`} alt='Code solution' />
        </div>
    );
}

export default RefPost;