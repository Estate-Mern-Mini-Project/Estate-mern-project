# Estate+ 
## Real Estate Platform

Estate+ is a real estate web application built using the MERN stack, designed to simplify property listing and browsing. The platform offers users an interactive experience with secure login, property management features, and real-time map-based filtering.

### Features
###### •	Property listing and filtering by location and type.
###### •	Protected routes for property management and user profiles.
###### •	Cloudinary image uploads for property images and user avatars.
###### •	Dynamic property counts and Google Maps integration.

### Tech Stack
###### •	Frontend: React.js, SCSS
###### •	Backend: Node.js, Express.js
###### •	Database: MongoDB Atlas with Prisma ORM
###### •	Other Integrations: Google Maps API, Cloudinary


### Project Structure
```bash
    /client: Contains the React frontend
    /server: Contains the Node.js backend, Express routes, and database configuration
```
### Setup Instructions
#### 1. Clone the Repository
```bash
    git clone https://github.com/Estate-Mern-Mini-Project/Estate-mern-project.git
    cd Estate-mern-project
```
#### 2. Install Dependencies

###### •	Install dependencies for the frontend:
```bash
    cd client
    npm install
```
###### •	Install dependencies for the backend:
```bash
    cd ../server
    npm install
```
#### 3. Set up Environment Variables
##### Create .env files in both client and server directories with the following keys:

###### •	Backend .env:
```bash
    DATABASE_URL = your_mongodb_connection_string
    JWT_SECRET_KEY = your_jwt_secret
    CLIENT_URL = http://localhost:3000
```
###### •	Frontend .env:
```bash
    REACT_APP_GOOGLE_MAPS_API_KEY = your_google_maps_api_key
```

#### 4. Run the Project Locally

###### •	Start the backend server:
```bash
    cd server
    nodemon –env-file=.env app.js
```
###### •	Start the frontend development server:
```bash
    cd ../client
    npm start
```
###### •   Access the application at http://localhost:3000.

### Deployment on Render
###### 1.	Push the code to GitHub.
###### 2.	Create a new Web Service on Render for the backend, linking it to the server folder in the GitHub repository.
###### 3.	Create a second Static Site on Render for the front end, linking it to the client folder.
###### 4.	Add the required environment variables to Render's Environment settings.
###### 5.	Change the localhost URL with the Render URL.
###### 6.	Build and deploy the project.
 
Deployed Project URL: <https://estate-9447.onrender.com/>
