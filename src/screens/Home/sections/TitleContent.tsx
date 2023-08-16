import React, {ReactNode} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {COLORS} from '../../../common/constants/StyleConstants';

type TitleContentProps = {
  title: string;
  content: ReactNode;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  titleText: {
    color: COLORS.WHITE,
    paddingLeft: 16,
    textTransform: 'capitalize',
    borderLeftColor: COLORS.PURPLE,
    borderLeftWidth: 6,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 17,
  },
  contentContainer: {
    padding: 16,
  },
});

function TitleContent({title, content}: TitleContentProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.contentContainer}>{content}</View>
    </View>
  );
}

export default TitleContent;
