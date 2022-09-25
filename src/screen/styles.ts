import {StyleSheet} from 'react-native';
import {fonts} from '../theme/xcolor';

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 8,
  },
  bodyContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textFormat: {
    fontSize: fonts.lg,
    fontWeight: '500',
  },
  headerWrapper: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 8,
  },
});

export default styles;
