import React from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';

const App = () => {
  const data = [
    { номер: 1, название: 'Товар 1', владелец: 'Владелец 1', штрихкод: 'Штрихкод 1', количество: 10 },
    { номер: 2, название: 'Товар 2', владелец: 'Владелец 2', штрихкод: 'Штрихкод 2', количество: 5 },
    { номер: 3, название: 'Товар 3', владелец: 'Владелец 3', штрихкод: 'Штрихкод 3', количество: 3 },
    { номер: 4, название: 'Товар 4', владелец: 'Владелец 4', штрихкод: 'Штрихкод 4', количество: 8 },
  ];

  return (
    <div className="App">
      <h1>Таблица товаров</h1>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Номер</th>
            <th>Название товара</th>
            <th>Владелец</th>
            <th>Штрихкод</th>
            <th>Количество</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.номер}>
              <td>{item.номер}</td>
              <td>{item.название}</td>
              <td>{item.владелец}</td>
              <td>{item.штрихкод}</td>
              <td>{item.количество}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default App;
