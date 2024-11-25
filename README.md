# bookify
Bookify is a web application that allows users to manage a personal library of books.    
Users can add, edit, and delete book entries while also sorting them by title or rating.    
The application integrates a quote API to provide inspirational quotes alongside the book showcase.   

Features   
- **Book Management**: Add, edit, delete, and view books in a PostgreSQL database.   
- **Sorting Options**: Sort books by attributes like title, author, or rating.   
- **Random Quotes**: Fetches and displays a random quote on the homepage from RealInspire API.   
- **User-Friendly Interface**: Dynamic EJS templates for a smooth user experience.     

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
