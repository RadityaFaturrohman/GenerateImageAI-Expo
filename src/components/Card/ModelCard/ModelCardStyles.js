import { StyleSheet, Dimensions } from "react-native";
import { COLORS, TEXT } from "../../../utils";

const deviceWidth = Dimensions.get('window').width - 43;

const styles = StyleSheet.create({
  cardContainer: {
    width:deviceWidth / 2,
    height: 150,
    borderRadius: 8,
    borderWidth: .8,
    borderColor: COLORS.dark_text(.2),
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  cardImage: {
    width: deviceWidth / 2 - 2,
    height: 148,
    objectFit: 'cover',
    borderRadius: 8,
  },
  cardShadow: {
    width: deviceWidth / 2 - 2,
    height: 148,
    borderRadius: 6,
    backgroundColor: COLORS.black(.3),
    position: 'absolute',
    zIndex: 2
  },
  cardTitle: {
    ...TEXT.subHeader_semibold,
    color: COLORS.white(),
    position: 'absolute',
    left: 12,
    bottom: 12,
    zIndex: 3
  }
})

export default styles;