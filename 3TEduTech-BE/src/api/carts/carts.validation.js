// file: src/api/carts/carts.validation.js

const Joi = require('joi');

/**
 * Validation for adding a course to cart
 */
const addCourseToCart = {
  body: Joi.object().keys({
    courseId: Joi.number().integer().required().messages({
      'number.base': 'ID khóa học không hợp lệ.',
      'number.integer': 'ID khóa học phải là một số nguyên.',
      'any.required': 'Vui lòng cung cấp ID khóa học.',
    }),
  }),
};

/**
 * Validation for removing a course from cart
 */
const removeCourseFromCart = {
  params: Joi.object().keys({
    courseId: Joi.number().integer().required().messages({
      'number.base': 'ID khóa học không hợp lệ.',
      'number.integer': 'ID khóa học phải là một số nguyên.',
      'any.required': 'Vui lòng cung cấp ID khóa học.',
    }),
  }),
};


/**
 * Validation for clearing the cart
 */
const clearCart = {};

module.exports = {
  addCourseToCart,
  removeCourseFromCart,
  clearCart,
};
