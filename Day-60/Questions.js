// //?Excercise -01




// function afterDelay(time, cb) {
//   setTimeout(function () {
//     cb();
//   }, time);
// }




// afterDelay(2000, function () {
//   console.log("Callback Exectuted");
// });




// //?Excercise -02




// function instagramKeDataLaao(username, cb) {
//   setTimeout(function () {
//     cb({ id: 1, username: "Keshav" });
//   }, 200);
// }




// function MetaParJaao(username, cb) {
//   setTimeout(function () {
//     cb(["img1", "img2"]);
//   }, 3000);
// }




// instagramKeDataLaao("harsh", function (data) {
//   MetaParJaao(data.username, function (images) {
//     console.log(images);
//   });
// });




//?Excercise -03


function LoginUser(username,cb){
  console.log('Logging in User .........');
  setTimeout(function(){
    cb({uniqueID:2012,username:"Keshav"});
  },1000)
}


function Fetchermission(uniqueID,cb){
  console.log('Fetching permissions of user............');
  
  setTimeout(function(){
    cb(['Read','Write','Delete']);
  },2000)
}
function LoadDashboard(permissions,cb){
  console.log('Loading Dashboard of user......');
    setTimeout(function(){
      cb();
    },3000)
};;



LoginUser('harsh',function(userdata){
  Fetchermission(userdata.id, function(permissions){
    LoadDashboard(permissions,function(){
      console.log("Permission Loaded")
    })
  })
});;


//?Excercise -04


