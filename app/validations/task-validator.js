const taskValidationSchema = {
    title:{
        notEmpty:{
             errorMessage:'titile is required'
        }
    },
    description:{
        notEmpty:{
            errorMessage:"description is required"
        },
        isLength:{
            opitions:{ max:10}
        }
    },
    status:{
        notEmpty:{
            errorMessage:"status is required"
        },
        isIn:{
            options:[['pending','completed','in-progress']]
        }
    },
    priority:{
        notEmpty:{
            errorMessage:"priority is required"
        },
        isIn:{
            options:[['low','medium','high']]
        }
    },
    dueDate:{
        notEmpty:{
            errorMessage:'due date is required'
        },
        isDate:{
            options:{format: 'YYYY-MM-DD'},
            errorMessage:'invalid format'
        }
    }
}
module.exports = taskValidationSchema