import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  View,
  ViewStyle,
} from "react-native";
import CardList from "../components/CardList";
import { Item } from "../model/Item";
import { fetchImages } from "../utils/api";

export type Props = {
  style: ViewStyle;
};

type State = {
  loading: boolean;
  error: boolean;
  items: Item[];
};

export default function Feed({ style }: Props): JSX.Element {
  const defaultState: State = { loading: true, error: false, items: [] };
  const [state, setState] = useState(defaultState);
  useEffect((): void => {
    (async () => {
      try {
        const items = await fetchImages();
        setState({ loading: false, items, error: false });
      } catch (e) {
        setState({ loading: false, items: [], error: true });
      }
    })();
  });

  const { loading, items, error } = state;

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Error...</Text>;
  }

  return (
    <SafeAreaView style={style}>
      <CardList items={items} />
    </SafeAreaView>
  );
}
