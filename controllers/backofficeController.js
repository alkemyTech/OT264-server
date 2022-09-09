const { Contacts } = require('../models');
//const backoffice = require('../views/backofficeContacts');
const path = require('path');
const http = require('http');
//const fs = require('fs');

class BackofficeController {
  /*static async getAll(name, phone, email, message, req, res) {
    const back = await res.sendFile(path.join(__dirname, '../views/backofficeContacts.html'));
    /*const back = await html.renderFile(path.join(__dirname, '../views/backofficeContacts.html'), {
      nombre: name,
      telefono: phone,
      correo: email,
      mensaje: message
    });
    if (back) {
      res.writeHead(200, { 'Content-Type ': ' text/html' });
    }
  }*/
  static async getAll(req, res) {
    const contact = await Contacts.findAll();
    if (contact) {
      res.json(contact);
    }
  }
}

module.exports = BackofficeController;
