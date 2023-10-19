import { StyleSheet } from 'react-native'
import { COLORS, TEXT } from '../../../utils'

const styles = StyleSheet.create({
  notificationContainer: {
    width: '100%',
    paddingHorizontal: 0,
    marginTop: 25,
  },
  notificationDate: {
    marginLeft: 20,
    color: COLORS.dark_text(),
    ...TEXT.title
  },
  notificationListContainer: {
    display: 'flex',
    gapRow: 11
  }
})

export default styles