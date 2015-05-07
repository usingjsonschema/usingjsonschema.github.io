---
layout: post
title: "When do I need JSON Schema?"
---
For many, the need for JSON Schema is spurred by project growth or maintenance. Often when a project starts out, the data definitions are relatively isolated, limited in size, and typically reflect the initial thinking around the content of each element.

However, as the project continues,

* Original concepts of data content can change with new requirements or implementation realizations. For example, an element that starts as a boolean may need to change to an integer or enumeration to account for new state information discovered.
* More people may share the data definitions and edit them to suit different parts of the overall program. This can lead to inconsistencies in data ranges, types (integer or float), enumeration values, or organizational structure.
* If multiple programs are using the data (messaging or storage), it may be difficult to determine if they are in sync for data elements that are not commonly used. For instance, if a rarely used enumeration value was used by an early version of a program, it may not be accounted for by a program developed later by a developer that was not familiar with the edge cases of the original program.

There are a number of ways these issues can be addressed. For example,
* Documentation. As the JSON content is being defined, it can be documented. As changes are made, the documentation can be updated. Using a shared repository, the documentation can be edited by all developers working with the definition. The documentation can be published to enable others to learn the data content.
* Testing suites. As content is defined, test suites can be created to specify the expected structure and content. The test suites can be made available to allow testing by each program using the data content.

For small data definitions, or those that are well understood and static, the documentation route may be sufficient. For some data definitions, the content may be self-evident by familiarity within a particular organization or community.

However, for most data definitions, something more is desirable. So, considering the documentation and testing thoughts further, what should be the documentation format, and how should test cases be expressed. This is where JSON Schema enters the discussion.

* Documenting JSON content structural and value constraints using JSON Schema allows the required content to be defined in a format that is reasonably easy to read and comprehend. It uses JSON syntax, allows type and value constraints, and arbitrary content can be permitted for those definitions that have free form content.
* JSON Schema is machine readable as well, allowing automated processing for validation in programs. This allows the custom logic for verifying JSON content received to be processed by generated code rather than maintaining hand written verification code in each program.
* The schemas can be used as part of test case definitions, allowing consistent data definitions to be processed across test cases used by programs written in different programming languages.

So, when do I need JSON Schema? When you start encountering little problems with inconsistencies, your co-developers start using email or IM to inform you of "oh, I changed that last Friday" changes, or maintaining the validation code in your programs is starting to encroach on the time you would prefer to devote to the more interesting areas of them. So, not always, but likely often.
