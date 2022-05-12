/* TAREA 
LIMPIAR FORMULARIO DESPUES DE QUE SE AGREGE
edit boton  que cargue los datos en el form, pero el email debe aparacer deshabilitado con atributo disable o readonly
boton add cambiar su texto a save y al poner save el boton vuelve a add y habilitamos el email
deshabilitar el email, solo modificar first name y last name

DESAFIO 
buscar abajo de lista de ususario con un boton search  con un input

efecto coral
*/

const userList = [{
    email: 'leo@sucorreo.cl',
    firstName: 'Leonardo ',
    lastName: 'Chazarro'
}];
// Crear tabla y mostrar los datos en la tabla
const getUsers = () => {
    //ACA CREAMOS LA TABLA 
    let htmlOut = '<table border="2"  width="100%" height="100%" bgcolor="#B5D6BA">';
    htmlOut = htmlOut + '<tr align = "center">'
    htmlOut = htmlOut + '<th>Email</th> <th>First Name</th> <th>Last Name</th> <th></th> <th></th>';
    htmlOut = htmlOut + '</tr>'
    userList.forEach(item => {
        htmlOut = htmlOut + '<tr align = "center">';
        htmlOut = htmlOut + `<td>${item.email}</td>`; // OJO CON LOS BACK TICS
        htmlOut = htmlOut + `<td>${item.firstName}</td>`;
        htmlOut = htmlOut + `<td> ${item.lastName}</td>`;
        htmlOut = htmlOut + `<td> <input type="button" class = "btn btn-danger" value="Eliminar Registro" onclick="delUser('${item.email}')"></td>`; 
        htmlOut = htmlOut + `<td> <input type="button" class = "btn btn-warning" value="Actualizar" onclick=""> </td>`
        htmlOut = htmlOut + '</tr>'
    });
    htmlOut = htmlOut + '</table>'
    document.getElementById('userTable').innerHTML = htmlOut
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
        getUsers(); // con esto mostraremos la tabla con el dato agregado recientemente.
    }
}
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
    const delUser = (email) => {
        const index = indextUser(email);
        if (index === -1) {
            alert('El usuario no existe')
        } 
        else {
            if(confirm('Estas seguro?') == true) {
                userList.splice(index);
                getUsers();
            }
        }
    }
// otra forma de validar al igual que el if (en el caso de some devuelve un true)
//return userList.some(item.email === email);
//return userList.find(item.email === email);
//return userList.filter(item.email === email);
