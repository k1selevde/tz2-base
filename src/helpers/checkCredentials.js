export function checkCredentials({username = '', password = ''}) {
    return (username.toLowerCase() === 'admin' && password === '12345')
}