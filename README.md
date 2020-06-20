# demo-check
# REST API

**Доступные маршруты Запрос - Ответ**

`GET /users` — JSON-список всех пользователей
`GET /cards` — JSON-список всех карточек
`GET /users/:id` — JSON-пользователя с переданным после /users идентификатором. Если  такого нет, API должно возвращать 404 статус ответа и JSON:
```
{
  "message": "Нет пользователя с таким id"
}
```
`Несуществующий адрес` —
```
{
  "message": "Запрашиваемый ресурс не найден"
}
```
