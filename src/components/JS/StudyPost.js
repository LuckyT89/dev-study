import '../CSS/StudyPost.css';

function StudyPost({ post }) {

    console.log(`Post component received: ${post}`);

    return (
        <div className='study-post'>
            <p>{post.prompt}</p>
            <img src={`img/${post.imagePath}`} alt='Code solution' />
        </div>
    );
}

export default StudyPost;