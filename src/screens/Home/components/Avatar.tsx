import React, {ReactNode} from 'react';
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import {COLORS} from '../../../common/constants/StyleConstants';

type AvatarProps = {
  icon: number;
  name?: string;
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    position: 'relative',
    marginLeft: -16,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  name: {
    color: COLORS.WHITE,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -7}, {translateY: -9}],
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 300,
    lineHeight: 18,
  },
});

function Avatar({icon, name}: AvatarProps) {
  return (
    <View style={styles.container}>
      <ImageBackground source={icon} style={styles.icon}>
        <Text style={styles.name}>{name ? `+${name}` : ''}</Text>
      </ImageBackground>
    </View>
  );
}

export default Avatar;
