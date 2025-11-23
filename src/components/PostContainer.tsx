import {postAPI} from "../services/postService.ts";
import PostItem from "./PostItem.tsx";
import {useEffect} from "react";
import type {IPost} from "../models/IPost.ts";

const PostContainer = () => {
    // const [limit, setLimit] = useState(100);
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(100); // or limit
    const [createPost] = postAPI.useCreatePostMutation();
    const [deletePost] = postAPI.useDeletePostMutation();
    const [updatePost] = postAPI.useUpdatePostMutation();

    useEffect(() => {
        // setTimeout(() => setLimit(3), 2000);
    }, [])

    const handleCreate = async () => {
        const title = prompt('Enter post title');
        await createPost({title, body: title} as IPost);
    }

    const handleRemove = (post: IPost) => {
        deletePost(post);
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post);
    }

    return (
        <div>
            <div className="post__list">
                <button onClick={handleCreate}>Create post</button>
                {isLoading && <h1>Loading...</h1>}
                {error && <h2 style={{color: 'red'}}>An error occurred while loading posts</h2>}
                {posts?.map((post) => (
                    <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>
                ))}
            </div>
        </div>
    );
};

export default PostContainer;