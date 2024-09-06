const express = require("express");
const routes = express.Router();

const adminCtrl = require('../controllers/adminCtrl');
const multer = require("multer");
const fs = require("fs");
const path = require("path");

routes.use('/uploads',express.static(path.join(__dirname, "uploads")))

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now())
    }
});

const uploads = multer({ storage: Storage }).single('moviePoster')

routes.get("/", adminCtrl.homePage);
routes.get("/form", adminCtrl.form);
routes.post('/insertData', uploads,adminCtrl.insertData);
routes.get('/deleteData', adminCtrl.deleteData);
routes.get('/editData', adminCtrl.editData);
routes.post('/updateData', uploads,adminCtrl.updateData);

module.exports = routes