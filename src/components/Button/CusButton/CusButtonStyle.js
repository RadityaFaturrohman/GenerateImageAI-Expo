import { StyleSheet } from 'react-native'
import { COLORS } from '../../../utils'

const styles = StyleSheet.create({
  buttonContainer: (isRounded, cusWidth, cusHeight) => ({
    width: cusWidth ?? '100%',
    height: cusHeight ?? 56,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: isRounded ? 50 : 12
  }),

  buttonText: (cusTextColor) => ({
    color: cusTextColor ?? COLORS.white(),
    fontWeight: 'bold',
    fontSize: 14
  }),

  buttonOutlineStyle: (cusColor) => ({
    borderWidth: 1,
    borderColor: cusColor ?? COLORS.primary()
  }),

  buttonDefaultStyle: (cusColor) => ({
    backgroundColor: cusColor ?? COLORS.primary(),
  }),

})

export default styles;