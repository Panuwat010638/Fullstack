let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
//ResumeContact Model
let ResumeContactSchema = require('../models/ResumeContact');

//create contact
router.route('/create').post((req,res,next) => {
    ResumeContactSchema.create(req.body, (error,data)=>{
        if(error){
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    })
})
// read Data (showData)
router.get("/show", async (req, res) => {
    try {
        const result = await ResumeContactSchema.find()
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Not found record"
            })
        }
        else {
            res.json({
                status: "SUCCESS",
                message: "Records found",
                data: result
            })
        }
    }
    catch (e) {
        console.log(e)
    }
})

//get single contact
router.route('/show/:id').get((req, res) => {
    ResumeContactSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})
module.exports = router;