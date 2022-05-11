// si tiene llaves el userList dara undefinid  || const userList = [{}]; ||
const userList = [];
userList.push({
    email: 'leo@sucorreo.cl',
    firstName: 'Leonardo ',
    lastName: 'Chazarro'
});

//muestra en un alert
const getUsers = () => {
    userList.forEach(item => alert(item.firstName));
}
// Destructuracion de los datos
const getUsersDestructuring = () => {
    userList.forEach(item => {
        const {
            email,
            firstName,
            lastName
        } = item;
        alert(lastName);
    });
}

// Crear tabla y mostrar los datos en la tabla
const getUsers1 = () => {
    //ACA CREAMOS LA TABLA 
    let htmlOut = '<table border="1"  width="100%" height="100%" bgcolor="#CD5C5C">';
    htmlOut = htmlOut + '<tr>'
    htmlOut = htmlOut + '<th>Email</th> <th>First Name</th> <th>Last Name</th>';
    htmlOut = htmlOut + '</tr>'
    userList.forEach(item => {
        htmlOut = htmlOut + '<tr align = "center">';
        htmlOut = htmlOut + `<td>${item.email}</td>`; // OJO CON LOS BACK TICS
        htmlOut = htmlOut + `<td>${item.firstName}</td>`;
        htmlOut = htmlOut + `<td> ${item.lastName}</td>`;
        htmlOut = htmlOut + '</tr>'
    });
    htmlOut = htmlOut + '</table>'
    document.getElementById('userTable').innerHTML = htmlOut
}
// Agregar usuario desde un FORMULARIO
const addUser = (email,firstName,lastName) => { // OJO CON EL IGUAL Y CON LA =>
    userList.push({
        email,
        firstName,
        lastName
    });
    getUsers1(); // con esto mostraremos la tabla con el dato agregado recientemente.
}



/* TAREA 
LIMPIAR FORMULARIO DESPUES DE QUE SE AGREGE
BOTON DELETE EN CADA UNO DE LOS REGISTROS (CONFIRM)
comprobar email si ya esta agregado antes de agregar
edit boton al lado del delete y que cargue los datos en el form
deshabilitar el email, solo modificar first name y last name

*/