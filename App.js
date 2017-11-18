import React, { Component } from "react";
import { ScrollView } from "react-native";

import Post from "./src/components/pots";
import styles from "./src/styleSheet/style";

export default class App extends Component<{}> {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Post />
      </ScrollView>
    );
  }
}
