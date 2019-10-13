---
title: Avatars
menu: docs.avatars
done: true
---

Create and group avatars of various shapes and sizes with one component.

### Default markup

{% example html wrapper=avatar-list %}
{% include ui/avatar.html person-id=1 %}
{% include ui/avatar.html person-id=2 %}
{% include ui/avatar.html person-id=3 %}
{% endexample %}

### Avatar size

Using Bootstrap’s typical naming structure, you can create a standard avatar, or scale it up to different sizes based on what’s needed.

{% example html wrapper=avatar-list %}
{% include ui/avatar.html person-id=10 size="xl" %}
{% include ui/avatar.html person-id=9 size="lg" %}
{% include ui/avatar.html person-id=8 size="md" %}
{% include ui/avatar.html person-id=7 %}
{% include ui/avatar.html person-id=6 size="sm" %}
{% endexample %}

### Avatar status

Add an online or offline status indicator to show user's availability.

{% example html wrapper=avatar-list %}
{% include ui/avatar.html person-id=11 %}
{% include ui/avatar.html person-id=12 status="danger" %}
{% include ui/avatar.html person-id=13 status="success" %}
{% include ui/avatar.html person-id=14 status="warning" %}
{% include ui/avatar.html person-id=15 status="info" %}
{% include ui/avatar.html person-id=16 status="gray" status-text="5" %}
{% endexample %}

### Avatar shape

Change the shape of an avatar with the default Bootstrap image classes.

{% example html wrapper=avatar-list %}
{% include ui/avatar.html person-id=17 %}
{% include ui/avatar.html person-id=18 shape="rounded" %}
{% include ui/avatar.html person-id=19 shape="rounded-circle" %}
{% include ui/avatar.html person-id=20 shape="rounded-0" %}
{% include ui/avatar.html person-id=21 shape="rounded-lg" %}
{% endexample %}

### Initials

{% example html wrapper=avatar-list %}
{% include ui/avatar.html placeholder="AB" size="xl" %}
{% include ui/avatar.html placeholder="CD" size="lg" %}
{% include ui/avatar.html placeholder="EF" size="md" %}
{% include ui/avatar.html placeholder="GH" %}
{% include ui/avatar.html placeholder="IJ" size="sm" %}
{% endexample %}


### Avatar initials color

[See more]({% docs_url colors %})

{% example html wrapper=avatar-list %}
{% include ui/avatar.html placeholder="AB" color="green" %}
{% include ui/avatar.html placeholder="CD" color="red" %}
{% include ui/avatar.html placeholder="EF" color="yellow" %}
{% include ui/avatar.html placeholder="GH" color="blue" %}
{% include ui/avatar.html placeholder="IJ" color="purple" %}
{% endexample %}

### Avatar initials icons

{% example html wrapper=avatar-list %}
{% include ui/avatar.html icon="user" %}
{% include ui/avatar.html icon="plus" %}
{% include ui/avatar.html icon="user-plus" %}
{% endexample %}

### Avatars list

{% example %}
{% include ui/avatar-list.html %}
{% endexample %}

{% example %}
<div class="avatar-list avatar-list-stacked">
  {% for person in site.data.people limit: 5 offset: 30 %}
  {% include ui/avatar.html person=person element="a" %}
  {% endfor %}
  <span class="avatar" element="a">+8</span>
</div>
{% endexample %}
