import React ,{ Component } from "react";
import {Text, View,Image ,FlatList} from "react-native";

class Post extends Component{
    constructor(props){
        super(props)
    }
    render(){
  return(
      <View > 
            <div className="post" style={{ display: 'block', padding: '7px',marginTop:'5px',textAlign:'center'}}>
          <Image source={{uri: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg'}} style={{width: '100%', height: 350,padding:'30px'}} />   
      <Text><h4 style={{padding: '0px 20px',textAlign:"center"}}>{this.props.route.params.details.title} </h4></Text><br/>
      </div>
        <div className="postbody" style={{ textAlign:'center', padding: '0px 20px'}} >
        <Text>{this.props.route.params.details.body}</Text>
        </div>
        </View>
  )
    }
} 
export default Post;