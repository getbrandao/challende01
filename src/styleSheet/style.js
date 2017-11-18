import { StyleSheet } from "react-native";

const bgContainer = "#EE7777";
const bgPostContainer = "#FFFFFF";
const colorHeader = "#333333";
const colorBorder = "#EEEEEE";
const colorAuthor = "#666666";
const colorShadow = "#DA6C6C";

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgContainer,
  },
  postContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: bgPostContainer,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 5,
    shadowColor: colorShadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1,
  },
  postHeaderContainer: {
    backgroundColor: bgPostContainer,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    shadowColor: colorShadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1,
  },
  postHeaderText: {
    color: colorHeader,
    fontSize: 20,
    fontWeight: "bold",
  },
  postTitleAuthorContainer: {
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: colorBorder,
  },
  postTitleContent: {
    color: colorHeader,
    fontSize: 16,
    fontWeight: "bold",
  },
  postAuthorContent: {
    color: colorAuthor,
    fontSize: 12,
    paddingBottom: 10,
  },
  postTextContent: {
    fontSize: 14,
    paddingTop: 10,
  },
  postButtonAdd: {
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 5,
  }
});

export default styles;
