---
layout: null
sitemap: false
---

var store = [
  {%- for c in site.collections -%}
    {%- if forloop.last -%}
      {%- assign l = true -%}
    {%- endif -%}
    {%- assign docs = c.docs | where_exp: 'doc', 'doc.search != false' -%}
    {%- for doc in docs -%}
      {
        "title": {{ doc.title | jsonify }},
        "about":
          {{ doc.about | 
            replace:"</p>", " " | 
            replace:"</h1>", " " | 
            replace:"</h2>", " " | 
            replace:"</h3>", " " | 
            replace:"</h4>", " " | 
            replace:"</h5>", " " | 
            replace:"</h6>", " "|
           strip_html | strip_newlines | truncatewords: 50 | jsonify }},
        "url": {{ doc.url | absolute_url | jsonify }}
      } {%- unless forloop.last and l -%}, {%- endunless -%}
    {%- endfor -%}
  {%- endfor -%}
]
