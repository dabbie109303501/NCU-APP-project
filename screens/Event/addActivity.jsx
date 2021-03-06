import React, { useState } from 'react';
import {
  Text, Platform, View, SafeAreaView, TextInput,
  ScrollView, TouchableOpacity, Dimensions, Image, TouchableHighlight,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  Dialog, Portal, Button, Provider,
} from 'react-native-paper';
import {
  MaterialCommunityIcons, AntDesign, Foundation,
} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import {
  NativeBaseProvider, Box, Divider, Heading, ZStack,
} from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import ActiveController from '../../controller/Active';
import styles from './style_folder/Styles_addActivity';

function add({ navigation }) {
  const [data, setData] = useState({
    cost: '',
    link: '',
    image1: '',
    image2: '',
    image3: '',
    hostName: '',
    hostPhone: '',
    hostMail: '',
  });

  const [genre, setGenre] = useState(false);
  const [name, setName] = useState(false);
  const [start, setStartCheck] = useState(false);
  const [end, setEndCheck] = useState(false);
  const [limitNum, setLimitNum] = useState(false);
  const [place, setPlace] = useState(false);
  const [detail, setDetail] = useState(false);

  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();

  let NoPicLink;
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    NoPicLink = result.uri;
    if (!result.cancelled) {
      if (image1 === undefined) {
        setImage1(result.uri);
        setData({ ...data, image1: result.uri });
      } else if (image2 === undefined) {
        setImage2(result.uri);
        setData({ ...data, image2: result.uri });
      } else if (image3 === undefined) {
        setImage3(result.uri);
        setData({ ...data, image3: result.uri });
      }
    }
  };

  const setImageFromGenre = () => {
    if (data.image1 === '') {
      if (data.genre === '????????????') {
        data.image1 = 'https://lh3.googleusercontent.com/cLrc_IU_8wcqIeOgpUIgLz2EbBD6z6PrQLp5l0dtTsvPzsAZFxitJ5gzZ2VGz7Y4bIFrG8hQcTuYXzMHMvj-JN0=w1280';
      }
      if (data.genre === '????????????') {
        data.image1 = 'https://lh3.googleusercontent.com/13WRw2-wmjCVD1QuSUjUjeJVOKnamdacrG9rYAu-6TEjxao7qkq4SaaL6I--LsqFdPiDto2MripJ0AeqX1jpLkw=w1280';
      }
      if (data.genre === '????????????') {
        data.image1 = 'https://lh3.googleusercontent.com/9-KpYqgT7JpVxN9YJdyZK6cs1KkjkW3FvJfNN_MKIWC0TJsF23naOw4xeELUkmKGpK0Ql-YwOYAV6Nm7a10aHBs=w1280';
      }
      if (data.genre === '????????????') {
        data.image1 = 'https://lh6.googleusercontent.com/VhFxnnfJno8OaJEejdzQUfTkOPBXH0EkDpp_fZU1lAqe8mxsqUryurnBGu88QwWx1ZuW5dOMUwQdOOIlVHXZVdo=w1280';
      }
      if (data.genre === '????????????') {
        data.image1 = 'https://lh4.googleusercontent.com/MI5GYVApUBawNSN07_TzzpjRT4Kso7Lr2xa0ryVIiRM6dvFQBsgr568WEfLCLtl1NeUia0wZQB8ZBrvATX7dvKo=w1280';
      }
      if (data.genre === '????????????') {
        data.image1 = 'https://lh6.googleusercontent.com/_4pimcui3FxablQrSCnQcZYCRBw8GHl-P604nwcGPnniiMrAoE23lCkWaaEgJ2flQbqcxTrn7PEp6GnehqFeruE=w1280';
      }
    }
  };

  const [visible1, setVisible1] = React.useState(false);
  const [date1, setDate1] = useState(new Date());
  const [mode1, setMode1] = useState('date');
  const [show1, setShow1] = useState(false);
  const [startDateText, setStartDate] = useState();
  const [startTimeText, setStartTime] = useState();
  const [startText, setStart] = useState();
  const showDialog1 = () => setVisible1(true);

  const hideDialog1 = () => {
    if (startDateText !== undefined && startTimeText !== undefined) {
      setStart(`${startDateText}  ${startTimeText}`);
      setStartCheck(true);
    }
    setVisible1(false);
  };
  const showMode1 = (currentMode) => {
    setShow1(true);
    setMode1(currentMode);
  };
  const showTimepicker1 = () => {
    showMode1('time');
  };
  const showDatepicker1 = () => {
    showMode1('date');
  };
  const onStartChange = (event, selectedDate) => {
    const currentDate = selectedDate || date1;
    setShow1(false);
    setDate1(currentDate);

    const tempDate = new Date(currentDate);
    if (mode1 === 'date') {
      const fDate = `${tempDate.getFullYear()}/${tempDate.getMonth() + 1}/${tempDate.getDate()}`;
      setStartDate(`${fDate}`);
    } else if (mode1 === 'time') {
      const fTime = `${tempDate.getHours() < 10 ? `0${tempDate.getHours()}` : tempDate.getHours()} : ${tempDate.getMinutes() < 10 ? `0${tempDate.getMinutes()}` : tempDate.getMinutes()}`;
      setStartTime(`${fTime}`);
    }
    setData({ ...data, startTime: tempDate });
  };

  const hideDialogi1 = () => {
    if (startDateText === undefined || startTimeText === undefined) {
      const currentDate = date1;
      setDate1(currentDate);
      const tempDate = new Date(currentDate);
      const fDate = `${tempDate.getFullYear()}/${tempDate.getMonth() + 1}/${tempDate.getDate()}`;
      const fTime = `${tempDate.getHours() < 10 ? `0${tempDate.getHours()}` : tempDate.getHours()} : ${tempDate.getMinutes() < 10 ? `0${tempDate.getMinutes()}` : tempDate.getMinutes()}`;
      setData({ ...data, startTime: tempDate });
      setStart(`${fDate}  ${fTime}`);
      setStartCheck(true);
    } else {
      setStart(`${startDateText}  ${startTimeText}`);
      setStartCheck(true);
    }
    setVisible1(false);
  };
  const onStartChangei1 = (event, selectedDate) => {
    const currentDate = selectedDate || date1;
    setDate1(currentDate);
    const tempDate = new Date(currentDate);
    const fDate = `${tempDate.getFullYear()}/${tempDate.getMonth() + 1}/${tempDate.getDate()}`;
    setStartDate(`${fDate}`);
    setData({ ...data, startTime: tempDate });
  };
  const onStartChangei2 = (event, selectedDate) => {
    const currentDate = selectedDate || date1;
    setDate1(currentDate);
    const tempDate = new Date(currentDate);
    const fTime = `${tempDate.getHours() < 10 ? `0${tempDate.getHours()}` : tempDate.getHours()} : ${tempDate.getMinutes() < 10 ? `0${tempDate.getMinutes()}` : tempDate.getMinutes()}`;
    setStartTime(`${fTime}`);
    setData({ ...data, startTime: tempDate });
  };

  const [visible2, setVisible2] = React.useState(false);
  const [date2, setDate2] = useState(new Date());
  const [mode2, setMode2] = useState('date');
  const [show2, setShow2] = useState(false);
  const [endDateText, setEndDate] = useState();
  const [endTimeText, setEndTime] = useState();
  const [endText, setEnd] = useState();
  const showDialog2 = () => setVisible2(true);
  const hideDialog2 = () => {
    if (endDateText !== undefined && endTimeText !== undefined) {
      setEnd(`${endDateText}  ${endTimeText}`);
      setEndCheck(true);
    }
    setVisible2(false);
  };
  const showMode2 = (currentMode) => {
    setShow2(true);
    setMode2(currentMode);
  };
  const showTimepicker2 = () => {
    showMode2('time');
  };
  const showDatepicker2 = () => {
    showMode2('date');
  };
  const onEndChange = (event, selectedDate) => {
    const currentDate = selectedDate || date2;
    setShow2(false);
    setDate2(currentDate);

    const tempDate = new Date(currentDate);
    if (mode2 === 'date') {
      const fDate = `${tempDate.getFullYear()}/${tempDate.getMonth() + 1}/${tempDate.getDate()}`;
      setEndDate(`${fDate}`);
    } else if (mode2 === 'time') {
      const fTime = `${tempDate.getHours() < 10 ? `0${tempDate.getHours()}` : tempDate.getHours()} : ${tempDate.getMinutes() < 10 ? `0${tempDate.getMinutes()}` : tempDate.getMinutes()}`;
      setEndTime(`${fTime}`);
    }
    setData({ ...data, endTime: tempDate });
  };

  const hideDialogi2 = () => {
    if (endDateText === undefined || endTimeText === undefined) {
      const currentDate = date2;
      setDate2(currentDate);
      const tempDate = new Date(currentDate);
      const fDate = `${tempDate.getFullYear()}/${tempDate.getMonth() + 1}/${tempDate.getDate()}`;
      const fTime = `${tempDate.getHours() < 10 ? `0${tempDate.getHours()}` : tempDate.getHours()} : ${tempDate.getMinutes() < 10 ? `0${tempDate.getMinutes()}` : tempDate.getMinutes()}`;
      setData({ ...data, endTime: tempDate });
      setEnd(`${fDate}  ${fTime}`);
      setEndCheck(true);
    } else {
      setEnd(`${endDateText}  ${endTimeText}`);
      setEndCheck(true);
    }
    setVisible2(false);
  };
  const onEndChangei1 = (event, selectedDate) => {
    const currentDate = selectedDate || date2;
    setDate2(currentDate);
    const tempDate = new Date(currentDate);
    const fDate = `${tempDate.getFullYear()}/${tempDate.getMonth() + 1}/${tempDate.getDate()}`;
    setEndDate(`${fDate}`);
    setData({ ...data, endTime: tempDate });
  };
  const onEndChangei2 = (event, selectedDate) => {
    const currentDate = selectedDate || date2;
    setDate2(currentDate);
    const tempDate = new Date(currentDate);
    const fTime = `${tempDate.getHours() < 10 ? `0${tempDate.getHours()}` : tempDate.getHours()} : ${tempDate.getMinutes() < 10 ? `0${tempDate.getMinutes()}` : tempDate.getMinutes()}`;
    setEndTime(`${fTime}`);
    setData({ ...data, endTime: tempDate });
  };

  const [isPress, setIsPress] = useState('');
  const values = ['????????????', '????????????', '????????????', '????????????', '????????????', '????????????'];
  return (
    <Provider>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <NativeBaseProvider>
            <View style={{ flex: 0.1, flexDirection: 'column' }}>
              <View style={{
                flexDirection: 'row',
                marginBottom: 44,
              }}
              >
                <Box style={{
                  flex: 0.8, justifyContent: 'center', alignItems: 'flex-start',
                }}
                >
                  <AntDesign
                    name="arrowleft"
                    size={28}
                    color="#28527A"
                    style={{ justifyContent: 'center' }}
                    onPress={() => { navigation.navigate('personal'); }}
                  />
                </Box>
                <View style={styles.nameheader}>
                  <Text style={styles.name}>
                    ????????????
                  </Text>
                </View>
                <View style={{
                  flex: 2, justifyContent: 'center', alignItems: 'flex-end',
                }}
                />
              </View>
            </View>
            <Box style={styles.body}>
              <Heading style={styles.inputboxText}>????????????(????????????)</Heading>
              <Box style={styles.categorybutton}>
                {values.map((value) => (
                  <TouchableHighlight
                    key={value}
                    activeOpacity={0.5} // ????????????
                    underlayColor="#28527A" // ?????????????????????
                    onPress={() => {
                      setIsPress(value);
                      setData({ ...data, genre: value });
                      setGenre(true);
                    }}
                    style={isPress === value ? styles.btnPress : styles.btnNormal}
                  >
                    <Text style={isPress === value ? styles.btnPText : styles.btnText}>
                      {value}
                    </Text>
                  </TouchableHighlight>
                ))}
              </Box>
            </Box>
            <Box style={styles.body}>
              <Heading style={styles.inputboxText}>????????????(??????)</Heading>
              <Box style={styles.inputbox}>
                <Box style={{ flexDirection: 'row' }}>
                  <TextInput
                    style={styles.input}
                    maxLength={10}
                    placeholder="?????????????????????(????????????)"
                    value={data.name}
                    onChangeText={(text) => {
                      setData({ ...data, name: text });
                      setName(true);
                      if (text === '') {
                        setName(false);
                      }
                    }}
                    selectionColor="#ccc"
                  />
                </Box>
              </Box>
            </Box>
            <Box style={styles.body}>
              <Heading style={styles.inputboxText}>????????????(??????)</Heading>
              <Box style={styles.inputbox}>
                <Box style={{ flexDirection: 'row' }}>
                  {Platform.OS === 'android' && (
                  <TouchableOpacity
                    onPress={() => {
                      showDialog1();
                    }}
                    style={{ width: '100%' }}
                  >
                    <TextInput
                      style={styles.input}
                      placeholder="????????????"
                      value={startText}
                      editable={false}
                    />
                  </TouchableOpacity>
                  )}
                  {(Platform.OS === 'android' && show1) && (
                  <DateTimePicker
                    testID="dateTimePicker1"
                    value={date1}
                    mode={mode1}
                    display="default"
                    onChange={onStartChange}
                  />
                  )}

                  {Platform.OS === 'ios' && (
                  <TouchableOpacity
                    onPress={() => {
                      showDialog1();
                    }}
                    style={styles.input}
                  >
                    {startText === undefined && (
                    <Text style={[styles.text, {
                      fontWeight: 'normal', color: '#BEBEBE', textAlign: 'center', paddingTop: Dimensions.get('window').height * 0.01, fontSize: 16,
                    }]}
                    >
                      ????????????
                    </Text>
                    )}
                    <Text style={[styles.text, { fontWeight: 'normal', textAlign: 'center', paddingTop: Dimensions.get('window').height * 0.005 }]}>{startText}</Text>
                  </TouchableOpacity>
                  )}
                </Box>
              </Box>
            </Box>
            <Box style={styles.body}>
              <Heading style={styles.inputboxText}>????????????(??????)</Heading>
              <Box style={styles.inputbox}>
                <Box style={{ flexDirection: 'row' }}>
                  {Platform.OS === 'android' && (
                  <TouchableOpacity
                    onPress={() => {
                      showDialog2();
                    }}
                    style={{ width: '100%' }}
                  >
                    <TextInput
                      style={styles.input}
                      placeholder="????????????"
                      value={endText}
                      editable={false}
                    />
                  </TouchableOpacity>
                  )}
                  {(Platform.OS === 'android' && show2) && (
                  <DateTimePicker
                    testID="dateTimePicker2"
                    value={date2}
                    mode={mode2}
                    display="default"
                    onChange={onEndChange}
                  />
                  )}

                  {Platform.OS === 'ios' && (
                  <TouchableOpacity
                    onPress={() => {
                      showDialog2();
                    }}
                    style={styles.input}
                  >
                    {endText === undefined && (
                    <Text style={[styles.text, {
                      fontWeight: 'normal', color: '#BEBEBE', textAlign: 'center', paddingTop: Dimensions.get('window').height * 0.01, fontSize: 16,
                    }]}
                    >
                      ????????????
                    </Text>
                    )}
                    <Text style={[styles.text, { fontWeight: 'normal', textAlign: 'center', paddingTop: Dimensions.get('window').height * 0.005 }]}>{endText}</Text>
                  </TouchableOpacity>
                  )}
                </Box>
              </Box>
            </Box>
            <Box style={styles.body}>
              <Heading style={styles.inputboxText}>????????????(??????)</Heading>
              <Box style={styles.inputbox}>
                <Box style={{ flexDirection: 'row' }}>
                  <TextInput
                    style={styles.input}
                    placeholder="????????????"
                    value={data.place}
                    onChangeText={(text) => {
                      setData({ ...data, place: text });
                      setPlace(true);
                      if (text === '') {
                        setPlace(false);
                      }
                    }}
                    selectionColor="#ccc"
                  />
                </Box>
              </Box>
            </Box>
            <Box style={styles.bodyforCostAndLimitnum}>
              <Heading style={styles.CostTitle}>
                ????????????
              </Heading>
              <Heading style={styles.LimitnumTitle}>
                ????????????(??????)
              </Heading>
            </Box>
            <Box style={styles.bodyforCostAndLimitnum}>
              <Box style={styles.CostBox}>
                <Box style={{ flexDirection: 'row' }}>
                  <TextInput
                    style={styles.input}
                    maxLength={5}
                    keyboardType="number-pad"
                    placeholder="NT$"
                    value={data.cost}
                    onChangeText={(text) => setData({ ...data, cost: text })}
                    selectionColor="#ccc"
                  />
                  <Text style={styles.CostAndLimitnumText}>???</Text>
                </Box>
              </Box>
              <Box style={styles.LimitnumBox}>
                <Box style={{ flexDirection: 'row' }}>
                  <TextInput
                    style={styles.input}
                    maxLength={3}
                    keyboardType="number-pad"
                    placeholder="?????????0"
                    value={data.limitNum}
                    onChangeText={(text) => {
                      setData({ ...data, limitNum: text });
                      setLimitNum(true);
                      if (text === '') {
                        setLimitNum(false);
                      }
                    }}
                    selectionColor="#ccc"
                  />
                  <Text style={styles.CostAndLimitnumText}>???</Text>
                </Box>
              </Box>
            </Box>
            <Box style={styles.body}>
              <Heading style={styles.inputboxText}>????????????</Heading>
              <Box style={styles.inputbox}>
                <Box style={{ flexDirection: 'row' }}>
                  <TextInput
                    style={styles.input}
                    placeholder="????????????"
                    value={data.link}
                    onChangeText={(text) => setData({ ...data, link: text })}
                    selectionColor="#ccc"
                  />
                </Box>
              </Box>
            </Box>
            <Box style={styles.body}>
              <Heading style={styles.inputboxText}>????????????(??????)</Heading>
              <Box style={styles.details}>
                <Box style={{ flexDirection: 'row' }}>
                  <TextInput
                    style={styles.input}
                    multiline
                    numberOfLines={15}
                    maxLength={450}
                    placeholder="??????????????????????????????????????????!"
                    value={data.details}
                    onChangeText={(text) => {
                      setData({ ...data, details: text });
                      setDetail(true);
                      if (text === '') {
                        setDetail(false);
                      }
                    }}
                    selectionColor="#ccc"
                  />
                </Box>
              </Box>
            </Box>
            <Box style={styles.body}>
              <Heading style={styles.inputboxText}>????????????(??????????????????3???, ??????????????????????????????)</Heading>
              <Box style={{ flexDirection: 'row' }}>
                {image1 && (
                <Box style={{ marginRight: 12 }}>
                  <ZStack style={{ marginBottom: 65 }}>
                    <Image source={{ uri: image1 }} style={styles.image} />
                    <Foundation
                      name="minus-circle"
                      size={18}
                      color="white"
                      style={{ marginLeft: 68, marginTop: 6 }}
                      onPress={() => {
                        setImage1(NoPicLink);
                        setData({ ...data, image1: NoPicLink });
                        if (image2) {
                          setImage1(image2);
                          setImage2(NoPicLink);
                          setData({ ...data, image2: NoPicLink });
                        }
                        if (image3) {
                          setImage2(image3);
                          setImage3(NoPicLink);
                          setData({ ...data, image3: NoPicLink });
                        }
                      }}
                    />
                  </ZStack>
                </Box>
                )}
                {image2 && (
                  <Box style={{ marginRight: 12 }}>
                    <ZStack style={{ marginBottom: 65 }}>
                      <Image source={{ uri: image2 }} style={styles.image} />
                      <Foundation
                        name="minus-circle"
                        size={18}
                        color="white"
                        style={{ marginLeft: 68, marginTop: 6 }}
                        onPress={() => {
                          setImage2(NoPicLink);
                          setData({ ...data, image2: NoPicLink });
                          if (image3) {
                            setImage2(image3);
                            setImage3(NoPicLink);
                            setData({ ...data, image3: NoPicLink });
                          }
                        }}
                      />
                    </ZStack>
                  </Box>
                )}
                {image3 && (
                  <Box style={{ marginRight: 12 }}>
                    <ZStack style={{ marginBottom: 65 }}>
                      <Image source={{ uri: image3 }} style={styles.image} />
                      <Foundation
                        name="minus-circle"
                        size={18}
                        color="white"
                        style={{ marginLeft: 68, marginTop: 6 }}
                        onPress={() => {
                          setImage3(NoPicLink);
                          setData({ ...data, image3: NoPicLink });
                        }}
                      />
                    </ZStack>
                  </Box>
                )}
              </Box>
              <TouchableOpacity onPress={pickImage} style={styles.imageButton}>
                <MaterialCommunityIcons name="cloud-upload-outline" size={24} color="white" style={{ marginLeft: 49 }} />
                <Text style={styles.Cloudicon}>??????</Text>
              </TouchableOpacity>
            </Box>
            <Divider my={2} bg="#bfbebe" /* my=margin-top and margin-bottom */ />
            <Heading style={styles.inputboxText}>????????????????????????????????????, ?????????????????????????????????!</Heading>
            <Box style={styles.body}>
              <Heading style={styles.inputboxText}>?????????????????????</Heading>
              <Box style={styles.inputbox}>
                <Box style={{ flexDirection: 'row' }}>
                  <TextInput
                    style={styles.input}
                    placeholder="?????????????????????"
                    value={data.hostName}
                    onChangeText={(text) => setData({ ...data, hostName: text })}
                    selectionColor="#ccc"
                  />
                </Box>
              </Box>
            </Box>
            <Box style={styles.body}>
              <Heading style={styles.inputboxText}>????????????</Heading>
              <Box style={styles.inputbox}>
                <Box style={{ flexDirection: 'row' }}>
                  <TextInput
                    style={styles.input}
                    placeholder="????????????"
                    value={data.hostPhone}
                    onChangeText={(text) => setData({ ...data, hostPhone: text })}
                    selectionColor="#ccc"
                  />
                </Box>
              </Box>
            </Box>
            <Box style={styles.body}>
              <Heading style={styles.inputboxText}>????????????</Heading>
              <Box style={styles.inputbox}>
                <Box style={{ flexDirection: 'row' }}>
                  <TextInput
                    style={styles.input}
                    placeholder="????????????"
                    value={data.hostMail}
                    onChangeText={(text) => setData({ ...data, hostMail: text })}
                    selectionColor="#ccc"
                  />
                </Box>
              </Box>
            </Box>
            <View style={styles.footer}>
              {(genre === true && name === true && start === true && end === true
                  && limitNum === true && place === true && detail === true) ? (
                    <LinearGradient
                      colors={['#28527A', '#1784B2']}
                      start={[0, 0]}
                      end={[1, 0]}
                      style={styles.sentButton}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          data.uploadTime = new Date();
                          setImageFromGenre();
                          console.log('addActivity');
                          console.log(data);
                          ActiveController.addActive(data);
                          navigation.navigate('list');
                        }}
                      >
                        <Text style={styles.sentButtonText}>
                          ????????????
                        </Text>
                      </TouchableOpacity>
                    </LinearGradient>
                ) : (
                  <TouchableOpacity
                    style={styles.unsentButton}
                  >
                    <Text style={styles.unsentButtonText}>
                      ????????????
                    </Text>
                  </TouchableOpacity>
                )}
            </View>

            {Platform.OS === 'ios' && (
            <Portal>
              <Dialog visible={visible1} onDismiss={hideDialogi1}>
                <Dialog.Title>??????????????????</Dialog.Title>
                <Dialog.Content>
                  <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <DateTimePicker
                      style={{ width: 150, height: 70 }}
                      value={date1}
                      mode="date"
                      display="defult"
                      onChange={onStartChangei1}
                    />
                    <DateTimePicker
                      style={{ width: 100, height: 70 }}
                      value={date1}
                      mode="time"
                      display="defult"
                      onChange={onStartChangei2}
                    />
                  </View>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={hideDialogi1}>Done</Button>
                </Dialog.Actions>
              </Dialog>
              <Dialog visible={visible2} onDismiss={hideDialogi2}>
                <Dialog.Title>??????????????????</Dialog.Title>
                <Dialog.Content>
                  <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <DateTimePicker
                      style={{ width: 150, height: 70 }}
                      value={date2}
                      mode="date"
                      display="defult"
                      onChange={onEndChangei1}
                    />
                    <DateTimePicker
                      style={{ width: 100, height: 70 }}
                      value={date2}
                      mode="time"
                      display="defult"
                      onChange={onEndChangei2}
                    />
                  </View>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={hideDialogi2}>Done</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
            )}

            {Platform.OS === 'android' && (
            <Portal>
              <Dialog visible={visible1} onDismiss={hideDialog1}>
                <Dialog.Title>??????????????????</Dialog.Title>
                <Dialog.Content>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                      <Text style={{ textAlign: 'center', fontSize: 17 }}>
                        {startDateText}
                      </Text>
                      <Button onPress={showDatepicker1}>????????????</Button>
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                      <Text style={{ textAlign: 'center', fontSize: 17 }}>
                        {startTimeText}
                      </Text>
                      <Button onPress={showTimepicker1}>????????????</Button>
                    </View>
                  </View>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={hideDialog1}>Done</Button>
                </Dialog.Actions>
              </Dialog>
              <Dialog visible={visible2} onDismiss={hideDialog2}>
                <Dialog.Title>??????????????????</Dialog.Title>
                <Dialog.Content>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                      <Text style={{ textAlign: 'center', fontSize: 17 }}>
                        {endDateText}
                      </Text>
                      <Button onPress={showDatepicker2}>????????????</Button>
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                      <Text style={{ textAlign: 'center', fontSize: 17 }}>
                        {endTimeText}
                      </Text>
                      <Button onPress={showTimepicker2}>????????????</Button>
                    </View>
                  </View>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={hideDialog2}>Done</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
            )}
          </NativeBaseProvider>
        </SafeAreaView>
      </ScrollView>
    </Provider>
  );
}

export default add;
