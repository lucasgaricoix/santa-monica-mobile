import React from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCalendarCheck,
  faCalendarTimes,
  faAt,
  faMobile,
} from '@fortawesome/free-solid-svg-icons';

export default function BookList({books}) {
  const backGroundColors = ['#39393A', '#39393A', '#39393A'];
  const nameColors = ['#E9D758', '#E9D758'];
  const guestColors = ['#E9D758'];
  const iconColors = ['#E6E6E6', '#E6E6E6'];
  const fontColors = ['#E6E6E6', '#E6E6E6'];
  const buttonColors = ['#E58F65'];

  function dateFormat(date) {
    var day = new Date(date).getDate();
    var month = new Date(date).getMonth() + 1;
    var year = new Date(date).getFullYear();

    const fullDate = day + '/' + month + '/' + year;
    return fullDate;
  }

  function nameStyle(index) {
    return {
      color: nameColors[index % nameColors.length],
      fontSize: 20,
      fontWeight: 'bold',
    };
  }

  function guestStyle(index) {
    return {
      color: guestColors[index % guestColors.length],
      fontSize: 20,
      fontWeight: 'bold',
    };
  }

  function listItems(index) {
    return {
      backgroundColor: backGroundColors[index % backGroundColors.length],
      borderWidth: 1,
      borderRadius: 10,
      borderColor: backGroundColors[index % backGroundColors.length],
      marginTop: 15,
      padding: 20,
    };
  }

  function getIconsColors(index) {
    return {
      color: iconColors[index % iconColors.length],
    };
  }

  function getFontColors(index) {
    return {
      color: fontColors[index % fontColors.length],
    };
  }

  function getButtonStyle(index) {
    return {
      marginTop: 5,
      backgroundColor: buttonColors[index % buttonColors.length],
      height: 30,
      width: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 2,
    };
  }

  return (
    <View>
      <Text style={styles.title}>Requisições</Text>
      <FlatList
        style={styles.list}
        data={books}
        keyExtractor={item => item._id}
        renderItem={({item, index}) => (
          <View style={listItems(index)}>
            <Text
              style={nameStyle(index)}>{`${item.name} ${item.lastName}`}</Text>
            <View style={styles.dates}>
              <Text style={getFontColors(index)}>
                <FontAwesomeIcon
                  icon={faCalendarCheck}
                  style={getIconsColors(index)}
                />{' '}
                {dateFormat(item.checkIn)}
              </Text>
              <Text style={getFontColors(index)}>
                <FontAwesomeIcon
                  icon={faCalendarTimes}
                  style={getIconsColors(index)}
                />{' '}
                {dateFormat(item.checkOut)}
              </Text>
            </View>
            <Text style={getFontColors(index)}>
              <FontAwesomeIcon icon={faAt} style={getIconsColors(index)} />{' '}
              <Text>{item.email}</Text>
            </Text>
            <Text style={getFontColors(index)}>
              <FontAwesomeIcon icon={faMobile} style={getIconsColors(index)} />
              <Text>{item.phone}</Text>
            </Text>
            <View style={styles.guests}>
              <Text style={guestStyle(index)}>{item.guests}</Text>
              <Text style={getFontColors(index)}>Convidados</Text>
            </View>
            <Text style={getFontColors(index)}>
              Informação adicional: <Text>{item.message}</Text>
            </Text>
            <TouchableOpacity style={getButtonStyle(index)}>
              <Text style={styles.buttonText}>Confirmar reserva</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },

  //FlatList
  list: {
    paddingTop: 10,
  },

  //Text Fields

  dates: {
    marginTop: 15,
    marginBottom: 15,
  },

  checkOut: {
    marginLeft: 'auto',
  },

  guests: {
    marginTop: 10,
    marginBottom: 10,
  },

  bold: {
    fontWeight: 'bold',
  },

  //button
  buttonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
});
