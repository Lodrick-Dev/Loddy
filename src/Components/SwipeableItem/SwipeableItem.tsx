import React from 'react';
import { View, Text, Pressable, Animated } from 'react-native';
import Swipeable  from 'react-native-gesture-handler/Swipeable';
import { styles } from '../../Screens/Shopping/Styles';
import { styleSwipeableItem } from './styleSwipeableItem';

type Item = {
  id: string;
  name: string;
  qty: number;
  price: number;
};
type SwipeableItemProps = {
  item: Item;
  onDelete: (id: string) => void;
};


export default function SwipeableItem({ item, onDelete }: SwipeableItemProps) {
  // Fonction pour le bouton "Supprimer"
  const renderRightActions = (
    progress: any,
    dragAnimatedValue: any,
    swipeable?: any
  ) => {
    const scale = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });


    return (
      <Animated.View style={{ transform: [{ scale }] }}>
        <Pressable
          onPress={() => onDelete(item.id)}
          style={styleSwipeableItem.deleteButton}
        >
          <Text style={styleSwipeableItem.deleteText}>
            Supprimer
          </Text>
        </Pressable>
      </Animated.View>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.item}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemSub}>
          {item.qty} × {item.price.toFixed(2)} € ={' '}
          <Text style={styles.bold}>
            {(item.qty * item.price).toFixed(2)} €
          </Text>
        </Text>
      </View>
    </Swipeable>
  );
}