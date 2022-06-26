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

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.homeContainer}>
      <Header />
      <ScrollView horizontal={true} style={{width: '100%', height: 360}}>
        <View style={styles.sliderContainer}>
          <Image
            source={{
              uri: 'https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576',
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
            <View style={[styles.albumItemImg, {backgroundColor: '#f50c33'}]}>
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
            <View style={[styles.albumItemImg, {backgroundColor: '#de2904'}]}>
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
      <Text style={styles.contentTitle}>Nghệ sĩ nổi tiếng</Text>
      <View style={styles.famousArtistList}>
        <TouchableOpacity>
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
        <TouchableOpacity>
          <View style={styles.famousArtistItem}>
            <Image
              source={{
                uri: 'https://i.scdn.co/image/ab6761610000e5eb6e50f29c671af8aff68b321d',
              }}
              style={styles.famousArtistImg}
              resizeMode="stretch"
            />
            <Text style={styles.famousArtistTitle}>Alan Walker</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#222831',
  },
  sliderContainer: {
    marginTop: 18,
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
    marginTop: 28,
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
    height: 136,
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
