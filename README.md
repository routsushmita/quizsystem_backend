postman collection: https://api.postman.com/collections/18559341-c2353bf7-5c9e-4b87-93d4-7a83d1ef0678?access_key=PMAT-01GNT3NRH8NZ741SM19XPZ393H

Repo Link: https://github.com/routsushmita/quizsystem_backend

Build steps:

*Created a home page 
*user can register on clicking Signin button on Nav bar or can use given option student or teacher
*After signin User data in saved in DB
*for login matching user email from existing data
  -if JWT token get expired then created new JWT token
  -if user User do not exist throwing alert
*after login
------ if teacher
can create a QUIZ
------ if student can view list of quest 
------ clicking any one link will land on play quiz page

User can logout of portal using LOGOUT button on navbar
-if user id logout routes are restricted 


Important while signing UP Please put role(admin or student)