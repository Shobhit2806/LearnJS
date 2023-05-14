// Usecase: I want to run function after 5sec but
//without callback function if i do this first
//completed will get printed that is why we need callback functions

function doMyHomework(subject, callback) {
  alert(`I need to do ${subject} homework`);
  callback(subject);
}

function doingMyHomework(subject, callback) {
  alert(`I am doing ${subject} homework`);
  setTimeout(()=>{callback(subject)},3000);
}

// Now running callback function after your job is done is responsibility of doMyHomework function
// Passing data,calling callback fn at right time is responsibility of doMyHomerwork fn it has nothing to do with
// the calling of doMyHomework function.
setTimeout(() => {
  doMyHomework("Math", function (sub) {
    doingMyHomework(sub, function (sub) {
      doingMyHomework(sub, function (sub) {
        alert(`Completed ${sub} homework`);
      });
    });
  });
}, 5000);

// This structure is known as Pyramid of Doom or Callback Hell


//Inversion of Control:

//We loose control of out programme because 
//we pass that callback fn into another fn and now we have given 
//the control of this fn to some other fn and we dont know whether 
//that function will ever execute our callback fn or not.