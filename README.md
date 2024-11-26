# bookify
Bookify is a dynamic web application designed to help users efficiently manage their personal book library. With full CRUD capabilities (Create, Read, Update, Delete), users can easily add new books, modify existing entries, or remove books from their collection. Books can be organized and sorted by various attributes, including title, author, and rating, ensuring a personalized browsing experience.
In addition to managing their library, users are greeted with a source of inspiration **Bookify** integrates a quote API that randomly fetches motivational quotes to enhance the overall user experience.
To ensure secure and seamless interactions, Bookify includes robust authentication options. Users can log in or register through local authentication or Google OAuth, with all passwords securely hashed using bcrypt. User sessions are handled efficiently through express-session, making the app both secure and user-friendly.
With a clean and intuitive interface, Bookify combines powerful functionality with a simple and enjoyable user experience.
   
## Key Features
### Book Management:

- **Add Books**: Easily add new books to your library with essential details like title, author, rating, and a brief summary.  
- **Edit Books**: Modify book information whenever needed, ensuring your library stays accurate and up-to-date.  
- **Delete Books**: Remove books from your library with a simple click, helping you keep your collection lean and relevant.  
- **Sorting Options**: Sort books by title, author, or rating for a customized and efficient browsing experience.  
### Inspirational Quotes:
Fetches and displays a random quote from the RealInspire API on the homepage, offering motivation and positive energy alongside your book list.   
### User Authentication:
- **Local Authentication**: Users can register and log in with a username and password to securely access their library.
- **Google OAuth**: Seamless login with Google accounts, providing convenience and security.
### Dynamic User Interface:
Built with EJS templates, the user interface updates dynamically, offering an interactive experience for users.
Bootstrap ensures the app is responsive and looks great on mobile devices.
### Security:
Uses bcrypt for securely hashing passwords and express-session for managing user sessions.   
### PostgreSQL Database:
Stores user and book information in a PostgreSQL database, ensuring data integrity and reliability.   

## Technologies Used   
- **Frontend**: HTML, CSS, EJS, Bootstrap;
- **Backend**: Node.js, Express.js;
- **Database**: PostgreSQL;
- **API**: Axios for making HTTP requests;

## Getting Started
Follow the instructions below to get local copy up and running.
**Some features require a set up of .env file.**
### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/huseinspahich/bookify.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run command below to start the application.
   ```sh
   node index.js
   ```
   Website home page can be accessed on http://localhost:3000.
       
![register](https://github.com/user-attachments/assets/2db94bdd-d5e7-4d79-b6ff-636601f2b9dc)
![login](https://github.com/user-attachments/assets/6fdc5769-1c30-4435-b3c0-4123fe9f50be)
![Dizajn bez naslova](https://github.com/user-attachments/assets/951ccac5-7cb1-4c23-88a7-72ba13c4dcff)


![1](https://github.com/user-attachments/assets/0f33ed8b-68ed-4c9e-a508-90d72e6e876a)
![2](https://github.com/user-attachments/assets/120f1e3f-9bd5-4e86-8f35-2916883b6dba)
![3](https://github.com/user-attachments/assets/bf74840e-929d-4c37-b131-6a2612682cdd)
![4](https://github.com/user-attachments/assets/1d1d0142-7529-46aa-a49a-2a4c807c3e0c)
![6](https://github.com/user-attachments/assets/43680f8b-f7ec-48d4-a135-08f09367c436)     
