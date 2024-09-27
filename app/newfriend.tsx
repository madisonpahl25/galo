import React, { useEffect, useState } from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Text, TextInput, Button, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { View } from 'react-native';
export default function FriendsScreen() {
  const navigation = useNavigation();
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [relationship, setRelationship] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [initials, setInitials] = useState('');
  const handleSave = () => {
    console.log('First Name:', fname);
    console.log('Last Name:', lname);
    console.log('Relationship:', relationship);
    console.log('Image:', image);
    navigation.goBack();
    // Add your save logic here

  };

  useEffect(() => {
   setInitials(fname.charAt(0) + lname.charAt(0));
  }, [fname, lname]);

  const handleUploadImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      console.log(result)
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
  };

  return (
    <ParallaxScrollView>
      <Text  variant="bodySmall" style={{  marginBottom: 10, marginLeft: 20 }}>create a friend</Text>
      <TextInput
        label="First Name"
        value={fname}
        onChangeText={(text) => setFname(text)}
        style={{ marginLeft: 20, marginRight: 20 }}
      />
      <TextInput
        label="Last Name"
        value={lname}
        onChangeText={(text) => setLname(text)}
        style={{ marginLeft: 20, marginRight: 20 }}
      />
      <TextInput
        label="Relationship"
        value={relationship}
        onChangeText={(text) => setRelationship(text)}
        style={{ marginLeft: 20, marginRight: 20 }}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
        <View style={{ marginLeft: 20, marginRight: 20 }}>
        {
        image ? 
        <Avatar.Image size={80} source={{ uri: image }} /> :
        <Avatar.Text label={initials}/>
      }
       </View>
      <Button mode="contained" onPress={handleUploadImage} style={{ marginLeft: 20, marginRight: 20 }}>
        {image ? 'change' : 'upload'} friend picture
      </Button>
      </View>
      <Button mode="contained" onPress={handleSave} style={{ margin: 20 }}>
        save
      </Button>
    </ParallaxScrollView>
  );
}
