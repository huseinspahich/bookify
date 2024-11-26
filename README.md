# bookify
Bookify is a web application that allows users to manage a personal library of books.    
Users can add, edit, and delete book entries while also sorting them by title or rating.    
The application integrates a quote API to provide inspirational quotes alongside the book showcase.   
   
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

Technologies Used   
- **Frontend**: HTML, CSS, EJS, Bootstrap;
- **Backend**: Node.js, Express.js;
- **Database**: PostgreSQL;
- **API**: Axios for making HTTP requests;

![1](https://github.com/user-attachments/assets/0f33ed8b-68ed-4c9e-a508-90d72e6e876a)
![2](https://github.com/user-attachments/assets/120f1e3f-9bd5-4e86-8f35-2916883b6dba)
![3](https://github.com/user-attachments/assets/bf74840e-929d-4c37-b131-6a2612682cdd)
![4](https://github.com/user-attachments/assets/1d1d0142-7529-46aa-a49a-2a4c807c3e0c)
![6](https://github.com/user-attachments/assets/43680f8b-f7ec-48d4-a135-08f09367c436)     
## Installation
**1.Install NPM**   
npm install    
**2. Set Up PostgreSQL Database**   
Open PostgreSQL and create a database named book          
CREATE TABLE books (     
    id SERIAL PRIMARY KEY,     
    title VARCHAR(255),      
    authors VARCHAR(255),      
    rating NUMERIC(2, 1),      
    summary TEXT      
);      
**4. Configure Environment Variables**      
Create a .env file in the root of the project and add your PostgreSQL configuration as follows:     
PG_USER=your_pg_username      
PG_HOST=localhost      
PG_DATABASE=book      
PG_PASSWORD=your_pg_password       
PG_PORT=5434        
Make sure to replace your_pg_username and your_pg_password with your actual PostgreSQL credentials.   
**5. Start the Server**     
node index.js    
**6. Access the Application**    
Open http://localhost:3000 in your browser to use the Book Collection App.    
