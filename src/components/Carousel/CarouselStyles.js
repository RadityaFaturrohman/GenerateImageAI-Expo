import { StyleSheet, useColorScheme } from "react-native";
import { COLORS } from "../../utils";

// const isDarkMode = useColorScheme() === 'dark'

const styles = StyleSheet.create({
  carouselContainer: {
    width: '100%',
    height: 135,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row'
    // borderWidth: isDarkMode ? 0 : 1,
    // borderColor: COLORS.light_text(.92),
    // shadowColor: rgba(0, 0, 0, .25),
    // shadowOffset: {
    //   width: 0,
    //   height: 4
    // },
    // shadowRadius: 30
  },
  carouselImage: {
    height: 135,
    borderRadius: 10,
  }
})

export default styles;