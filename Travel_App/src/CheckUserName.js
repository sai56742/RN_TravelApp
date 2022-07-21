// import react,{} from React;
import React ,{useState,useEffect} from "react";
import { Text,View,TouchableOpacity,Image,StyleSheet, ImageBackground, Dimensions,TextInput, Alert } from "react-native";
// import { AsyncStorage } from "";
import AsyncStorage  from "@react-native-async-storage/async-storage";

const {width,height}=Dimensions.get("window")
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons1 from 'react-native-vector-icons/Ionicons'
const CheckUserName=({navigation})=>{


  var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
//   var pswreg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  const [username,setUserName] = useState("");
  const [email,setEmail] = useState("");
  const [passsword,setPassword] = useState("");
  const [address,setAddress] = useState("");
  const [usernameflag, setUsernameFlag] = useState(false)
  const [emailflag,setEmailFlag] = useState(false);
 const [passwordFlag,setPasswordFlag] = useState(false);
 const [enableSubmit,setEnableSubmit] = useState(true)


 

useEffect(()=>{
  console.log("check the useeffect username",email)
emailValidation();
},[email])


// useEffect(()=>{
//   console.log("check the useeffect username",passsword)
// passwordValidation();
// },[passsword])


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
  


    const validate=()=>{

     
       if (email == ""){
  setEmailFlag(true)
      }
      else{
        CheckUserSubmit()
      }
      
  
    }







  const CheckUserSubmit=async()=>{

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({  
        // name:"ravikumar",
      // email: "ravi@gmail.com",
      email: email,
      // password:"12378912dhsjs"
    //   password: passsword
     })
  };




  console.log("check the Login request data before submit===")
  fetch('http://192.168.1.202:3200/api/user/useridcheck', requestOptions)
  .then(response => response.json())
  .then(data =>{
    console.log("check the response data==>",data,data.success);
    // console.log("check the UserEmail response data==>",data.user.email)
    // console.log("check the UserName response data==>",data.user.name)

    if(data.success==true){
    //   AsyncStorage.setItem("isLogin","true");
      AsyncStorage.setItem("email",data.user.email);
    //   AsyncStorage.setItem("uname",data.user.name);
      // AsyncStorage.setItem("uname",)
      navigation.navigate("ResetPassword");
    //   Alert.alert(
    //     "Login",
    //     "Login Successful",
    //     [
          
    //       { text: "OK", onPress: () =>{navigation.replace("ResetPassword"), console.log("OK Pressed")} }
    //     ]
    //     )

       
          }

          else{
            Alert.alert(
              "User Check",
              "User Not Found please sign up",
              [
                
                { text: "OK", onPress: () =>{
                    // navigation.navigate("Che"),
                     console.log("OK Pressed")} }
      ]
              )
          }
         
  }
    
     ).catch((error) =>{
      console.log(error);
    });





  
  }





  return (
    <View style={styles.container}>




<View style={{
        width:width,
      height:width/6,
      backgroundColor:'gray',
      justifyContent:'center',
      opacity:1,
      alignItems:'center'
      }}>

<Text style={{fontSize:width/15,fontStyle:'italic',color:'white'}}>Reset Password</Text>

      {/* <Text style={{fontSize:width/15,fontStyle:'italic',color:'white'}}>{PlacesData[id].name}</Text> */}
      </View>
    <ImageBackground source={require('../Images/pic1.jpg')} 
    resizeMode="cover"
    style={{width:width,height:width*3,opacity:0.9}}
    //  style={styles.image}
     >


      <View style={{zIndex:1}}>

     {/* <View style={{justifyContent:'center',alignItems:'center',marginTop:width/10}}>
      <Text style={{fontSize:width/15,color:'blue'}}>Registration</Text>
     </View> */}
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
       autoCapitalize="none"
       secureTextEntry={true}
       keyboardType={"visible-password"}
              placeholder="                      Enter your E-mail"
              placeholderTextColor={'darkgreen'}
              value={email}
              onChangeText={(val)=>{setEmail(val.toLowerCase(),emailValidation()),console.log("check the email",val)}}
              // keyboardType
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

      
      
      

      <View>
        <TouchableOpacity onPress={()=>validate()} style={{marginTop:width/10,
        marginLeft:width/7,
        width:width/1.3,
        height:width/8,
        borderRadius:width/10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'green'
        }}>
          <Text style={{fontSize:width/20,color:'white'}}>Submit</Text>
        </TouchableOpacity>
        <Text style={{marginLeft:width/3,marginTop:width/20,fontSize:width/20,color:'green'}}>Not yet registered?</Text>

        <View>
        <TouchableOpacity onPress={()=>navigation.navigate("Register")} style={{marginTop:width/15,
        marginLeft:width/7,
        width:width/1.3,
        height:width/8,
        borderRadius:width/10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'green'
        }}>
          <Text style={{fontSize:width/20,color:'white'}}>Sign up</Text>
        </TouchableOpacity>
        </View>
      </View>
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
export default CheckUserName;