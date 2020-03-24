export function checkCredentials(params) {
    return (params.username.toLowerCase() == 'admin' && params.password == '12345')
}