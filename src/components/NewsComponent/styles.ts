import { Styles } from "../types/common";

const styles: Styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "2rem",
    width: "100%",
    padding: "0.3rem 0px",
    backgroundColor: "#f44336",
    boxShadow: " 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",

    "& .text": {
      color: "white",
      fontSize: "16px",
    },

    "& .appStore": {
      height: "40px",
      marginRight: "30px",
      cursor: "pointer",
    },

    "& .playStore": {
      height: "40px",
      cursor: "pointer",
    },
  },

  loadMore: {
    cursor: "pointer",
    backgroundColor: "white",
    color: "#888888",
    fontWeight: "bold",
    border: "none",
    boxShadow: "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
    padding: "7px 25px",
    fontSize: "13px",
    margin: "20px",
  },
};

export default styles;
