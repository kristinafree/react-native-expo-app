import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components'

const Group = ({ user, event, active, time }) => {
    return(
        <GroupItem>
          <Avatar source={{uri: user.avatar}} />
          <View style={{flex: 1}}>
              <FullName>{user.fullname}</FullName>
              <GrayText>{event}</GrayText>
          </View>
          <GroupDate active={active}>{time}</GroupDate>
        </GroupItem>
    )
}

Group.defaultProps = {
    title: 'Untitled',
    items: []
}

const GroupDate = styled.Text `
  background: ${props => (props.active ? '#46D2CB' : '#204A48')};
  color: ${props => (props.active ? '#204A48' : '#DDE7F2')};
  border-radius: 18px;
  font-weight: 600;
  font-size: 14px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 28px;
`

const GrayText = styled.Text`
  font-size: 16px;
  color: #B2A8A8
`

const FullName = styled.Text`
  font-weight: 600;
  font-size: 16px;
`
const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px
`

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px 0;
  border-bottom-width: 1px;
  border-bottom-color: #C4DFE8;
`
export default Group
