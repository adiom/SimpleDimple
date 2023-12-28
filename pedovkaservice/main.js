
const fs = require('fs');
const axios = require('axios');

async function getOstatki(skladUser, skladPassword) {
  const baseUrl = 'https://api.moysklad.ru/api/remap/1.2/report/stock/all';
  const auth = {
    username: skladUser,
    password: skladPassword,
  };

  try {
    const response = await axios.get(baseUrl, { auth });
    const products = response.data.rows.map(product => ({
      'Имя': product.name || '',
      'Артикул': product.article || '',
      'Количество': product.stock || 0,
    }));

    // Сохраняем данные в файл data.json
    fs.writeFileSync('data.json', JSON.stringify(products, null, 2));
    console.log('Data successfully saved to data.json');

    return products;
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
    return null;
  }
}

// Пример использования
const skladUser = 'sklad@fillrufill';
const skladPassword = 'fillru2023';

getOstatki(skladUser, skladPassword)
  .then(result => {
    if (result) {
      console.log(result);
    }
  })
  .catch(error => console.error(`Error: ${error.message}`));
