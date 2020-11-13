const attractionList = document.querySelector('#attraction-list');
const form = document.querySelector('#add-cafe-form');
const getPark = document.getElementById('parks')
const myObj = {};

//get attraction data

getPark.onchange = function() {
const getParkVal = getPark.options[getPark.selectedIndex].value;
attractionList.textContent = '';
db.collection('attractions').where('park', '==', getParkVal).get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        populate(doc);
    });
});
};

// getting data
// db.collection('users').where('username', '==', 'aeroc33').get().then(snapshot => {
//     snapshot.docs.forEach(doc => {
//         renderCafe(doc);
//     });
// });

//real-time listener
// db.collection('users')//.where('username', '==', 'aeroc33')
// .onSnapshot(snapshot => {
//     let changes = snapshot.docChanges();
//     changes.forEach(change => {
//         if(change.type ==='added'){
//             renderCafe(change.doc);
//         } else if (change.type =='removed') {
//             let li = cafeList.querySelector('[data-id=' + change.doc.id + ']');
//             cafeList.removeChild(li);
//         }
//     })
// })

//update data

// db.collection('users').doc('2MBByOROIdjcmMYJbsBU').update({
//     username: 'AaronUpdate'
// })


// create element & render cafe

function populate(doc){
    let attraction = document.createElement('option');
    let attractionName = attraction.textContent = doc.data().name;
    attractionList.appendChild(attraction);
    myObj.attraction = attractionName;
    // deleting data
    // cross.addEventListener('click', (e) => {
    //     e.stopPropagation();
    //     let id = e.target.parentElement.getAttribute('data-id');
    //     db.collection('users').doc(id).delete();
    // });
}




// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const getParkVal = getPark.options[getPark.selectedIndex].value;
    myObj.username = username.value;
    myObj.park = getParkVal;
    const now = new Date();
    console.log(myObj);
    db.collection('time').add({
        username: myObj.username,
        park: myObj.park,
        attraction: myObj.attraction,
        experienced_at: firebase.firestore.Timestamp.fromDate(now)
    });
});