import requests
import requests

endpoint = "http://localhost:8000/login"


# get_response = requests.get(endpoint, json={"product_id": 123 }) # HTTP 
# print(get_response.json())

username = "theone"
password = "theone"

data = {
    "username": username,
    "password": password
}

response = requests.post(endpoint, json=data)

# print(response.json())