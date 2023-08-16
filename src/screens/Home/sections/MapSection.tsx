import React from 'react';
import {StyleSheet, View, Text, Image, Linking} from 'react-native';
import {useAssets} from '../../../hooks/useAssets';
import {Button} from '../../../common/components';
import {COLORS} from '../../../common/constants/StyleConstants';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  map: {
    width: 94,
    height: 94,
    resizeMode: 'cover',
  },
  content: {
    width: '70%',
    height: 94,
    paddingVertical: 4,
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 21,
    color: COLORS.WHITE,
  },
  directButton: {
    marginLeft: -6,
    width: 120,
    display: 'flex',
    flexDirection: 'row',
  },
  buttonText: {
    color: COLORS.PURPLE,
  },
  directionImage: {
    width: 14,
    height: 14,
    resizeMode: 'cover',
    marginRight: 6,
  },
});

function MapSection() {
  const assets = useAssets;

  const handleGoogleMap = () => {
    const mapUrl = 'https://maps.google.com';
    Linking.openURL(mapUrl);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>
          Museum of Natural History University Of Oxford, Pitt Rivers Museum OX1 3PP
        </Text>
        <Button customStyle={styles.directButton} onPress={handleGoogleMap}>
          <Image source={assets('main.direction')} style={styles.directionImage} />
          <Text style={styles.buttonText}>Get directions</Text>
        </Button>
      </View>
      <Image source={assets('main.map')} style={styles.map} />
    </View>
  );
}

export default MapSection;
