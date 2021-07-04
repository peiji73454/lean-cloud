class User {
    userId = ''
    username = ''
    password = ''
    avatar = 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
    introduction = ''
    email = ''
    phone = ''
    roles = ['admin']

    constructor({_id, username, password, avatar, introduction, email, phone, roles}) {
        this.userId = _id
        this.username = username
        this.password = password
        this.avatar = avatar ? avatar : this.avatar
        this.introduction = introduction
        this.email = email
        this.phone = phone
        this.roles = roles ? roles : this.roles
    }

}

module.exports = User
