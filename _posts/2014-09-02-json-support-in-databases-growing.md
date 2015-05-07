---
layout: post
title: "JSON Support in Databases Growing"
---
A couple of interesting articles were posted by <a title="InfoWorld" href="http://www.infoworld.com" target="_blank">InfoWorld</a> about JSON data support in databases.

* The first covers a selection of databases with JSON data support (<a title="Relational databases adding JSON support" href="http://www.infoworld.com/t/data-management/big-databases-jump-the-json-bandwagon-249053" target="_blank">link</a>)
* The second is the JSON support introduction for Oracle 12c, with a bit more context for how Oracle sees JSON fitting (<a title="Oracle 12c JSON support" href="http://www.infoworld.com/t/nosql/oracle-works-both-sides-of-the-sqlnosql-street-248866" target="_blank">link</a>).

It is always interesting to see how new technologies are integrated into existing products, and how they compare with products that started with the new technologies.

For a long time, relational databases have been able to store arbitrary data (e.g. BLOB - binary large objects). Over time, some datatypes have been promoted from opaque bits to recognize content - XML is a good example, and JSON appears to be following in a similar path. For instance, the datatype is named, operations adapt to the needs of the datatype, and functions such as indexing can utilize content defined within the datatype. PostgreSQL has supported JSON for some time and has some nice documentation on their approach (<a title="PostgreSQL JSON datatype documentation" href="http://www.postgresql.org/docs/9.4/static/datatype-json.html" target="_blank">link</a>).

However, from a JSON Schema perspective, the database story is still arms length. The JSON data managed by the databases is 'schemaless', meaning that the database does not manage schema definitions or enforce schema definitions as operations on the database occur. Though a bit of fixed schema content is required (document id, index definitions), these are database configuration driven, not JSON Schema definitions.

Utilizing JSON Schema, with native JSON databases like MongoDB, or with the JSON data integration supported in the SQL databases, is still an application or middleware function. However, with native JSON interfaces available across a broad selection of databases, the creation and maintenance of the code to interact with the database for the application/middleware is becoming easier.
