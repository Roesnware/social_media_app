// func to add suffix to day 
const addSuffixToDay = (day) => {
  // convert to string 
  let dayToString = day.toString();

  // get length of string 
  let len = dayToString.length

  // get last char 
  const lastChar = dayToString.charAt(len - 1);

  if (lastChar === '1' && dayToString !== '11') { // 1st
    dayToString = dayToString + 'st';
  }
  else if (lastChar === '2' && dateStr !== '12') { // 2nd
    dayToString = dayToString + 'nd';
  }
  else if (lastChar === '3' && dateStr !== '13') { // 3rd
    dayToString = dayToString + 'rd';
  }
  else { // 4th, 5th, etc...
    dayToString = dayToString + 'th';
  }

  // return new day str 
  return dayToString;
};

// export func to format date 
module.exports = (date, { lenOfMonth = 'short', dateSuffix = true } = {}) => {
  // obj for months 
  const months = {
    0: lenOfMonth === 'short' ? 'Jan' : 'January',
    1: lenOfMonth === 'short' ? 'Feb' : 'February',
    2: lenOfMonth === 'short' ? 'Mar' : 'March',
    3: lenOfMonth === 'short' ? 'Apr' : 'April',
    4: lenOfMonth === 'short' ? 'May' : 'May',
    5: lenOfMonth === 'short' ? 'Jun' : 'June',
    6: lenOfMonth === 'short' ? 'Jul' : 'July',
    7: lenOfMonth === 'short' ? 'Aug' : 'August',
    8: lenOfMonth === 'short' ? 'Sep' : 'September',
    9: lenOfMonth === 'short' ? 'Oct' : 'October',
    10: lenOfMonth === 'short' ? 'Nov' : 'November',
    11: lenOfMonth === 'short' ? 'Dec' : 'December',
  };

  // date obj 
  const dateObj = new Date(date);

  // get month 
  const month = months[dateObj.getMonth()];

  // get day 
  const day = dateSuffix
    ? addSuffixToDay(dateObj.getDate())
    : dateObj.getDate();

  // get year 
  const year = dateObj.getFullYear();

  // get hour 
  let hour =
    dateObj.getHours() > 12
      ? Math.floor(dateObj.getHours() - 12)
      : dateObj.getHours();

  // start hours at 12:00 am not 0:00 am
  if (hour === 0) {
    hour = 12;
  }

  // check if single diigt minutes then add 0 if is 
  const minutes = (dateObj.getMinutes() < 10 ? '0' : '') + dateObj.getMinutes();

  // check time of day and add am or pm 
  const timeOfDay = dateObj.getHours() >= 12 ? 'pm' : 'am';

  // build formated str
  const formattedTime = `${month} ${day}, ${year} at ${hour}:${minutes} ${timeOfDay}`;

  // return formated str
  return formattedTime;
};
