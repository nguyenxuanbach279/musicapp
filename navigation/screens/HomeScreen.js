import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const famoustAuthor1 = 
  [
    {
          "name": "Lost Control",
          "author": "Alan Walker",
          "url": "https://cdn.discordapp.com/attachments/775740994595323954/782130131912228874/Alan_Walker_Lost_Control_Lyrics_ft._SoranaMP3_160K.mp3",
          "id": 1,
          "linkImg1": "https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576",
           "linkImg2" : "https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a",
    },
    {
            "name": "Unity",
            "author": "Alan Walker",
            "url": "https://cdn.discordapp.com/attachments/775740994595323954/782130173805985792/Alan_x_Walkers_-_UnityMP3_160K.mp3",
            "id": 2,
            "linkImg1": "https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576",
           "linkImg2" : "https://i.scdn.co/image/ab67616d0000b2734e14d839fbece313822fca82",
        
    },
    {
          "name": "On my Way",
          "author": "Alan Walker",
          "url": "https://cdn.discordapp.com/attachments/775740994595323954/782129671055605760/Alan_Walker__Sabrina_Carpenter___Farruko_-_On_MyMP3_128K.mp3",
          "id": 3,
          "linkImg1": "https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576",
           "linkImg2" : "https://i.scdn.co/image/ab67616d0000b273d2aaf635815c265aa1ecdecc",
         
      },
      {
            "name": "Ghost",
            "author": "Au/Ra, Alan Walker",
            "url": "https://cdn.discordapp.com/attachments/775740994595323954/782130010088669204/Au_Ra__Alan_Walker_-_Ghost_Official_VideoMP3_160K.mp3",
            "id": 4,
            "linkImg1":  "https://i.scdn.co/image/ab6761610000e5eb2eac2bd8d035f71531b0c08d",
           "linkImg2" : "https://i.scdn.co/image/ab6761610000e5eb2eac2bd8d035f71531b0c08d",
        },
        {
              "name": "Strongest",
              "author": "Alan Walker ,Ina Wroldsen",
              "url": "https://cdn.discordapp.com/attachments/775740994595323954/782130079047221268/Alan_Walker___Ina_Wroldsen_-_Strongest_LyricsMP3_160K.mp3",
              "id": 5,
              "linkImg1": "https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576",
           "linkImg2" : "https://i.scdn.co/image/ab67616d0000b2735510097a6f4875a4ad7c9095",
        }
  ]

const famoustAuthor2 = [
  {
        "name": "Company",
        "author": "Justin Bieber",
        "url": "https://cdn.discordapp.com/attachments/775740994595323954/782130102266757120/Justin_Bieber_-_Company_Official_Music_VideoMP3_160K.mp3",
        "id": 1,
        "linkImg1" : "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36",
        "linkImg2" :"https://i.scdn.co/image/ab67616d0000b273f46b9d202509a8f7384b90de",
        
    },

    {
          "name": "Sorry (PURPOSE : The Movement)",
          "author": "Justin Bieber",
          "url": "https://cdn.discordapp.com/attachments/775740994595323954/782130111000477756/Justin_Bieber_-_Sorry_PURPOSE___The_MovementMP3_160K.mp3",
          "id": 2,
          "linkImg1" : "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36",
          "linkImg2" :"https://i.scdn.co/image/ab67616d0000b273f46b9d202509a8f7384b90de",
      },
      {
            "name": "One Less Lonely Girl",
            "author": "Justin Bieber",
            "url": "https://cdn.discordapp.com/attachments/775740994595323954/782130199692443678/Justin_Bieber_-_One_Less_Lonely_Girl_Official_MusMP3_160K.mp3",
            "id": 3,
            "linkImg1" : "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36",
            "linkImg2" :"https://i.scdn.co/image/ab67616d0000b2737c3bb9f74a98f60bdda6c9a7",
          
        },
         {
        "name": "What Do You Mean",
        "author": "Justin Bieber",
        "url": "https://cdn.discordapp.com/attachments/775740994595323954/782130340311203840/Justin_Bieber_-_What_Do_You_Mean__Official_MusicMP3_160K.mp3",
        "id": 4,
        "linkImg1" : "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36",
        "linkImg2" :"https://i.scdn.co/image/ab67616d0000b273f46b9d202509a8f7384b90de",
    },
    {
        "name": "Confident",
        "author": "Justin Bieber ft. Chance The Rapper",
        "url": "https://cdn.discordapp.com/attachments/775740994595323954/782130398385143818/Justin_Bieber_-_Confident_ft._Chance_The_Rapper_OMP3_160K.mp3",
        "id": 5,
        "linkImg1" : "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36",
        "linkImg2" :"https://i.scdn.co/image/ab67616d0000b27358ae8fddecbd2630005409c9",
    },
]

const famoustAuthor3 = [
    {
        "name": "Freal Luv",
        "author": "Marshmello",
        "url": "https://cdn.discordapp.com/attachments/775740994595323954/782129488972480532/Far_East_Movement_x_Marshmello_-_Freal_Luv_ft._Chanyeol__Tinashe_Official_Video.m4a",
        "id": 1,
        "linkImg1" : "https://i.scdn.co/image/ab6761610000e5eba91af711541f8807ed7f0676",
        "linkImg2" :"https://i.scdn.co/image/ab67616d0000b273bc1684a7d68f275dd6db9939",
      
    },
    {
        "name": "Here With Me Feat",
        "author": "Marshmello",
        "url": "https://cdn.discordapp.com/attachments/775740994595323954/782129612690948106/Marshmello_-_Here_With_Me_Feat._CHVRCHES_OfficialMP3_160K.mp3",
        "id": 2,
        "linkImg1" : "https://i.scdn.co/image/ab6761610000e5eba91af711541f8807ed7f0676",
        "linkImg2" :"https://i.scdn.co/image/ab67616d0000b273b91a6f7b2cda3f257e9ad571"
    },
    {
        "name": "Summer",
        "author": "Marshmello",
        "url": "https://cdn.discordapp.com/attachments/775740994595323954/782129702650773544/Marshmello_-_Summer_Official_Music_Video_with_LeMP3_160K.mp3",
        "id": 3,
        "linkImg1" : "https://i.scdn.co/image/ab6761610000e5eba91af711541f8807ed7f0676",
        "linkImg2" :"https://i.scdn.co/image/ab67616d0000b273a111c87c210cc9bff93948bd"
    },
     {
        "name": "Girls Like You",
        "author": "Maroon 5",
        "url": "https://cdn.discordapp.com/attachments/775740994595323954/782129896729214982/Maroon_5_-_Girls_Like_You_Lyrics_ft._Cardi_BMP3_128K.mp3",
        "id": 4,
        "linkImg1" : "https://i.scdn.co/image/ab6761610000e5eba91af711541f8807ed7f0676",
        "linkImg2" :"https://i.scdn.co/image/ab67616d0000b273deae7d931928fc1543e70203"
    },
     {
        "name": "Alone",
        "author": "Marshmello",
        "url": "https://cdn.discordapp.com/attachments/775740994595323954/782130063050014732/Marshmello_-_Alone_Official_Music_VideoMP3_160K.mp3",
        "id": 5,
        "linkImg1" : "https://i.scdn.co/image/ab6761610000e5eba91af711541f8807ed7f0676",
        "linkImg2" : "https://i.scdn.co/image/ab67616d0000b273153261ff7373a171c24ab9f9"
        
    },
]

export default class HomeScreen extends  React.Component {
  constructor(props){
    super(props)
  }

  playMusicOfFamous(songsFamous) {
    console.log("btn songsFamous" )
    this.props.navigation.navigate("Music", {
      url: songsFamous[0].url,
      urlImage: songsFamous[0].linkImg2,
      id: songsFamous[0].id,
      songs: songsFamous,
      name: songsFamous[0].name,
      author: songsFamous[0].author,
      otherParam: "anything you want here",
    })
  }
  render(){
    return (
      <View style={styles.homeContainer}>
        <Header />
        <ScrollView horizontal={true} style={{width: '100%', height: 360}}>
          <View style={styles.sliderContainer}>
            <Image
              source={{
                uri: "https://i.scdn.co/image/ab67616d0000b2734e14d839fbece313822fca82",
              }}
              style={styles.sliderImg}
              resizeMode="stretch"
            />
  
            <Image
              source={{
                uri: 'https://i.scdn.co/image/ab67616d0000b2737b8d8ca1a8e14506c8f35233',
              }}
              style={styles.sliderImg}
              resizeMode="stretch"
            />
            <Image
              source={{
                uri: 'https://i.scdn.co/image/ab67616d0000b27335ca35166aba974dd2dd29a2',
              }}
              style={styles.sliderImg}
              resizeMode="stretch"
            />
            <Image
              source={{
                uri: 'https://i.scdn.co/image/ab67616d0000b273d2aaf635815c265aa1ecdecc',
              }}
              style={styles.sliderImg}
              resizeMode="stretch"
            />
            <Image
              source={{
                uri: 'https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96',
              }}
              style={styles.sliderImg}
              resizeMode="stretch"
            />
            <Image
              source={{
                uri: 'https://i.scdn.co/image/ab67616d0000b27362a57823eced1cb4fd93b2c1',
              }}
              style={styles.sliderImg}
              resizeMode="stretch"
            />
          </View>
        </ScrollView>
        <View style={styles.albumList}>
          <TouchableOpacity>
            <View style={styles.albumItem}>
              <View style={styles.albumItemImg}>
                <FontAwesome5 name="music" color="#fff" size={32} />
              </View>
              <Text style={styles.albumItemTitle}>Nhạc mới</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.albumItem}>
              <View style={[styles.albumItemImg, {backgroundColor: '#3399CC'}]}>
                <MaterialCommunityIcons
                  name="format-list-bulleted-type"
                  color="#fff"
                  size={32}
                />
              </View>
              <Text style={styles.albumItemTitle}>Thể loại</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.albumItem}>
              <View style={[styles.albumItemImg, {backgroundColor: '#d117bb'}]}>
                <Entypo name="star" color="#fff" size={32} />
              </View>
              <Text style={styles.albumItemTitle}>Top 100</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.albumItem}>
              <View style={[styles.albumItemImg, {backgroundColor: '#33FF33'}]}>
                <Entypo name="modern-mic" color="#fff" size={32} />
              </View>
              <Text style={styles.albumItemTitle}>Karaoke</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.albumItem}>
              <View style={[styles.albumItemImg, {backgroundColor: '#0ddebf'}]}>
                <FontAwesome5 name="podcast" color="#fff" size={32} />
              </View>
              <Text style={styles.albumItemTitle}>Podcast</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Nghe si */}
        <Text style={styles.contentTitle}>Nghệ sĩ nổi tiếng</Text>
        <View style={styles.famousArtistList}>
          <TouchableOpacity onPress={() => this.playMusicOfFamous(famoustAuthor1)}>
            <View style={styles.famousArtistItem}>
              <Image
                source={{
                  uri: 'https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576',
                }}
                style={styles.famousArtistImg}
                resizeMode="stretch"
              />
              <Text style={styles.famousArtistTitle}>Alan Walker</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.playMusicOfFamous(famoustAuthor2)}>
            <View style={styles.famousArtistItem}>
              <Image
                source={{
                  uri: "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36",
                }}
                style={styles.famousArtistImg}
                resizeMode="stretch"
              />
              <Text style={styles.famousArtistTitle}>{famoustAuthor2[0].author}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.playMusicOfFamous(famoustAuthor3)}>
            <View style={styles.famousArtistItem}>
              <Image
                source={{
                  uri: "https://i.scdn.co/image/ab6761610000e5eba91af711541f8807ed7f0676",
                }}
                style={styles.famousArtistImg}
                resizeMode="stretch"
              />
              <Text style={styles.famousArtistTitle}>{famoustAuthor3[0].author}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#222831',
  },
  sliderContainer: {
    marginTop: 12,
    width: '100%',
    height: 360,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sliderImg: {
    width: 360,
    height: 360,
    marginHorizontal: 24,
  },
  albumList: {
    marginTop: 14,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  albumItem: {
    width: 60,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumItemImg: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumItemTitle: {
    marginTop: 8,
    color: 'white',
    fontSize: 14,
  },
  contentTitle: {
    fontSize: 24,
    marginLeft: 16,
    marginTop: 16,
    color: 'white',
  },
  famousArtistList: {
    marginTop: 8,
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  famousArtistItem: {
    width: 100,
    height: 148,
    justifyContent: 'center',
    alignItems: 'center',
  },
  famousArtistImg: {
    width: 100,
    height: 100,
  },
  famousArtistTitle: {
    fontSize: 16,
    color: 'white',
    marginTop: 6,
  },
});
