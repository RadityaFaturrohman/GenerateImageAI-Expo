import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils';

const styles = StyleSheet.create({
  followContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    height: 32,
    borderRadius: 10,
    backgroundColor: COLORS.primary()
  },
  followingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    height: 32,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.primary(),
    backgroundColor: COLORS.creditcard_bg()
  }
})

export default styles;