// import react,{} from React;
import React, { useEffect, useState } from "react";
import { Text,View,TouchableOpacity,Image, Dimensions } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";


var PlacesData=[
    {
      "id" : 1,
    "name" : "The Great Pyramid of Giza - Egypt",
    "card" :require("../Images/piramid.png"),
    "des1"  : "The Great Pyramid of Giza is a defining symbol of Egypt and the last of the ancient Seven Wonders of the World. It is located on the Giza plateau near the modern city of Cairo and was built over a twenty-year period during the reign of the king Khufu (2589-2566 BCE, also known as Cheops) of the 4th Dynasty.",

    "des2" : " Until the Eiffel Tower was completed in Paris, France in 1889, the Great Pyramid was the tallest structure made by human hands in the world; a record it held for over 3,000 years and one unlikely to be broken. Other scholars have pointed to the Lincoln Cathedral spire in England, built in 1300, as the structure which finally surpassed the Great Pyramid in height but, still, the Egyptian monument held the title for an impressive span of time.",
    
    "des3" : " The pyramid rises to a height of 479 feet (146 metres) with a base of 754 feet (230 metres) and is comprised of over two million blocks of stone. Some of these stones are of such immense size and weight (such as the granite slabs in the King's Chamber) that the logistics of raising and positioning them so precisely seems an impossibility by modern standards.",
    
    "des4" : " The pyramid was first excavated using modern techniques and scientific analysis in 1880 by Sir William Matthew Flinders Petrie (l.1853-1942), the British archaeologist who set the standard for archaeological operations in Egypt generally and at Giza specifically. Writing on the pyramid in 1883, Flinders Petrie noted:",
    "des5": "The pyramid was first excavated using modern techniques and scientific analysis in 1880 by Sir William Matthew Flinders Petrie (l.1853-1942), the British archaeologist who set the standard for archaeological operations in Egypt generally and at Giza specifically. Writing on the pyramid in 1883, Flinders Petrie noted:"
  },
  {
    "id" : 2,
    "name" : "The Great Wall of China - China",
    "card" :require("../Images/chinawall.png"),
    "des1" :"Historically, the Great Wall of China was built to fortify China’s northern border. The Great Wall has been the site of multiple battles and skirmishes between the Chinese and various peoples across history, including the Xiongnu during the Qin dynasty, the Khitans during the Song dynasty, and the Mongols during the Ming dynasty.",
    "des2" :"The total length of all sections of the Great Wall of China ever built adds up to about 21,196 kilometers (13,171 miles), including overlapping sections that were rebuilt. The wall constructed during the Ming dynasty, the most well-preserved section, is about 8,850 kilometers (5,499 miles) long.",
    "des3" :"Historians usually consider the defensive walls built during the Spring and Autumn period (770–476 BCE) and the Warring States period (475–221 BCE) to be the first sections of what would eventually become the structure known as the Great Wall of China, putting the wall at almost 3,000 years old.",
    "des4" :"You typically can’t see the Great Wall of China from space. A popular myth, the claim was disproved when astronauts stated that the Great Wall of China was not visible with the naked eye from the Moon. Due to its coloration and pollution, the structure is only sometimes visible from low orbit and the International Space Station.",
    "des5" :"Great Wall of China, Chinese Wanli Changcheng, Defensive wall, northern China. One of the largest building-construction projects ever carried out, it runs (with all its branches) about 4,500 mi (7,300 km) east to west from the Bo Hai (Gulf of Chihli) to a point deep in Central Asia. Large parts of the fortification date from the 7th to the 4th century BCE. In the 3rd century BCE the emperor Shihuangdi connected existing defensive walls into a single system fortified by watchtowers. These served both to guard the rampart and to communicate with the capital, Xianyang (near modern Xi’an) by signal—smoke by day and fire by night. Originally constructed partly of masonry and earth, it was faced with brick in its eastern portion. It was rebuilt in later times, especially in the 15th and 16th centuries. The basic wall is about 23–26 ft (7–8 m) high; at intervals towers rise above it to varying heights. It was designated a UNESCO World Heritage site in 1987."
},

  {
    "id" : 3,
    "name" : "Petra - Jordan",
    "card" : require("../Images/petra.png"),
    "des1"  :"The ruins of the ancient city Petra are in southwest Jordan. Petra was built on a terrace, pierced from east to west by the Wadi Mūsā (the Valley of Moses). Petra is called in Arabic Baṭrā, and it was once a center of an Arab kingdom in Hellenistic and Roman times, The valley is enclosed by sandstone cliffs veined with shades of red and purple varying to pale yellow, and for this reason Petra was called by the 19th-century English biblical scholar John William Burgon a “rose-red city half as old as Time",
    "des2"  :"The biblical name of Petra is Sela, which was probably replaced by the Greek name Petra, meaning rock.",
   
    "des3"  :"When the Nabataeans were defeated by the Romans in 106 CE, Petra became part of the Roman province of Arabia but continued to flourish until changing trade routes caused its gradual commercial decline. After an earthquake (not the first) damaged the city in 551, significant habitation seems to have ceased. The Islamic invasion occurred in the 7th century, and a Crusader outpost is evidence of activity there in the 12th century. After the Crusades the city was unknown to the Western world until it was rediscovered by the Swiss traveler Johann Ludwig Burckhardt in 1812.",
    "des4"  :"Excavations from 1958 on behalf of the British School of Archaeology in Jerusalem and, later, the American Center of Oriental Research added greatly to knowledge of Petra. The ruins are usually approached from the east by a narrow gorge known as the Siq (Wadi Al-Sīq). Among the first sites viewed from the Siq is the Khaznah (“Treasury”), which is actually a large tomb. Al-Dayr (“the Monastery”) is one of Petra’s best-known rock-cut monuments; it is an unfinished tomb facade that during Byzantine times was used as a church. Many of the tombs of Petra have elaborate facades and are now used as dwellings. The High Place of Sacrifice, a cultic altar dating from biblical times, is a well-preserved site. To support the ancient city’s large population, its inhabitants maintained an extensive hydrological system, including dams, cisterns, rock-carved water channels, and ceramic pipes. Excavations begun in 1993 revealed several more temples and monuments that provide insight into the political, social, and religious traditions of the ancient city. The ruins are vulnerable to floods and other natural phenomena, and increased tourist traffic has also damaged the monuments.",
    "des5"  :"Johann Ludwig Burckhardt, a Swiss traveler, discovered Petra in 1812. He was the first European in modern times to visit the ancient city of Petra.Petra was designated a UNESCO World Heritage site in 1985."
   

  },
  {
    "id" : 4,
    "name" : "Christ the Redeemer - Brazil",
    "card" :require("../Images/christ.png"),
     "des1" : "Christ the Redeemer, Portuguese Cristo Redentor, colossal statue of Jesus Christ at the summit of Mount Corcovado, Rio de Janeiro, southeastern Brazil. Celebrated in traditional and popular songs, Corcovado towers over Rio de Janeiro, Brazil’s principal port city. The statue of Christ the Redeemer was completed in 1931 and stands 98 feet (30 metres) tall, its horizontally outstretched arms spanning 92 feet (28 metres). The statue has become emblematic of both the city of Rio de Janeiro and the whole nation of Brazil.",
     "des2" : "The statue, made of reinforced concrete clad in a mosaic of thousands of triangular soapstone tiles, sits on a square stone pedestal base about 26 feet (8 metres) high, which itself is situated on a deck atop the mountain’s summit. The statue is the largest Art Deco-style sculpture in the world.",
     "des3" : "In the 1850s the Vincentian priest Pedro Maria Boss suggested placing a Christian monument on Mount Corcovado to honour Isabel, princess regent of Brazil and the daughter of Emperor Pedro II, although the project was never approved. In 1921 the Roman Catholic archdiocese of Rio de Janeiro proposed that a statue of Christ be built on the 2,310-foot (704-metre) summit, which, because of its commanding height, would make it visible from anywhere in Rio. Citizens petitioned Pres. Epitácio Pessoa to allow the construction of the statue on Mount Corcovado.",
     "des4" : "Permission was granted, and the foundation stone of the base was ceremonially laid on April 4, 1922—to commemorate the centennial on that day of Brazil’s independence from Portugal—although the monument’s final design had not yet been chosen. That same year a competition was held to find a designer, and the Brazilian engineer Heitor da Silva Costa was chosen on the basis of his sketches of a figure of Christ holding a cross in his right hand and the world in his left. In collaboration with Brazilian artist Carlos Oswald, Silva Costa later amended the plan; Oswald has been credited with the idea for the figure’s standing pose with arms spread wide. The French sculptor Paul Landowski, who collaborated with Silva Costa on the final design, has been credited as the primary designer of the figure’s head and hands. Funds were raised privately, principally by the church. Under Silva Costa’s supervision, construction began in 1926 and continued for five years. During that time materials and workers were transported to the summit via railway.",
     "des5" : "After its completion, the statue was dedicated on October 12, 1931. Over the years it has undergone periodic repairs and renovations, including a thorough cleaning in 1980, in preparation for the visit of Pope John Paul II to Brazil that year, and a major project in 2010, when the surface was repaired and refurbished. Escalators and panoramic elevators were added beginning in 2002; previously, in order to reach the statue itself, tourists climbed more than 200 steps as the last stage of the trip. In 2006, to mark the statue’s 75th anniversary, a chapel at its base was consecrated to Our Lady of Aparecida, the patron saint of Brazil.",

  },
  {
    "id" : 5,
    "name" : "Machu Picchu - Peru",
    "card" :require("../Images/peru.jpg"),
    "des1"  :"Machu Picchu, also spelled Machupijchu, site of ancient Inca ruins located about 50 miles (80 km) northwest of Cuzco, Peru, in the Cordillera de Vilcabamba of the Andes Mountains. It is perched above the Urubamba River valley in a narrow saddle between two sharp peaks—Machu Picchu (“Old Peak”) and Huayna Picchu (“New Peak”)—at an elevation of 7,710 feet (2,350 metres). One of the few major pre-Columbian ruins found nearly intact, Machu Picchu was designated a UNESCO World Heritage site in 1983.",
    "des2"  :"The dwellings at Machu Picchu were probably built and occupied from the mid-15th to the early or mid-16th century. Machu Picchu’s construction style and other evidence suggest that it was a palace complex of the ruler Pachacuti Inca Yupanqui (reigned c. 1438–71). Several dozen skeletons were excavated there in 1912, and, because most of those were initially identified as female, Bingham suggested that Machu Picchu was a sanctuary for the Virgins of the Sun (the Chosen Women), an elite Inca group. Technology at the turn of the 21st-century, however, identified a significant proportion of males and a great diversity in physical types. Both skeletal and material remains now suggest to scholars that Machu Picchu served as a royal retreat. The reason for the site’s abandonment is also unknown, but lack of water may have been a factor.",
    "des3"  :"The high level of preservation and the general layout of the ruin are remarkable. Its southern, eastern, and western portions are surrounded by dozens of stepped agricultural terraces formerly watered by an aqueduct system. Some of those terraces were still being used by local Indians when Bingham arrived in 1911. Walkways and thousands of steps, consisting of stone blocks as well as footholds carved into underlying rock, connect the plazas, the residential areas, the terraces, the cemetery, and the major buildings. The Main Plaza, partly divided by wide terraces, is at the north-central end of the site. At the southeastern end is the only formal entrance, which leads to the Inca Trail.",
    "des4"  :"Few of Machu Picchu’s white granite structures have stonework as highly refined as that found in Cuzco, but several are worthy of note. In the southern part of the ruin is the Sacred Rock, also known as the Temple of the Sun (it was called the Mausoleum by Bingham). It centres on an inclined rock mass with a small grotto; walls of cut stone fill in some of its irregular features. Rising above the rock is the horseshoe-shaped enclosure known as the Military Tower. In the western part of Machu Picchu is the temple district, also known as the Acropolis. The Temple of the Three Windows is a hall 35 feet (10.6 metres) long and 14 feet (4.2 metres) wide with three trapezoidal windows (the largest known in Inca architecture) on one wall, which is built of polygonal stones. It stands near the southwestern corner of the Main Plaza. Also near the Main Plaza is the Intihuatana (Hitching Post of the Sun), a uniquely preserved ceremonial sundial consisting of a wide pillar and pedestal that were carved as a single unit and stand 6 feet (1.8 metres) tall. In 2000 this feature was damaged during the filming of a beer commercial. The Princess’s Palace is a bi-level structure of highly crafted stonework that probably housed a member of the Inca nobility. The Palace of the Inca is a complex of rooms with niched walls and a courtyard. At the other end of Machu Picchu, another path leads to the famous Inca Bridge, a rope structure that crosses the Urubamba River. Many other ruined cities—like that atop the dark peak of Huayna Picchu, which is accessible by a lengthy, precipitous stairway and trail—were built in the region; Machu Picchu is only the most extensively excavated of these.",
    "des5"  :"Machu Picchu is the most economically important tourist attraction in Peru, bringing in visitors from around the world. For this reason the Peruvian government wishes to repatriate the materials taken by Bingham to Yale. The ruins are commonly reached in a day trip from Cuzco by first taking a narrow-gauge railway and then ascending nearly 1,640 feet (500 metres) from the Urubamba River valley on a serpentine road. Smaller numbers of visitors arrive by hiking the Inca Trail. The portion of the trail from the “km 88” train stop to Machu Picchu is normally hiked in three to six days. It is composed of several thousand stone-cut steps, numerous high retaining walls, tunnels, and other feats of classical engineering; the route traverses a wide range of elevations between about 8,530 and 13,780 feet (2,600 and 4,200 metres), and it is lined with Inca ruins of various types and sizes. At Machu Picchu there is a hotel with a restaurant, and thermal baths are at the nearby village of Aguas Calientes. The Inca Bridge and other parts of Machu Picchu were damaged by a forest fire in August 1997, but restoration was begun immediately afterward. Concern for the damage caused by tourism was heightened by discussion of the building of a cable-car link to the site."
  },
  {
    "id" : 6,
    "name" : "Chichen Itza - Mexico",
    "card" :require("../Images/chichen.png"),
    "des1"  :"Chichén Itzá, ruined ancient Maya city occupying an area of 4 square miles (10 square km) in south-central Yucatán state, Mexico. It is thought to have been a religious, military, political, and commercial centre that at its peak would have been home to 35,000 people. The site first saw settlers in 550, probably drawn there because of the easy access to water in the region via caves and sinkholes in limestone formations, known as cenotes.",
    "des2"  :"Chichén Itzá is located some 90 miles (150 km) east-northeast of Uxmal and 75 miles (120 km) east-southeast of the modern city of Mérida. The only source of water in the arid region around the site is from the cenotes. Two big cenotes on the site made it a suitable place for the city and gave it its name, from chi (“mouths”), chen (“wells”), and Itzá, the name of the Maya tribe that settled there. Chichén Itzá was designated a UNESCO World Heritage site in 1988.",
    "des3"  :"Chichén was founded about the 6th century CE, presumably by Maya peoples of the Yucatán Peninsula who had occupied the region since the Pre-Classic, or Formative, Period (1500 BCE–300 CE). The principal early buildings are in an architectural style known as Puuc, which shows a number of divergences from the styles of the southern lowlands. These earliest structures are to the south of the Main Plaza and include the Akabtzib (“House of the Dark Writing”), the Chichanchob (“Red House”), the Iglesia (“Church”), the Casa de las Monjas (“Nunnery”), and the observatory El Caracol (“The Snail”). There is evidence that, in the 10th century, after the collapse of the Maya cities of the southern lowlands, Chichén was invaded by foreigners, probably Maya speakers who had been strongly influenced by—and perhaps were under the direction of—the Toltec of central Mexico. These invaders may have been the Itzá for whom the site is named; some authorities, however, believe the Itzá arrived 200 to 300 years later.",
    "des4"  :"In any event, the invaders were responsible for the construction of such major buildings as El Castillo (“The Castle”), a pyramid that rises 79 feet (24 metres) above the Main Plaza. El Castillo has four sides, each with 91 stairs and facing a cardinal direction; including the step on the top platform, these combine for a total of 365 steps—the number of days in the solar year. During the spring and autumnal equinoxes, shadows cast by the setting sun give the appearance of a snake undulating down the stairways. A carving of a plumed serpent at the top of the pyramid is symbolic of Quetzalcóatl (known to the Maya as Kukulcán), one of the major deities of the ancient Mesoamerican pantheon. Excavations within the nine-platform pyramid revealed another, earlier structure containing a red jaguar throne studded with jade.The ball court (for playing the game tlachtli [Mayan: pok-ta-pok]) is 545 feet (166 metres) long and 223 feet (68 metres) wide, the largest such court in the Americas. Six sculpted reliefs run the length of the walls of the court, apparently depicting the victors of the game holding the severed head of a member of the losing team. On the upper platform at one end of the court stands the Temple of the Jaguars, inside of which is a mural showing warriors laying siege to a village. Standing on the platform of the temple to the north of the court, it is possible to hear a whisper from 150 feet (46 metres) away.",
    "des5"  :"About 1450 the League and the political supremacy of Mayapán dissolved. When the Spanish entered the country in the 16th century, the Maya were living in many small towns, but the major cities, including Chichén, were largely abandoned.Long left to the jungle, Chichén Itzá remained sacred to the Maya. Excavation began in the 19th century, and the site became one of Mexico’s prime archaeological zones.A legendary tradition at Chichén was the Cult of the Cenote, involving human sacrifice to the rain god, Chaac, in which victims were thrown into the city’s major cenote (at the northernmost part of the ruin), along with gold and jade ornaments and other valuables. In 1904 Edward Herbert Thompson, an American who had bought the entire site, began dredging the cenote; his discovery of skeletons and sacrificial objects confirmed the legend."
  },
  {
    "id" : 7,
    "name" : "Colosseum - Italy",
    "card" :require("../Images/col.png"),
    "des1"  :"The Colosseum is an amphitheatre built in Rome under the Flavian emperors of the Roman Empire. It is also called the Flavian Amphitheatre. It is an elliptical structure made of stone, concrete, and tuff, and it stands four stories tall at its highest point. It measures 620 by 513 feet (189 by 156 metres) and could hold as many as 50,000 spectators. The Colosseum was famously used for gladiatorial combat.",
    "des2"  :"Construction of the Colosseum began under the Roman emperor Vespasian between 70 and 72 CE. The completed structure was dedicated in 80 CE by Titus, Vespasian’s son and successor. The Colosseum’s fourth story was added by the emperor Domitian in 82 CE. Importantly, the arena was paid for with plunder from Titus’s sack of Jerusalem in 70 CE, and it was built by enslaved Jews from Judaea.",
    "des3"  :"The Colosseum was built as part of an imperial effort to revitalize Rome after the tumultuous year of the four emperors, 69 CE. As with other amphitheatres, the emperor Vespasian intended the Colosseum to be an entertainment venue, hosting gladiator fights, animal hunts, and even mock naval battles.",
    "des4"  :"The Colosseum fell into serious disrepair after the fall of the Western Roman Empire. During the 12th century, the Frangipane and Annibaldi families repurposed the arena to function as their fortress. In the late 15th century, Pope Alexander VI permitted the Colosseum to be used as a quarry. After over a thousand years of neglect, state-funded restoration efforts began in the 1990s.",
    "des5"  :"As one of the few mostly intact structures from the Roman Empire, the Colosseum stands today as a monument to ancient Rome’s architectural and engineering prowess. It is also a major source of tourism revenue for the Italian government. In 2018 the Colosseum, Roman Forum, and Palatine Hill together brought in more than $63.3 million (€53.8 million), the highest revenue of any tourist attraction in Italy."
  },
  {
    "id" : 8,
    "name" : "Taj Mahal - India",
    "card" :require("../Images/Taj2.png"),
    "des1"  :"The Taj Mahal is a mausoleum complex in Agra, western Uttar Pradesh state, northern India. It is considered the finest example of Mughal architecture (a blend of Indian, Persian, and Islamic styles). The Taj Mahal is also one of the world’s most iconic monuments, visited by millions of tourists each year. The complex was designated a UNESCO World Heritage site in 1983.",
    "des2"  :"The Taj Mahal was built as a tomb for Mumtaz Mahal (“Chosen One of the Palace”) by her husband, the Mughal emperor Shah Jahān (reigned 1628–58). She died in childbirth in 1631, after having been the emperor’s inseparable companion since their marriage in 1612.",
    "des3"  :"The Taj Mahal is a mausoleum complex that houses the tombs of Mumtaz Mahal (“Chosen One of the Palace”) and her husband, the Mughal emperor Shah Jahān (reigned 1628–58).",
    "des4"  :"Building of the Taj Mahal began about 1632. The mausoleum itself was completed by about 1638–39. The adjunct buildings were finished by 1643, and decoration work continued until at least 1647. In total, construction of the 42-acre (17-hectare) complex spanned 22 years.",
    "des5"  :"The Taj Mahal is built of white marble that reflects hues according to the intensity of the sunlight or the moonlight. "
  }
  ]
  const {width,height}=Dimensions.get("window")


const Description=({ route, navigation })=>{


    const [id, setId] = useState(0);
    const [data,setData] = useState([{}]);
   

    useEffect(()=>{
let tempid=route.params.id;
setId(tempid-1);
console.log("check the tempid===>",tempid)
// const result = PlacesData.filter(item => item.id==tempid);
// console.log("check the result====>",result)
// setData(result);

    },[])





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

      {/* <Text style={{fontSize:width/15,fontStyle:'italic',color:'white'}}>{PlacesData[id].name}</Text> */}
      </View>
      <View>
<Image style={{width:width,height:width/1.3}} source={PlacesData[id].card}/>
   <Text style={{fontSize:width/18,fontStyle:'italic',color:'gray',textAlign:'center'}}>{PlacesData[id].name}</Text>
        

    </View>
    <View style={{width:width/1.1,justifyContent:'center',alignSelf:'center'}}>
    <Text style={{color:"gray",
    fontSize:width/25,
    textAlign:'center',
    
    textAlign: 'justify',
    lineHeight: 30,
    }}>{PlacesData[id].des1}</Text>

     <Text style={{color:"gray",
    fontSize:width/25,
    textAlign:'center',
    
    textAlign: 'justify',
    lineHeight: 30,
    }}>{PlacesData[id].des2}</Text>

<Text style={{color:"gray",
    fontSize:width/25,
    textAlign:'center',
    
    textAlign: 'justify',
    lineHeight: 30,
    }}>{PlacesData[id].des3}</Text>


<Text style={{color:"gray",
    fontSize:width/25,
    textAlign:'center',
    
    textAlign: 'justify',
    lineHeight: 30,
    }}>{PlacesData[id].des4}</Text>

<Text style={{color:"gray",
    fontSize:width/25,
    textAlign:'center',
    
    textAlign: 'justify',
    lineHeight: 30,
    }}>{PlacesData[id].des5}</Text>







    </View>
    

   
    </ScrollView>
  )
}

export default Description;