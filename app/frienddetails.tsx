import React, { useEffect, useState } from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Text, Avatar } from 'react-native-paper';
import { View } from 'react-native';
import RecentGifts from '@/components/FriendDetails/recentGifts';
export default function FriendDetails() {

  return (
    <ParallaxScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, marginLeft: 10 }}>
      <Avatar.Image size={80} source={{ uri: 'https://picsum.photos/200/300' }} />
      <View style={{ marginLeft: 16, justifyContent: 'center' }}>
        <Text variant="headlineLarge" style={{ fontSize: 40, fontWeight: 'bold' }}>
          John Doe
        </Text>
        <Text variant="bodyMedium" style={{ fontSize: 20, color: '#666', marginLeft: 5 }}>
          Boyfriend
        </Text>
      </View>
    </View>
    <View>
        <Text variant='bodySmall' style={{ marginLeft: 20}}>gifts given on</Text>
        <RecentGifts/>
    </View>
    </ParallaxScrollView>
  );
}
