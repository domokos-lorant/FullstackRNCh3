import React, { useCallback, useState } from "react";
import {
  Image,
  ImageSourcePropType,
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import AuthorRow from "./AuthorRow";

export type Props = {
  fullName: string;
  linkText: string;
  onPressLinkText: () => void;
  image: ImageSourcePropType;
};

export default function Card({
  fullName,
  linkText,
  onPressLinkText,
  image,
}: Props): JSX.Element {
  const [state, setState] = useState({ loading: true });
  const handleLoad = useCallback(() => {
    setState({ loading: false });
  }, [setState]);
  const loading = { state };

  return (
    <View>
      <AuthorRow
        fullName={fullName}
        linkText={linkText}
        onPressLinkText={onPressLinkText}
      />
      <View style={styles.image}>
        {loading && (
          <ActivityIndicator style={StyleSheet.absoluteFill} size="large" />
        )}
        <Image
          style={StyleSheet.absoluteFill}
          source={image}
          onLoad={handleLoad}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: "rgba(0, 0, 0, 0.02)",
  },
});
