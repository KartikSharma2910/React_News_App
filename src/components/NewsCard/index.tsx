import { Box } from "@mui/material";
import React from "react";
import styles from "./styles";

const Card = ({ newsItem }: any) => {
  const fullDate = new Date(newsItem.publishedAt);
  var date = fullDate.toString().split(" ");
  const hour = parseInt(date[4].substring(0, 2));
  const time = hour > 12 ? true : false;

  return (
    <>
      <Box sx={styles.wrapper}>
        <Box
          component="img"
          src={
            newsItem.urlToImage
              ? newsItem.urlToImage
              : "https://picsum.photos/260/220"
          }
          alt={newsItem.title}
          sx={styles.image}
        />
        <Box sx={styles.contentWrapper}>
          <Box className="title">{newsItem.title}</Box>
          <Box sx={styles.descContainer}>
            <Box
              component="a"
              href={newsItem.url}
              target="_blank"
              className="shorts"
            >
              <b>Short</b> by {newsItem.author ? newsItem.author : "unKnown"} /{" "}
              {time
                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                : `${hour}:${date[4].substring(3, 5)} am`}{" "}
              on {date[2]} {date[1]} {date[3]}, {date[0]}
            </Box>
          </Box>
          <Box sx={styles.desc}>{newsItem.description}</Box>
          <Box sx={{ marginTop: "20px" }}>
            <Box
              component="a"
              href={newsItem.url}
              target="_blank"
              sx={styles.readMore}
            >
              readMore at <b>{newsItem.source.name}</b>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Card;
