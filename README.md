# openingHours
 A program that takes JSON-formatted opening hours of a restaurant as an input and outputs hours in more human readable format


## Project setup
```
- clone repo
- Run yarn install
```

### Hot-reloads for development
```
yarn dev
```

### Run in production
```
yarn start
```

### APP URL
- Heroku - [Opening Hours](https://opening-hours-app.herokuapp.com/)


### Endpoints
```
GET / - ROOT URL: responds with a Welcome message
POST /hours - Send json formatted request in body to get the daily open hours in more readable format using POSTMAN
visit /hours
```

### Sample Request body
```
{
    "hours": {
  "monday": [
  ], "tuesday": [
  {
  "type": "open", "value": 36000
  },
  {
  "type": "close", "value": 64800
  } ],
  "wednesday": [
  ], "thursday": [
  {
  "type": "open", "value": 36000
  }, {
  "type": "close",
  "value": 64800 }
  ], "friday": [
  {
  "type": "open", "value": 36000
  } ],
  "saturday": [ {
  "type": "close",
  "value": 3600 },
  {
  "type": "open", "value": 36000
  } ],
  "sunday": [
  
  {
  "type": "close", "value": 3600
  }, {
  "type": "open",
  "value": 43200 },
  {
  "type": "close", "value": 75600
  } ]
  }

}
```

### Sample Response
```
{
    "status": "success",
    "statusCode": 200,
    "message": "success",
    "data": [
        "Monday: Closed",
        "Tuesday: 01:00 AM - 01:01 AM",
        "Wednesday: Closed",
        "Thursday: 01:00 AM - 01:01 AM",
        "Friday:  01:00 AM",
        "Saturday: 01:00 AM - 01:00 AM",
        "Sunday:  - 01:00 AM, 01:00 AM - 01:01 AM."
    ]
}
```


## Part 2

### Opinion on Using JSON

```
IN my experience JSON has been the easiest means to transform data over the web or make data available to the frontend services, JSON is a good choice. However, I will modify how the data is modeled to make it easier to read. For example, a single object should carry both the opening and closing hours e.g
{
  "open": 3000, "close": 36000
}

That way it is less redundant.
```
