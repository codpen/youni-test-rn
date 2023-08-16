import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import DatePicker from 'react-native-neat-date-picker';
import {useAssets} from '../../../hooks/useAssets';
import {Button} from '../../../common/components';
import {COLORS} from '../../../common/constants/StyleConstants';
import RNCalendarEvents from 'react-native-calendar-events';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  categoryContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  calendarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderColor: COLORS.WHITE,
    borderWidth: 1,
    borderRadius: 24,
    marginRight: 12,
  },
  categoryButtonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16,
  },
  calendarButton: {
    paddingHorizontal: 15,
    paddingVertical: 13,
    borderColor: COLORS.PURPLE,
    borderWidth: 1,
    borderRadius: 12,
    marginRight: 10,
  },
  calendarButtonImage: {
    width: 24,
    height: 24,
    resizeMode: 'cover',
  },
  ticketButton: {
    paddingHorizontal: 25,
    paddingVertical: 14,
    backgroundColor: COLORS.YELLOW,
    borderRadius: 10,
  },
  ticketText: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
  },
  datePicker: {
    position: 'absolute',
    top: 100,
    left: 20,
    zIndex: 999,
  },
});

const buttons = [
  {
    title: '🎻 Art & Music',
  },
  {
    title: '⚽️  Sport',
  },
  {
    title: '🎬 Movie',
  },
];

const colorOptions = {
  headerColor: '#333333',
  backgroundColor: '#333333',
  dateTextColor: '#FFFFFF',
  selectedDateColor: '#FF3273',
  selectedDateBackgroundColor: '#FF3273',
  confirmButtonColor: '#FF3273',
  weekDaysColor: '#FF3273',
};

function CategorySection() {
  const assets = useAssets;

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const onCancel = () => {
    setShowDatePicker(false);
  };

  const onConfirm = (date: string) => {
    setShowDatePicker(false);
    console.log(date);
  };

  React.useEffect(() => {
    RNCalendarEvents.requestPermissions()
      .then(res => {
        console.log('Premission Response', res);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const addEventToCalendar = async () => {
    const newDate = new Date(date);
    newDate.setHours(newDate.getHours() + 2);
    RNCalendarEvents.saveEvent('test event', {
      calendarId: '3',
      startDate: date.toISOString(),
      endDate: newDate.toISOString(),
      location: 'London',
    })
      .then(value => {
        console.log('Event id --->', value);
      })
      .catch(error => {
        console.log('Did not work threw an error --->', error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        {buttons.map((button, index) => (
          <Button
            key={index}
            customStyle={styles.categoryButton}
            onPress={() => console.log(button.title)}>
            <Text style={styles.categoryButtonText}>{button.title}</Text>
          </Button>
        ))}
      </View>
      <View style={styles.calendarContainer}>
        <Button
          customStyle={styles.calendarButton}
          onPress={() => {
            addEventToCalendar();
          }}>
          <Image source={assets('main.calendar')} style={styles.calendarButtonImage} />
        </Button>
        <Button customStyle={styles.ticketButton} onPress={openDatePicker}>
          <Text style={styles.ticketText}>Tickets go live 23:59, 17/05/23</Text>
        </Button>
        <DatePicker
          isVisible={showDatePicker}
          mode={'single'}
          onCancel={onCancel}
          onConfirm={date => onConfirm(date.toString())}
          colorOptions={colorOptions}
          modalStyles={{
            position: 'absolute',
            top: -600,
            left: 18,
          }}
        />
      </View>
    </View>
  );
}

export default CategorySection;
