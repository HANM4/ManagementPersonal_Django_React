import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PersonalList = () => {
  const [personals, setPersonals] = useState([]);

  useEffect(() => {
    const fetchPersonals = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/personal_list');
        setPersonals(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchPersonals();
  }, []);

  return (
    <div>
      <h1>Список сотрудников</h1>
      <ul>
        {personals.map(personal => (
          <li key={personal.id}>
            {personal.full_name} - {personal.position.title} - {personal.is_dismissed ? 'Уволен' : 'Не уволен'}
            {personal.dismissal_date && ` (Дата увольнения: ${personal.dismissal_date})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalList;