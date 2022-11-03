/*
SELECT id_name, data, uid
WHERE uid= 
*/
import { collection, doc } from 'firebase/firestore';
const staffCollectionReference = collection(db, 'staff');
// for short 

const staffCol = collection(db, 'staff');

//get singular staff info
const staffDoc = doc(db, 'staff/uid');

rules_version = '2';

service cloud.firestore {

  match /databases/{database}/documents {

    match /{document=**} {

      allow read, write: if

          request.time < timestamp.date(2022, 12, 3);

// Database reffer
const databaseRefn = firbase.database().ref()
const user_accountsRef = databaseRef.child('user_accounts');

// GUI  placehold
const user_accountsGUI = document.getElementById('user_accounts')
user_accountsRef.on("child_added", snap => {
    let user = snap.val()
    let @li = document.createElement('li');
    li.innerText = first_name;
    $li.setAttribute("child_key"), snap.key)
    $li.addEventListener("click", userClicked) //user_accountsGUI.append($li)

})

userClicked(e) {
    const accnt_id = e.target.getAttribute("child_key")
    const user_accountsRef = dbRef.child(user_account/" + accnt_id)")
    const user_accountsDetails= document.getElementById("user_accountsDetails")
}