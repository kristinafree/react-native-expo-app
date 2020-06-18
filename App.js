import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import styled from 'styled-components'
import {Ionicons} from '@expo/vector-icons'

import {GroupList, SectionTitle} from './components'

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
          fullname: 'Tanya Livenskaya',
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
          renderItem={({ item }) => <GroupList {...item} />} 
          renderSectionHeader={({ section: { title } }) => (
            <SectionTitle>{title}</SectionTitle>
          )}
        />
        <PlusButton styled={{
          shadowColor: '#2A86FF',
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpasity: 0.5,
          shadowRadios: 2.5,
          elevation: 5
        }}>
          <Ionicons name="ios-add" size={36} color="white" />
        </PlusButton>
    </Container>
  );
}

const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height:64px;
  background: #2A86FF;
  position: absolute;
  right: 15px;
  bottom: 20px;
`

const Container = styled.View`
  flex: 1;
  margin-top: 30px;
`
