/* 
------------------------------
//* BASIC CONTEXT API SETUP
------------------------------
1. Context API: Share auth state with other components (across the application)
2. Create an UserContext
3. ContextProvider with passed children
4. set the UserContext in the index.js file
5. To consume the context: export the AuthContext from UserContext
6. Now at Header or Home or  Anywhere else: use useContext() hook to get the info in the Context
*/

/* 
-----------------------
//* Auth Integration
-----------------------
1. use getAuth() by passing the app from firebase.config.js file
2. create a function named createUser and return a function named createUserWithEmailAndPassword()

*/
