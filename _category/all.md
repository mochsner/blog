---
permalink: "/category/all"
layout: website-frame
---
<h1>{{ page.title }}</h1>
<!-- <ul class="posts">
  {% for post in site.posts %}
    {% unless post.category[0] == "social" %}
    <li>
      <span> {{ post.date | date_to_string }} » {{ post.categories[0] | to_string }} </span> 
        » <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
        {% include read-time.html content=post.content %}
        (
        <span class="tags">
          {% assign sortedCategories = post.categories | sort %}
          {% for category in sortedCategories %}
              <span class="tag">
                  <a href="/category/{{ category }}">#{{ category }}</a>
              </span>
          {% endfor %}
        </span>
        )
    </li>
    {% endunless %}
  {% endfor %}
</ul> -->

<ul class="posts">
{% for category in site.categories %}
    {% unless category == "social" %}
    <li><a name="{{ category | first }}">{{ category | first }}</a>
      <ul>
      {% for post in category.last %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
      {% endfor %}
      </ul>
    </li>
    {% endunless %}
{% endfor %}

</ul>
