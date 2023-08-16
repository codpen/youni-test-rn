import React, {ReactNode} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {COLORS} from '../../../common/constants/StyleConstants';
import Avatar from '../components/Avatar';
import {useAssets} from '../../../hooks/useAssets';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 16,
  },
});

const avatars = [
  {
    name: 'a',
    icon: 'avatar.a',
  },
  {
    name: 'b',
    icon: 'avatar.b',
  },
  {
    name: 'c',
    icon: 'avatar.c',
  },
  {
    name: 'a',
    icon: 'avatar.a',
  },
  {
    name: 'b',
    icon: 'avatar.b',
  },
];

const assets = useAssets;

function AvatarSection() {
  const shownAvatars = avatars.slice(0, 3);
  return (
    <View style={styles.container}>
      {shownAvatars.map((item, index) => (
        <Avatar key={index} icon={assets(item.icon)} />
      ))}
      <Avatar icon={assets('avatar.etc')} name={(avatars.length - 3).toString()} />
    </View>
  );
}

export default AvatarSection;
