import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, Button } from "react-native";

import Header from "./header";
import styles from "../styleSheet/style";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts: [
        {
          id: 0,
          title: "Aprendendo React Native",
          author: "Gustavo Brandão",
          content: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 1,
          title: "Treinamento GoNative",
          author: "Diego Schell Fernandes",
          content: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 2,
          title: "Fazendo a diferença",
          author: "RocketSeat Team",
          content: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ]
    };
  }

  addPost() {
    this.setState({
      posts: [
        ...this.state.posts,
        {
          id: Math.random(),
          title: "Novo Titulo",
          author: "Novo Autor",
          content: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ]
    });
  }


  render() {
    return (
      <View>
        <Header header="GoNative" />
        {this.state.posts.map(post => (
          <View style={styles.postContainer} key={post.id}>
            <View style={styles.postTitleAuthorContainer}>
              <Text style={styles.postTitleContent}>{post.title}</Text>
              <Text style={styles.postAuthorContent}>{post.author}</Text>
            </View>
            <Text style={styles.postTextContent}>{post.content}</Text>
          </View>
        ))}
        <View style={styles.postButtonAdd}>
          <Button title="Adicionar post" onPress={() => this.addPost()} />
        </View>
      </View>
    );
  }
}

// Post.propTypes = {
//   post: PropTypes.shape({
//     title: PropTypes.string,
//     description: PropTypes.string,
//     content: PropTypes.string,
//   }).isRequired,
// };

export default Post;
