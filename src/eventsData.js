import worshippers from './EventsImages/worshippers.jpg'
import event2 from './images/happyc.jpg';
import event3 from './images/zion.png';
import event1 from './images/zion.png';
import discussion from './EventsImages/discussion.jpg'

const eventsData = [
  {
    id: 1,
    title: "Discussion on Family, Marriage & Relationship",
    date: "2023-04-30",
    time: "8:30:00",
    description: "We invite you to join our open forum discussion, where we will delve into crucial topics related to family, marriage, and relationships.",
    image: discussion,
  },
  {
    id: 2,
    title: "True Worshippers",
    date: "2023-04-23",
    time: "8:00:00",
    description: "Let's come together in joyful reverence as we lift our voices in praise and thanksgiving to our Creator. Come let us unite in faith and renew our spirits on this blessed Sunday.",
    image: worshippers,
  },
  {
    id: 3,
    title: "Event 3",
    date: "2023-09-21",
    time: "18:00:00",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    image: event3,
  },
  {
    id: 4,
    title: "Assembly Of God's Firstborns",
    date: "2023-04-19",
    time: "19:30:00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: event1,
  },
  {
    id: 5,
    title: "Event 2",
    date: "2023-04-19",
    time: "18:40:00",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: event2,
  },
  {
    id: 6,
    title: "Event 3",
    date: "2023-09-21",
    time: "18:00:00",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    image: event3,
  },
];

// Update time format to 12-hour format
eventsData.forEach(event => {
  const timeParts = event.time.split(':');
  const hours = parseInt(timeParts[0]);
  const minutes = parseInt(timeParts[1]);
  const amOrPm = hours >= 12 ? 'PM' : 'AM';

  event.time = ((hours + 11) % 12 + 1) + ':' + minutes.toString().padStart(2, '0') + ' ' + amOrPm;
});

export default eventsData;
