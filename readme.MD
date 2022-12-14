**What is this**

Its a chat application for mobile devices made with React Native (No Expo) based on Firebase API.

**Accept test status**

Splash screen
As a user I would like a nice and clean splash screen while the application loads.

Accepttest

    1. Splash loads while the application is loading up π΄
    2. When finish next screen should fade in π’
    a. If you are logged in, go to Chat rooms π’
    b. If you are not logged in, go to Login screen π’

Login screen
As a user I would like to be able to login using my social login accounts.

Accepttest

    1. Add two sign in methods
        a. Facebook π΄
        b. Google π΄
    2. When signed in, i go to Chat rooms π’
    3. If error happens, user is shown a dialog π’

Chat rooms
As a user I would like to be shown a list of available rooms. The
list is sorted by newest message.

Accepttest

    1. A list is shown with the name and a short description of each room π’
    2. Each row have a chevron icon to the right indicating i can press π’
    3. The list is sorted by newest message π΄
    4. I can pull to refresh to reload the list π’
    5. Pressing a room takes me to the send and receive screen π’

Send and receive messages
As a user I would like to be able to send and receive messages inside a chat room.

Accepttest

    1. Last 50 messages is loaded when chat room is opened π΄
    2. Scroll to load more messages π΄
    3. When a message is received it is automatically added to the list π’
    4. An input field at the bottom of the view should be shown
        a. When pressed the keyboard opens π’
        b. When message entered and user presses βSendβ / βEnterβ the message is sent and added to the list π’
    5. A message consists of
        a. Avatar of sender π’
        b. Name of sender π’
        c. Message date π’
        d. Message text π’

Push functionality
As a user I would like to receive a push message when a new message
is added to a room that I have participated in.

Accepttest

    1. When i write a message inside a room, then i am asked if i want to have notifications from that room π΄
    2. Every time someone writes a message in the room, a push message is sent to me π΄
    3. When the user presses a push message, he or she should be taken directly to the room/message (using deep links). π΄

Upload of images to chat room
As a user I would like to be able to upload an image to a chat room.

Accepttest

    1. I can upload image from camera π’
    2. I can upload image from phone gallery π’
    3. Image is shown in the chat room in the same flow as messages π’



**Screenshots**

Screenshot of the login screen

![Screenshot](examples/images/loginscreen.PNG)

Screenshot of the groupchat screen

![Screenshot](examples/images/groupchat.PNG)


Screenshot of the chatroom 'lobby'

![Screenshot](examples/images/chatrooms.PNG)

Screenshot of firebase firestore contents

![Screenshot](examples/images/firebase.PNG)

