console.log("Linked Ready");

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCIz6GazbbTOslTwTZnWa-gGoQVTSEx8y4",
    authDomain: "employeedatamanagements.firebaseapp.com",
    databaseURL: "https://employeedatamanagements.firebaseio.com",
    projectId: "employeedatamanagements",
    storageBucket: "employeedatamanagements.appspot.com",
    messagingSenderId: "558806002470"
};
firebase.initializeApp(config);

  // Create a variable to reference the database.
  var database = firebase.database();

  // Initial Values
  var name = "";
  var role = "";
  var startDate = "";
  var monthlyRate = "";

  // Capture Button Click
  $("#add-employee").on("click", function(event) {
    event.preventDefault();
    console.log("Entre a firebase");

    // Grabbed values from text boxes
    name = $("#input-name").val().trim();
    role = $("#input-role").val().trim();
    startDate = $("#input-start-date").val().trim();
    monthlyRate = $("#input-rate").val().trim();


    // Code for handling the push
    database.ref().push({
      name: name,
      role: role,
      startDate: startDate,
      monthlyRate: monthlyRate,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    alert("Employee Successfully Added");

  });

  // Firebase watcher .on("child_added"
  database.ref().on("child_added", function(snapshot) {
    // // storing the snapshot.val() in a variable for convenience
    // var sv = snapshot.val();

    // // Console.loging the last user's data
    // console.log(sv.name);
    // console.log(sv.email);
    // console.log(sv.age);
    // console.log(sv.comment);

    // // Change the HTML to reflect
    // $("#name-display").text(sv.name);
    // $("#email-display").text(sv.email);
    // $("#age-display").text(sv.age);
    // $("#comment-display").text(sv.comment);

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });


//   LAST CODE EXPLAINED
// // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
// dataRef.ref().on("child_added", function(childSnapshot) {

//     // Log everything that's coming out of snapshot
//     console.log(childSnapshot.val().name);
//     console.log(childSnapshot.val().name);
//     console.log(childSnapshot.val().email);
//     console.log(childSnapshot.val().age);
//     console.log(childSnapshot.val().comment);
//     console.log(childSnapshot.val().joinDate);

//     // full list of items to the well
//     $("#full-member-list").append("<div class='well'><span class='member-name'> " +
//       childSnapshot.val().name +
//       " </span><span class='member-email'> " + childSnapshot.val().email +
//       " </span><span class='member-age'> " + childSnapshot.val().age +
//       " </span><span class='member-comment'> " + childSnapshot.val().comment +
//       " </span></div>");

//     // Handle the errors
//   }, function(errorObject) {
//     console.log("Errors handled: " + errorObject.code);
//   });

//   dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
//     // Change the HTML to reflect
//     $("#name-display").text(snapshot.val().name);
//     $("#email-display").text(snapshot.val().email);
//     $("#age-display").text(snapshot.val().age);
//     $("#comment-display").text(snapshot.val().comment);
//   });