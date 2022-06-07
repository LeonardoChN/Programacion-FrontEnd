/*
efecto coral
*/
const userList = [{
    email: 'leo@sucorreo.cl',
    firstName: 'Leonardo ',
    lastName: 'Chazarro'
}];
//crear la tabla
const drawTable = (list) => {
    let htmlOut = '<table class="table">';
    htmlOut = htmlOut + '<tr>';
    htmlOut = htmlOut + '<th>Email</th><th>First name</th><th>Last name</th><th></th><th></th>';
    htmlOut = htmlOut + '</tr>';
    list.forEach(item => {
        htmlOut = htmlOut + '<tr>';
        htmlOut = htmlOut + `<td>${item.email}</td>`;
        htmlOut = htmlOut + `<td>${item.firstName}</td>`;
        htmlOut = htmlOut + `<td>${item.lastName}</td>`;
        htmlOut = htmlOut + `<td><input type="button" class="btn btn-warning btn-sm" value="edit" onclick="editUser('${item.email}')" /></td>`;
        htmlOut = htmlOut + `<td><input type="button" class="btn btn-danger btn-sm" value="delete" onclick="deleteUser('${item.email}')" /></td>`;
        htmlOut = htmlOut + '</tr>';
    });
    htmlOut = htmlOut + '</table>';
    //llamamos el id de la tabla en el html
    document.getElementById('userTable').innerHTML = htmlOut;
}
// pasar datos para mostrar en la tabla
const getUsers = () => {
    drawTable(userList);
}
//encontrar el index
const indextUser = (email) => {
    let index = -1;
    let indexCount = 0;
    userList.forEach(item => {
        if (item.email === email) index = indexCount;
        indexCount ++;
    })
    return index;
    //Esta funcion nos retorna un valor booleano true cuando encuentra un valor 
}
// Agregar usuario desde un FORMULARIO
const addUser = (email,firstName,lastName) => { // OJO CON EL IGUAL Y CON LA =>
    if ( indextUser(email) !== -1){
        alert('El email ingresado ya se encuentra registrado.')
    }
    else {
        userList.push({
            email,
            firstName,
            lastName
        });
        limpiar()
        getUsers(); // con esto mostraremos la tabla con el dato agregado recientemente.
    }
}
//eliminacion de usuario
const delUser = (email) => {
    const index = indextUser(email);
    if (index === -1) {
        alert('El usuario no existe')
    } 
    else {
        if(confirm('Estas seguro?') == true) {
            userList.splice(index, 1);// OJO QUE SIN EL 1 ELIMINA TODOS PARA ADELANTE
            getUsers();
        }
    }
}
//clase 17

//editar segun el email
const editUser = (email) => {
    let user = userList.find(filter => filter.email === email);
    if(!user) {
        alert('El usuario no existe.');
    }
    else {
        //agrega el nombre a los inputs
        document.getElementById('email').value = user.email;
        document.getElementById('firstName').value = user.firstName;
        document.getElementById('lastName').value = user.lastName;
        //deshabilitar el input email
        document.getElementById('email').disabled = true;
        //cambiar botones de save por update
        document.getElementById('save_button').style.display = 'none';
        document.getElementById('update_button').style.display = '';
    }
}

const updateUser = (email,firstName,lastName) => {
    let index = indextUser(email)
    if(index === -1){
        alert('El usuario no existe')
    }
    else {
        userList[index].firstName = firstName
        userList[index].lastName = lastName
        getUsers()

        limpiar()
        document.getElementById('email').disabled = false

        document.getElementById('save_button').style.display = '';
        document.getElementById('update_button').style.display = 'none';
    }
}
//esto cambia los inputs va directo en el html con los inputs || asignan que sean uppercase
const changeUpper = (control) => {
    control.value = control.value.toUpperCase();
}
const searchButton = (search) => {
    drawTable(userList.filter(filter => 
        filter.email.toUpperCase().includes(search.toUpperCase()) ||
        filter.firstName.toUpperCase().includes(search.toUpperCase()) ||
        filter.lastName.toUpperCase().includes(search.toUpperCase())
        ));
}

//aparte de la clase
// crear la funcion para limpiar
const limpiar = () => {
    document.getElementById('email').value = ''
    document.getElementById('firstName').value = ''
    document.getElementById('lastName').value = ''
}





