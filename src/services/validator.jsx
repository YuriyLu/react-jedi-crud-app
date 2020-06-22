import ReactJoiValidations from 'react-joi-validation'
import Joi from 'joi' 

ReactJoiValidations.setJoi(Joi);

export const schema = Joi.object({
    name: Joi.string().min(3).max(30).required()
});
