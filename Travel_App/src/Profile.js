// import react,{} from React;
import React from "react";
import { Text,View,TouchableOpacity,Image, Dimensions } from "react-native";
const {width,height}=Dimensions.get("window")
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons1 from 'react-native-vector-icons/Ionicons'
import Icons2 from 'react-native-vector-icons/Entypo'
const Profile=({navigation})=>{

  return(
    <View>
       <View style={{
        width:width,
      height:width/6,
      backgroundColor:'white',
      justifyContent:'center',
      opacity:1,
      alignItems:'center'
      }}>

<Text style={{fontSize:width/15,fontStyle:'italic',color:'gray'}}>Profile</Text>

      {/* <Text style={{fontSize:width/15,fontStyle:'italic',color:'white'}}>{PlacesData[id].name}</Text> */}
      </View>
      <View style={{
        // zIndex:-100,
      // position:'relative',

        width:width,height:width/4,backgroundColor:'gray'}}>

      </View>
      <View style={{flexDirection:'row'}}>
<View style={{
  zIndex:1000,
  position:'absolute',
        marginTop:width/-9,
        marginLeft:width/15,
        height: width/3,
        width:width/3,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: "white",
        borderRadius: width/50,
        // shadowColor: "gray",
        shadowOffset: {width: 2, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // paddingLeft: 16,
        // paddingRight: 14,

      }}>
      <Icons2 name="user" color="gray" size={width/5}/>
     



      </View>
      
      <TouchableOpacity  onPress={()=>{navigation.navigate("Login")}} style={{
        width:width/2.0,
      marginLeft:width/2.2,
      height:width/6.8,
      marginTop:width/30,
      borderRadius:width/50,
      justifyContent:'center',

      backgroundColor:'#202020'}}>
        <Text style={{
          color:'white',
          fontSize:20,
        textAlign:'center',
        fontStyle:'italic'
        
        }}>Login</Text>

      </TouchableOpacity>
      
      </View>

      
    </View>
  )
}

export default Profile;