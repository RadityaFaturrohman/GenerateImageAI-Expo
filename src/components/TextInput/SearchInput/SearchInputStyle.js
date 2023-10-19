import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils';

const styles = StyleSheet.create({
  searchContainer: {
    height: 60,
    borderRadius: 10,
    backgroundColor: COLORS.dark_text(),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingLeft: 18,
    paddingRight: 5,
    borderWidth: 1,
    borderColor: COLORS.dark_text(.2),
    marginHorizontal: 25
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  searchInput: {
    width: '100%',
    height: '100%',
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.dark_text(1)
  },
});

export default styles;