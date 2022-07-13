// import react,{} from React;
import React, { useEffect, useState } from "react";
import { Text,View,TouchableOpacity,Image, ImageBackground,StyleSheet, Dimensions, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import CountryPicker from 'rn-country-dropdown-picker';
import axios from "axios";

const {width,height}=Dimensions.get("window")

const Register=({navigation})=>{

  var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  var pswreg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  const [username,setUserName] = useState("");
  const [email,setEmail] = useState("");
  const [passsword,setPassword] = useState("");
  const [address,setAddress] = useState("");
  const [usernameflag, setUsernameFlag] = useState(false)
  const [emailflag,setEmailFlag] = useState(false);
 const [passwordFlag,setPasswordFlag] = useState(false);
 const [enableSubmit,setEnableSubmit] = useState(true)
//  const [allclear,setAllClear] = useState(false)

  function handleSelection(e) {
    console.log(e);
  }


  useEffect(()=>{
    console.log("check the useeffect username",username)
usernameValidation();
  },[username.length])

  useEffect(()=>{
    console.log("check the useeffect username",email)
emailValidation();
  },[email])


  useEffect(()=>{
    console.log("check the useeffect username",passsword)
passwordValidation();
  },[passsword])


  const usernameValidation=()=>{

    if(username.length>=1 && username.length<3){

      setUsernameFlag(true)
      setEnableSubmit(false)
    }
    else{
      setUsernameFlag(false)
      setEnableSubmit(true)
    }

  }

  const emailValidation=()=>{
    // console.log("check email lower case", val.match(reg))
    
    if(email.length>=1 && reg.test(email)!=true){
      setEmailFlag(true);
      setEnableSubmit(false)
    }
    else{
      setEmailFlag(false)
      setEnableSubmit(true)
    }
    
      }
    
      const passwordValidation=()=>{
    
    if(passsword.length>=1 && pswreg.test(passsword)!=true){
      setPasswordFlag(true)
      setEnableSubmit(false)
    }
    else{
      setPasswordFlag(false)
      setEnableSubmit(true)
    }
    
      }
    

  const submit= async()=>{

console.log("chek the register details===>",username,passsword,email)

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({  
      name:username,
    email: email,
    password:passsword 
    // name:"skn",
    // email: "skn@gmail.com",
    // password:"Skn@1234" 
   })
};


  // console.log("check the data before submit===",data)
  fetch('http://192.168.1.202:3200/api/user/create', requestOptions)
  .then(response => response.json())
  .then(data =>{
    console.log("check the response data==>",data,data.success)
    if(data.success==true){
      Alert.alert(
        "Alert Title",
        "Successfully Registered",
        [
          
          { text: "OK", onPress: () =>{navigation.navigate("Login"), console.log("OK Pressed")} }
        ]
        )
          }

          else{
            Alert.alert(
              "Alert Title",
              "Registration Failed ",
              [
                
                { text: "OK", onPress: () =>{navigation.navigate("Register"), console.log("OK Pressed")} }
      ]
              )
          }
         
  }

   
    
     ).catch((error) =>{
      console.log(error);
    });

  }




  const validate=()=>{

    if(username==""){
setUsernameFlag(true)
      // Alert.alert("enter user name")
    }
    else if (email == ""){
setEmailFlag(true)
    }
    else if(passsword == ""){
setPasswordFlag(true)
    }
    else{
      submit()
    }
    

  }

 
  return(
    <View style={styles.container}>

<View style={{
        width:width,
      height:width/6,
      backgroundColor:'gray',
      justifyContent:'center',
      opacity:1,
      alignItems:'center'
      }}>

<Text style={{fontSize:width/15,fontStyle:'italic',color:'white'}}>Register</Text>

      {/* <Text style={{fontSize:width/15,fontStyle:'italic',color:'white'}}>{PlacesData[id].name}</Text> */}
      </View>

    <ImageBackground source={require('../Images/pic1.jpg')} 
    resizeMode="cover"
    style={{width:width,height:width*2.45,opacity:0.8}}
    //  style={styles.image}
     >


      <View style={{zIndex:1}}>

    
      <View  style={{
        borderRadius:width/20,
        marginTop:width/4,
        marginLeft:width/7,
      width:width/1.3,
      // justifyContent:'center',
      // alignItems:'center',
      borderWidth:1,
      borderColor:'black'}}>
        {/* <Text>UserName</Text> */}
      <TextInput

        placeholder="                       Enter your name"
       placeholderTextColor={'darkgreen'}
        value={username}
        onChangeText={(val)=>{setUserName(val),usernameValidation(val),console.log("check the username",val)}}
        // keyboardType="numeric"
      />
      
      
      </View>
      {
       usernameflag==true?
        <View style={{marginLeft:width/6}}>
          <Text style={{color:'red',fontWeight:'bold'}}>Username must have 3 characters</Text>
          </View>
        :
        null
      }
      <View  style={{
        borderRadius:width/20,
        marginTop:width/10,
        marginLeft:width/7,
      width:width/1.3,
      // justifyContent:'center',
      // alignItems:'center',
      borderWidth:1,
      borderColor:'black'}}>
        {/* <Text>UserName</Text> */}
      <TextInput
 autoCapitalize="none"
 secureTextEntry={true}
 keyboardType={"visible-password"}
        placeholder="                      Enter your E-mail"
        placeholderTextColor={'darkgreen'}
        value={email}
        onChangeText={(val)=>{setEmail(val.toLowerCase(),emailValidation()),console.log("check the email",val)}}
        // keyboardType="numeric"
      />
      
      </View>

      {
      emailflag==true
        ?
        <View style={{marginLeft:width/6}}>
          <Text style={{color:'red',fontWeight:'bold'}}>Enter Valid emial id </Text>
          </View>
        :
        null
      }

      <View  style={{
        borderRadius:width/20,
        marginTop:width/10,
        marginLeft:width/7,
      width:width/1.3,
      // justifyContent:'center',
      // alignItems:'center',
      borderWidth:1,
      borderColor:'black'}}>
        
      <TextInput
      secureTextEntry={true}
    textAlignVertical="top"
    
        placeholder="                          Enter your Passsword"
         placeholderTextColor={'darkgreen'}
        value={passsword}
        onChangeText={(val)=>{setPassword(val),passwordValidation(),console.log("check the password",val)}}
      />
      
      </View>

      {
     passwordFlag==true
        ?
        <View style={{marginLeft:width/6,width:width/1.4,backgroundColor:'white',borderRadius:width/50,padding:10}}>
          <Text style={{color:'red',fontWeight:'bold'}}>Password must have 8 characters with 1 special character ,Alphabet,digit </Text>
          </View>
        :
        null
      }
      
      <View  style={{
        // borderRadius:width/20,
        marginTop:width/10,
        marginLeft:width/8,
      width:width/1.25,
      justifyContent:'center',
      alignItems:'center',
      // borderWidth:1,
      // borderColor:'black'
      }}>
      
      {/* <CountryPicker selectedItem={handleSelection} /> */}
      <CountryPicker
      style={{color:"lightgreen"}}
        InputFieldStyle={{
          // backgroundColor:'white',
        borderRadius:width/20,borderWidth:1 }}
        // DropdownContainerStyle={{width:width}}
        // DropdownRowStyle={{backgroundColor:'green'}}
        Placeholder="Type Your country ..."
        // DropdownCountryTextStyle={styles.myDropdownCountryTextStyle}
        countryNameStyle={{fontSize:width/30}}
        flagSize={24}
        selectedItem={handleSelection}
      />
      
      </View>

{
  enableSubmit ==true?
<View>
        <TouchableOpacity onPress={()=>{validate()

        }} style={{marginTop:width/10,
        marginLeft:width/7,
        width:width/1.3,
        height:width/8,
        borderRadius:width/10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'green'
        }}>
          <Text style={{fontSize:width/20,color:'white'}}>Register</Text>
        </TouchableOpacity>
      </View>
  :
  null
}
      
      </View>
    </ImageBackground>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  }
});



export default Register;