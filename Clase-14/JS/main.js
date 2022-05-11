//ARREGLOS
//for recorre el array mientras sea menor que 3
const arrayExample1 = () =>{
    let users = ['fmorales', 'acastro', 'froncalla'];
    for (i=0; i < 3; i++){
        alert(users[i]);
    }
}

//foreach para recorrer el array
const arrayExample2 = () =>{
    let users = ['fmorales', 'acastro', 'froncalla'];
    users.forEach(item => {
        alert(item);
    });
}

const arrayExample3 = () =>{
    let users = ['fmorales', 'acastro', 'froncalla'];
    users.forEach(item => alert(item));
}

const arrayExample4 = () =>{
    let users = ['fmorales', 'acastro', 'froncalla'];
    let users2 = users.map(item =>{
        if(item !== 'fmorales')
        return 'usuario bloqueado';
        return item;
        });
        users2.forEach(item => alert(item));
}
//AGREGAR ELEMENTOS A UN ARREGLO
const arrayExample5 = () =>{
    let users = ['fmorales', 'acastro', 'froncalla'];
    users.push('lchazarro'); // El push agrega a la array
    users.forEach(item => alert(item));
}

const arrayExample6 = () =>{
    let users = ['fmorales', 'acastro', 'froncalla'];
    //agregar al array
    let users2 = [... users, 'lnavea'] //spear operation || esto hace el operador || let users2 = ['fmorales', 'acastro', 'froncalla' ,'lnavea']
    users2.forEach(item => alert(item));
}

// REMOVER ELEMENTOS o ELIMINAR ELEMENTOS 

const arrayExample7 = () =>{
    let users = ['fmorales', 'acastro', 'leo','chazarro','navea'];
    //eliminar elemento al final del array
    users.pop();
    //Eliminar elementos al comienzo de array 
    users.shift();
    //Elimina elementos que nosotros le indiquemos o elimina por su indice (index)
    users.splice(1)
    users.forEach(item => alert(item));
}

//FILTRAR ELEMENTO

const arrayExample8 = () =>{
    let users = ['fmorales', 'acastro', 'leo chazarro','chazarro','chazarro navea'];
    let users2 = users.filter(filter => filter.includes('chazarro')) //este ira filtrando elemento por elemento y buscando el parametro incluido
    users2.forEach(item => alert(item));
}
//Excluir un registro del filtro o eliminarlo del filtro
const arrayExample9 = () =>{
    let users = ['fmorales', 'acastro', 'leo chazarro','chazarro','chazarro navea'];
    let users2 = users.filter(filter => !filter.includes('chazarro')) // con el ! podemos dejar que elemento queda fuera
    users2.forEach(item => alert(item));
}

// que sea igual a 
const arrayExample10 = () =>{
    let users = ['fmorales', 'acastro', 'leo chazarro','chazarro','chazarro navea'];
    let users2 = users.filter(filter => filter.includes('chazarro')) // con el ! podemos dejar que elemento queda fuera
    users2.forEach(item => alert(item));
}
