const { findUserById, getUserName } = require('./exercise2');

describe('UserName', () => {
    it('usuário é encontrado', () => {
        return getUserName(5).then(data => expect
        (data).toEqual('Paul'));
    });
}); 

