# team09

## Introduction
  - Website name: **PickInk**
  - Description: a community for tattoo artists and lovers
  - Link: https://pickink.herokuapp.com

### *Roles and functionalities of Users*
 - As a regular user, they can
     - find artists by applying their favoured conditions (e.g. styles, locations, availability)
     - book appointments with artists
     - modify their bookings
     - follow a user (mostly artists as they regularly update new tattoo works)
     - Edit their profile, including profile picture, favourite tattoo styles, phone number, email, username, etc.
 - As an artist user, they have all regular user functionalities and can also
     - upload their tattoo artworks, edit the artworks they have posted
     - customize their availability for users to book an appointment on  
     - provide their current working locations (as most artists regularly work as guest artists in different places)
     - provide their specialized art styles

## Website pages
  - `https://www.pickink.herokuapp.com`

### *Explore* `/ & /explore`
- Landing home page that allows users to browse artists and their selected work based on the filters including artists' locations, available dates, and styles they chose.
- Among the results, you can go to the artists' profile pages by clicking their username. 

### *Sign Up* `/signup`
  - Sign up for the webapp
  - Click on the signup on the Navbar, and signup by filling the form
  - For all users, a unique username and email are required. For artists, a piece of ID and their tattoo practice license is required.

### *Login* `/login`
  - Logging in to the webapp
  - Fill in the username and passwords to login
  - Sample Credentials:
      - username: `user`
      - password: `user`

### *Admin Site* `/admin`
- Admin can manage artist accounts by reviewing their IDs, tattoo practice license, and approve or reject their accounts as an artist.
- Only credential:
    - username: `admin`
    - password: `admin`  
- The login paths for admin and regular user are not interchangable.


### *Profile*  
  - For customers, `/userprofile`
    - Regular profile pages containing basic info, i.e. username, full name, contact info, favourite styles, etc.. 
    - Features on the pages:
      - Profile Card
        - The profile card on the left of the page shows the profile photo, bio, followers and followings
        - A dropdown list of followers/followings will show when clicking the followers/followings on the card
        - You can navigate to the followers'/followings' profile pages by clicking the dropdown lists of the followers/followings
        - Follow and unfollow other users (both customers and artists) by clicking the follow and unfollow button on others' profile pages
      - Edit your profile
        - Users can edit their profiles on this page by clicking the `Edit your profile` button and filling in the popup form
        - The edit profile form will update the change if users click on `confirm`, otherwise, all the info will stay as previous
      
  - For artists, `/artistprofile` and `/artistgallery`
    -  Artists' profile pages contain all the basic info in regular profile pages and also some additional info for artists, i.e. home location, and artists' styles.
    -  Users' views:
      - Book an appointment (artist's profile page)
        - Book an appointment by filling up the popup form.
      - Gallery (artist's profile page)
        - Navigate to the artist's gallery
    - Artists' views:
      - Edit your profile (artist's profile page)
        - Similar to the edit profile for customer
      - Gallery (artist's profile page)
        - Navigate to the artist's gallery
      - Edit my gallery (artist's gallery page)
        - Edit the titles and descriptions of any image showing on the page by filling up the popup form
        - When click the `confirm` button on the popup form, the info of the image will change; when click on the `cancel`, info will stay as previous
      - Add images to my gallery (artist's gallery page)
        - Add a new image to the gallery, by uploading your image and filling out the popup form.
      - Delete images from my gallery(artist's gallery page)
        - Delete images from your gallery
        - By clicking the `delete` button in the popup, you are confirming the deletion, otherwise, the image will stay. 
      - Post available timeslots
        - Post artists' available timeslots, so that clients can book the appointment based on the available timeslots.
        - The `post available timeslots` button will only show when the artist set a valid home location. Since this is for updating the available timeslots for clients to book appointments, a valid home location is needed. 
  
    **Notes for Profile (Important!):** 
    - For each user, he/she can only edit their profile page (and gallery page, for artists), and view limited profile info on other users' profile pages for security reasons ( to protect others' personal information).
    - Both customers and artists can book appointments on and only with other artists
    - For each artist, he/she cannot book an appointment with themselves on their profile/gallery page.

### *Manage Booking* `/managebooking`
- Page that allows user to manage their booking.

- For customers,
  - view all booking requests (pending bookings)
  - cancel a booking that is yet to be heard back from artist
  - cancel a booking that has cancellation allowed by artist
  - pick a time for the appointment after artist get back with the time needed for the specified tattoo
  - alternate time for an appointment that the artist has indicated it to be modifiable.
  - view confirmed bookings
  
- For artists,
  - view new booking requests (pending bookings)
  - send an estimated duration needed for the specified tattoo
  - modify the time for a confirmed booking
  - view confirmed bookings
  - cancel bookings
  
### *Calendar* `/calendar`
- Page to visualize the comfirmed booking appointments in a calender view
- Click on each appointments showing on the calendar to see details
- For regular users, they can see the confirmed bookings with artists on the calendar.
- For artists, they can see the confirmed bookings with their customers, as well as the bookings with other artists. (the two type of bookings are shown in different colors)

## Testing Instructions

### Backend

- Backend Host URL: `https://pickink.herokuapp.com`

- **Admin model**: (No other methods allowed to check, add, or modify the admin information. There is only one account.)
    - `/admin/login`
        - POST, Body: `{username, password}`
            - To log in as an admin, with success return `{token: 'loggedIn'}`, otherwise `{token: null}`

- **User model**: 
    - `/api/users`
        - GET
            - With success return a list of all existign User objects
        - POST, Body: `{userName, password, email, firstName, lastName, birthDate}`
            - With success return newly created User object
    - `/api/users/:id`
        - GET
            - With success return corresponding User object with this id
        - PUT
            - With success return corresponding modified User object with this id
    - `/users/login`
        - POST, Body: `{username, password}`
        - GET
            - shouldn't be done through Postman
    - `/users/logout`
        - GET
            - shouldn't be done through Postman
    -  `/api/artists`
        - GET, Query parameters: (everything is optional) `?style={a list of Style object IDs}&location={a Location object ID}`
            - With success return a corresponding list of User objects

- **Style model**:
    - `/api/styles`
        - GET
            - With success returns a list of all existing Style objects
        - POST, Body: `{name}`
            - With success return newly created Style object
    - `/api/styles/:id`
        - GET
            - With success return corresponding Location object with this id

- **Location model**:
    - `/api/locations`
        - GET, Query parameters: (optional as a whole) `?country={countryName}&region={regionName}`
            - With success return a list of all existing Location objects or a Location object if there's query
        - POST, Body: `{country, region}`
            - With success return newly created Location object
    - `/api/locations/:id`
        - GET
            - With success return corresponding Location object with this id

- **Timeslot model**:
   - Structure:
    - `artistID` (required): artist ID realted to the timeslot
    - `customerID` (required): the customer who books this timeslot
    - `locationID` (optional): the location ID of the timeslot
    - `startTims` (required): the starttime of the timeslot
    - `isBooked` (required): if the timeslot is booked, the default value is False
  - `/api/timeslots`
    - POST, Body: {all the required fields}
      - Create a new timeslot, with success return the info of the new timeslot
    - GET, Query parameters: (required) `?start={startTime}&end={endTime}`
          - With success, return a list of Timeslot objects in the period
  - `/api/timeslots/:id`
    - GET
      - With success return the info of the timeslot with the id
    - PATCH, Body: {all required and updated fields}
      - With success return the info of the updated timeslot with the id
    - DELETE
      - With success return the info of the deleted timeslot with the id
- **Image Model**:
  - Structure:
    - `_id/imageID` (required): the id of the image
    - `img` (required): the link of the image at Cloudinary
    - `title` (optional): the title of the image
    - `desc` (optional): the description of the image
    
  - `/api/images/`
    - POST, Body: {img: file, title: String, desc: String}
      - With success return the image info of the posted image
    - GET
      - With success return all the images stored in the database
  - `/api/images/:imageId`
    - GET 
      - With success return the image info with `imageID`
    - DELETE
      - With success return the deleted image info with `imageID`
    - PUT, Body: {title: String, desc: String}
      - With success return the updated image info with `imageID`

- **Booking Model**:
  - Structure:
    - `customerID` (required): id of the customer who books the appointment
    - `artistID` (required): id of the artist who is booked
    - `timeslots` (required): the timeslots of the appointment
    - `isCancellable` (required): if the appointment is cancellable
    - `isModifiable` (required): if the appointment is modifiable
    - `choice` (required): flash/custom design 
    - `flashLink` (optional): an image of the flash design, if customers choose the flash design
    - `customerIdea` (optional): a description of customers' ideas, if they choose the customer design
    - `size` (required): the size of the customer desired tattoo
    - `placement` (required): desired placement of the tattoo
    - `otherLink` (optional): any reference photos, drawings, sketches, screenshots, etc. that will help to explain your ideas
    - `concerns` (optional): cutomers' concerns about (allergies, accommodations, peronal concerns, etc.)
    - `duration` (required): the expected duration of making the tattoo (provided by artists)
    - `isConfirmed` (required): whether the appointment is confirmed, the default value is False
  - `/api/bookings`
    - POST, Body: {all required the info for booking}
      - With success return the info of the new booking
  - `/api/bookings/:id`
    - POST, Body: {all required the info for booking}
      - With success return the booking info with id
    - GET
      - With success return the booking with id
    - PATCH, Body: {all required the info for booking}
      - With success return the updated booking with id
      - Sends an email to the client once the artist submits an estimated duration for the appointment
      - Sends an email to both client and artist notifying them of time changes or confirmation of booking 
    - DELETE
      - With success return the deleted booking with id
      - Sends an email to both the client and artist to notify the cancellation
  - `/api/get-bookings`
    - POST, Body: as below
      - THIS IS A GET, BUT EASIER TO MAKE IT TO WORK BY CHANGING TO POST THAN REWRITING AS QUERY
      - get all / get by artistID / get by customerID / get by isConfirmed
      - if do not have req.body, get all
      - req.body.artistID, get all bookings of that artist
      - req.body.customerID, get all bookings of that customer
      - req.body.artistID AND req.body.isConfirmed, get all bookings for confirmed/ (not confirmed) artist's bookings
      - req.body.customerID AND req.body.isConfirmed, get all bookings for confirmed/ (not confirmed) customer's bookings
      - With success return the desired booking(s) to satisfy all the above conditions

### Frontend
- From root directory, navigate to `/webapp`, run  `npm i` and `npm run build` to build the React app
- Move the generated folder `/build` in `/webapp` to `../backend`
- Navigate to `../backend`, run `npm i` and `node server.js` to start the app by local server
- Now access the web app thru `localhost:5000/`
- Note: To change the cloud database to a new empty local one
    - Comment out line 3 and uncomment line 5 in `/backend/db/mongoose.js`
    - In `/backend`, run `mkdir mongo-data` and `mongod --dbpath mongo-data`
    - create a admin account by POST on `localhost:5000/api/admin` with request body `{"userName": "admin", "password": "admin", "token": "admin"}`

## Reference
- The UI template used to help us customize our page
  - Link: https://demos.creative-tim.com/paper-kit-react/#/index
- Canlendar used to keep track of their available datetimes
  - Link: http://cdn.syncfusion.com/ej2/material.css
- Flatlist in react (react-flatlist)
  - Link: https://github.com/ecorreiadev/flatlist-react/
- react-icons 
  - Link: https://react-icons.github.io/react-icons/
- Lists of countries and region used to browse artists
  - Link: https://github.com/country-regions/react-country-region-selector
