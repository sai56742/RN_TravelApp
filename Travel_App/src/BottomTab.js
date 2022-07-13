// import react,{} from React;
import React from "react";
import { Text,View,TouchableOpacity,Image, Dimensions } from "react-native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { LinearGradient } from "react-native-linear-gradient";
import Home from './Home'
import Search from "./Search";
import Profile from "./Profile";
const {width,height}=Dimensions.get("window")



import Icon from 'react-native-vector-icons/FontAwesome';
import Icons1 from 'react-native-vector-icons/Ionicons'
// import  AsyncStorage  from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();


const BottomTab=()=>{

  
// return(
//   <Tab.Navigator>
//     <Tab.Screen name="Home" component={Home}/>
//     </Tab.Navigator>

//   // <View>
//   //   <Text>BottomTab</Text>
//   // </View>
// )
// }

// export default BottomTab;

  return(
    <Tab.Navigator
    
    
    screenOptions={{

     
      tabBarStyle: {
        
        backgroundColor: 'black',
        height:width/7
      },
    }}
    style={{width:width/2,backgroundColor:'black'}}>
      
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false
      ,
      tabBarActiveTintColor:"white",
      tabBarInactiveTintColor:'gray',
      // tabBarActiveBackgroundColor:'green',
      tabBarIcon:({focused,color, size })=>(  

        
        <Icon name="home" activeTintColor="lightblue"
         color={color} 
         size={35}/>  
    )  ,
         tabBarLabel: 'Home' ,
        
      }}
      
      />
      <Tab.Screen name="Search" component={Search}  options={{ headerShown: false ,
      tabBarActiveTintColor:"white",
      tabBarInactiveTintColor:'gray',
       tabBarIcon:({focused,color, size})=>(  
        <Icon name="search" color={color} size={30}/>  
    )  ,
     tabBarLabel: 'Search' 
      
      }}/>


      
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false,
      tabBarActiveTintColor:"white",
      tabBarInactiveTintColor:'gray',
       tabBarIcon:({focused,color, size})=>(  
        <Icons1 name="person-circle" color={color} size={35}/>  
    )  ,
     tabBarLabel: 'Profile' 
      
      }} />
      
    </Tab.Navigator> 
  )
    }
    export default BottomTab;
