import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MyDrawer from "../Drawer";
import NewsContent from "../NewsComponent";
import styles from "./styles";

const NavInShort = () => {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setloadMore] = useState(20);

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a84a0a337419432387ee990bc1544cf7&pageSize=${loadMore}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, [newsResults, category, loadMore ]);

  return (
    <>
      <Box sx={styles.wrapper}>
        <Box sx={styles.drawer}>
          <MyDrawer setCategory={setCategory} />
        </Box>
        <Box component="img" src="/inShorts.png" sx={styles.logo}></Box>
      </Box>
      <Box>
        <NewsContent
          setloadMore={setloadMore}
          loadMore={loadMore}
          newsArray={newsArray}
          newsResults={newsResults}
        />
      </Box>
    </>
  );
};

export default NavInShort;
