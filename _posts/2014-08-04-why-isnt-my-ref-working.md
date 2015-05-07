---
layout: post
title: "Why isn't my $ref working?"
---
References are a popular feature of JSON Schema, but are also a feature that generates **"why doesn't this schema work"** questions fairly regularly on the JSON Schema discussion group (<a title="JSON Schema discussion group" href="https://groups.google.com/forum/#!forum/json-schema" target="_blank">https://groups.google.com/forum/#!forum/json-schema</a>).

Starting with the assumption that the schema you are using is correct except for the references issues, understanding a bit about what the schema validation processor does can help work through the references related issues.

### Issue: Remote references don't quite work

* My valid schema works fine, but my invalid schema always validates too, or,
* If I paste the schema fragment into my main schema, it works, but not when I put the same thing in my reference schema.

When a schema validation processor encounters a reference, it will populate it with the content that is pointed to by the URI defined in the reference. If that URI can't be resolved, what happens? The validation processor may place an empty schema ({}) at the location. This has the effect of allowing the validation to proceed, but making anything processed against the reference valid.

If you encounter this issue, the most likely cause is an error in the URI associated with the "$ref", or the resource to deliver the URI content is not providing it (e.g. web location unavailable or other error).

* Verify the "$ref" URI is formatted correctly, and the content is an exact match to the resource URI (no extraneous spaces or other characters).
* Verify the "id" in the reference schema is at the root level and matches exactly.
* Verify the URI resource is accessible through a different program (e.g. **curl** for a web URI).

### Issue: The local "definitions" schema isn't getting used

* I have "definitions" in my schema, but the schema content don't seem to be getting used through the local "$ref".

This is similar to the issue as above, but the cause is slightly different. The URI for a local reference starts with #/definitons/ followed by the path to navigate within the definitions schema. For example,

    "$ref": "#/definitions/contact"

Breaking this down,

* There is no URI location before the #, meaning the content is relative to the current URI (the current document).
* The /definitions/ is used for local references.
* The path that follows can be hierarchical, matching the hierarchy presented in the definitions schema.

To find and correct the issue,

* A first thing to check though, as simple as it sounds, is for a missing "i" in the word definitions in either place. From personal experience, my eyes can fill in that third "i" all on their own without letting the text editor in on it :)
* Verify there are no extraneous spaces or other characters in the URI.

### Reference Examples

The postal examples in Chapters 3 and 4 provide examples for internal and remote schema access through "$ref" with valid and invalid examples to verify the references are resolved correctly.

If you require more robust reference URI processing, additional function can be provided in your programs to verify reference URIs are valid and available. The *jsonvalidate* command line programs incorporate some function in this area, and similar techniques for extending the validation processing libraries can be integrated using the same technique.

### Key Suggestion

When using references is to always write one or two invalid schemas for each reference to make sure all the "$ref" URIs are correct, the corresponding "id" in the referenced schemas are correct, and that no empty schemas are being substituted instead and generating false positives.

References are very useful, but can be a bit frustrating to get working sometimes. Hopefully this is helpful in moving your debugging activity ahead a little quicker.
