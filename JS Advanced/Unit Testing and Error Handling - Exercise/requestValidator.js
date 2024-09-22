function requestValidator(obj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validUri = /^([\w\.]+|\*)$/g;
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const validMessage = /^[^<>\\&'"]*$/g;

    if(!validMethods.includes(obj.method)){
        throw new Error('Invalid request header: Invalid Method');
    }
    if(!obj.uri || !validUri.test(obj.uri)){
        throw new Error('Invalid request header: Invalid URI');
    }
    if(!validVersions.includes(obj.version)){
        throw new Error('Invalid request header: Invalid Version');
    }
    if(!obj.hasOwnProperty('message') || !validMessage.test(obj.message)){
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;
}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));
console.log(requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));
console.log(requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}));
