import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  Card3: {
    height: 115,
    width: Dimensions.get('window').width * 0.9,
    marginHorizontal: 20,
    borderRadius: 10,
    borderBottomWidth: 2,
    borderBottomEndRadius: 10,
    borderEndColor: '#bfbebe',
    marginTop: 15,
    flexDirection: 'row',
  },
  Card3pic: {
    width: 115,
    height: 112,
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
  },
  Card3Title: {
    marginLeft: 10,
    textAlign: 'left',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  Card3Details: {
    marginHorizontal: 10,
    marginTop: 7,
    flexDirection: 'row',
    alignContent: 'space-around',
  },
  Card3Text: {
    fontSize: 12,
  },
  CardInPersonal: {
    height: 270,
    width: 190,
    borderWidth: 1,
    borderColor: '#bfbebe',
    borderRadius: 10,
    shadowColor: 'darkgrey',
    marginTop: 15,
    marginBottom: 2,
    marginLeft: 13.5,
    // backgroundColor: '#bfbebe',
  },
  CardTitle: {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    color: '#28527A',
    fontSize: 14,
  },
  CardDetails: {
    marginLeft: 7,
    flexDirection: 'row',
  },
  CardText: {
    fontSize: 12,
    color: 'rgba(40, 82, 122, 0.65)',
    marginTop: -3,
  },
  pic: {
    // width: PixelRatio.getPixelSizeForLayoutSize(76),
    // height: PixelRatio.getPixelSizeForLayoutSize(76),
    backgroundColor: '#E0E0E0',
    aspectRatio: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  personalbtn: {
    width: 115,
    height: 40,
    color: 'transparent',
    fontWeight: '500',
    borderWidth: 1,
    borderColor: '#28527A',
    borderRadius: 20,
    flexDirection: 'row',
    paddingVertical: 8,
    marginLeft: 9,
    marginRight: 9,
    justifyContent: 'center',
  },
  personalbtnText: {
    color: '#CBD8E4',
    fontSize: 16,
    fontWeight: 'bold',
    opacity: 0.5,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  personalbtnPress: {
    borderRadius: 20,
    flexDirection: 'row',
    paddingVertical: 8,
    backgroundColor: '#1784B2',
    width: 115,
    height: 40,
    borderWidth: 1,
    borderColor: '#28527A',
    marginLeft: 9,
    marginRight: 9,
    justifyContent: 'center',
  },
  personalbtnPressText: {
    color: '#FBEEAC',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  personalmanagebtnPressText: {
    color: '#FBEEAC',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  personalmanagebtnText: {
    color: '#CBD8E4',
    fontSize: 16,
    fontWeight: 'bold',
    opacity: 0.5,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});