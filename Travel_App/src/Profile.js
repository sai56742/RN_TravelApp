// import react,{} from React;
import React, { useEffect, useState } from "react";
import { Text,View,TouchableOpacity,Image, Dimensions } from "react-native";
const {width,height}=Dimensions.get("window")
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons1 from 'react-native-vector-icons/Ionicons'
import Icons2 from 'react-native-vector-icons/Entypo'
import AsyncStorage from "@react-native-async-storage/async-storage";
const Profile=({navigation})=>{

  const [login,setLogin] = useState("false");
  const [email,setEmail] = useState("");
  const [uname,setUname] = useState("");



  useEffect(()=>{

    checkLogin();
    setLogin(login);
  },[login])

  const checkLogin=async()=>{

let templogin = await AsyncStorage.getItem("isLogin");
setLogin(templogin);

let tempemail  = await AsyncStorage.getItem("email");
setEmail(tempemail);

let tempUname = await AsyncStorage.getItem("uname");
setUname(tempUname);


console.log("check the login status from Profile page",templogin)

  }


  const logOut=async()=>{


    AsyncStorage.setItem("isLogin","false");
    setLogin(false);


  }



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

        width:width,height:width/2,backgroundColor:'gray'
        }}>

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
      {
login=="true"?
<TouchableOpacity  onPress={()=>{logOut(),
  navigation.navigate("BottomTab")
}} style={{
        width:width/2.0,
      marginLeft:width/2.2,
      height:width/6.8,
      marginTop:width/30,
      borderRadius:width/50,
      justifyContent:'center',

      backgroundColor:'#202020',
      shadowOffset: {width: 2, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
      
      
      
      }}>
        <Text style={{
          color:'white',
          fontSize:20,
        textAlign:'center',
        fontStyle:'italic'
        
        }}>Logout</Text>

      </TouchableOpacity>
:

<TouchableOpacity  onPress={()=>{navigation.navigate("Login")}} style={{
        width:width/2.0,
      marginLeft:width/2.2,
      height:width/6.8,
      marginTop:width/30,
      borderRadius:width/50,
      justifyContent:'center',

      backgroundColor:'#202020',
      shadowOffset: {width: 10, height: 10},
      shadowOpacity: 0.8,
      shadowRadius: 8,
      elevation: 2,
      
      }}>
        <Text style={{
          color:'white',
          fontSize:20,
        textAlign:'center',
        fontStyle:'italic'
        
        }}>Login</Text>

      </TouchableOpacity>

      }
      
      
      
      </View>


      {
        login=="true" ?
<View>
<View style={[{
width:width/1.15,
marginLeft:width/15,
height:width/4,
backgroundColor:'gray',
marginTop:width/5,
borderRadius:width/50,
flexDirection:'row',

justifyContent:'flex-start',
alignItems:'center'

      
      }
      // , {
      //   transform: [
      //     { skewX: "-5deg" },
      //     { skewY: "5deg" }
      //   ]
      // }
      ]}>
         <Text style={{fontSize:width/20,marginLeft:width/10,fontStyle:'italic',color:'white'}}>User Name:  </Text>
         <Text style={{fontSize:width/20,fontStyle:'italic',color:'white'}}>{uname}</Text>
      </View>

      <View style={[{
width:width/1.15,
marginLeft:width/15,
height:width/4,
backgroundColor:'gray',
marginTop:width/10,
borderRadius:width/50,
flexDirection:'row',
justifyContent:'center',
alignItems:'center'

      
      }
      // , {
      //   transform: [
      //     { skewX: "-5deg" },
      //     { skewY: "5deg" }
      //   ]
      // }
      ]}>
         <Text style={{fontSize:width/20,color:'white',fontStyle:'italic'}}>User email:   </Text>
         <Text style={{fontSize:width/20,color:'white',fontStyle:'italic'}}>{email}</Text>
      </View>
</View>

        :
        null


      }

     







      
      
    </View>
  )
}

export default Profile;