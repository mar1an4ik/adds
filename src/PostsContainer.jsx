import React from 'react';
import css from "./posts.module.css"
import {connect} from "react-redux";
import {addPost, changeDescr, changeTitle, deletePost, searchTitle} from "./postsReducer";
import {PostAlone} from "./PostAlone";
import {CreatePostForm} from "./CreatePostForm";
import {Postss} from "./Postss";





let stateGo = (state) => {

    return {
        posts: state.posts.posts,
        title:state.posts.title,
    }
};

const PostsContainer = connect(stateGo, {
    addPost,
    deletePost,
    searchTitle,
    changeTitle,
    changeDescr,
})(Postss);


export default PostsContainer;