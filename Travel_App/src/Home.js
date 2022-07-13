// import react,{} from React;
import React, { useRef, useState } from "react";
import { Text,View,TouchableOpacity,Image, Dimensions, FlatList } from "react-native";
// import { FlatList } from "react-native-gesture-handler";
import Carousel from 'react-native-snap-carousel-v4';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons1 from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
const {width,height}=Dimensions.get("window")





var PlacesData=[
  {
    "id" : 1,
  "name" : "The Great Pyramid of Giza - Egypt",
  "card" :require("../Images/piramid.png")
},
{
  "id" : 2,
  "name" : "The Great Wall of China - China",
  "card" :require("../Images/chinawall.png")
},
{
  "id" : 3,
  "name" : "Petra - Jordan",
  "card" : require("../Images/petra.png")
},
{
  "id" : 4,
  "name" : "Christ the Redeemer - Brazil",
  "card" :require("../Images/christ.png")
},
{
  "id" : 5,
  "name" : "Machu Picchu - Peru",
  "card" :require("../Images/peru.jpg")
},
{
  "id" : 6,
  "name" : "Chichen Itza - Mexico",
  "card" :require("../Images/chichen.png")
},
{
  "id" : 7,
  "name" : "Colosseum - Italy",
  "card" :require("../Images/col.png")
},
{
  "id" : 8,
  "name" : "Taj Mahal - India",
  "card" :require("../Images/Taj2.png")
}
]

const Home=({navigation})=>{


// const carouselRef = useRef<FlatList<{ id: number, name: String }> | null>(
//   null
// );

// const viewConfigRef = {viewAreaCoveragePercentThreshold: 95}
// const [activeIndex, setActiveIndex] = useState(0);

// const onViewRef = useRef(({ changed} : { changed: any })=>{
// if(changed[0].isViwable){
// console.log(changed);
// setActiveIndex(changed[0].index);
// }
// });

const renderItem = ({ item,index }) => {


  return(

   
<View>
  {/* <LinearGradient

   colors={["#ff00cc", "#333399"]}
  // colors={['#8E0E00', '#1F1C18']}
   style={{width:width/1.2,
// justifyContent:'center',
// alignItems:'center',
// height:width*1.2,
// backgroundColor:'lightgray',
marginLeft:40,
marginEnd:30,
borderRadius:width/20
}}
  > */}

{/* <LinearGradient

colors={["#eee", "#333"]}> */}
  
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
         marginTop:width/1.3,
         marginLeft:width/6
        }}>
  <Icons1 name="arrow-forward" activeTintColor="lightblue"
         color={"gray"} 
         size={35}
         style={{marginLeft:10}}

         />  
  </TouchableOpacity>
 
  <Text style={{
     zIndex:100,
  position:"absolute",
  textAlign:'center',
  fontSize:width/15,
  marginTop:width/1.1,
  fontStyle:'italic',
  marginLeft:width/15,
  width:width/1.5,
  fontWeight:'bold',
  color:'white',
  opacity:0.9,
  }}>{item.name}</Text>
  {/* </LinearGradient> */}
<Image 
//  tintColor='white' 
// source={require("../Images/Taj1.png")}
source={item.card} 
style={{
  opacity:0.9,
  marginLeft:20,
marginEnd:30,
  opacity:0.8,
  width:width/1.1,
// color:"black",
height:width*1.2,
// marginLeft:10,
borderRadius:width/20
}}/>
  {/* </LinearGradient> */}
</View>
  )
}

 







  return(
    <
    // style={{justifyContent:'center',alignItems:'center'}}
    >




<View  style={{paddingTop:20,justifyContent:'center',alignItems:'center',backgroundColor:'gray'}}>
  

{/* <LinearGradient 
// 
    // colors={["#A1FFCE" ,"#FAFFD1"]}
    // colors={["#ff00cc", "#333399"]}
    style={{paddingTop:20,justifyContent:'center',alignItems:'center'}}
    > */}
            <Text style={{fontSize:width/18,
            elevation:0.9,
            marginTop:width/10,
            fontStyle:'italic',
            color:'white',
            fontWeight:'bold'
            }}>Eight Wonders in the world</Text>
            <View style={{marginTop:width/10}}>
<FlatList 
        data={PlacesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
      />
      </View>
{/* </LinearGradient> */}
</View>
    </>
  )
}

export default Home; 