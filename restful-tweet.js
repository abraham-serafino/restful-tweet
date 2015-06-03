Router.route('/hello', { where: 'server' })
  .get(function() {
    this.response.end('{ message: "Hello, world!" }');
  });
