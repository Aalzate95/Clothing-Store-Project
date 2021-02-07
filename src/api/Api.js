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
    headers['Content-type'] ='application/json';
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

//CRUDS


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
export const fetchCrearProducto = (id, nombre, descripcion, precio, descuento, stock, flagOferta, flagDestacado, genero, color, talla, categoriaId)=>{
    const url ="http://localhost:8000/api/product/";
    const headers = {'Content-type': 'application/json'};
    const objeto = {
        "product_id": id,
        "product_name": nombre,
        "product_description": descripcion,
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
export const fetchCategoria = (id) =>{
    const url ="http://localhost:8000/api/category/"+id+"/";
    const headers = {'Content-type': 'text/plain'};
    const params ={}
    return makeGet (url,{params,headers});
}
export const fetchCategorialista = () =>{
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
export const fetchCrearOrden = (id, fecha, monto, descuento, customerID, adress_id, shop_id)=>{
    const url ="http://localhost:8000/api/order/";
    const headers = {'Content-type': 'text/plain'};
    const objeto = {
        "order_id": id,
        "order_date": fecha,
        "order_amount": monto,
        "order_descount": descuento,
        "customer_id": customerID,
        "address_id": adress_id,
        "shop_id": shop_id
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
export const fetchUpdateOrden = ( id, fecha, monto, descuento, customerID, adress_id, shop_id)=>{
    const url ="http://localhost:8000/api/order/"+id+'/';
    const headers = {'Content-type': 'text/plain'};
    const objeto = {
        "order_id": id,
        "order_date": fecha,
        "order_amount": monto,
        "order_descount": descuento,
        "customer_id": customerID,
        "address_id": adress_id,
        "shop_id": shop_id
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
export const fetchCrearUsuario = (id, pass, isAdmin)=>{
    const url ="http://localhost:8000/api/user/";
    const headers = {'Content-type': 'text/plain'};
    const objeto = {
        "user_id": id,
        "user_password": pass,
        "user_is_admin": isAdmin
    };
    return makePost (url,objeto,{headers});
}
export const fetchEliminarUsuario = (id)=>{
    const url ="http://localhost:8000/api/user/"+id+'/';
    const headers = {'Content-type': 'text/plain'};
    return makeDeleteID (url,{headers});
}
/* 
Hace update de todos los campos, el objeto debe ser pasado actualizado como parametro
*/
export const fetchUpdateUsuario = ( id, pass, isAdmin)=>{
    const url ="http://localhost:8000/api/user/"+id+'/';
    const headers = {'Content-type': 'text/plain'};
    const objeto = {
        "user_id": id,
        "user_password": pass,
        "user_is_admin": isAdmin
    };
    return makePut (url,objeto,{headers});
}



//Peticion de envio de correo
//esta api devuelve un json {enviado: true}
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
    return   (url,objeto,{headers});
};

//Consultas en mongo

export const fetchCarritoLista = () => {
    const url ="http://localhost:8000/api/test/";
    const headers = {'Content-type': 'text/plain'};
    const params ={}
    return makeGet (url,{params,headers}); 
}
export const fetchCarrito = (id) =>{
    const url ="http://localhost:8000/api/test/"+id+"/";
    const headers = {'Content-type': 'text/plain'};
    const params ={}
    return makeGet (url,{params,headers});
}/**
 * 
 * Recomiendo fervientementeno usar esto, no probada xd
 */
export const fetchUpdateCarrito = ( id,detalleCliente)=>{
    const url ="http://localhost:8000/api/test/"+id+'/';
    const headers = {'Content-type': 'text/plain'};
    const objeto = {
        "id_usuario": id,
        "detalle": detalleCliente
    };
    return makePut (url,objeto,{headers});
}
/*
formato datoscliente
    {
      "nombre": "Alex",
      "apellido": "Alzate",
      "usuario": "aalzate",
      "contraseña": "123",
      "direccion": "Villa club",
      "correo": "alex.alzate95@gmail.com",
      "ciudad": "Guayaquil",
      "telefono": "0989909418",
     
      "carrito" :{
        "340": {
          "cantidad": 1,
          "nombre": "pantalones bla bla"
        },
        "001": {
          "cantidad": 2,
          "nombre": "Camiseta estampada roja"
        }
        }
    }
*/
export const fetchCrearCarrito = (id,detalleCliente)=>{
    const url ="http://localhost:8000/api/test/";
    const headers = {'Content-type': 'text/plain'};
    const objeto = {
        "id_usuario": id,
        "detalle": detalleCliente
    };
    return makePost (url,objeto,{headers});
}
export const fetchEliminarCarrito = (id)=>{
    const url ="http://localhost:8000/api/test_delete/"+id+'/';
    const headers = {'Content-type': 'text/plain'};
    return makeDeleteID (url,{headers});
}

//"Log in"
export const fetchlogin = (id, pass) => {
    const url ="http://localhost:8000/api/login/";
    const headers = {'Content-type': 'text/plain'};
    const objeto = {
        'user_id': id,
        'user_password': pass
    };
    return makePost (url,objeto,{headers});
};

/**
 * Solicita un cambio de contra a la base
 * @param {*} id 
 * @param {*} pass 
 * @param {*} newpass 
 */
export const fetchCambiarClave = (id, pass, newpass) => {
    const url ="http://localhost:8000/api/changePass/";
    const headers = {'Content-type': 'text/plain'};
    const objeto = {
        "user_id" : id, 
        "user_password1" : pass,
        "user_password2" : newpass
    };
    return makePost (url,objeto,{headers});
};

/**
 * Crea el suaurio y el customer asociado
 * @param {*} id 
 * @param {*} pass 
 * @param {*} newpass 
 */
export const fetchCrearUsuariocompleto = (id, pass, isAdmin,nombre,apellido,pais,ciudad,direccion,customerId,telefono, email) => {
    const url ="http://localhost:8000/api/createuser/";
    const headers = {'Content-type': 'text/plain'};
    const objeto = {
        "user_id" : id, 
        "user_password" : pass,
        "user_is_admin" :  isAdmin,
        "customer_firstname" :  nombre,
        "customer_lastname" :  apellido,
        "customer_country" :  pais,
        "customer_city" :  ciudad,
        "customer_address" :  direccion,
        "customer_id" :  customerId,
        "customer_phone" :  telefono,
        "customer_email" :  email
    };
    return makePost (url,objeto,{headers});
};
/**
 * 
 * @param {*} id 
 */
export const fetchDatosUsuario = (id) => {
    const url ="http://localhost:8000/api/datouser/";
    const headers = {'Content-type': 'text/plain'};
    const objeto = {
        "user_id" : id
    };
    return makePost (url,objeto,{headers});
};
/**
 * 
 */
export const fetchTotalUsuarios = () => {
    const url ="http://localhost:8000/api/totaluser/";
    const headers = {'Content-type': 'application/json'};
    return makeGet (url,{headers});
};



//Estadisticos
/**
 * 
 */
export const fetchObtenerGananciaEstimada = () => {
    const url ="http://localhost:8000/api/ganancialestimada/";
    const headers = {'Content-type': 'text/plain'};
    return makeGet (url,{headers});
};
/**
 * 
 */
export const fetchObtenerGananciaReal = () => {
    const url ="http://localhost:8000/api/gananciareal/";
    const headers = {'Content-type': 'text/plain'};
    return makeGet (url,{headers});
};
export const fetchOrdenesUltimosCinco = () => {
    const url ="http://localhost:8000/api/order/";
    const headers = {'Content-type': 'text/plain'};
    return makeGet (url,{headers});
};
export const fetchProductosUltimosCinco = () => {
    const url ="http://localhost:8000/api/productr/";
    const headers = {'Content-type': 'text/plain'};
    return makeGet (url,{headers});
};


//Crear Orden de compra
