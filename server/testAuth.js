const http = require('http')

function post(path, data) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(data)
    const options = {
      hostname: 'localhost',
      port: 4000,
      path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload),
      },
    }

    const req = http.request(options, (res) => {
      let body = ''
      res.on('data', (chunk) => (body += chunk))
      res.on('end', () => {
        try {
          resolve({ statusCode: res.statusCode, body: JSON.parse(body) })
        } catch (e) {
          resolve({ statusCode: res.statusCode, body })
        }
      })
    })

    req.on('error', (err) => reject(err))
    req.write(payload)
    req.end()
  })
}

async function run() {
  try {
    console.log('Signing up...')
    const signupResp = await post('/api/v1/auth/signup', {
      firstName: 'Test',
      lastName: 'User',
      email: 'testuser@example.com',
      password: 'Password123!',
      confirmPassword: 'Password123!',
      accountType: 'Student',
    })
    console.log('Signup response:', signupResp)

    console.log('Logging in...')
    const loginResp = await post('/api/v1/auth/login', {
      email: 'testuser@example.com',
      password: 'Password123!',
    })
    console.log('Login response:', loginResp)
  } catch (err) {
    console.error('Error during test:', err)
  }
}

run()
