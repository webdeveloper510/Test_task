import React, { Component } from "react";
import { Text, View, Image, FlatList } from "react-native";
import "./style.css";
class Post extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View >
        <div className="post1">
          <Image source={{ uri: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg' }} style={{ width: '100%', height: 350, padding: '30px' }} />
          <Text>
            <h4>{this.props.route.params.details.title}</h4>
          </Text> <br />
        </div>
        <div className="postbody1" >
          <Text>
            {this.props.route.params.details.body}
          </Text>
        </div>
      </View>
    )
  }
}
export default Post;