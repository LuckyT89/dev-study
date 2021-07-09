import '../CSS/Post.css';

function Post({ prompt, imagePath }) {
    return (
        <div className='post'>
            <p>This is a post</p>
            <p>{prompt}</p>
            <p>{imagePath}</p>
        </div>
    );
}

export default Post;