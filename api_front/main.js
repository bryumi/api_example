const url = "http://localhost:5500/api";

const newUser = {
    name: "Rachel Green",
    city: "New York",
    country: "USA"
};

const userUpdate = {
    name: "Monica Geller",
    city: "New York",
    country: "USA"
};

const getUser = () => {
    axios.get(url)
    .then(response => {
        const { data } = response;
        renderResult.textContent = JSON.stringify(data);
    })
    .catch(error => console.log(error))
}

//getUser()

function addNewUser(){
    axios.post(url, newUser)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
//addNewUser()

function updateUser(){
    axios.put(`${url}/1`, userUpdate)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

//updateUser()

function deleteUser(){
    axios.delete(`${url}/4`, userUpdate)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

deleteUser()