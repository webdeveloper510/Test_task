import React ,{ Component } from "react";
import { Text, View,Image ,FlatList,StyleSheet} from "react-native";
import Pagination,{Icon,Dot} from 'react-native-pagination';

class AllPosts extends Component{
    constructor(props){
        super(props)
        console.log(props)
            this.state = {
         data :[]
    };
    }
   async componentDidMount(){
        let response = await fetch(
            'https://jsonplaceholder.typicode.com/posts'
          );
          let data1= await response.json();
           this.setState({
               data:data1,
               viewableItems:''
           })
          console.log(data1)
    } 
    postPage=(item)=>{
        console.log(item)
        this.props.navigation.navigate('Post Detail', { details: item })
    }
    onViewableItemsChanged = ({ viewableItems, changed }) =>this.setState({viewableItems})
    render(){
  return(
    <View>
    <div>
    <FlatList style={{backgroundColor:"#ffff"}}
    data={this.state.data}
    renderItem={({item})=>  <View >
           <div  onClick={()=>this.postPage(item)}>
               <div className="post" style={{ display: 'flex', padding: '7px',marginTop:'5px'}}>
            <Image source={{uri: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg'}} style={{width: 60, height: 60 ,borderRadius: '50%'}} />   
               <Text><h4 style={{padding: '0px 20px'}}>{item.title} </h4></Text><br/>
               </div>
               <div className="postbody" style={{ marginLeft: '75px', padding: '10px'}} >
                 <Text>{item.body}</Text>
                 </div>
            </div>
         </View> }
    keyExtractor={item => item.id}
    ref={r=>this.refs=r}
    
   
  />
    {/* <Pagination
             dotThemeLight //<--use with backgroundColor:"grey"
            listRef={this.refs}//to allow React Native Pagination to scroll to item when clicked  (so add "ref={r=>this.refs=r}" to your list)
            // paginationVisibleItems={this.state.viewableItems}//needs to track what the user sees
            paginationItems={this.state.data}//pass the same list as data
            paginationItemPadSize={10} //num of items to pad above and below your visable items
            horizontal={true}
          /> */}
    </div>
  </View>
  )
    }
} 
const Style= StyleSheet.create({
    postbody : {
        marginLeft: '75px',
        padding: '10px'
    },
  
})
export default AllPosts;