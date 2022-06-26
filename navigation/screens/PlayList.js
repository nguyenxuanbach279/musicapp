import * as React from "react";
import { Card } from "react-native-paper";
// import { Constants } from "expo";
// import firebase from "../../config/firebase";
import firestore from '@react-native-firebase/firestore';

import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Dimensions
} from "react-native";
import Task from "../../components/Task";
// import { songs } from "../../model/Songs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button, ImageBackground } from "react-native";
// import DataShare from "../../components/DataShare";

const {width, height} = Dimensions.get('window');

export default class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.docs = firestore().collection("songs");
    this.state = {
      isLoading: true,
      students: [],
      uri: "https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576",
      id: -1,
      song: [],
      name: "Sing me to sleep",
      author: "Alan Walker",
      // url cua mp3
      url: "https://cdn.discordapp.com/attachments/775740994595323954/775741533789224960/Alan_Walker_-_Sing_Me_To_SleepMP3_160K.mp3",
    };
  }

  componentDidMount() {
    this.unsubscribe = this.docs.onSnapshot(this.getStudentsData);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getStudentsData = (querySnapshot) => {
    const students = [];
    querySnapshot.forEach((res) => {
      const { name, author, id, url, linkImg1 } = res.data();
      students.push({
        key: res.id,
        name,
        author,
        id,
        url,
        linkImg1,
      });
    });
    this.setState({
      students,
      isLoading: false,
    });
  };

  setSong = (song) => {
    this.setState({ uri: song.linkImg1 });
    this.setState({ id: song.id });
    this.setState({ song: song, name: song.name, author: song.author });
    // console.log(this.state.id);
    // console.log("PlayList: ", this.state.song.id);
    this.setState({ url: song.url });



    return song.id;
  };

  playSong = (song) => {
    // console.log("PlayList Song",song.author);
    this.props.navigation.navigate("Music", {
      url: song.url,
      urlImage: song.linkImg1,
      id: song.id,
      songs: this.state.students,
      name: song.name,
      author: song.author,
      otherParam: "anything you want here",
    });
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#B6D5D7" />
        </View>
      );
    }
    return (
      <SafeAreaView>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View style={styles.playList}>
            <ImageBackground
              source={{ uri: this.state.uri }}
              style={styles.imgBackground}
              resizeMode="stretch"
            ></ImageBackground>

            <View style={styles.listContainer}>
              {/* Header của playlist */}
              <View style={styles.headerList}>
                <Ionicons
                  style={[styles.iconItem, styles.closeList]}
                  name="close"
                  onPress={() => {
                    this.props.navigation.navigate("Home");
                  }}
                ></Ionicons>
                <Text style={styles.headerTitleList}>
                  Danh sách phát ({this.state.students.length})
                </Text>
                <Ionicons
                  onPress={() => alert("Tính năng này đang được phát triển")}
                  style={[styles.iconItem, styles.alarm]}
                  name="alarm-outline"
                ></Ionicons>
                <Ionicons
                  style={[styles.iconItem, styles.iconMore]}
                  name="list"
                ></Ionicons>
              </View>

              {/* Danh sách bài hát */}
              <ScrollView style={{ width: "100%", height: 700 }}>
                {this.state.students.map((song, index) => {
                  return (
                    // <TouchableOpacity>
                    <Task
                      id={this.state.id}
                      setSong={this.setSong}
                      song={song}
                      key={index}
                      taskRunning={this.state.taskRunning}
                      playSong={this.playSong}
                    />

                    // </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  loader: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  listContainer: {
    opacity: 1,
    position: "absolute",
  },
  playList: {
    position: "relative",
    width: width,
  },
  headerList: {
    flex: 1,
    flexDirection: "row",
    color: "#ffffff",
    alignItems: "center",
    height: 64,
    width: width
  },
  iconItem: {
    color: "#FFFFFF",
    fontSize: 32,
  },
  closeList: {
    paddingHorizontal: 8,
  },
  headerTitleList: {
    color: "#ffffff",
    textAlign: "center",
    marginLeft: 8,
    marginRight: 60,
    fontSize: 22
  },
  iconMore: {
    paddingHorizontal: 8
  },
  imgBackground: {
    width: width,
    height: height,
    opacity: 0.85,
  },
  alarm: {
    opacity: 0.8,
    paddingHorizontal: 8
  },
});