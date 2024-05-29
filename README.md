# Stickers E-Commerce Project - Phase 4
### Contributors: Margarita, Roman, Yiran, Retina


## Overview
Welcome to our Phase 4 Stickers E-Commerce project! This project provides an online platform for purchasing stickers. Below are the detailed steps to set up and run the project.


## Setting up
First, we'll need to set up a secret key and a folder to hold the key:


### Create .env File
1. In the server folder, create a new file and name it .env.


2. In the terminal, generate a secret key:
```
python
>>> import secrets
>>> secrets.token_hex(16)
```
3. Add the following to your .env file:
```
SECRET_KEY = "whatever the above 16 digits are"
STRIPE_SECRET_KEY=sk_test_51PL4oZ1drKeT8jIsYKYk1RRwyTPpe1KNucUpHYnG8W1UiGjYG8r5Df8rcf94RvjCLJ6P8VZNE0D6y7shQOvFPKOx00WkDTcpNQ
```
### Install Dependencies
1. Install necessary packages:
```
npm install bcrypt
pipenv install python-dotenv
```


## Running the Application


### Terminal 1 Backend Setup:


1. Install Node.js dependencies:
```
npm install
```
2. Set up Python environment and dependencies:
```
pipenv install


pipenv shell


pip install stripe
```


3. Install Stripe for Node.js:
```
npm install @stripe/stripe-js @stripe/react-stripe-js
```
4. Next navigate into the server directory and start the backend server:
```
cd server
python app.py
```
### Terminal 2: Frontend Setup


1. Navigate to the client directory:
```
cd client
```
2. Start the frontend development server:
```
npm run dev
```
## Testing
To test the payment system, you can use the following information:


+ Debit Card Number: 4242 4242 4242 4242
+ Expiration Date: Any future date
+ CVV/ZipCode: Any number


Feel free to sign up and purchase stickers using the information provided above.
## Notes
+ Ensure all commands are executed in the correct order as specified.
+ If you encounter any issues during setup, verify that all dependencies are correctly installed and that you are running the commands in the appropriate directories.
