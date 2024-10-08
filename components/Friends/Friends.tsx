import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, IconButton, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around', // Distribute columns evenly
    padding: 10,
    marginLeft: 5
  },
  column: {
    flex: 1, // Each column takes up equal space
    alignItems: 'center', // Center text horizontally
    padding: 10,
    
  },
  icon: {
      objectFit: 'contain',
      display: 'flex',
      maxWidth: 80,
      maxHeight: 80
  },
  container: {
    flex: 1,
  },
  topline:{ 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 10, 
    marginLeft: 10
  }
});
const AvatarRow = ({avatars}) => {
  const navigation = useNavigation();

  const onclick = () => {
    navigation.navigate('frienddetails');
  }
  return (
    <View style={styles.row}>
      {avatars.map((avatar: { imageUrl: any; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; subtext: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
        <View key={index} style={{ alignItems: 'center' }}>
          <Button style={{padding: 0}} onPress={() => onclick()}>
          <Avatar.Image size={80} source={{ uri: avatar.imageUrl }} />
          </Button>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{avatar.name}</Text>
          <Text style={{ fontSize: 12, color: '#666' }}>{avatar.subtext}</Text>
          
        </View>
      ))}
    </View>
  );
};

const AvatarList = () => {
  const navigation = useNavigation();

    const avatars = [
        { imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg', name: 'John Doe', subtext: 'Boyfriend' },
        { imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg', name: 'Jane Doe', subtext: 'Co-Worker' },
        { imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg', name: 'Bob Smith', subtext: 'Brother' },
        { imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg', name: 'Alice Johnson', subtext: 'Bestie' },
        { imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg', name: 'Mike Brown', subtext: 'Cousin' },
        { imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg', name: 'Emily Davis', subtext: 'Cousin' },
        { imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg', name: 'John Doe', subtext: 'Boyfriend' },
        { imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg', name: 'Jane Doe', subtext: 'Co-Worker' },
        { imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg', name: 'Bob Smith', subtext: 'Brother' },
        { imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg', name: 'Alice Johnson', subtext: 'Bestie' },
        { imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg', name: 'Mike Brown', subtext: 'Cousin' },
        { imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg', name: 'Emily Davis', subtext: 'Cousin' },
        { imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg', name: 'John Doe', subtext: 'Boyfriend' },
        { imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg', name: 'Jane Doe', subtext: 'Co-Worker' },
        { imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg', name: 'Bob Smith', subtext: 'Brother' },
        { imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg', name: 'Alice Johnson', subtext: 'Bestie' },
        { imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg', name: 'Mike Brown', subtext: 'Cousin' },
        { imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg', name: 'Emily Davis', subtext: 'Cousin' },
        { imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg', name: 'John Doe', subtext: 'Boyfriend' },
        { imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg', name: 'Jane Doe', subtext: 'Co-Worker' },
        { imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg', name: 'Bob Smith', subtext: 'Brother' },
        { imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg', name: 'Alice Johnson', subtext: 'Bestie' },
        { imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg', name: 'Mike Brown', subtext: 'Cousin' },
        { imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg', name: 'Emily Davis', subtext: 'Cousin' },
        
        // ...
      ];
  const rows = [];
  for (let i = 0; i < avatars.length; i += 3) {
    rows.push(avatars.slice(i, i + 3));
  }

  const newFriend = () => {
    navigation.navigate('newfriend');
  };

  return (
    <View>
      <View style={styles.topline}>
        <Text variant="bodySmall">friends</Text>
        <IconButton
          mode="contained-tonal"
          icon="plus"
          size={25}
          onPress={()=> newFriend()}
        />
      </View>
      {rows.map((row, index) => (
        <AvatarRow key={index} avatars={row} />
      ))}
    </View>
  );
};

export default AvatarList;