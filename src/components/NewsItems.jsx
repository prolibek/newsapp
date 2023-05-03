import React from "react";
import classes from "./NewsItem.module.css";

const NewsItem = ({post}) => {
    return (
        <div className={classes["wrapper"]}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    )
}

export default NewsItem;