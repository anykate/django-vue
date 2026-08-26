[WriteUp for this project](https://medium.com/@anykate/integrate-django-with-vue-js-3-0-or-later-603d595e61f5)

# Project setup
1. Clone this repository
2. Follow the steps (in order as listed below):

## Frontend (VueJS 3.0)
```sh
cd {{ repo_location_on_your_drive }}/frontend
npm install
npm run build
```
#### Note: Any changes to the code in "frontend" folder will require you to run this command again:
**npm run build**

## Backend (DJango)
```sh
cd {{ repo_location_on_your_drive }}
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
```

### Execute project
```sh
cd {{ repo_location_on_your_drive }}
python manage.py runserver
```

# Enjoy!

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
http://127.0.0.1:8000 OR
http://localhost:8000
```