import {View, Text, StyleSheet, TextInput,Dimensions} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
const {width, height} = Dimensions.get('window');
const Header = () => {

  const [text, onChangeText] = useState("");
  return (
    <View style={style.containerHeader}>
      <View style={style.userIcon}>
        <FontAwesome5 name="user-alt" size={24} />
      </View>
      <View style={style.headerSearch}>
        <View style={style.searchIcon}>
          <FontAwesome5 name="search" size={24} color="grey"/>
        </View>
        {/* input */}

        <TextInput
          style={style.searchInput}
            onChangeText={onChangeText}
            value={text}
            placeholder="Tìm kiếm bài hát"
            color="black"
        />
      </View>
      <View style={style.headerNotify}>
        <Ionicons name="notifications" size={24} style={style.notifyIcon} />
        <View style={style.hasNotify}></View>
      </View>
    </View>
  );
};

export default Header;

const style = StyleSheet.create({
  containerHeader: {
    width: width,
    backgroundColor: '#222831',
    flexDirection: 'row',
    height: 64,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
  },

  userIcon: {
    backgroundColor: '#ccc',
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
  },

  headerSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 100,
    height: 40,
  },

  searchIcon: {
    paddingLeft: 16,
    paddingRight: 12,
    color: '#fff',
  },
  searchInput: {
    height: 48,
    width: 220,
  },
  headerNotify: {
    position: 'relative', 
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderRadius: 80,
  },
  notifyIcon: {
    color: "#fff"
    
  },
  hasNotify: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'red',
    top: 5,
    right: 8,
  },
});
