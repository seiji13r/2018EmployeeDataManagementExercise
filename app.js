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
  var email = "";
  var age = 0;
  var comment = "";

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
