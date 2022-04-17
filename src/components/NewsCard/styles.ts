import { Styles } from "../types/common";

const styles: Styles = {
  wrapper: {
    display: "flex",
    margin: "3%",
    borderRadius: "3px",
    padding: "8px 16px 12px 8px",
    zIndex: "1",
    height: "max-content",
    boxShadow: "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
  },

  image: {
    height: " 220px",
    width: "260px",
    borderRadius: "4px",
    marginLeft: "1px",
    marginTop: "5px",
  },

  contentWrapper: {
    padding: "0.5rem 1.5rem",

    "& .title": {
      color: "#44444d",
      fontWeight: "300",
      fontSize: "30px",
    },
  },

  descContainer: {
    marginTop: "10px",

    "& .shorts": {
      textDecoration: "none",
      color: "#44444d",
      cursor: "pointer",
      padding: "0.25rem",
    },
  },

  desc: {
    color: "#44444d",
    fontWeight: "300",
    fontSize: "20px",
    marginTop: "20px",
  },

  readMore: {
    textDecoration: "none",
    color: "#44444d",
    fontWeight: "300",
    cursor: "pointer",
  },
};

export default styles;
