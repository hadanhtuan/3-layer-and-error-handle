const express = require('express');
const authService = require('./auth.service')
const ErrorResponse = require("../../../utils/errorResponse");

async function login(req, res, next) {
    let DTO = await authService.login(req.body);

    if(DTO.error) //nếu có lỗi
    {
        return next(new ErrorResponse(DTO.message, 400));
    }

    //nếu không có lỗi
    res.status(200).json(DTO);
}

module.exports = {
    register,
    login
}
