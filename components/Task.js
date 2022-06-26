import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ImageBackground } from "react-native";
// import DataShare from "./DataShare";

const {width, height} = Dimensions.get('window');

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    // this.wrapperRef = React.createRef()
  }
  state = {
    activited: false,
    isLoved: false,
    backgroundColor: "",
    colorIconLove: "#FFFFFF",
  };
  // lấy song của item làm truyền lên cho cha
  // chay bai hat dc bam
  getSong = (song) => {
    this.props.setSong(song);
    this.props.playSong(song);
    // console.log("item:",uri);
  };
  // thay đổi icon trái tim khi đươc bấm vào
  changeColorIconLove = () => {
    if (!this.state.isLoved) {
      this.setState({ colorIconLove: "#EC3466" });
      alert(`Bạn đã thêm bài ${this.props.song.name} vào mục yêu thích`);
    } else {
      this.setState({ colorIconLove: "#FFFFFF" });
      alert(`Bạn xóa bài hát  ${this.props.song.name} khỏi mục yêu thích`);
    }
  };

  changeBackgroundItem = () => {
    if (!this.state.activited) {
      this.setState({ backgroundColor: "#55BCF6" });
    } else {
      this.setState({ backgroundColor: "" });
    }
  };
  render() {
    // console.log("props:",this.props.song.links.images[1].url);
    const uri = this.props.song.linkImg2;
    const author = this.props.song.author;
    const song = this.props.song;
    // console.log((this.state.activited == false) ? "activitedItem" : "" );

    // var backgroundColor = "";
    return (
      <TouchableOpacity
        // onPress={() => this.setState({ activited: !this.state.activited })}
        onPress={() => {
          // this.setState({activited: this.props.taskRunning})
          // this.changeBackgroundItem()
          this.getSong(song);
          this.setState({ activited: !this.state.activited });
          // this.changeBackgroundItem()
          // navigation.navigate('Music')
        }}
      >
        {/* <ImageBackground   source = {uri} > */}
        <View
          style={[
            styles.listItem,
            { backgroundColor: this.props.id == song.id ? "#55BCF6" : "" },
          ]}
        >
          {/* Left Task */}
          <View style={styles.leftItem}>
            <Image source={{ uri: uri }} style={styles.imageItem} />
          </View>

          {/* Main Task */}
          <View style={styles.mainItem}>
            <Text style={styles.nameItem}>{this.props.song.name}</Text>
            <Text style={styles.authorItem}>{author}</Text>
          </View>

          {/* Right Task */}
          <View style={styles.rightItem}>
            <Ionicons
              style={[styles.iconItem, { color: this.state.colorIconLove }]}
              name={this.state.isLoved == false ? "heart-outline" : "heart"}
              onPress={() => {
                this.changeColorIconLove();
                this.setState({ isLoved: !this.state.isLoved });
              }}
            ></Ionicons>
            <Ionicons
              name={this.state.activited == false ? "menu" : "barcode"}
              style={styles.iconItem}
            ></Ionicons>
          </View>
          {/* <DataShare song={this.state.song} /> */}
        </View>
        {/* </ImageBackground> */}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: 'center',
    // backgroundColor: '#b6b6b6',
    padding: 10,
    borderColor: "#55BCF6",
    borderRadius: 5,
    width: width,
  },
  activitedItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#B6D5D7",
    width: width,
  },
  leftItem: {
    paddingRight: 18,
  },
  mainItem: {
    width: 260,
  },
  rightItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageItem: {
    width: 45,
    height: 45,
    borderRadius: 10,
  },
  iconItem: {
    color: "#FFFFFF",
    fontSize: 24,
    paddingRight: 12,
  },
  nameItem: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  authorItem: {
    fontSize: 14,
    color: "#FFFFFF",
  },
});