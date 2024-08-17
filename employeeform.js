// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
// import {getDatabase, ref, child, get, set, update, remove} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBCrREDaGV5f92sjvTLFe2b18SD6n7j9uA",
//   authDomain: "heckathonemini.firebaseapp.com",
//   projectId: "heckathonemini",
//   storageBucket: "heckathonemini.appspot.com",
//   messagingSenderId: "1025599380840",
//   appId: "1:1025599380840:web:7cbb284f97dea439d6cadd"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const db = getDatabase();

// const FnameInp = document.getElementById("FnameInp");
// const LnameInp = document.getElementById("LnameInp");
// const DeptInp = document.getElementById("DeptInp");
// const SwimInp = document.getElementById("SwimInp");
// const CnicInp = document.getElementById("CnicInp");

// const AddBtn = document.getElementById("AddBtn");
// const RetBtn = document.getElementById("RetBtn");
// const UpdBtn = document.getElementById("UpdBtn");
// const DelBtn = document.getElementById("DelBtn");

// function AddData(){
//     set(ref(db, 'EmployeeSet/' + CnicInp.value), {
//         nameofemployee: {
//             firstname: FnameInp.value, 
//             lastname: LnameInp.value 
//         },
//         department: DeptInp.value,
//         canswim: (SwimInp.value == "yes"),
//         cnic: Number(CnicInp.value)
//     }).then(()=>{
//         alert("Data Added Successfully");
//     }).catch((error)=>{
//         alert("Unsuccessfully");
    //     console.log(error);
    //     })
    // }
    //     function RetData(){
    //         const dbRef = ref(db);

    //         get(child(dbRef, 'EmployeeSet/' + CnicInp.value))
    //         .then((snapshot)=>{
    //             if(snapshot.exists()){
    //                 FnameInp.value = snapshot.value().nameofemployee.firstname;
    //                 LnameInp.value = snapshot.value().nameofemployee.lastname;
    //                 DeptInp.value = snapshot.value().department;
    //                 SwimInp.value = (snapshot.value().canswim)? "Yes" : "No";
    //             }
    //             else{
    //                 alert("Employee does not exist");
    //             }
    //             })
    //             .catch((error)=>{
    //                 alert("unsuccessful");
    //                 console.log(error);
    //             })    
    //         }

            // function UpdateData(){
            //     update(ref(db, 'EmployeeSet/' + CnicInp.value), {
            //         nameofemployee: {
            //             firstname: FnameInp.value, 
            //             lastname: LnameInp.value 
            //         },
            //         department: DeptInp.value,
            //         canswim: (SwimInp.value == "yes"),
                    
            //     }).then(()=>{
            //         alert("Data updated Successfully");
            //     }).catch((error)=>{
            //         alert("Unsuccessfully");
            //         console.log(error);
            //         })
            //     }

            //     function DeleteData(){
            //         remove(ref(db, 'EmployeeSet/' + CnicInp.value))
            //         .then(()=>{
            //             alert("Data Deleted Successfully");
            //         }).catch((error)=>{
            //             alert("Unsuccessfully");
            //             console.log(error);
            //             })
            //         }
        
            //         AddBtn.addEventListener('click', AddData);
            //         RetBtn.addEventListener('click', RetData);
            //         UpdBtn.addEventListener('click', UpdateData);
            //         DelBtn.addEventListener('click', DeleteData);
