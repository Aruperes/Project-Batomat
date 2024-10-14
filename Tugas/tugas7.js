import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Title from './components/Title';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Title title="Users List" />
      {users.map(user => {
        return (
          <View key={user.id} style={styles.userContainer}>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Name:</Text> {` ${user.name}`}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Username:</Text>{' '}
              {` ${user.username}`}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Email:</Text> {` ${user.email}`}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Address:</Text>
              {` ${user.address.city}, ${user.address.street}, ${user.address.zipcode}`}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Phone:</Text> {` ${user.phone}`}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  userContainer: {
    padding: 15,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  boldText: {
    fontWeight: 'bold',
  },
});
