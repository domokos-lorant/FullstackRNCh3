import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import Feed from "./screens/Feed";

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Feed style={styles.feed} />
    </View>
  );
}

const platfromVersion =
  Platform.OS === "ios"
    ? parseInt(Platform.Version.toString(), 10)
    : Platform.Version;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  feed: {
    flex: 1,
    marginTop:
      Platform.OS === "android" || platfromVersion < 11
        ? Constants.statusBarHeight
        : 0,
  },
});
