<ol class="breadcrumb">
<li><a href="{{ site.baseurl }}/">Home</a></li>
{% capture page_url_without_index_html %}{{ page.url | remove: "/index.html" }}{% endcapture %}
{% assign splitted_url_parts = page_url_without_index_html | split: '/' %}
{% capture forLoopMaxInt %}{{ splitted_url_parts.size | minus:1 }}{% endcapture %}
{% for i in (1..forLoopMaxInt) %}
    {% capture current_breadcrumb_url %}{{next_prepender}}/{{ splitted_url_parts[i] }}/index.html{% endcapture %}
    {% capture current_breadcrumb_md_url %}{{next_prepender}}/{{ splitted_url_parts[i] }}/{% endcapture %}
    {% capture next_prepender %}{{next_prepender}}/{{ splitted_url_parts[i] }}{% endcapture %}
    {% for breadcrumb_page in site.pages %}
        {% if current_breadcrumb_url == breadcrumb_page.url or current_breadcrumb_md_url == breadcrumb_page.url  %}
        {% assign j = forLoopMaxInt | plus: 0 %}
            <li {% if i == j %}class="active"{% endif %}>
                {% capture breadcrumb_page_page_url_without_index_html %}{{ breadcrumb_page.url | remove: "index.html" }}{% endcapture %}
                <a href="{{ site.baseurl }}{{breadcrumb_page_page_url_without_index_html}}">{{breadcrumb_page.breadcrumb}}</a>
            </li>
        {% endif %}
    {% endfor %}
{% endfor %}
</ol>

# Craft challenges

![craft challenges](images/crafts-poster.png)

Welcome to this software craftsmanship challenge !!!

This repository contains cards and instructions in order to organize craft challenges in your companies.  
Those challenges are organized in 4 categories :

## [Challenges](challenges/)
## [Dev](dev/)  
## [Practices](practices/)
## [Culture](culture/)  

If you have any questions or if you need further informations don't hesitate to <a href="mailto:ythirion@agilepartner.net?Subject=Craft%20challenges">contact us</a>

### How to play ?
You can use the cards as described below :  
* Each team member takes 1 card
* He/she has to connect to the related page on github through the **QR code or the url**
* Take some time to deep dive into the topic
* Do the challenge in the given time box (at the top left of the card)

(Optional):
* Print a score board and hang it on the wall in your office
* Add the points you earned by doing this card (on the top right of the card)
* Buy something nice for the winner of the challenge! 

#### OR use it as you want :
* Topics for retrospectives
* Topics for lean coffees
* Deep dive in brown bag lunches
* ...

#### Instructions card :
![Instructions recto](images/instruction-recto.png)

> ### You can print all the cards from this [folder](/cards)

## Software craftsman
> ### If you want to truly understand what is a **software craftsman** we recommend you to read *["The software craftsman"](https://www.amazon.com/Software-Craftsman-Professionalism-Pragmatism-Robert/dp/0134052501)* by Sandro Mancuso.

Here is our abstract of the book.

![The software craftsman](images/the-software-craftsman.png)
