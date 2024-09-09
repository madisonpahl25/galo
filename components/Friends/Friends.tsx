import React from 'react';
import { View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';

const AvatarRow = ({ avatars }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
      {avatars.map((avatar, index) => (
        <View key={index} style={{ alignItems: 'center' }}>
          <Avatar.Image size={40} source={{ uri: avatar.imageUrl }} />
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{avatar.name}</Text>
          <Text style={{ fontSize: 12, color: '#666' }}>{avatar.subtext}</Text>
        </View>
      ))}
    </View>
  );
};

const AvatarList = () => {
    const avatars = [
        { imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg', name: 'John Doe', subtext: 'Software Engineer' },
        { imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg', name: 'Jane Doe', subtext: 'Designer' },
        { imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg', name: 'Bob Smith', subtext: 'Product Manager' },
        { imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg', name: 'Alice Johnson', subtext: 'Engineer' },
        { imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg', name: 'Mike Brown', subtext: 'Video Editor' },
        { imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg', name: 'Emily Davis', subtext: 'Producer' },
        
        // ...
      ];
  const rows = [];
  for (let i = 0; i < avatars.length; i += 3) {
    rows.push(avatars.slice(i, i + 3));
  }
  return (
    <View style={{marginLeft: 20}}>
      <View style={{paddingBottom: 10}}>
        <Text variant="bodySmall">friends</Text>
      </View>
      {rows.map((row, index) => (
        <AvatarRow key={index} avatars={row} />
      ))}
    </View>
  );
};

export default AvatarList;