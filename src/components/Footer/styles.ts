import { Styles } from "../types/common";

const styles: Styles = {
  wrapper: {
    backgroundColor: "#323232",
    display: "flex",
    justifyContent: "space-between",
    height: "80px",
  },

  leftContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "400px",

    "& .image": {
      height: "50px",
    },

    "& .text": {
      color: "white",
      fontSize: "14px",
      fontWeight: "bold",
    },
  },

  rightContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "300px",

    "& .agreement": {
      color: "white",
      fontSize: "14px",
      fontWeight: "bold",
    },
  },
};

export default styles;
