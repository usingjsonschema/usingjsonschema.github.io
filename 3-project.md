---
layout: page
title: Project
permalink: /project/
---

The *Using JSON Schema* project is a set of repositories containing programs described in the book, and the example JSON and JSON Schema content.

## Materials

Repository: [ujs-book-materials](https://github.com/usingjsonschema/ujs-book-materials)

Project containing the source code for the examples and programs used in the book

## Javascript/Node.js and Python projects

**jsonsyntax** - JSON Syntax Check library / utility

Repositories:

* Javascript [ujs-jsonsyntax-nodejs](https://github.com/usingjsonschema/ujs-jsonsyntax-nodejs)
* Python [ujs-jsonsyntax-python](https://github.com/usingjsonschema/ujs-jsonsyntax-python)

The introductory project is a simple command line that checks the syntax of a JSON file. It exits with a return code of zero (successful) or one (failure), making it useful for use in scripts. It can also be used as a library.

**jsonvalidate** - JSON Validation library / utility

Repositories:

* Javascript [ujs-jsonvalidate-nodejs](https://github.com/usingjsonschema/ujs-jsonvalidate-nodejs)
* Python [ujs-jsonvalidate-python](https://github.com/usingjsonschema/ujs-jsonvalidate-python)

*jsonvalidate* provides a library, with command line / script support, that enables JSON validation to be performed with JSON Schema definitions. It supports,

* Loading the JSON content and schema, along with referenced schemas, from the local file system. Convenient for development and testing.
* Support for local and remote schema content access.
* Loading JSON reference content from custom storage resources, using resource specific URI identification. Different approaches are used for the Javascript/Node.js and Python implementations.

**safefile** - Automated Recovery File library

Repositories:

* Javascript [ujs-safefile-nodejs](https://github.com/usingjsonschema/ujs-safefile-nodejs)
* Python [ujs-safefile-python](https://github.com/usingjsonschema/ujs-safefile-python)

Using JSON files for programs with higher robustness requirements is assisted by a library for file read/write that supports automated recovery processing. The *safefile* library writes content in a recoverable manner, which can be inspected and recovered through automation for most failure conditions.

**format**

Repository: Javascript [ujs-format-nodejs](https://github.com/usingjsonschema/ujs-format-nodejs)

A simple utility for creating formatted message strings using replacement parameters. Only a Javascript version is provided, the Python standard library provides an equivalent function.

## Web project

Repository: [jsonvalidate.com](https://github.com/usingjsonschema/jsonvalidate.com)

The *jsonvalidate.com* web application, a single page application for validating JSON against JSON Schema, including using referenced schemas.

The JSON Schema examples in the book chapters 3 and 4 are also able to be loaded through the *Import* function for easy use of the examples for experimenting.
