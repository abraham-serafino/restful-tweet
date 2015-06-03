# restful-tweet
MeteorJS RESTful WebApp in a Tweet (requires Iron Router)

There was quite a bit of buzz at SpringOne last year about Spring Boot's "RESTful WebApp in a Tweet" - which really shows how quick and painless Spring Boot makes things that we all feel should have been this easy all along.

I'm sure there were plenty of spin-offs, but I feel justified in adding my own, because many people still see full-stack JS frameworks like MEAN.io and MeteorJS as toys, holding that they are still not quite "Enterprise Ready."

By way of a rebuttal, I'm presenting my own "RESTful Webapp in a Tweet" in MeteorJS.

Router.route('/hello', { where: 'server' })
  .get(function() {
    this.response.end('{ message: "Hello, world!" }');
  });

You get the gist - this Javascript code in a file by itself is enough to get a RESTful app off the ground using Iron Router for MeteorJS - rather impressive, considering Meteor is still in its infancy and it took Spring almost a decade to get to this point.
