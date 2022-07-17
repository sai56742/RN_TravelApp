import React, { useEffect, useState } from "react";
import { Text,View,TouchableOpacity,Image, Dimensions } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const {width,height}=Dimensions.get("window")
import countries from './countries'





const PlaceDes=({ route, navigation })=>{


    const [id, setId] = useState(0);
    const [data,setData] = useState([{}]);
    const [countriesData,setCountriesData] = useState([]);
    useEffect(()=>{
      console.log("check the json data===>",countries[0].country)
      setCountriesData(countries);


    })

//     useEffect(()=>{
// let tempid=route.params.id;
// setId(tempid-1);
// console.log("check the tempid===>",tempid)
// // const result = PlacesData.filter(item => item.id==tempid);
// // console.log("check the result====>",result)
// // setData(result);

//     },[])





  return(
    <ScrollView>

     <View style={{
        width:width,
      height:width/6,
      backgroundColor:'gray',
      justifyContent:'center',
      alignItems:'center'
      }}>

<Text style={{fontSize:width/15,fontStyle:'italic',color:'white'}}>Information</Text>

     
      </View>

      <View>
<Image style={{width:width,height:width/1.3}} source={require("../Images/goa.png")}/>
   <Text style={{fontSize:width/18,fontStyle:'italic',color:'gray',textAlign:'center'}}>{countries[0].places[0].place} - {countries[0].country}</Text>
        

    </View>
      
    <View style={{width:width/1.1,justifyContent:'center',alignSelf:'center'}}>
    <Text style={{color:"gray",
    fontSize:width/25,
    textAlign:'center',
    
    textAlign: 'justify',
    lineHeight: 30,
    }}>{countries[0].places[0].des1}</Text>

     <Text style={{color:"gray",
    fontSize:width/25,
    textAlign:'center',
    
    textAlign: 'justify',
    lineHeight: 30,
    }}>{countries[0].places[0].des2}</Text>

<Text style={{color:"gray",
    fontSize:width/25,
    textAlign:'center',
    
    textAlign: 'justify',
    lineHeight: 30,
    }}>{countries[0].places[0].des3}</Text>


<Text style={{color:"gray",
    fontSize:width/25,
    textAlign:'center',
    
    textAlign: 'justify',
    lineHeight: 30,
    }}>{countries[0].places[0].des4}</Text>

<Text style={{color:"gray",
    fontSize:width/25,
    textAlign:'center',
    
    textAlign: 'justify',
    lineHeight: 30,
    }}>{countries[0].places[0].des5} ...etc</Text>







    </View>
    

   
    </ScrollView>
  )
}

export default PlaceDes;