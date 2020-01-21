// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

const wait = (num) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, num);
    });
};

console.log(wait(3000));
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

const wait2 = () => {
    return fetch("https://icanhazdadjoke.com/")
};
wait2().then((data) => {
    console.log(data);
});

// fetch('https://api.github.com/users')
//     .then(resp =>{
//         console.log(resp);
//         return resp;
//     })
//     .then(users =>{
//         console.log(users);
//         return users.map(user => user.login);
//     })
//     .then(usernames => console.log(usernames))

// Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.

// const lastCommit = (username) => {
//     //return a promise that resolves to usernames last commit time
//     let url = `https://api.github.com/users/${username}/events/public`;
//     fetch(url,{headers:{'Authorization': `token ${githubPAT}`}})
//         .then(data => data.json())
//         .then(events => {
//              let newCommit = events.find(event => event.type === "PushEvent");
//              console.log(`The newest commit was made at ${newCommit.created_at}`);
//          })
//          .catch(error => console.log(error));
// };
// lastCommit("ShelbyHughes");

const lastCommit2 = (username) => {
    //return a promise that resolves to usernames last commit time
    let url = `https://api.github.com/users/${username}/events/public`;
    fetch(url,{headers:{'Authorization': `token ${githubPAT}`}})
        .then(data => data.json())
        .then(data => data.find(event => event.type === "PushEvent"))
        .then(event => event.created_at)
        .then(date => console.log(date));
};

lastCommit2("ShelbyHughes");
