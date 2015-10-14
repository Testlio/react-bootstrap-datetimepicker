// Converts 24 time format to 1-12am/pm
//
// Example:
//
//  23 = 11 pm
//  22 = 10 pm
//
//  '22:30' = 10:30 pm
//  '22:5'  = 10:05 pm
export default function convertToAmPm(time) {
  let split   = (time + '').split(':');
  let hours   = split[0], minutes = split[1] || 0;

  let hour    = hours == 0 ? 12 : (hours > 12 ? hours - 12 : hours);
  let min     = minutes < 10 ? '0' + minutes : minutes;
  let ampm    = hours < 12 ? 'AM' : 'PM';
  return hour + ':' + min + ' ' + ampm;
}
