# Amazon-Clone

Deployment => https://clone-d67b9.web.app/

## Firebase

- Authentication
- Hosting
- Database
- Firebase cloud functions

### Tools

- html
- css
- React Context API
- Deployed with firebase
Firebase allows you to have your datase and also host your app online
Firebase cloud functions to connect to stripe inorder to process payments
- Stripe functionality
- Checkout Page
- Cloud Functions to process the stripe payment(serverless)
- Firestore for real time database
- Express App hosted on a cloud function

#### Deployment

- The Backend
- upgrade to `blaze` plan on firebase
- cd functions
- firebase deploy --only functions

- The Frontend
- yarn build
- firebase deploy --only hosting