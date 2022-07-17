// import react,{} from React;
import React, { Profiler, useEffect, useState } from "react";
import { Text,View,TouchableOpacity,Image, Dimensions } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/Home";
import Register from "./src/Register";
import Login from "./src/Login";
import Profile from "./src/Profile";
import BottomTab from './src/BottomTab'
import Search from "./src/Search";
import MyTabs from "./src/MyTabs";
import Description from "./src/Description";
import PlaceDes from "./src/PlaceDes";

// import AsyncStorage  from "@react-native-async-storage/async-storage";
const {width,height}=Dimensions.get("window")
const Stack = createStackNavigator();



const App=()=>{

  
  return(
    <NavigationContainer>
 
      <Stack.Navigator>
       
 {/* <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false,
 }}/>  */}
<Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false,
headerStyle: {
  backgroundColor: 'green',
  height:width/6
} ,
headerTitleStyle: {
  fontWeight: '300',
  color: '#ffffff',
  fontSize: 20,
  // flex:1,
  marginLeft:width/2.5,
  textAlign:"center"
},

}}/>

<Stack.Screen name="Description" component={Description} options={{ headerShown: false,
headerStyle: {
  backgroundColor: 'green',
  height:width/6
} ,
headerTitleStyle: {
  fontWeight: '300',
  color: '#ffffff',
  fontSize: 20,
  // flex:1,
  marginLeft:width/2.5,
  textAlign:"center"
},

}}/>
 



 

<Stack.Screen name="Search" component={Search} options={{ headerShown: true,
headerStyle: {
  backgroundColor: 'green',
  height:width/6
} ,
headerTitleStyle: {
  fontWeight: '300',
  color: '#ffffff',
  fontSize: 20,
  // flex:1,
  marginLeft:width/2.5,
  textAlign:"center"
},

}}/>

{/* PlaceDes */}

<Stack.Screen name="PlaceDes" component={PlaceDes} options={{ headerShown: false,
headerStyle: {
  backgroundColor: 'green',
  height:width/6
} ,
headerTitleStyle: {
  fontWeight: '300',
  color: '#ffffff',
  fontSize: 20,
  // flex:1,
  marginLeft:width/2.5,
  textAlign:"center"
},

}}/>

<Stack.Screen name="Login" component={Login} options={{ headerShown: false,
headerStyle: {
  backgroundColor: 'green',
  height:width/6
} ,
headerTitleStyle: {
  fontWeight: '300',
  color: '#ffffff',
  fontSize: 20,
  // flex:1,
  marginLeft:width/2.5,
  textAlign:"center"
},

}}/>
        

      <Stack.Screen name="Home" component={Home} options={{ headerShown: false,
      headerStyle: {
        backgroundColor: 'green',
        height:width/6
      } ,
      headerTitleStyle: {
        fontWeight: '300',
        color: '#ffffff',
        fontSize: 20,
        // flex:1,
        marginLeft:width/2.5,
        textAlign:"center"
      },
      
      }}/>


      <Stack.Screen name="Register" component={Register} 
      options={{ headerShown: false,
        headerStyle: {
          backgroundColor: 'green',
          height:width/6
        } ,
        headerTitleStyle: {
          fontWeight: '300',
          color: '#ffffff',
          fontSize: 20,
          // flex:1,
          marginLeft:width/4,
          textAlign:"center"
        },
      
      
      }}
      />




<Stack.Screen name="Profile" component={Profile} 
      options={{ headerShown: true,
        headerStyle: {
          backgroundColor: 'green',
          height:width/6
        } ,
        headerTitleStyle: {
          fontWeight: '300',
          color: '#ffffff',
          fontSize: 20,
          // flex:1,
          marginLeft:width/4,
          textAlign:"center"
        },
      
      
      }}
      />

      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App;