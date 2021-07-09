import '../CSS/PostContainer.css';
import Post from './Post';

function PostContainer() {
    return (
        <div className='post-container'>
            This is the post container
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default PostContainer;