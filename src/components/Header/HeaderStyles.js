import { StyleSheet } from "react-native";
import { COLORS, TEXT } from "../../utils";

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 88,
    backgroundColor: COLORS.dark_bg(),
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 42,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.dark_text(.2)
  },
  appLogo: {
    ...TEXT.header,
    color: COLORS.white(),
  },
  creditContainer: {
    minWidth: 57,
    height: 28,
    display: 'flex',
    flexDirection: 'row',
    gap: 11,
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 18,
    borderRadius: 25,
    borderWidth: .5,
    borderColor: COLORS.dark_text(.3),
    backgroundColor: COLORS.dark_secondary()
  },
  creditCounter: {
    color: COLORS.white()
  },
  buttonContainer: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: COLORS.dark_text(.2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default styles;