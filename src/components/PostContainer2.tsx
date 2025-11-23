// import {postAPI} from "../services/postService.ts";
// import PostItem from "./PostItem.tsx";

const PostContainer2 = () => {
    // const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(100);

    return (
        <div>
            <div className="post__list">
                {/*{isLoading && <h1>Loading...</h1>}*/}
                {/*{error && <h2 style={{color: 'red'}}>An error occurred while loading posts</h2>}*/}
                {/*{posts?.map((post) => (*/}
                {/*    <PostItem key={post.id} post={post} />*/}
                {/*))}*/}
            </div>
        </div>
    );
};

export default PostContainer2;