import React, { useState } from "react";
import NewsItem from "../../components/NewsItems";
import classes from "./News.module.css";

const NewsPage = () => {
    const newsSet = [
        {
            id: 1,
            title: "Dolor sit amet",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas justo sem, interdum elementum ligula nec, lobortis imperdiet tortor. Morbi ut mollis lectus. Vestibulum massa enim, dictum sit amet velit vel, aliquet commodo nisi. Curabitur laoreet erat sagittis dolor accumsan laoreet. Sed aliquet leo et arcu elementum laoreet. Sed hendrerit quam dui, sed consequat libero porttitor ut. Morbi tincidunt ultricies lectus, in iaculis metus congue a. Mauris sit amet dui nulla. Integer vitae tellus ut nisi porttitor congue in vel odio. Duis a molestie lectus, a ornare diam. Aliquam vestibulum gravida tellus sit amet efficitur. Nam vitae sodales tortor. Maecenas tincidunt commodo dui id molestie. Pellentesque vehicula pulvinar mauris eget venenatis. Morbi sit amet libero tempus, tristique nisl nec, aliquet sem. Donec quis elementum ex."
        },
        {
            id: 2,
            title: "Maecenas justo sem",
            content: "Curabitur porttitor placerat bibendum. Maecenas sed dui augue. Nam in nunc eu est elementum consequat ut vel nunc. Nulla quis dolor vel augue rutrum aliquam. Pellentesque quis mi rutrum, lacinia enim sed, luctus nisl. Aenean elementum dignissim sapien, tristique aliquet ligula laoreet vel. Nam vitae vestibulum purus, sed volutpat est."
        }
    ]

    const [news, setNews] = useState(newsSet);

    return (
        <div className={classes["news__wrapper"]}>
            {
                news.map(
                    post => (
                        <NewsItem key={post.id} post={post}/>
                    )
                )
            }
        </div>
    )
}

export default NewsPage;