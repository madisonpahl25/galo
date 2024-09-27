import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const ReturnHeader = () => {
    const navigation = useNavigation();
    const returnTab = () => {
        navigation.goBack();
    }
    
  return (
    <View style={styles.container}>
        <Button
          icon="arrow-left"
          onPress={()=> returnTab()}
        >
        Back
        </Button>
      <Image
        source={require('@/assets/images/galo.png')} // replace with your logo image
        style={styles.logo}
      />
      {/* <Image
        source={require('@/assets/images/galo-handmade.png')} // replace with your logo image
        style={styles.logo_handmade}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 50,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    marginRight: 10,
  },
  logo_handmade: {
    width: 100,
    height: 75,
    resizeMode: 'contain',
    marginRight: 10,
  },
});

export default ReturnHeader;