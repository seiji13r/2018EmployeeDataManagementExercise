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

  // functions
  function monthsWorked(date) {
    return moment(date).toNow();
  }
  // Firebase watcher .on("child_added"
  database.ref().on("child_added", function(snapshot) {

    let row = $("<tr>");
    row.addClass("row-class");
    let nameTd = $("<td>");
    nameTd.text(snapshot.val().name);
    let roleTd = $("<td>");
    roleTd.text(snapshot.val().role);
    let startDateTd = $("<td>");
    startDateTd.text(snapshot.val().startDate)
    let monthsWorkedTd = $("<td>");
    monthsWorkedTd.text(monthsWorked(snapshot.val().startDate));
    let monthlyRateTd = $("<td>");
    monthlyRateTd.text(snapshot.val().monthlyRate)
    let totalBilledTd = $("<td>");

    row.append(nameTd);
    row.append(roleTd);
    row.append(startDateTd);
    row.append(monthsWorkedTd);
    row.append(monthlyRateTd);
    row.append(totalBilledTd);

    row.appendTo("#tbody");

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });


//   LAST CODE EXPLAINED

//   dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
//     // Change the HTML to reflect
//     $("#name-display").text(snapshot.val().name);
//     $("#email-display").text(snapshot.val().email);
//     $("#age-display").text(snapshot.val().age);
//     $("#comment-display").text(snapshot.val().comment);
//   });