/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
export const useGetWeekRange = () => {
  const today = new Date();
  const currentDay = today.getDay();
  const firstDayOfWeek = new Date(today);
  const lastDayOfWeek = new Date(today);
  const secondDayOfWeek = new Date(today);
  const thirdDayOfWeek = new Date(today);
  const fourthDayOfWeek = new Date(today);
  const fifthDayOfWeek = new Date(today);
  const sixthDayOfWeek = new Date(today);

  firstDayOfWeek.setDate(today.getDate() - currentDay); // Set first day of the week
  secondDayOfWeek.setDate(today.getDate() + (1 - currentDay));
  thirdDayOfWeek.setDate(today.getDate() + (2 - currentDay));
  fourthDayOfWeek.setDate(today.getDate() + (3 - currentDay));
  fifthDayOfWeek.setDate(today.getDate() + (4 - currentDay));
  sixthDayOfWeek.setDate(today.getDate() + (5 - currentDay));
  lastDayOfWeek.setDate(today.getDate() + (6 - currentDay)); // Set last day of the week

  const formattedDate = formatDate(today);
  return {
    start: firstDayOfWeek.toISOString().split('T')[0],
    second: secondDayOfWeek.toISOString().split('T')[0],
    third: thirdDayOfWeek.toISOString().split('T')[0],
    fourth: fourthDayOfWeek.toISOString().split('T')[0],
    fifth: fifthDayOfWeek.toISOString().split('T')[0],
    sixth: sixthDayOfWeek.toISOString().split('T')[0],
    end: lastDayOfWeek.toISOString().split('T')[0],
    today: formattedDate,
    current: today.toISOString().split('T')[0],
  };
};

export function formatDate(today: Date) {
  const date = new Date(today.toISOString().split('T')[0]);

  const options: Format = {weekday: 'long', day: 'numeric', month: 'short'};
  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate;
}
interface Format {
  weekday: 'long';
  day: 'numeric';
  month: 'short';
}

function createObject(day: DAYS) {
  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let result: DAY[] = [];
  for (let item of days) {
    if (item === 'Sun') {
      let items = {day: item, date: day.start.slice(-2)};
      result = [...result, items];
    }
    if (item === 'Mon') {
      let items = {day: item, date: day.second.slice(-2)};
      result = [...result, items];
    }
    if (item === 'Tue') {
      let items = {day: item, date: day.third.slice(-2)};
      result = [...result, items];
    }
    if (item === 'Wed') {
      let items = {day: item, date: day.fourth.slice(-2)};
      result = [...result, items];
    }
    if (item === 'Thu') {
      let items = {day: item, date: day.fifth.slice(-2)};
      result = [...result, items];
    }
    if (item === 'Fri') {
      let items = {day: item, date: day.sixth.slice(-2)};
      result = [...result, items];
    }
    if (item === 'Sat') {
      let items = {day: item, date: day.end.slice(-2)};
      result = [...result, items];
    }
  }
  return result;
}
interface DAY {
  day: string;
  date: string;
}
interface DAYS {
  start: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
  sixth: string;
  end: string;
  today: string;
}

export default function Calendar() {
  const days = useGetWeekRange();
  const daysAndDate: DAY[] = createObject(days);
  return (
    <View style={styles.container}>
      {daysAndDate.map(({date, day}, i) => {
        return days.current.slice(-2) === date ? (
          <View style={[styles.calendar, styles.selected]} key={i}>
            <Text style={[styles.text, styles.selectedText]}>{day}</Text>
            <Text style={[styles.text, styles.selectedText]}>{date}</Text>
          </View>
        ) : (
          <View style={styles.calendar} key={i}>
            <Text style={styles.text}>{day}</Text>
            <Text style={styles.text}>{date}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 17,
    fontWeight: '500',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  calendar: {
    flex: 1,
    minHeight: 65,
    minWidth: 47,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    padding: 7,
  },
  selected: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: '#30ae49',
  },
  selectedText: {
    color: 'white',
  },
});
