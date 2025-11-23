import type {FC} from "react";
import type {IPost} from "../models/IPost.ts";

interface PostItemProps {
    post: IPost,
    remove: (post: IPost) => void,
    update: (post: IPost) => void,
}

const PostItem: FC<PostItemProps> = ({post, remove, update}) => {
    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation();
        remove(post);
    }

    const handleUpdate = (event: React.MouseEvent) => {
        event.stopPropagation();
        const title = prompt('Enter new title', post.title);
        if (title) {
            update({...post, title});
        }
    }

    return (
        <div className="post__item" onClick={handleUpdate}>
            <h3>{post.title}</h3>
            <button onClick={handleRemove}>Delete</button>
        </div>
    );
};

export default PostItem;