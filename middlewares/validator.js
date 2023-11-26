const { check, validationResult } = require('express-validator');


exports.registerRules = () => [
    check('fullName', 'this field is required').notEmpty(),
    check('email', 'this field is required').notEmpty(),
    check('email', 'this field should be a valid email').isEmail(),
    check('password', 'this field should be at least 4 characters').isLength({min:4}),
    // check('phone', 'this field should be at least 8 characters').isLength({max:8
    // }),
   
  
    
];

exports.validator = (req,res,next) => {
    const errors = validationResult(req); 
    errors.isEmpty() ? next() : res.status(406).json({errors:errors.array()})
    
}