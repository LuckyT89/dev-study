import '../CSS/RefPostContainer.css';
import RefPost from './RefPost';

function RefPostContainer({ posts }) {
    
    const postCards = posts.map((post) => <RefPost key={post.imagePath} prompt={post.prompt} imagePath={post.imagePath} />)

    return (
        <div className='ref-post-container'>
            {postCards}
        </div>
    );
}

export default RefPostContainer;