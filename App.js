import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components'
import { Appointment } from './components/Appointment';

const DATA = [
  {
    title: "3 June",
    data: [
      {
        time: '12.00',
        active: true,
        event: 'Free day',
        user: {
          fullname: 'Kristina Salmanovich',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoRi7wHPHjxoykz7N81dAok9kmvaizdFt7kZTEksjS666yhqLH&usqp=CAU'
        }
      },
      {
        time: '18.00',
        event: 'Work day',
        user: {
          fullname: 'Yanina Salmanovich',
          avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Alien-512.png'
        }
      }
    ]
  },
  {
    title: "6 June",
    data: [
      {
        time: '12.00',
        event: 'Free day',
        user: {
          fullname: 'Kristina Salmanovich',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoRi7wHPHjxoykz7N81dAok9kmvaizdFt7kZTEksjS666yhqLH&usqp=CAU'
        }
      },
      {
        time: '18.00',
        event: 'Work day',
        user: {
          fullname: 'Yanina Salmanovich',
          avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Alien-512.png'
        }
      }
    ]
  },
];

export default function App() {
  return (
    <Container>
       <SectionList
          sections={DATA}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => <Appointment {...item}/>} 
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  margin-top: 50px
`
