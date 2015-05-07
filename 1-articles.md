---
layout: page
title: Articles
permalink: /articles/
---

{% for post in site.posts %}
  {{ post.date | date: "%b %-d, %Y" }} &nbsp; &nbsp;
  [ {{ post.title }} ]( {{ post.url }} )
{% endfor %}
