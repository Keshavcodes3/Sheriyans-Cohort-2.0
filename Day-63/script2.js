const users = [
  "Aakarshbhaiyaa@gmail.com",
  "Satwikbhaiyaa@gmail.com",
  "Harshbhaiyaa@gmail.com",
  "Ankurbhaiyaa@gmail.com",
  "Sarthakbhaiyaa@gmail.com",
];

function sendEmail(email) {
  return new Promise((res, rej) => {
    let time = Math.floor(Math.random() * 4);
    setTimeout(function () {
      let prob = Math.floor(Math.random() * 10);
      if (prob <= 5) {
        res(`Email Suucessfully sent to ${email}`);
      } else {
        rej(`Email not sent to ${email}`);
      }
    },time*1000);
  });
}

async function sendEmails(userList){
    let allResponses=userList.map(function(email){
        return sendEmail(email).then(function(data){
            return data;
        }).catch(function(err){
            return err;
        })
    })
    let ans=await Promise.all(allResponses)
    ans.forEach(function(status){
        console.log(status);
    })
}



sendEmails(users)