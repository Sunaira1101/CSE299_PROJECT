import "./post.css";
import {MoreVert} from '@mui/icons-material';

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/friend2.jpg" alt="" />
                    <span className="postUsername">Sunaira</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>

            
            
            <div className="postCenter">
                <span className="postText">Hey! It's my first post</span>
                <img className="postImg" src="/assets/post1.jpg " alt="" />

            </div>

            <div className="postBottom">
                <div className="postBottomLeft">
                <img className="likeIcon" src="/assets/like.png" alt="" />
                <img className="heartIcon" src="/assets/heart.png" alt="" />
                <span className="postLikeCounter">32 people liked your post</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}
