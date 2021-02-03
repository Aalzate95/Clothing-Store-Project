import React from 'react'
///GET
const makeGet = (url, options = {}) =>{
    const headers = options['headers'] || {};
    const params = options['params'] || {}
    const query =Object.keys(params).map(k => encodeURIComponent(k) + '=' +
    encodeURIComponent(parametros[k])).join('&')
    const urlFinal = url+ '?' +query
    return fetch(urlFinal, { headers,method: 'GET'}).then(res.json());
};
//POST
const makePost = (url,object={}, options = {}) => {
    const headers = options['headers'] || {};
    const body = JSON.stringify(object);
    headers['Content-type'] ='text/plain';
    return fetch(url, {body, headers, method: 'POST'}).then(res.json());
};
//PUT
const makePut = (url,object = {},options = {}) => {//url debe incluir /id en el endpoint
    const headers = options['headers'] || {};
    const body = JSON.stringify(object);
    headers['Content-type'] ='text/plain';
    return fetch(url, {body, headers, method: 'PUT'}).then(res.json());
};
//DELETE
const makeDelete = (url,object={}, options = {}) => {
    const headers = options['headers'] || {};
    const body = JSON.stringify(object);
    headers['Content-type'] ='text/plain';
    return fetch(url, {body, headers, method: 'DELETE'}).then(res.json());
};




//METODOS PARA LAS APIS

//login
export const fetchlogin = (id, pass) => {
    const url ="http://localhost:8000/api/login/";
    const headers = {'Content-type': 'text/plain'};
    const objeto = {
        'user_id': id,
        'user_password': pass
    };
    return makePost (url,objeto,{headers});
};
//producto
export const fetchproductolista = () => {
    const url ="http://localhost:8000/api/product/";
    const headers = {'Content-type': 'text/plain'};
    const params ={}
    return makeGet (url,{params,headers});
}
export const fetchproducto = (id) =>{
    const url ="http://localhost:8000/api/product/"+id+"/";
    const headers = {'Content-type': 'text/plain'};
    const params ={}
    return makeGet (url,{params,headers});
}
//Customer
export const fetchcustomer = (id) =>{
    const url ="http://localhost:8000/api/customer/"+id+"/";
    const headers = {'Content-type': 'text/plain'};
    const params ={}
    return makeGet (url,{params,headers});
}
export const fetchcustomerlista = () =>{
    const url ="http://localhost:8000/api/product/";
    const headers = {'Content-type': 'text/plain'};
    const params ={}
    return makeGet (url,{params,headers});
}
//category
export const fetchcategoria = (id) =>{
    const url ="http://localhost:8000/api/category/"+id+"/";
    const headers = {'Content-type': 'text/plain'};
    const params ={}
    return makeGet (url,{params,headers});
}
export const fetchcategorialista = () =>{
    const url ="http://localhost:8000/api/category/";
    const headers = {'Content-type': 'text/plain'};
    const params ={}
    return makeGet (url,{params,headers});
}
//orden
export const fetchorden = (id) =>{
    const url ="http://localhost:8000/api/order/"+id+"/";
    const headers = {'Content-type': 'text/plain'};
    const params ={}
    return makeGet (url,{params,headers});
}
export const fetchordenlista = () =>{
    const url ="http://localhost:8000/api/order/";
    const headers = {'Content-type': 'text/plain'};
    const params ={}
    return makeGet (url,{params,headers});
}
//user
export const fetchusuario = (id) =>{
    const url ="http://localhost:8000/api/user/"+id+"/";
    const headers = {'Content-type': 'text/plain'};
    const params ={}
    return makeGet (url,{params,headers});
}
export const fetchordenlista = () =>{
    const url ="http://localhost:8000/api/user/";
    const headers = {'Content-type': 'text/plain'};
    const params ={}
    return makeGet (url,{params,headers});
}
export const fetchcorreo =(nombre, apellido, fechaNacimiento, email, genero, lugar, detalle) =>{
    const url ="http://localhost:8000/api/sendemail/";
    const headers = {'Content-type': 'text/plain'};
    const objeto = {
        'nombre': nombre,
        'apellido': apellido,
        'fechaNacimiento': fechaNacimiento,
        'email': email,
        'genero': genero,
        'lugar': lugar,
        'detalle': detalle
    };
    return makePost (url,objeto,{headers});
};

//llamadas a la no relacional
export const fetchmongo = () => {
    const url ="http://localhost:8000/api/test/";
    const headers = {'Content-type': 'text/plain'};
    const params ={}
    return makeGet (url,{params,headers}); 
}



