import { StyleSheet } from "react-native";
import { colors } from "../../Theme/Colors";

export const styleSwipeableItem = StyleSheet.create({
  deleteButton: {
    flex: 1, // prend toute la hauteur
    width: 80,
    backgroundColor: colors.danger,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    color: colors.white,
    fontWeight: '700',
  },
});
