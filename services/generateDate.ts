const generateDate = (today: Date, targetDay: Date | null) => {
  if (today.toLocaleDateString() === targetDay?.toLocaleDateString()) {
    return 'Сегодня';
  } else if (
    new Date(today.setDate(today.getDate() + 1)).toLocaleDateString() ===
    targetDay?.toLocaleDateString()
  ) {
    return 'Завтра';
  } else {
    return targetDay?.toLocaleDateString();
  }
};

export default generateDate;
