import React from 'react'
///GET
const makeGet = (url, options = {}) =>{
    const headers = options['headers'] || {};
    const params = options['params'] || {}
    const query =Object.keys(params).map(k => encodeURIComponent(k) + '=' +
    encodeURIComponent(params[k])).join('&')
    const urlFinal = url+ '?' +query
    return fetch(urlFinal, { headers,method: 'GET'}).then(res => res.json());
};
//POST
const makePost = (url,object={}, options = {}) => {
    const headers = options['headers'] || {};
    const body = JSON.stringify(object);
    headers['Content-type'] ='text/plain';
    return fetch(url, {body, headers, method: 'POST'}).then(res => res.json());
};

//PUT
const makePut = (url,object = {},options = {}) => {//url debe incluir /id en el endpoint
    const headers = options['headers'] || {};
    const body = JSON.stringify(object);
    headers['Content-type'] ='text/plain';
    return fetch(url, {body, headers, method: 'PUT'}).then(res =>res.json());
};
//DELETE
const makeDelete = (url,object={}, options = {}) => {
    const headers = options['headers'] || {};
    const body = JSON.stringify(object);
    headers['Content-type'] ='text/plain';
    return fetch(url, {body, headers, method: 'DELETE'}).then(res =>res.json());
};
const makeDeleteID = (url, options = {}) => {
    const headers = options['headers'] || {};
    headers['Content-type'] ='text/plain';
    return fetch(url, { headers, method: 'DELETE'}).then(res =>res.json());
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
export const fetchCrearProducto = (id, nombre, descripcion, fecha, precio, descuento, stock, flagOferta, flagDestacado, genero, color, talla, categoriaId)=>{
    const url ="http://localhost:8000/api/product/";
    const headers = {'Content-type': 'text/plain'};
    const objeto = {
        "product_id": id,
        "product_name": nombre,
        "product_description": descripcion,
        "product_fecha": fecha,
        "product_price": precio,
        "product_descount": descuento,
        "product_stock": stock,
        "product_isOffer": flagOferta,
        "product_isHighlighted": flagDestacado,
        "product_gender": genero,
        "product_color": color,
        "product_size": talla,
        "category_id": categoriaId

    };
    return makePost (url,objeto,{headers});
}
export const fetchEliminarProducto = (id)=>{
    const url ="http://localhost:8000/api/product/"+id+'/';
    const headers = {'Content-type': 'text/plain'};
    return makeDeleteID (url,{headers});
}
/* 
Hace update de todos los campos, el objeto debe ser pasado actualizado como parametro
*/
export const fetchUpdateProducto = ( id, nombre, descripcion, fecha, precio, descuento, stock, flagOferta, flagDestacado, genero, color, talla, categoriaId)=>{
    const url ="http://localhost:8000/api/product/"+id+'/';
    const headers = {'Content-type': 'text/plain'};
    const objeto = {
        "product_id": id,
        "product_name": nombre,
        "product_description": descripcion,
        "product_fecha": fecha,
        "product_price": precio,
        "product_descount": descuento,
        "product_stock": stock,
        "product_isOffer": flagOferta,
        "product_isHighlighted": flagDestacado,
        "product_gender": genero,
        "product_color": color,
        "product_size": talla,
        "category_id": categoriaId
    };
    return makePut (url,objeto,{headers});
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
export const fetchCrearCustomer = (id, nombre, apellido, pais, ciudad, direccionID,userID)=>{
    const url ="http://localhost:8000/api/customer/";
    const headers = {'Content-type': 'text/plain'};
    const objeto = {
        "customer_id": id,
        "customer_FirstName": nombre,
        "customer_LastName": apellido,
        "customer_country": pais,
        "customer_city": ciudad,
        "customer_address": direccionID,
        "user_id": userID

    };
    return makePost (url,objeto,{headers});
}
export const fetchEliminarCustomer = (id)=>{
    const url ="http://localhost:8000/api/customer/"+id+'/';
    const headers = {'Content-type': 'text/plain'};
    return makeDeleteID (url,{headers});
}
/* 
Hace update de todos los campos, el objeto debe ser pasado actualizado como parametro
*/
export const fetchUpdateCustomer = ( id, nombre, apellido, pais, ciudad, direccionID,userID)=>{
    const url ="http://localhost:8000/api/customer/"+id+'/';
    const headers = {'Content-type': 'text/plain'};
    const objeto = {
        "customer_id": id,
        "customer_FirstName": nombre,
        "customer_LastName": apellido,
        "customer_country": pais,
        "customer_city": ciudad,
        "customer_address": direccionID,
        "user_id": userID
    };
    return makePut (url,objeto,{headers});
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
export const fetchCrearCategoria = (id, nombre, descripcion)=>{
    const url ="http://localhost:8000/api/category/";
    const headers = {'Content-type': 'text/plain'};
    const objeto = {
        "category_id": id,
        "category_name": nombre,
        "category_description":descripcion
    };
    return makePost (url,objeto,{headers});
}
export const fetchEliminarCategoria = (id)=>{
    const url ="http://localhost:8000/api/category/"+id+'/';
    const headers = {'Content-type': 'text/plain'};
    return makeDeleteID (url,{headers});
}
/* 
Hace update de todos los campos, el objeto debe ser pasado actualizado como parametro
*/
export const fetchUpdateCategoria = ( id, nombre, descripcion)=>{
    const url ="http://localhost:8000/api/category/"+id+'/';
    const headers = {'Content-type': 'text/plain'};
    const objeto = {
        "category_id": id,
        "category_name": nombre,
        "category_description":descripcion
    };
    return makePut (url,objeto,{headers});
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
export const fetchCrearOrden = (id, fecha, monto, descuento, customeID, Adress_id, shop_id)=>{
    const url ="http://localhost:8000/api/order/";
    const headers = {'Content-type': 'text/plain'};
    const objeto = {
        "order_id": id,
        "order_date": fecha,
        "order_amount": monto,
        "order_descount": null,
        "customer_id": null,
        "address_id": null,
        "shop_id": null
    };
    return makePost (url,objeto,{headers});
}
export const fetchEliminarOrden = (id)=>{
    const url ="http://localhost:8000/api/order/"+id+'/';
    const headers = {'Content-type': 'text/plain'};
    return makeDeleteID (url,{headers});
}
/* 
Hace update de todos los campos, el objeto debe ser pasado actualizado como parametro
*/
export const fetchUpdateOrden = ( id, nombre, descripcion)=>{
    const url ="http://localhost:8000/api/category/"+id+'/';
    const headers = {'Content-type': 'text/plain'};
    const objeto = {
        "category_id": id,
        "category_name": nombre,
        "category_description":descripcion
    };
    return makePut (url,objeto,{headers});
}




//user
export const fetchUsuario = (id) =>{
    const url ="http://localhost:8000/api/user/"+id+"/";
    const headers = {'Content-type': 'text/plain'};
    const params ={}
    return makeGet (url,{params,headers});
}
export const fetchUsuariolista = () =>{
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



