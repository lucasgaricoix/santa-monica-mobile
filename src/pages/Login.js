import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Book from './Book';

function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo ao Espaço Santa Mônica</Text>
      <Book />
      <Text>Novo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  title: {
    marginTop: 42,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  text: {
    marginTop: 15,
  },

  button: {
    marginTop: 5,
    backgroundColor: '#035E7B',
    height: 30,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  buttonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Login;
