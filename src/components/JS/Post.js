import '../CSS/Post.css';

function Post({ prompt, imagePath }) {
    return (
        <div className='post'>
            <p>{prompt}</p>
            <p>{imagePath}</p>
        </div>
    );
}

export default Post;