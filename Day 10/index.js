const userService = require('./src/services/user_actions');


async function main() {
//     let userObj= {
//         password: "abcd@123",
//         first_name:"ravi",
//         last_name:"m",
//         email:"mravi@gmail.com",
//         phone_number:"9987654643"
//     }
//    let results = await userService.createUser(userObj);
//    console.log("Your user_id is "+results.user_id);

//    console.log("---------------------------");

    // let jobObj = await userService.searchJobById(1001);
    // console.log(`${jobObj.job_id}: ${jobObj.job_title} - ${jobObj.description}`);


    await userService.applyToJob(1001,101,100);
    console.log("applied to job successfully");

}

main();




