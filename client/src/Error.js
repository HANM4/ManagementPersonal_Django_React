import React from 'react';

const Error = ({ message, onBack }) => {
  return (
    <div>
      <h1>Ошибка</h1>
      <p>{message}</p>
      <button onClick={onBack}>Назад</button>
    </div>
  );
};

export default Error;