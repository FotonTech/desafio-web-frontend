# Instructions

To start using this project just need to set the environment variable `REACT_APP_GOOGLE_BOOKS_API` with the google api link that in the moment is [https://www.googleapis.com/books/v1/volumes](https://www.googleapis.com/books/v1/volumes) and the variable with your google api key as `REACT_APP_GOOGLE_BOOKS_API_KEY` with the key provided by google in the page [https://console.cloud.google.com/](https://console.cloud.google.com/).

# Frontend Challenge

Clone this repository and start our challenge **right now**

Use React or React Native depending on the rule you are running for.

**NOTE:** If you have any questions regarding the test, just send us your question on our Discord's channel **#technical-challenge** on [Foton Discord](https://discord.gg/uw55aDewNf).

## API

Use the [Google Books](https://developers.google.com/books/docs/v1/using)' API to recover the data that will be shown on the app.

```js
const query = 'harry potter';
fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
```

**NOTE:** You can use the form of calling apis of your choice (Fetch, Axios, etc).

## Design/Screens

https://www.figma.com/file/KFElqzD983WNyvMY1SaF0c/book-app?node-id=0%3A1

<img width="581" alt="Screen Shot 2021-04-13 at 10 19 47" src="https://user-images.githubusercontent.com/13947203/114559257-eb55ad00-9c41-11eb-9617-4e7627cc373e.png">

The website design has 3 screens, which are:

### Home

1. Create a Pixel Perfect screen based on design above;
2. The books must be clickable and redirect to **details** screen.

### Search

In this screen the functionalities below are **mandatory**:

1. See a list of books based on search query;
2. Make it possible to search for more books with a "Load more" button;
3. Search books by name;
4. Click on one of the books to see their details.

### Books details

In this screen the functionalities below are **mandatory**:

1. See all information for the selected book.
