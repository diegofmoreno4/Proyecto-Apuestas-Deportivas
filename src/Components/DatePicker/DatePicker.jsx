import React, { useState } from 'react';
import styles from './DatePicker.module.css';

const DatePicker = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <div className={styles.datepicker}>
      <label htmlFor="datePicker">Selecciona una fecha: </label>
      <input
        type="date"
        id="datePicker"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DatePicker;
