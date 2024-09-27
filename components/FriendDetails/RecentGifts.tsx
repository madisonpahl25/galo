import React from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';

const RecentGifts = () => {

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
      {Array(4).fill(null).map((_, index) => (
        <Card
          key={index}
          style={{
            width: 50,
            height: 30,
            margin: 10,
            borderRadius: 10,
          }}
        >
          <Card.Content>
            <Text variant="headlineMedium" style={{ fontSize: 18 }}>
              Heading {index + 1}
            </Text>
            <Text variant="bodyMedium" style={{ fontSize: 14, color: '#666' }}>
              Subheading {index + 1}
            </Text>
          </Card.Content>
        </Card>
      ))}
    </View>
  );
};

export default RecentGifts;