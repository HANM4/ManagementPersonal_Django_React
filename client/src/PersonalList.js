import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Error from './Error';

const PersonalList = ({ token, onBack }) => {
  const [personals, setPersonals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPersonals = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/personal_list', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPersonals(response.data);
      } catch (error) {
        setError('Ошибка при получении данных: ' + error.response.data.detail);
        console.error('Ошибка при получении данных:', error);
      }
    };

    if (token) {
      fetchPersonals();
    }
  }, [token]);

  if (error) {
    return <Error message={error} onBack={onBack} />;
  }

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