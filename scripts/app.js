

// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const newPark = document.querySelector('.parks');
const newAttraction = document.querySelector('.attractions');
const posted = document.querySelector('.posted');
const actual = document.querySelector('.actual');

var MyApp  = {};


// add a new chat
newNameForm.addEventListener('submit', e => {
  e.preventDefault();
const username = newNameForm.name.value.trim();
  const chatroom = new Chatroom(username);
  chatroom.addChat(username)
    .then(() => newNameForm.reset())
    .catch(err => console.log(err));
});
//const username = localStorage.username ? localStorage.username : 'anon'

// update the username
// newNameForm.addEventListener('submit', e => {
//   e.preventDefault();
//   // update name via chatroom
//   const newName = newNameForm.name.value.trim();
//   console.log(newName);
//   const waittime = new Waittime(newName);
//   console.log(waittime);
// //   // reset the form
//   newNameForm.reset();
//   // show then hide the update message
//   updateMssg.innerText = `Your name was updated to ${newName}`;
//   setTimeout(() => updateMssg.innerText = '', 3000);
//});

// update the park
newPark.addEventListener('click', e => {
  if(e.target.tagName === 'BUTTON'){
      console.log(e.target.getAttribute('id'));
    // chatUI.clear();
    // chatroom.updateRoom(e.target.getAttribute('id'));
    // chatroom.getChats(chat => chatUI.render(chat));
  }
});

//update the attraction
newAttraction.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON'){
        console.log(e.target.getAttribute('id'));
      // chatUI.clear();
      // chatroom.updateRoom(e.target.getAttribute('id'));
      // chatroom.getChats(chat => chatUI.render(chat));
    }
  });

  // update the posted wait time
posted.addEventListener('submit', e => {
  e.preventDefault();
  // update name via chatroom
  var postedWaitTime = posted.posted.value.trim();
  console.log(postedWaitTime);
  MyApp.posted = postedWaitTime;
  console.log(MyApp);
  
//   chatroom.updateName(newName);
//   // reset the form
//   newNameForm.reset();
//   // show then hide the update message
//   updateMssg.innerText = `Your name was updated to ${newName}`;
//   setTimeout(() => updateMssg.innerText = '', 3000);

});

  // update the actual wait time
  actual.addEventListener('submit', e => {
    e.preventDefault();
    // update name via chatroom
    const actualWaitTime = actual.actual.value.trim();
    console.log(actualWaitTime);
    newPosted = MyApp.posted;
    console.log(newPosted - actualWaitTime);
  //   chatroom.updateName(newName);
  //   // reset the form
  //   newNameForm.reset();
  //   // show then hide the update message
  //   updateMssg.innerText = `Your name was updated to ${newName}`;
  //   setTimeout(() => updateMssg.innerText = '', 3000);
  });

// add a new chat
// newChatForm.addEventListener('submit', e => {
//   e.preventDefault();
//   const message = newChatForm.message.value.trim();
//   chatroom.addChat(message)
//     .then(() => newChatForm.reset())
//     .catch(err => console.log(err));
// });

// // check local storage for name
// const username = localStorage.username ? localStorage.username : 'anon';

// // class instances
// const chatUI = new ChatUI(chatList);
// const chatroom = new Chatroom('gaming', username);

// // get chats & render
// chatroom.getChats(data => chatUI.render(data));