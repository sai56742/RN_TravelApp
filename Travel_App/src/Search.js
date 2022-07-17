

import React, { Component, useEffect, useState } from 'react';
import {View,Text,StyleSheet,Dimensions,TextInput,TouchableOpacity,Image, FlatList, ScrollView} from 'react-native';
// import Voice, {
//     SpeechRecognizedEvent,
//     SpeechResultsEvent,
//     SpeechErrorEvent,
// } from '@react-native-community/voice';
import Voice from '@react-native-voice/voice';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons1 from 'react-native-vector-icons/Ionicons'
import Icons2 from 'react-native-vector-icons/Entypo';
import {Picker} from '@react-native-picker/picker';
const {width,height}=Dimensions.get("window");

import countries from './countries'


var ImgData=[
  {
    
  "card" :require("../Images/goa.png"),
  "card1" :require("../Images/grand.png"),
 

},
{
  
"card" :require("../Images/agra.png"),
"card1" :require("../Images/newyork.png")
},
{

"card" :require("../Images/manali.png"),
"card1" :require("../Images/statue.png")
},
{
  
"card" :require("../Images/Ooty.png"),
"card1" :require("../Images/disney.png")
},
{
  
"card" :require("../Images/Shillang.png"),
"card1" :require("../Images/bridge.png")
},
{
  
"card" :require("../Images/nicobar.png"),
"card1" :require("../Images/bigislang.png")
},
{
  
"card" :require("../Images/dumas.png"),
"card1" :require("../Images/red.png")
},
{

"card" :require("../Images/kish.png"),
"card1" :require("../Images/Kauai.png")
},

]





const Search=({navigation})=>{ 

    const[hide,setHide]=useState(false)
    const[detailsFetched,setDetailsFetched]=useState(false)
    const[name,setName]=useState('')
  
    const [recognized,setrecongnized]=useState('')
    const[pitch,setpitch]=useState('')
    const[error,seterror]=useState('');
    const[started,setStarted]=useState('')
    const[result,setResult]=useState([])
    const[partialResult,setPartialResult]=useState([])
    const[end,setEnd]=useState('');
    const[venable,setVenable] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [textinput,setTextInput] = useState(false);
    // const [selectedPlace,setSelectedPlace] = useState("")
    const [countriesData,setCountriesData] = useState([]);

    const [filteredData,setFilteredData] = useState([]);
    const [enableError,setEnableError] = useState(false);

    // const []

    useEffect(()=>{
  
        Voice.onSpeechStart=onSpeechStart;
        Voice.onSpeechRecognized=onSpeechRecognized;
        Voice.onSpeechEnd=onSpeechEnd;
        Voice.onSpeechError=onSpeechError;
        Voice.onSpeechResults=onSpeechResults;
        Voice.onSpeechPartialResults=onSpeechPartialResults;
        Voice.onSpeechVolumeChanged=onSpeechVolumeChanged;
        // startRecording()

        
        return ()=>{
            Voice.destroy().then(Voice.removeAllListeners);
        };
      },[])
    
      useEffect(()=>{
        // console.log("check the json data===>",countries[0].places[0].place)
        setCountriesData(countries);


      })

      const onSpeechStart=(e)=>{
        // console.log("started")
           setStarted('')
       }
       const onSpeechRecognized =(e)=>{
         setrecongnized('')
       }
       const onSpeechEnd =(e)=>{
        // console.log("check the speech ended or not=====>")
         setEnd('')
       }
       const onSpeechError=(e)=>{
         seterror(JSON.stringify(e.error))
       }

       const onSpeechResults=(e)=>{
        setResult(e.value)
        let res=e.value;
        setName(res[0]);
        // setSelectedCountry(res[0]);
        // enableDropdown(res[0]);
        findData(res[0]);
        
       console.log(e.value)
        // navigation.navigate("PlantSearched", { voiceData: res[0] })
      //   search(res[0])
      //  console.log("datat==",e.value)
       setVenable(false)
      }




      const onSpeechPartialResults=(e)=>{
        setPartialResult(e.value)
      }
      const onSpeechVolumeChanged=(e)=>{
        setpitch(e.value)
      }
    
      const startRecording =async ()=>{

console.log("start recording")
          setrecongnized('');
          setpitch('')
          seterror('')
        //   consetStarted('')
          setResult([])
          setPartialResult([])
          setEnd('Listning...')
    

  
          try{
            await Voice.start('en-US');  
          }catch(e){
           // console.log(e)
          }
  

      }
    
      const stopRecognizing =async ()=>{
          try{
            await Voice.stop();
    
          }catch(e){
           // console.log(e)
          }
      }
    
      const destroyRecognizer =async () =>{
        try{
          await Voice.destroy();
        }catch(e){
          //console.log(e)
        }
    
        setrecongnized('');
          setpitch('')
          seterror('')
          setStarted('')
          setResult([])
          setPartialResult([])
          setEnd('')
    
      }

const renderItem11=({item,index})=>{

  // console.log("check the each item ===>",item)

  return(
    <View>

   {
    item.watch == 0?
<View 
    style={{
      borderColor:'green',
      borderWidth:3,
      // opacity:0.9,
      marginLeft:20,
      marginTop:width/30,
    marginEnd:30,
      // opacity:0.8,
      width:width/1.1,
    // color:"black",
    height:width/2,
    // marginLeft:10,
    borderRadius:width/20,
    shadowOffset: {width: 50, height: 50},
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 2,
    }}
    >

<TouchableOpacity onPress={()=>{navigation.navigate("PlaceDes")}} 
style={{
  zIndex:100,
          width:width/7,
          height:width/10,
         justifyContent:'center',
          // padding:width/50,
          borderRadius:width/9,
          backgroundColor:'white',
          position:'absolute',
         marginTop:width/5,
         marginLeft:width/7
        }}>
  <Icons1 name="arrow-forward" activeTintColor="lightblue"
         color={"gray"} 
         size={35}
         style={{marginLeft:10}}

         />  
  </TouchableOpacity>



      <Text
      style={{
        zIndex:100,
  position:"absolute",
  textAlign:'center',
  fontSize:width/15,
  marginTop:width/3.5,
  fontStyle:'italic',
  // marginLeft:width/-10,
  width:width/2,
  fontWeight:'bold',
  color:'white',
  // opacity:0.9,
      }}
      >{item.place}</Text>

      {
        console.log(
          "check the image card path===>",item.card,index
        )
      }
      <Image 
    //  tintColor='white' 
    // source={require("../Images/peru.jpg")}
    // source={require(item.card)}
    // source={}
    source={
      selectedCountry=="india"?
      ImgData[index].card:
      ImgData[index].card1
    }

    style={{
      

    marginEnd:30,
      // opacity:0.8,
      width:width/1.12,
        // color:"black",
        height:width/2.09,
    
    borderRadius:width/20
    }}/>
    </View>
    :
    null
   }
    


    </View>

  )

}



const renderItem22=({item,index})=>{

  // console.log("check the each item ===>",item)

  return(
    <View>

   {
    item.watch == 1?
<View 
    style={{
      borderColor:'darkred',
      borderWidth:3,
      // opacity:0.9,
      marginRight:width/20,
      marginTop:width/25,
      // paddingLeft:width/10,
    marginStart:20,
      // opacity:0.8,
      width:width/1.1,
    // color:"black",
    height:width/2,
    // marginLeft:100,
    borderRadius:width/20,
    shadowOffset: {width: 2, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    }}
    >

<TouchableOpacity onPress={()=>{navigation.navigate("Description",{
    id:item.id
  })
  
  
}} style={{zIndex:100,
          width:width/7,
          height:width/10,
         justifyContent:'center',
          // padding:width/50,
          borderRadius:width/9,
          backgroundColor:'white',
          position:'absolute',
         marginTop:width/5,
         marginLeft:width/2
        }}>
  <Icons1 name="arrow-back" activeTintColor="lightblue"
         color={"gray"} 
         size={35}
         style={{marginLeft:10}}

         />  
  </TouchableOpacity>
 



      <Text
      style={{
        zIndex:100,
  position:"absolute",
  textAlign:'center',
  fontSize:width/15,
  marginTop:width/3.5,
  fontStyle:'italic',
  marginLeft:width/3,
  width:width/2,
  fontWeight:'bold',
  color:'white',
  // opacity:0.9,
      }}
      >{item.place}</Text>
      <Image 
    //  tintColor='white' 
    // source={require("../Images/peru.jpg")}
    source={
      selectedCountry=="india"?
      ImgData[index].card:
      ImgData[index].card1
    }

    // source={item.card} 
    style={{
      

    marginEnd:30,
      opacity:0.8,
      width:width/1.12,
        // color:"black",
        height:width/2,
    // color:"black",
    height:width/2.08,
   
    borderRadius:width/20
    }}/>
    </View>
    :
    null
   }
    


    </View>

  )

}







const renderItem=({item,index})=>{

// console.log("check the item each",item)
return(

<View>

{
  item.country == selectedCountry?


  <View>

    <View style={{flexDirection:'row'}}>
    <Text style={{color:'green', fontFamily:"italic",marginLeft:width/20,fontWeight:'bold'}}>Safe Places:green border</Text>
    <Text style={{color:'darkred', fontFamily:"italic",marginLeft:width/20,fontWeight:'bold'}}>Unsafe Places:red border</Text>

      </View>
    <FlatList 
        data={item.places}
        renderItem={renderItem11}
        keyExtractor={item => item.id}
        horizontal={true}
        showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}

      />
       <FlatList 
        data={item.places}
        renderItem={renderItem22}
        keyExtractor={item => item.id}
        horizontal={true}
        showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}
  inverted
      />
  </View>
  :
  null
  }
  </View>
)
}



const enableDropdown=(value)=>{

console.log("check the enableDropdown====>",value)
if(value.length >=1){
  setSelectedCountry("");
  setTextInput(true);
  const result = countriesData.filter(item => item.country==value);



}
else{
  setTextInput(false);
}


}





const findData=(value)=>{

  console.log("finded data-====>",value)
  setEnableError(true);
    // Method called every time when we change the value of the input
    if (value) {
      // Making a case insensitive regular expression
      const regex = new RegExp(`${value.trim()}`, 'i');
      // Setting the filtered film array according the query
      setFilteredData(
          countriesData.filter((item) => item.country.search(regex) >= 0)
      );
      
    } else {
      // If the query is null then return blank
      // setFilteredFilms([]);
      setFilteredData([]);
      
    
  };
 
console.log("check the filtered data===>",filteredData);

}




return(
    <View>
          <View style={{
        width:width,
      height:width/6,
      backgroundColor:'gray',
      justifyContent:'center',
      opacity:1,
      alignItems:'center'
      }}>

<Text style={{fontSize:width/15,fontStyle:'italic',color:'white'}}>Search</Text>

      {/* <Text style={{fontSize:width/15,fontStyle:'italic',color:'white'}}>{PlacesData[id].name}</Text> */}
      </View>
    
    <View 
    style={{
      marginTop:width/10,
      width:width/1.1,
     height:width/6,
     borderWidth:1,
     borderColor:'black',
     marginLeft:width/20,
     borderRadius:width/50,
     flexDirection:'row'
     }}
     >
    
    <TextInput
      value={name}
      onChangeText={(title) =>{ setName(title),enableDropdown(title),findData(title),console.log("check the voice data==>",title)
        // title.length>=1?setTextInput(true):setTextInput(false)
      }
      }
      placeholder={'Enter Country name'}
      // style={styles.input}wi
      style={{width:width/1.4,fontSize:width/20}}
      autoCapitalize='none'
      
 />

<TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} 
    onPress={()=>{startRecording(),setVenable(true)}}

    
    >
      {
        venable==true?
        <Icon name='microphone' size={35} color="green"/>
        :
        <Icon name='microphone' size={35} color="black"/>
      }

    

         </TouchableOpacity>  
   

    </View>


<View>
{
  filteredData.length!=0 ?

filteredData.map((data,index)=>{
return(
  
  <View>
    <TouchableOpacity onPress={()=>{setName(data.country),
    setSelectedCountry(data.country),
    setTextInput(true),
    setEnableError(false),
    setFilteredData([])


  }}
    style={{width:width/1.1,justifyContent:'center',alignItems:'center',
    marginLeft:width/20, 
    height:width/6,
    borderRadius:width/50,
    borderWidth:1,borderColor:'gray'}} >
      <Text style={{textAlign:'center',fontSize:width/20,color:'black'}}>
        {data.country}
      </Text>

    </TouchableOpacity>
    </View>
)
})
  :
<View>
  {
    name.length>1 && enableError == true ?
<View 
  style={{width:width/1.1,justifyContent:'center',alignItems:'center',
  marginLeft:width/20, 
  height:width/6,
  borderRadius:width/50,
  borderWidth:1,borderColor:'gray'}} >
    <Text style={{textAlign:'center',fontSize:width/20,color:'red'}}>
No Data Found
    </Text>
  </View>
    :
    null
  }

  
  </View>
}

</View>



   <View>


   </View>





    

    {/* </View> */}

   {
    textinput==false?
    <View style={{
      marginTop:width/10,
      width:width/1.1,
     height:width/6,
     borderWidth:1,
     borderColor:'black',
     marginLeft:width/20,
     borderRadius:width/50,
    //  flexDirection:'row'
     }}>
<Picker
style={{color:'black', width:width/1.1}}
// mode="dropdown"
// placeholder="choose count"
  selectedValue={selectedCountry}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedCountry(itemValue)
  }>
 <Picker.Item style={{marginTop:width/10}} label="Select Country" enabled={false}
          
          />
 
  {
    countriesData.map((item,index)=>{


      // console.log("check the item name====>",item.country)
      return(
        
          <Picker.Item style={{marginTop:width/10}} label={item.country} value={item.country}
          
          />
    
      )

    })
  }
</Picker>




</View>
    :
    null
   }


  



        
         <View>
          {

            countriesData!==null || countriesData!= "" || countriesData!=undefined?

            // countriesData.map((data,index)=>{
              // return(
                <FlatList 
        data={countriesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        // horizontal={true}
      />
              // )
            // })

            :
null
            
          }

      </View>



   



    
    </View>
)
}

const styles = StyleSheet.create({
   
   });
    
export default Search;