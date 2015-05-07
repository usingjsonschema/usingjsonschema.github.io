---
layout: post
title: "Freeform Schema Definitions"
---
The second of a three part series, the first article is
[Strict Schemas Definitions]({% post_url 2014-10-22-strict-schema-definitions %}).

A commonly highlighted feature of using RESTful interfaces is the freedom to utilize the HTTP GET, POST, PUT, DELETE operations to interact with resources easily. The interactions typically have the following characteristics,

* URI hierarchy defined to allow navigation to discrete resources in a predictable manner, allowing resources to be found and new resources to be placed in predictable places.
* Freedom to place any content with the resource, with HTTP semantics handling the exchange of data between the requester and server.

JSON is commonly used as the format for resource persistent state and/or the format for the message exchanged through the RESTful interface (e.g. for when the persistent format is not JSON).

In the RESTful scenario then, there are two distinct schema considerations.

* The schema of the URI to reference the resource.
    * This can be an actual resource endpoint (e.g. http://www.example.com/marketing/product123/brouchure where the endpoint is a document), or logical reference (e.g. http://www.example.com/customer/12345) where the URI references a database entry).
    * The incoming message can contain navigation information, and the URI be a more general endpoint. For example, www.example.com/customer as the endpoint, with the body of the message containing additional data that provides further data.
* The second consideration is for the data served from the resource.
  
In the consideration for the output message, and for the second scenario in the input message, there is a choice of whether to define a schema, and if so, whether the schema should have constraints.

To a certain extent, some constraints will exist as a practical matter. The URI construction requires recognizable structure and values must be relevant (e.g. the customer node and its identifier requiring numeric only data). While a 404 message can be returned for any non-conforming message, this on its own does not indicate what was expected.

The relevance of schemas to the data exchanged depends on the context. Freeform data formats like
HTML are often intended to be exchanged in a manner that does not require many of the intermediaries processing messages to be aware of its content. For many deployers, there is a desire to not constrain
services to formal schemas - instead services are free to add/modify/remove content over time or according to resource content, and clients are expected to utilize the content that is received,
ignoring content they do not recognize. This provides freedom of action, and message exchange does not break due to static bindings requiring fixed formats.

Schema or schemaless is not an exclusive choice, schemas can be applied to portions of data definitions to suit the intended purpose and audience. The next article explores this further.
