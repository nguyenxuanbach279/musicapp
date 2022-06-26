import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('window');
export default function UserScreen() {
  return (
    <View style={styles.userScreenContainer}>
      <View style={styles.userScreenHeader}>
        <AntDesign
          name="arrowleft"
          size={32}
          style={styles.backIcon}
          color="white"
        />
        <Text style={styles.headerTitle}>Tài khoản cá nhân</Text>
        <Ionicons
          name="settings-outline"
          size={32}
          style={styles.settingIcon}
          color="white"
        />
      </View>

      <View style={styles.userInfo}>
        <View style={styles.userIcon}>
          <FontAwesome5 name="user-alt" size={32} color="white" />
        </View>
        <View style={styles.userDetail}>
          <Text style={styles.userName}>Vũ Quốc Bảo</Text>
          <View style={styles.statusBox}>
            <Text style={styles.userStatus}>FREE</Text>
          </View>
        </View>
      </View>

      <Text style={styles.contentTitle}>Cá nhân</Text>
      <View style={styles.personalList}>
        <View style={styles.personalItem}>
          <View personalItemIcon>
            <Feather name="user-plus" size={32} color="white" />
          </View>
          <Text style={styles.itemTitle}>Danh sách quan tâm</Text>
          <View style={styles.detailItemIcon}>
            <FontAwesome name="angle-right" size={24} color="white" />
          </View>
        </View>
        <View style={styles.personalItem}>
          <View personalItemIcon>
            <FontAwesome5 name="ban" size={32} color="white" />
          </View>
          <Text style={styles.itemTitle}>Danh sách chặn</Text>
          <View style={styles.detailItemIcon}>
            <FontAwesome name="angle-right" size={24} color="white" />
          </View>
        </View>
        <View style={styles.personalItem}>
          <View personalItemIcon>
            <MaterialCommunityIcons
              name="clock-time-five-outline"
              size={32}
              color="white"
            />
          </View>
          <Text style={styles.itemTitle}>Danh sách tạm ẩn</Text>
          <View style={styles.detailItemIcon}>
            <FontAwesome name="angle-right" size={24} color="white" />
          </View>
        </View>
      </View>

      <Text style={styles.contentTitle}>Dịch vụ</Text>
      <View style={styles.personalList}>
        <View style={styles.personalItem}>
          <View personalItemIcon>
            <FontAwesome name="viacoin" size={32} color="white" />
          </View>
          <Text style={styles.itemTitle}>Mua VIP</Text>
          <View style={styles.detailItemIcon}>
            <FontAwesome name="angle-right" size={24} color="white" />
          </View>
        </View>
        <View style={styles.personalItem}>
          <View personalItemIcon>
            <MaterialCommunityIcons name="signal-4g" size={32} color="white" />
          </View>
          <Text style={styles.itemTitle}>Tiết kiệm 3G/4G truy cập</Text>
        </View>
        <View style={styles.personalItem}>
          <View personalItemIcon>
            <MaterialCommunityIcons
              name="file-document-edit-outline"
              size={32}
              color="white"
            />
          </View>
          <Text style={styles.itemTitle}>Nhập code VIP</Text>
        </View>
      </View>

      <View style={styles.logoutBox}>
        <View style={styles.logoutIcon}>
          <MaterialCommunityIcons name="logout" size={32} color="#fff" />
        </View>
        <Text style={styles.logoutTitle}>Đăng xuất</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userScreenContainer: {
    width: width,
    height: height,
    backgroundColor: '#222831',
  },
  userScreenHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 64,
  },
  headerTitle: {
    fontSize: 20,
    color: 'white',
    flex: 1,
  },
  backIcon: {
    paddingHorizontal: 16,
  },
  settingIcon: {
    paddingHorizontal: 16,
  },
  userInfo: {
    height: 64,
    backgroundColor: '#750253',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userDetail: {
    marginLeft: 8,
  },
  userIcon: {
    backgroundColor: '#ccc',
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginHorizontal: 8,
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 2,
  },
  userName: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 4,
  },
  statusBox:{
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userStatus: {
    fontSize: 12,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 4,
    
    borderRadius: 4,
  },
  contentTitle: {
    color: '#fff',
    fontSize: 28,
    // fontWeight: 600,
    marginVertical: 16,
    marginLeft: 16,
  },
  personalList: {
    // borderBottomColor: "#ccc",
    // borderBottomWidth: 1,
    // opacity: 0.8,
  },
  personalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    paddingVertical: 12
  },
  personalItemIcon: {
    marginRight: 16,
  },
  itemTitle: {
    color: '#fff',
    marginLeft: 16,
    flex: 1,
    fontSize: 22
  },
  detailItemIcon: {},
  logoutBox: {
    flexDirection: 'row',
    marginTop: 32,
    marginLeft: 16,
  },
  logoutIcon: {
    marginRight: 16,
  },
  logoutTitle: {
    color: '#fff',
    fontSize: 20,
  },
});
