const jwt = require('jsonwebtoken');

const user = {
    id: '20',
    name: 'Dudu',
    email: 'dudu@gmail.com',
    password: '123456'
}

const secret = 'kdjdhjhfsjdkf';

function createToken() {

    const token = jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn: 60 })

    console.log(token);

}

function testeToken(token) {

    try {
        const validData = jwt.verify(token, secret);

        console.log(validData);

    } catch (error) {
        console.log(error)

    }

}

testeToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwiZW1haWwiOiJkdWR1QGdtYWlsLmNvbSIsImlhdCI6MTU5Nzk0ODQ1OSwiZXhwIjoxNTk3OTQ4NTE5fQ.TBn7mVf7zGphYc-K3jiTmvhfx-iu6Qe6_v_aQnKNjaE')


