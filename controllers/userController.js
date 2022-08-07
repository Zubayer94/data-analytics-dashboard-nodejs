const { User } = require('../models');
// controller actions
class UserController {
    static async getAllUsers(req, res) {
        try {
            const allUsers = await User.findAll()
            return res.status(200).json(allUsers)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getUserById(req, res) {
        const { id } = req.params
        try {
            const team = await User.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(team)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createUser(req, res) {
        const newUser = req.body
        try {
            const createdNewUser = await User.create(newUser)
            return res.status(200).json(createdNewUser)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateUser(req, res) {
        const { id } = req.params
        const newInfos = req.body
        try {
            await User.update(newInfos, { where: { id: Number(id) } })
            const updatedUser = await User.findOne({ where: { id: Number(id) } })
            return res.status(200).json(updatedUser)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteUser(req, res) {
        const { id } = req.params
        try {
            await User.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ mensagem: `id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = UserController

// module.exports.signup_get = (req, res) => {
//     res.render('signup');
// }

// module.exports.login_get = (req, res) => {
//     res.render('login');
// }

// module.exports.signup_post = async (req, res) => {
//     const { email, password } = req.body;

//     console.log(email, password);
//     res.send('new signup');
// }

// module.exports.login_post = async (req, res) => {
//     const { email, password } = req.body;

//     console.log(email, password);
//     res.send('user login');
// }