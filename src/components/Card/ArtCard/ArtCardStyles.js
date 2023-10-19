import { StyleSheet, Dimensions } from "react-native";
import { COLORS, TEXT } from "../../../utils";

const deviceWidth = Dimensions.get('window').width - 62;

const styles = StyleSheet.create({
  cardContainer: (cusWidth, cusHeight, cusMarginBottom, cusRadius) => ({
    width: cusWidth ?? deviceWidth / 2,
    height: cusHeight ?? 250,
    marginBottom: cusMarginBottom ?? 0,
    borderRadius: cusRadius ?? 8,
    borderWidth: .5,
    borderColor: COLORS.dark_text(.2),
  }),

  cardImage: (cusWidth, cusHeight, cusRadius) => ({
    width: cusWidth - 2 ?? deviceWidth / 2 - 2,
    height: cusHeight - 2  ?? 248,
    borderRadius: cusRadius ?? 8,
  }),

  creatorInfo: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    left: 14,
    zIndex: 1,
    gap: 8
  },

  creatorProfile: {
    width: 25,
    height: 25,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#1e2c39'
  },

  creatorName: {
    ...TEXT.subtitle,
    color: COLORS.white(),
  },

  likeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 1
  },

  cardShadow: (cusWidth, cusHeight, cusRadius) => ({
    width: cusWidth ?? deviceWidth / 2 - 2,
    height: cusHeight - 2 ?? 248,
    position: 'absolute',
    zIndex: 0,
    borderRadius: cusRadius ?? 8
  })
})

export default styles;