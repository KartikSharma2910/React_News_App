import { Box } from "@mui/system";
import React from "react";
import styles from "./styles";

const Footer = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.leftContainer}>
        <Box component="img" src="/logoFooter.png" className="image" />
        <Box className="text">InShorts © COPYRIGHT 2022</Box>
      </Box>

      <Box sx={styles.rightContainer}>
        <Box className="agreement">Contact Us</Box>
        <Box className="agreement">Terms and Condition</Box>
      </Box>
    </Box>
  );
};

export default Footer;
