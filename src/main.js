(function() {

    axios.get('/users')
        .then(({data}) => populateUsers(data));

    function populateUsers(users) {
        const list = document.createElement('ul');
        users.forEach((user) => {
            const element = document.createElement('li');
            element.innerHTML = user.name;
            list.appendChild(element);
        });

        document.body.appendChild(list);
    }

})();