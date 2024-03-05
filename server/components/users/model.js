const admin = require('firebase-admin');
const app = require('./../../firebase/firebase.config.js');
const{
    getFirestore
} = require('firebase-admin/firestore');
const db = getFirestore(admin.apps[app]);
module.exports = db;