import { StyleSheet } from "react-native"
import { COLORS } from "../../../utils";

const styles = StyleSheet.create({
  notificationCardContainer: {
    display: 'flex',
    gap: 11,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8
  },
  notificationCard: {
    borderRadius: 2,
    width: '100%',
    height: 74,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 18,
    position: 'relative',
  },
  unreadDot: {  
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: COLORS.warning(),
    marginRight: 4
  },
  senderProfile: {
    width: 48,
    height: 48,
    borderRadius: 50,
    borderWidth: .8,
    borderColor: COLORS.dark_text(.2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationMessageContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    marginLeft: 12
  },
  notificationMessage: {
    color: COLORS.white(.8),
    fontSize: 14,
    fontWeight: '600'
  },
  notificationInfo: {
    color: COLORS.dark_text(),
    fontWeight: '400',
    fontSize: 10
  },
  notificationFeedback: {
    marginLeft: 'auto',
    minWidth: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default styles;