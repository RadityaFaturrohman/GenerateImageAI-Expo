import { StyleSheet } from "react-native";
import { COLORS } from "../../../utils";

const styles = StyleSheet.create({
  likeContainer: (cusWidth, cusHeight) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.dark_text(.2),
    borderRadius: 50,
    width: cusWidth ?? 40,
    height: cusHeight ?? 40
  }),

  likeIcon: {
    width: 18,
    height: 18
  }
});

export default styles;