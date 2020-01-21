// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve('Here is your data: ...');
            } else {
                reject('Network Connection Error!');
            }
        }, num);
    });
}

console.log(wait(4000));

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// fetch('https://api.github.com/users', {headers: {'Authorization': 'token 47e5d6bf7a82ad0277ac697611ce9651009e161b'}});

// GET /users/:username/events

const getGithubUserLastDate = function (inputUsername){
    return fetch(`https://api.github.com/users/${inputUsername}/events`, {headers: {'Authorization': gitHubPromiseExerciseToken}})
        .then(response => response.json())
        .then(events => {
            let newCommit = events.find(event => event.type === "PushEvent");
            console.log(`The newest commit was made at ${newCommit.created_at}`);
        })
        .catch(error => console.log(error));
};

getGithubUserLastDate('ShelbyHughes');
