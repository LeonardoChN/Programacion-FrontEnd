const departments_List = [];

const drawTable = (departments_List) => {
    let htmlOut = '<table class="table">';
    htmlOut = htmlOut + '<tr>';
    htmlOut = htmlOut + '<th>Codigo Departamento</th><th>Nombre Departamento</th><th>Numero Departamento</th><th></th><th></th>';
    htmlOut = htmlOut + '</tr>';
    departments_List.forEach(item => {
        htmlOut = htmlOut + '<tr border="1">';
        htmlOut = htmlOut + `<td>${item.codigo_Departamento}</td>`;
        htmlOut = htmlOut + `<td>${item.nombre_Departamento}</td>`;
        htmlOut = htmlOut + `<td>${item.numero_Departamento}</td>`;
        htmlOut = htmlOut + `<td><input type="button" class="btn btn-warning btn-sm" value="edit" onclick="edit_Departments('${item.codigo_Departamento}')" /></td>`;
        htmlOut = htmlOut + `<td><input type="button" class="btn btn-danger btn-sm" value="delete" onclick="del_Departments('${item.codigo_Departamento}')" /></td>`;
        htmlOut = htmlOut + '</tr>';
    });
    htmlOut = htmlOut + '</table>';
    document.getElementById('userTable').innerHTML = htmlOut;
}

const get_Departments = () => {
    drawTable(departments_List);
}

const index_Dep = (codigo_Departamento) => {
    let index = -1;
    let count = 0;
    departments_List.forEach(item => {
        if (item.codigo_Departamento === codigo_Departamento) index = count; //aca esta el error de update y delete
        count ++;
    })
    return index;
}

const add_Departments = (codigo_Departamento,nombre_Departamento,numero_Departamento) => {
    if ( index_Dep(codigo_Departamento) !== -1){
        alert('El Codigo del departamento ingresado ya se encuentra registrado.')
    }
    else if(!validateRequired()){
        alert('Todos los campos son requeridos para agregar.')
    }
    else {
        departments_List.push({
            codigo_Departamento,
            nombre_Departamento,
            numero_Departamento
        });
        cleanInputs()
        get_Departments();
    }
}

const del_Departments = (codigo_Departamento) => {
    const index = index_Dep(codigo_Departamento);
    if (index === -1) {
        alert('El departamento no existe')
    } 
    else {
        if(confirm('Estas seguro?') == true) {
            departments_List.splice(index, 1);
            get_Departments();
        }
    }
}

const edit_Departments = (codigo_Departamento) => {
    let dep = departments_List.find(filter => filter.codigo_Departamento === codigo_Departamento);
    if(!dep) {
        alert('El departamento no existe.');
    }
    else {
        document.getElementById('cod_Dep').value = dep.codigo_Departamento;
        document.getElementById('name_Dep').value = dep.nombre_Departamento;
        document.getElementById('num_Dep').value = dep.numero_Departamento;

        editAcction()
    }
}

const update_Departments = (codigo_Departamento,nombre_Departamento,numero_Departamento) => {
    let index = index_Dep(codigo_Departamento)
    if(index === -1){
        alert('El Departamento no existe')
    }
    else {
        departments_List[index].nombre_Departamento = nombre_Departamento
        departments_List[index].numero_Departamento = numero_Departamento
        get_Departments()

        cleanInputs()
        editAcction()
    }
}

const changeUpper = (control) => {
    control.value = control.value.toUpperCase();
}

const searchButton = (search) => {
    drawTable(departments_List.filter(filter => 
        filter.codigo_Departamento.toUpperCase().includes(search.toUpperCase()) ||
        filter.nombre_Departamento.toUpperCase().includes(search.toUpperCase()) ||
        filter.numero_Departamento.toUpperCase().includes(search.toUpperCase())
        ));
}

const editAcction = () => {
    document.getElementById('cod_Dep').disabled = document.getElementById('cod_Dep').disabled ? false : true;
    document.getElementById('save_Button').style.display  = document.getElementById('save_Button').style.display === 'none' ? '' : 'none';
    document.getElementById('update_Button').style.display = document.getElementById('update_Button').style.display === '' ? 'none' : '';
}

const cleanInputs = () => {
    document.getElementById('cod_Dep').value = ''
    document.getElementById('name_Dep').value = ''
    document.getElementById('num_Dep').value = ''
}


const validateRequired = () => {
    if (document.getElementById('cod_Dep').value === '') return false;
    if (document.getElementById('name_Dep').value === '') return false;
    if (document.getElementById('num_Dep').value === '') return false;
    return true;
}
