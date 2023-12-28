import requests
import json
import time

def get_ostatki():
    base_url = 'https://api.moysklad.ru/api/remap/1.2/report/stock/all'

    #name_and_password = request.user.last_name
    #print(request.user.last_name)
    #ozon_id_and_ozon_key = request.user.first_name
    #INN_and_email = request.user.email

    #split_data = name_and_password.split("___")
    #sklad_user = split_data[0]
    #sklad_password = split_data[1]
    #split_data = INN_and_email.split("___")
    #INN = split_data[0]
    #email = split_data[1]
    #split_data = ozon_id_and_ozon_key.split("___")
    #ozon_id = split_data[0]
    #ozon_key = split_data[1]
    
    sklad_user = "sklad@fillrufill"
    sklad_password = "fillru2023"
    session = requests.Session()
    session.auth = (sklad_user, sklad_password)
    response = session.get(base_url)
    response_json = response.json()
    products = []
    
    for product in response_json['rows']:
        product_data = {
            'Имя': product['name'],
            'Артикул': product['article'],
            'Количество': product['stock'],
        }
        products.append(product_data)
    
    return(products)


print (get_ostatki())