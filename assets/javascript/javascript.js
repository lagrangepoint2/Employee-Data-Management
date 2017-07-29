// Firebase Database
// Initialize Firebase
 var config = {
    apiKey: "AIzaSyB-vHlNWX2DH7XrNfV4qxJqI38Xw2t2x_s",
    authDomain: "employee-data-management-573a7.firebaseapp.com",
    databaseURL: "https://employee-data-management-573a7.firebaseio.com",
    projectId: "employee-data-management-573a7",
    storageBucket: "employee-data-management-573a7.appspot.com",
    messagingSenderId: "917258193910"
  };
  firebase.initializeApp(config);

// Initialize Variables
    var monthWorked = 'undefined';
    var totalBilled ='undefined';

// Get a reference to the database service
    var database = firebase.database();
    // database.ref().on('value', function(snapshot){

    database.ref().on('child_added', function(childSnapshot){
        var theChild = childSnapshot.val();

        var tempName = childSnapshot.val().name;
        var tempRole = childSnapshot.val().role;
        var tempStartDate = childSnapshot.val().startDate;
        var tempmonthRate = childSnapshot.val().monthRate;

        $('#tbody').append('<tr><td>'+tempName+'</td><td>'+tempRole+'</td><td>'+tempStartDate+'</td><td>'+monthWorked+'</td><td>'+tempmonthRate+'</td><td>'+totalBilled+'</td></tr>');

    //     database.ref().push({
    //         monthWorked: monthWorked,
    //         totalBilled: totalBilled
    //    });
        

    });//End database.ref.on

    $("#submit").on("click", function() {
        event.preventDefault();

        var name = $('#name-form').val().trim();
        var role = $('#role-form').val().trim();
        var startDate = $('#start-date-form').val().trim();
        var monthRate = $('#month-rate-form').val().trim();

        $(this).closest('form').find("input[type=text], textarea").val("");

        database.ref().push({
            name: name,
            role: role,
            startDate: startDate,
            monthRate: monthRate
       });

    });//End submit button listener


