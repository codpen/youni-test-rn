import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLORS} from '../../../common/constants/StyleConstants';
import {useAssets} from '../../../hooks/useAssets';
import {Button} from '../../../common/components';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: 8,
    paddingBottom: 6,
    backgroundColor: COLORS.BACKGROUND_LIGHT,
    borderRadius: 16,
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingLeft: 12,
    width: 200,
  },
  text: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
  },
  image: {
    width: 92,
    height: 92,
    resizeMode: 'cover',
  },
  followButton: {
    backgroundColor: COLORS.PURPLE,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
    width: 80,
  },
  followText: {
    color: COLORS.WHITE,
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '400',
  },
});

function OrganizeSection() {
  const assets = useAssets;
  return (
    <View style={styles.container}>
      <Image source={assets('main.organize')} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Oxford Women in Business</Text>
        <Button customStyle={styles.followButton} onPress={() => console.log('From $$$')}>
          <Text style={styles.followText}>Follow</Text>
        </Button>
      </View>
    </View>
  );
}

export default OrganizeSection;
