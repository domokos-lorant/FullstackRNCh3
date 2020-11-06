import React, { useMemo } from "react";
import { View, StyleSheet, ViewStyle, TextStyle, Text } from "react-native";

export type Props = {
  initials: string;
  size: number;
  backgroundColor: string;
};

export default function Avatar({
  initials,
  size,
  backgroundColor,
}: Props): JSX.Element {
  const styles = useAvatarStyle(size, backgroundColor);

  return (
    <View style={styles.avatar}>
      <Text style={styles.text}>{initials}</Text>
    </View>
  );
}

export type Style = {
  avatar: ViewStyle;
  text: TextStyle;
};

function useAvatarStyle(size: number, backgroundColor: string): Style {
  return useMemo(() => {
    return StyleSheet.create({
      avatar: {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        alignItems: "center",
        justifyContent: "center",
      },
      text: { color: "white" },
    });
  }, [size, backgroundColor]);
}
