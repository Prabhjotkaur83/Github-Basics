const hostelModel = require("./hostelModel")
add = (req, res) => {

    errMsg = ""
    if (req.body.name == "")
        errMsg += "Name is required"
    if (req.body.rollNo == "")
        errMsg += "Roll no is required"
    if (!!errMsg) {
        res.json({
            message: errMsg,
            success: false,
            status: 422
        })
    }
    else {
        let hostelObj = new hostelModel()
        hostelModel.findOne({ rollNo: req.body.rollNo })
            .then(hosteldata => {
                if (hosteldata == null) {
                    //add data
                    hostelObj.name = req.body.name
                    hostelObj.rollNo = req.body.rollNo
                    hostelObj.save()
                        .then(data => {
                            res.json({
                                message: "Data saved Successfully",
                                success: true,
                                status: 500,
                                data: data
                            })
                        })
                        .catch(err => {
                            res.json({
                                message: err,
                                status: 200,
                                success: false
                            })
                        })

                }
                else {
                    res.json({
                        message: "Roll no can't be repeated",
                        status: 422,
                        success: false
                    })
                }
            })
            .catch(err => {
                req.json({
                    message: err,
                    success: false,
                    status: 200
                })
            })
    }
}
update = (req, res) => {
    errMsg = ""
    if (req.body.name == "")
        errMsg += "Name is required"
    if (req.body._id == "")
        errMsg += "_id is required"
    if (req.body.rollNo == "")
        errMsg += "Roll no is required"
    if (!!errMsg) {
        res.json({
            message: errMsg,
            success: false,
            status: 422
        })
    }
    else{
        hostelModel.findOne({_id: req.body._id})
        .then(data=>{
            if(data!=null){
                data.name = req.body.name
                data.rollNo = req.body.rollNo
                data.save()
                .then(hdata=>{
                    res.json({
                        message: "Record updated!",
                         success: true,
                         status: 500,
                         data: hdata
                    })
                })
                .catch(err=>{
                    res.json({
                        message: err,
                        success: false,
                        status:200
                    })

                })
            }
            else{
                res.json({
                    message: "No records found",
                    status: 404,
                    success: false
                })
            }
        })
        .catch(err=>{
            res.json({
                message: err,
                success: false,
                status:200
            })
            

        })

    }
}

module.exports = {
    add, update
}