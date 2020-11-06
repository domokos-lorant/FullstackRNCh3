import React, { useCallback } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { Item } from "../model/Item";
import { getImageFromId } from "../utils/api";
import Card from "./Card";

export type Props = {
  items: Item[];
};

export default function CardList({ items }: Props): JSX.Element {
  const keyExtractor = useCallback(({ id }: Item) => id.toString(), []);
  const renderItem = useCallback(
    ({ item: { author, id } }: ListRenderItemInfo<Item>): JSX.Element => {
      return (
        <Card
          fullName={author}
          image={{ uri: getImageFromId(id) }}
          linkText="Comments"
          onPressLinkText={() => {}}
        />
      );
    },
    []
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
}
