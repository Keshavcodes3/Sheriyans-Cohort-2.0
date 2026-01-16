// function calculate(a,b,operation){
//     return operation(a,b);
// }

// function add(a,b){
//     console.log(a+b);
// }

// calculate(78,5,add)



//&-----------------------------Excercise-01--------------------------------------------------//

// function registerUser(username,email,cb){
//     console.log("Registering User........")
//     setTimeout(function(){
//         cb({username:"Keshav",email:'keshabchetri39@gmail.com'})
//     },1000)
// }

// function sendVerificationEmail(userEmail,username,cb){
//     console.log('Sending Verification Mail...');
//     setTimeout(function(){
//         console.log('Verification Email Sent , please check');
//         cb({isSent:true , isVerified:false})
//     },2000)
// }

// function VerifyUser(emailStatus,cb){
//     console.log('verifying User , Wait for a moment');
//     setTimeout(function(){
//         if(emailStatus.isSent){
//             cb({isVerified:true});
//         }else{
//             cb({isVerified:false});
//         }
//     },3000)
// }

// registerUser('keshav','keshabchetri39@gmail.com',function(userData){
//     sendVerificationEmail(userData.email,userData.username,function(result){
//         VerifyUser(result,function(dets){
//             if(dets.isVerified){
//                 console.log('You can Login');
//             }else{
//                 console.log("Please verify your email")
//             }
//         })
//     })
// })


//&-----------------------------Excercise-02--------------------------------------------------//




// function joinGame(username,cb){
//     console.log(`${username} is joining the game !!`)
//     setTimeout(function(){
//         console.log(`${username} Joined Successfully`);
//         cb({isJoined:true});
//     },1000)
// }

// function LoadGameAssets(cb){
//     console.log("Loading Game Assets")
//     setTimeout(function(){
//         console.log('Game Assets Loaded');
//         cb({isLoaded:false});
//     },1500)
// }

// function VerifyPlayer(cb){
//     console.log('Verifying Player...........')
//     setTimeout(function(){
//         cb({isVarified:false});
//     },2000)
// }

// function startMatch(){
    
//     console.log("Match Started");
// }


// joinGame('Keshav',function(dets){
//    if(dets.isJoined){
//     LoadGameAssets(function(dets1){
//         if(dets1.isLoaded){
//             VerifyPlayer(function(dets2){
//                 if(dets2.isVarified){
//                     console.log('Player Verification successful');
//                     startMatch();
//                 }else{
//                     console.log('Player Verification Failed');
//                     console.log('Player kicked from game');
//                 }
//             })
//         }else{
//             console.log('Game assests Loading Failed');
            
//         }
//     })
//    }
// })


//&-----------------------------Excercise-03--------------------------------------------------//


function launchGame(userName,cb){
    console.log(`Game Launching ....`)
    setTimeout(function(){
        console.log('Game Launched');
        cb({isEverythingOkay:true,isDeviceOn:true});
    },500)
}

function connectToServer(userName,cb){
    console.log('Connecting to Server');
    setTimeout(function(){
        cb({IP:'123.00.33.525',isDown:false});
    },1000)
}

function authenticatePlayer(username,cb){
    console.log('authenticting User........')
    setTimeout(function(){
        cb({Authentication:true});
    },1500)
}

function VerifyPlayer(username,cb){
    console.log('Verifying Player......');
    setTimeout(function(){
        cb({EmailVerified:true})
    },2000)
}

function Login(userName,cb){
    console.log('Loggin in user...........');
    setTimeout(function(){
        cb({isLoggedIn:true})
    },2500)
    
}

function JoinGame(userName,cb){
    console.log('Joining into Game , please wait');
    setTimeout(function(){
        cb({isJoined:true});
    },3000)
    
}

function LoadAssets(username,cb){
    console.log("Loading Assets......");
    setTimeout(() => {
        cb({isLoaded:false})
    }, 3500);
}

function StartMatch(userName,cb){
    console.log('Starting Match.........');
    setTimeout(function(){
        cb();
    },4000)
}



launchGame('keshav',function(dets){
    if(dets.isEverythingOkay && dets.isDeviceOn){
        connectToServer('keshav',function(dets1){
            if(dets1.isDown){
                console.log('Server Errorr!');
                return;
            }else{
                authenticatePlayer('keshav',function(dets2){
                    if(dets2.Authentication){
                        VerifyPlayer('keshav',function(dets2){
                            if(dets2.EmailVerified){
                                Login('keshav',function(dets3){
                                    if(dets3.isLoggedIn){
                                        JoinGame('keshav',function(dets4){
                                            if(dets4.isJoined){
                                                LoadAssets('keshav',function(dets5){
                                                    if(dets5.isLoaded){
                                                        StartMatch('keshav',function(){
                                                            console.log("Match Started!");
                                                        })
                                                    }else{
                                                        console.log("Something Error Occured");
                                                        return;
                                                    }
                                                })
                                            }else{
                                                console.log("Something Error Occured");
                                                return;
                                            }
                                        })
                                    }else{
                                        console.log("Please Register First!!!");
                                        return;
                                    }
                                })
                            }else{
                                console.log("Please Verify your Email First!!1");
                                return;
                            }
                        })
                    }else{
                        console.log("Authentication Failed");
                        return;
                    }
                })
            }
        })
    }else{
        console.log("Some Error Occured!!")
        return;
    }
})