const studentIDs = ["001", "002", "003", "004", "005"];

function fetchMarks(id) {
  return new Promise((res, rej) => {
    let time = Math.floor(Math.random() * 5);
    setTimeout(function () {
      let chance = Math.floor(Math.random() * 10);
      if (chance >= 5) {
        res(`Marks fetched of student with id : ${id}`);
      } else {
        rej(`Failed to fetch marks of student id with ${id}`);
      }
    }, time * 1000);
  });
}

async function fetch(studentIDs) {
  let allResponses = studentIDs.map(function (id) {
    return fetchMarks(id)
      .then(function (data) {
        return data;
      })
      .catch(function (err) {
        return err;
      });
  });
  let ans=await Promise.all(allResponses);
  ans.forEach(element => {
    console.log(element);
    
  });
  
}


fetch(studentIDs);