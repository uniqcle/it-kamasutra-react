import React from "react";
import classes from "./ProfileInfo.module.css";
 import MyPosts from "../MyPosts/MyPosts";

 const ProfileInfo = (props) => {
     let newPostAreaElement = React.createRef();

     let addNewPost = () => {
         props.addNewPost();
     };

     let changeAreaText = () => {
         let text = newPostAreaElement.current.value;
         props.changeAreaText(text);
     };

     return (
         <div>
             <div>
                 <textarea
                     name=""
                     rows="8"
                     cols="10"
                     ref={newPostAreaElement}
                     value={props.areaText}
                     onChange={changeAreaText}
                 />
             </div>
             <div>
                 <button onClick={addNewPost}>add post</button>
             </div>

             <MyPosts posts={props.posts} />
         </div>
     );
 };

export default ProfileInfo;
