---
layout: post
title: "Strict Schema Definitions"
---
The first of a three part series, the subsequent posts cover freeform
and mixed use scenarios.

JSON Schema allows strict definitions, including structure, data types,
length of data, and content restrictions. The elements permitted can be
limited to those defined, and  rules for combinations of elements can be
specified.

This combination of mechanisms allows JSON content to be very crisply defined,
validation to be thorough, and error recognition to be succinct.

When defining message exchanges for systems such as financial
transactions, the ability to provide a well structured, completely
predictable, and completely machine processing capable content
definition is required.

A strict schema typically has the following characteristics,

* The *additionalProperties* constraint is set to *false*
  to disallow content that is not explicitly specified. Alternatively, the
  *patternProperties* constraint can be used to allow some flexibility,
  but with predictable property names.
* Properties will have type definitions that have content checking
  appropriate for machine processing. This can include length restrictions,
  count limit, enumeration of allowed values, and/or a regular expression for
  content value verification.

The processing system accepting content to process the schema can have
additional validation steps including size checking for messages or limiting
character encodings accepted.

Standards that include JSON representations for persistent data formats,
message exchanges, or similar uses, often include interoperability requirements.
Some standards organizations provide test suites or verification programs which
allow independent validation of compliance to their specifications. Using
constraints in the JSON Schema allows interoperability to be expressed in as
fine a grain as desired.

In the next two articles, freeform and mixed scenarios are discussed.
