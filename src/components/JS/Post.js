import '../CSS/Post.css';

function Post({ prompt, imagePath }) {
    return (
        <div className='post'>
            <p>{prompt}</p>
            <img src={`img/${imagePath}`} alt='Code solution' />
        </div>
    );
}

export default Post;