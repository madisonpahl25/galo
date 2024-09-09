import {StyleSheet, View} from 'react-native';
import { Card, Avatar, Text } from 'react-native-paper';

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 20,
    padding: 20,
    width: '100%',
    maxHeight: 110
  },
  topRightText: {
    position: 'absolute',
    top: -10,
    textAlign: 'left',
    fontSize: 12,
    width: 100,
  },
  topLeftText: {
    position: 'absolute',
    top: -10,
    textAlign: 'right',
    right: 2,
    fontSize: 12,
    width: 100,
  },
  largeText: {
    position: 'absolute',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 25,
    left: 75
  },
});

const EventCard = ({ imageUrl, title, date, days_until }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.topRightText}>{date}</Text>
        <Avatar.Image size={50} source={{ uri: imageUrl }} style={{ alignSelf: 'left' }} />
        <Text style={styles.largeText}>{title}</Text>
        <Text style={styles.topLeftText}>{days_until} day(s) away</Text>
      </Card.Content>
      {/* <View> */}
        {/* <Text style={styles.topRightText}>{date}</Text>
        <Avatar.Image size={70} source={{ uri: imageUrl }} style={{ alignSelf: 'center' }} />
        <Text style={styles.largeText}>{title}</Text> */}
      {/* </View> */}
    </Card>
  );
};

export function Upcoming() {
    const upcomingEvents = [
        { imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg', title: 'Jenny\'s Birthday', date: 'Today', days_until: 0 },
        { imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg', title: 'Tony\'s Birthday', date: 'Tomorrow', days_until: 1 },
        { imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg', title: 'Kim\'s Baby Shower', date: 'Next Week', days_until: 7 },
        { imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg', title: 'Kim\'s Baby Shower', date: 'Next Week', days_until: 7 },
        { imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg', title: 'Kim\'s Baby Shower', date: 'Next Week', days_until: 7 },
      ];
  return (
    <View style={{width: '90%'}}>
      <View style={{marginLeft: 20}}>
        <Text variant="bodySmall">upcoming events</Text>
      </View>
      {upcomingEvents.map((event, index) => (
        <EventCard key={index} imageUrl={event.imageUrl} title={event.title} date={event.date} days_until={event.days_until} />
      ))}
    </View>
  );
}