import * as React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import Task from "../components/Task";
import { songs } from "../data/songs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button, ImageBackground } from "react-native";

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    uri: "https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576",
    taskRunning: false,
    id: -1,
    song: [],
    // uri: 'C:\\Users\\binhc\\Downloads\\background_test.png'
  };

  setImageBackground = (song) => {
    this.setState({ uri: song.links.images[0].url });
    this.setState({ id: song.id });
    this.setState({ song: song });
    this.props.getSongPlay(song);
    return song;
  };

  render() {
    // console.log("image:", this.state.uri);
    // this.setImageBackground('abc');
    // console.log(songs);
    return (
      <View style={styles.playList}>
        <ImageBackground
          source={this.state.uri}
          style={styles.imgBackground}
        ></ImageBackground>
        <View style={styles.listContainer}>
          {/* Header của playlist */}
          <View style={styles.headerList}>
            <Ionicons
              style={[styles.iconItem, styles.closeList]}
              name="close"
            ></Ionicons>
            <Text style={styles.headerTitleList}>
              Danh sách phát ({songs.length})
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
          <ScrollView>
            {songs.map((song, index) => {
              return (
                // <TouchableOpacity>
                <Task
                  id={this.state.id}
                  setImageBackground={this.setImageBackground}
                  song={song}
                  key={index}
                  taskRunning={this.state.taskRunning}
                />
                // </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    // backgroundColor: '#B6D5D7',
    position: "fixed",
    // left: '500px',
    opacity: "1",
    position: "absolute",
    top: "25px",
    // left: '500px',
  },
  playList: {
    position: "relative",
  },
  headerList: {
    flex: 1,
    flexDirection: "row",
    color: "#ffffff",
    alignItems: "center",
    minHeight: "36px",
    paddingLeft: "8px",
  },
  iconItem: {
    color: "#FFFFFF",
    fontSize: "24px",
    //   opacity: '.8',
  },
  closeList: {
    paddingRight: "10px",
  },
  headerTitleList: {
    color: "#ffffff",
    fontWeight: 600,
    textAlign: "center",
    paddingRight: "90px",
  },
  iconMore: {
    paddingLeft: "25px",
  },
  imgBackground: {
    width: "350px",
    height: "100vh",
    // opacity: '.8',
    // left: '500px',
    opacity: ".8    ",
  },
  alarm: {
    opacity: ".8",
  },
});