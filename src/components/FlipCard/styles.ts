import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cardContainer: {
    width: 120,
    height: 170,
    margin: 4,
  },
  card: {
    width: 120,
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cornflowerblue',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1.5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  frontCard: {
    backgroundColor: 'whitesmoke',
  },
  frontText: {
    color: 'black',
  },
  label: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  manualTriggers: {
    flexDirection: 'row',
  },
  trigger: {
    backgroundColor: 'black',
    margin: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
});

export default styles;
