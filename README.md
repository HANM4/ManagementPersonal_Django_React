# ManagementPersonal
## Быстрый старт с docker
1.   docker-compose up -d --build
2.  docker ps  запоминаем CONTAINER_ID_djnago_client
4.   docker exec -it  /bin/bash  \ - заменяем на то что мы запомнили в пункте  2
5.   bash docker_first_up.sh  запуск скрипта для первого запуска проекта (создаём статик файлы, запускаем миграцию, создаем супер пользователя)
6.   exit  или  ctrl + Z  выход из терминала контейнера

## О проекте
Веб сервис с клиент-серверной архитектурой для учета действующих и уволенных сотрудников.

### Скриншоты
- Авторизация через клиент на react

![image](https://github.com/user-attachments/assets/227681dc-a252-4a68-907e-f9fe3236cb5b)
- Отображение списка всех сотрудников через клиент на react

![image](https://github.com/user-attachments/assets/c390a69f-aeb3-4492-a7ab-d463d85567ff)

### Бизнес логика
- Дата увольнение автоматически удаляется если сотрудник не уволен
- Дата увольнения автоматически ставится сегодняшняя если сотрудник уволен, а дата не указана
- Обрушатся к API списка сотрудников может только авторизированный пользователь
- При обращении к API для вывода сотрудников можно указать информация о каких сотрудников вас интересует, уволенных или нет
- Если при обращении к API для вывода сотрудников не указывать каких сотрудников вы хотите видеть, то вы получите список всех сотрудников
- Для добавления новых сотрудников используется стандартная django-вская админка **/admin (логин:пароль)(admin:admin)**

### Документация API
- Для удобства тестирования API в директории лежит файл 'ManagementPersonal API.postman_collection.json' для импорта коллекции запросов в Postman.
- Для вывода сотрудников используется запросов GET /api/v1/personal_list необходимо указать в заголовки действующий токен пользователя в формате Authorization: Bearer \. В параметрах можно указать фильтр по is_dismissed со значениями true или false.
- Для получения токена нужно сделать POST запрос к /api/v1/token/ и в теле указать username: new_username, password: new_password. В ответ получим токен для обновления токена и сам access токен.
- Для регистрации нового пользователя используется POST /api/v1/auth/users/ и в теле указать username: new_username, password: new_password

## Стек проекта
- Серверная часть написана на django
- Для API использовался DRF
- Процесс идентификации использует jwt с помощью библиотеки simpleJWT
- Клиентская часть написана на react

## Архитектура проекта
![image](https://github.com/user-attachments/assets/5d921374-398c-4102-9c87-31659fd0112a)
