import React, { Component } from "react";
import { Text, View, Image, FlatList } from "react-native";
import "./style.css";
class AllPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    };
  }
  async componentDidMount() {
    let response = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    );
    let data1 = await response.json();
    this.setState({
      data: data1,
      viewableItems: ''
    })
  }
  postPage = (item) => {
    this.props.navigation.navigate('Post Detail', { details: item })
  }
  onViewableItemsChanged = ({ viewableItems, changed }) => this.setState({ viewableItems })
  render() {
    return (
      <View>
        <div>
          <FlatList style={{ backgroundColor: "#ffff" }}
            data={this.state.data}
            renderItem={({ item }) => <View >
              <div onClick={() => this.postPage(item)}>
                <div className="post">
                  <Image source={{ uri: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg' }} style={{ width: 60, height: 60, borderRadius: '50%' }} />
                  <Text><h4>{item.title} </h4></Text><br />
                </div>
                <div className="postbody" >
                  <Text>{item.body}</Text>
                </div>
              </div>
            </View>}
            keyExtractor={item => item.id}
            ref={r => this.refs = r}


          />
        </div>
      </View>
    )
  }
}

export default AllPosts;