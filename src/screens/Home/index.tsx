import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView, ImageBackground, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useAssets} from '../../hooks/useAssets';
import {Button} from '../../common/components';
import {COLORS} from '../../common/constants/StyleConstants';
import TitleContent from './sections/TitleContent';
import AvatarSection from './sections/AvatarSection';
import CategorySection from './sections/CategorySection';
import DateSection from './sections/DateSection';
import MapSection from './sections/MapSection';
import OrganizeSection from './sections/OrganizeSection';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  innerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  backgroundImage: {
    height: 390,
    resizeMode: 'cover',
    backgroundColor: 'transparent',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(16),
    borderBottomEndRadius: RFValue(10),
    borderBottomLeftRadius: RFValue(10),
    height: RFValue(390),
  },
  invisibleBackground: {
    height: 390,
    resizeMode: 'cover',
    position: 'absolute',
    top: -240,
  },
  headerNavButtonImage: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  headerNavButtonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navRight: {
    width: 70,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  soldButton: {
    backgroundColor: COLORS.RED,
    width: 98,
    height: 26,
    borderRadius: 6,
  },
  soldButtonText: {
    color: COLORS.WHITE,
    fontSize: 14,
    lineHeight: 14,
    textTransform: 'uppercase',
  },
  fromButton: {
    backgroundColor: COLORS.PURPLE,
    width: 110,
    height: 26,
    borderRadius: 6,
  },
  fromButtonText: {
    color: COLORS.WHITE,
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '400',
    textTransform: 'uppercase',
  },
  dinnerText: {
    color: COLORS.WHITE,
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 36,
    marginVertical: 2,
  },
  readMoreView: {
    flex: 1,
  },
  readMoreText: {
    color: COLORS.BACKGROUND_GREY_LIGHT,
    flex: 1,
  },
  readMoreButton: {
    backgroundColor: 'red',
    position: 'relative',
  },
  readMoreButtonText: {
    color: COLORS.PURPLE,
    position: 'absolute',
    bottom: -4,
    left: 8,
    textTransform: 'capitalize',
  },
});

const sections = [
  {
    title: 'Participants',
    content: <AvatarSection />,
  },
  {
    title: 'Categories',
    content: <CategorySection />,
  },
  {
    title: 'Date & Time',
    content: <DateSection />,
  },
  {
    title: 'Location',
    content: <MapSection />,
  },
  {
    title: 'Organized by',
    content: <OrganizeSection />,
  },
];

function LocationScreen() {
  const [isReadMore, setIsReadMore] = useState(false);
  const expandedText =
    'Join us for an unforgettable evening of fine dining and networkingJoin us for an unforgettable evening of fine dining and networking';

  const shownText = isReadMore ? expandedText : expandedText.slice(0, 66);

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const assets = useAssets;
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ImageBackground source={assets('main.header_background')} style={styles.backgroundImage}>
        <View style={styles.header}>
          <Image source={assets('main.header-invisible')} style={styles.invisibleBackground} />
          <View style={styles.headerNavButtonGroup}>
            <Button>
              <Image source={assets('main.chevron')} style={styles.headerNavButtonImage} />
            </Button>
            <View style={styles.navRight}>
              <Button>
                <Image source={assets('main.heart')} style={styles.headerNavButtonImage} />
              </Button>
              <Button>
                <Image source={assets('main.share')} style={styles.headerNavButtonImage} />
              </Button>
            </View>
          </View>
          <Button customStyle={styles.soldButton} onPress={() => console.log('Sold out')}>
            <Text style={styles.soldButtonText}>SOLD OUT!!!</Text>
          </Button>
        </View>
      </ImageBackground>
      <View style={styles.innerContainer}>
        <Button customStyle={styles.fromButton} onPress={() => console.log('From $$$')}>
          <Text style={styles.fromButtonText}>FROM £ 25.00</Text>
        </Button>
        <Text style={styles.dinnerText}>Dinner with Fairgrove Partners</Text>
        <View style={styles.readMoreView}>
          <Text style={styles.readMoreText}>
            {shownText + '...'}
            <Button customStyle={styles.readMoreButton} onPress={handleReadMore}>
              <Text style={styles.readMoreButtonText}>
                {isReadMore ? 'Read less' : 'Read more'}
              </Text>
            </Button>
          </Text>
        </View>
      </View>
      {sections.map((section, index) => (
        <TitleContent key={index} title={section.title} content={section.content} />
      ))}
    </ScrollView>
  );
}

export default LocationScreen;
