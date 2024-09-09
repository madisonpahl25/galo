import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Avatar, Text } from 'react-native-paper';

const SquareCard = ({ name, avatarUrl }) => {
  return (
    <Card style={styles.card}>
      <View style={styles.iconContainer}>
        <Avatar.Image source={{ uri: avatarUrl }} size={50} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </Card>
  );
};

const HeaderText = ({ text }) => {
  return (
    <Text variant="bodySmall" style={{marginLeft:20}}>{text}</Text>
  );
};

const Favorites = () => {
    const data = [
        { name: 'John Doe', avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { name: 'Jane Doe', avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { name: 'Bob Smith', avatarUrl: 'https://randomuser.me/api/portraits/men/3.jpg' },
      ];

  return (
    <View style={styles.container}>
      <HeaderText text="favorites" />
      <View style={styles.cardsContainer}>
        {data.map((item, index) => (
          <SquareCard key={index} name={item.name} avatarUrl={item.avatarUrl} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  cardsContainer: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 10,
    elevation: 2,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
  },
  name: {
    fontSize: 12,
    textAlign: 'center',
    padding: 8,
  },
});



export default Favorites;