import React, {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';
import axios from 'axios';
import BookList from './BookList';

export default function Book() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function loadBooks() {
      setLoading(true);
      const response = await axios.get('http://localhost:3333/books');

      setBooks(response.data.books);
    }

    loadBooks();
    setLoading(false);
  }, []);

  return (
    <View>
      {loading && <ActivityIndicator size="small" />}
      <SafeAreaView>
        <BookList books={books} />
      </SafeAreaView>
    </View>
  );
}
