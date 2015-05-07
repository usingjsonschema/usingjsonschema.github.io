---
layout: post
title: "Mixed Schema Definitions"
---
The third of a three part series, the first article is
[Strict Schemas Definitions]({% post_url 2014-10-22-strict-schema-definitions %}).

If different people/systems want to exchange data, both need to know what is expected in the messages exchanged. This information can be made available in a variety of manners, including documentation, spoken, or in a formal definition language. Complexity of data, number of people/systems involved, context of usage, and regulatory requirements can influence which of these choices are desirable (or required).

Technology choices can impact choice of approach. Language bindings for data definitions that create brittle endpoints can be undesirable, however alternatives are usually available that are not as brittle (sometimes this emerges with RPC versus document style bindings). This issue should be orthogonal to the choice of whether to use a schema or not - limiting schema choice to binding choice is usually an artificial barrier.

Many data exchanges require some formal element constraints - for example, customer identifiers usually have a length constraint and only accept certain characters (digits and/or letters within a specific character set). However, not all content may require formal definition - e.g. human presented content or HTML content. The data definition can then express both constrained content requirements along with placement position in which freeform content is acceptable. This approach allows automated validation and parsing, while also allowing the receiver of the data to find freeform content in a predictable manner that it can process as appropriate for the content/use.

For example, a quote for a machine part can have a data definition that includes formal properties for the part number, part name, price, and tax rate. It can also include a freeform property that allows an image representation or HTML description to be provided that is rendered when a visual presentation of the content is desired.
