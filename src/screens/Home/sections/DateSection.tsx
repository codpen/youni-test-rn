import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {COLORS} from '../../../common/constants/StyleConstants';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  dateTimeText: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 24,
    color: COLORS.WHITE,
  },
  dot: {
    marginHorizontal: 16,
    marginVertical: 10,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.WHITE,
  },
});

function DateSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.dateTimeText}>Wed, Mar 29</Text>
      <Text style={styles.dot}></Text>
      <Text style={styles.dateTimeText}>19:00 - 20:00</Text>
    </View>
  );
}

export default DateSection;
