import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

import styles from "../styleSheet/style";

const Header = (props) => {
  return (
    <View style={styles.postHeaderContainer}>
      <Text style={styles.postHeaderText}>{props.header}</Text>
    </View>
  );
};

Header.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Header;

