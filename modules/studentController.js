mainApp.controller('studentController', function($scope){
  $scope.student = {
    firstName: 'Suryadeep',
    lastName: 'Pal',
    fees: 800,

    subjects: [
      {name:'Physics', marks:96},
      {name:'Maths', marks: 100},
      {name:'Chemistry', marks: 89},
      {name: 'Biology', marks: 78}
    ],

    fullName: function(){
      var studentObject;
      studentObject = $scope.student;
      return studentObject.firstName + " " + studentObject.lastName;
    }
  }
});
