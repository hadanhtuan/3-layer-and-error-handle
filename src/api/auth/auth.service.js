const Account = require('../../../models/account')
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const sendEmail = require('../../../utils/sendEmail')

async function login(body, next) {

    try {
    const account = await Account.findOne({email: body.email})
        if(!account)
        {
            return {
                error: true,
                message: "khong ton tai tai khoan"
            }
        }
        console.log(account)

        //có tồn tại tài khoản trong db, so sánh mật khẩu
        const result = await bcrypt.compare(body.password, account.password)

        if(!result)
        {
            console.log(result.res)
                return {
                    error: true,
                    message: 'Khong dung mat khau'
                }
        }

        const accessToken = jwt.sign({
            ematl: body.email
        },
        'secret')

        if(result)
        {
            return {
                error: false,
                message: 'login success',
                token: accessToken
            }
        } }
        catch(err) { console.log(err) }      
}

function register() {
    //some thing
}

module.exports = {
    login,
    register
}
