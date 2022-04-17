import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Card from "../NewsCard";
import styles from "./styles";

const NewsContent = ({
  newsArray,
  newsResults,
  loadMore,
  setloadMore,
}: any) => {
  return (
    <Container sx={styles.wrapper}>
      <Box sx={styles.header}>
        <Box className="text">
          For the best experience use <b>inShorts</b> app on your smartphone
        </Box>
        <Box>
          <Box component="img" src="/appStore.png" className="appStore" />
          <Box component="img" src="/playStore.png" className="playStore" />
        </Box>
      </Box>
      {newsArray.map((newsItem: any) => (
        <Card newsItem={newsItem} key={newsItem.title} />
      ))}
      {loadMore <= newsResults && (
        <Button sx={styles.loadMore} onClick={() => setloadMore(loadMore + 20)}>
          Load More
        </Button>
      )}
    </Container>
  );
};

export default NewsContent;
