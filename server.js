// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/usuarios').then(() => { // Puerto por defecto de MongoDB 27017, modificar si se utliza otro
  console.log('Connected to database');
}).catch(() => {
  console.log('Connection failed');
});

// Se define el esquema de la colección de usuarios
const usuarioSchema = new mongoose.Schema({
  usuario: {
    type: String,
    required: true
  },
  contrasena: {
    type: String,
    required: true
  },
  nivel_ejercicio: {
    type: String,
    required: true
  }
});

// Se define el modelo de la colección de usuarios
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Recepcion de datos ejemplo y llega hasta MongoDB
app.post('/registro', async (req, res) => {
  console.log(req.body);
  const { usuario, nivel_ej, contrasena } = req.body;
  const nuevoUsuario = new Usuario({
    usuario: usuario,
    nivel_ejercicio: nivel_ej,
    contrasena: contrasena
  });
  console.log(nuevoUsuario);
  try {
    await nuevoUsuario.save();
    res.status(200).send('{ "message": "Usuario creado" }');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear el usuario');
  }
});

// Recuperacion de datos y llega hasta el front
app.post('/usuario', async (req, res) => {
  console.log(req.body);
  try{
    const usuario = req.body.usuario;
    const encontrar_usuario = await Usuario.findOne({ usuario: usuario }).exec();
    console.log(encontrar_usuario);
    if(encontrar_usuario){
      res.status(200).send(encontrar_usuario);
    } else {
      res.status(404).send('{ "message": "Usuario no encontrado" }');
    }
  }
  catch(error){
    console.error(error);
    res.status(500).send('{ "message": "Error al buscar el usuario" }');
  }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));