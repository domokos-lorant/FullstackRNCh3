import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Avatar from "./Avatar";
import getInitials from "../utils/getInitials";
import getAvatarColor from "../utils/getAvatarColor";

export type Props = {
  fullName: string;
  linkText: string;
  onPressLinkText: () => void;
};

export default function AuthorRow({
  fullName,
  linkText,
  onPressLinkText,
}: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Avatar
        initials={getInitials(fullName)}
        size={35}
        backgroundColor={getAvatarColor(fullName)}
      />
      <Text style={styles.text} numberOfLines={1}>
        {fullName}
      </Text>
      {!!linkText && onPressLinkText && (
        <TouchableOpacity onPress={onPressLinkText}>
          <Text numberOfLines={1}>{linkText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  text: {
    flex: 1,
    marginHorizontal: 6,
  },
});
