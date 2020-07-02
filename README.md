# Welcome to exchange-rates
This project is a side project intended to brush up on my node / typescript / react skills.

## Todo:
### Backend
- Setup a simple backend in node / typescript ✅
- Add an endpoint to GET all the latest exchange rates ✅
- Add an endpoint to GET a comparison of all currencies compared to the one passed in ✅
- Allow the above call to have a time period passed in i.e. days, weeks, months.
- Add unit / integration tests

### Frontend
- Setup a simple frontend in react
- Add a landing screen which provides all the latest exchange rates.
- Add a selector to select what currency you want to base all the values off.
- Add a click through button for each rate, to open a basic modal.
- Add a graph showing the trend of this exchange rate currency comparison over a week.
- Allow the user to toggle the time period i.e. day, week, month.

## In the future:
- Implement a caching layer to prevent numerous calls to our external api.
- Add call throttling.
- Add an endpoint to add watchers based on the users sessionId. It will send a browser notification when a certain threshold is met.
