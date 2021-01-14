---
title: "Django Login and Registration System"
path: blog/teeet-t
tags: [reactjs]
cover: ./cover.jpeg
date: 2020-06-10
excerpt: I wanted to write a simple application of Django and show how simple it is to carry out complex tasks with Django.
---

# from Focus import *


I wanted to write a simple application of Django and show how simple it is to carry out complex tasks with Django.

Hopefully it helps you understand powerful inbuilt features of Django, as it’s a difficult to wrap your head around when you’re first starting out.

## Prerequisites
* Basic HTML and Python.
* Familiar with Basic Django workflow.


## Goals
Create a Login/Registration System using Django, and get familiar with the workflow of Django.

## Features
With the Django Login/Registration System you can take advantages of the following features:
* Login
* Logout
* Sign up
* Password reset

---

## Initial Setup

I assume you have Django installed already. You can tell Django is installed and which version by running the following command in a shell prompt (indicated by the $ prefix):


```bash
python -m django --version
```

#### Creating a project

```bash
pythdjango-admin startproject MySystem
```


#### Creating a App


```bash
django-admin startapp sample
```

## Installing libraries:
Here we’ll make use of `django-crispy-forms` and `django-registration-redux`


```bash
pip install django-crispy-forms
pip install django-registration-redux
```

---

## Getting Started

Managing setting ( Edit the Installed Apps)

```python
MySystem/setting.py
INSTALLED_APPS = [
# Default apps
'django.contrib.admin',
'django.contrib.auth',
'django.contrib.contenttypes',
'django.contrib.sessions',
'django.contrib.messages',
'django.contrib.staticfiles',
# My apps
'sample',
'registration',
# Third Party Libraries
'crispy_forms',
]
CRISPY_TEMPLATE_PACK = 'bootstrap4'

```

Adding root (Add this at the end of setting file)

```python
MySystem/setting.py
LOGIN_REDIRECT_URL = "/home"
PROJECT_ROOT = os.path.realpath(os.path.dirname(__file__))
MEDIA_ROOT = PROJECT_ROOT + '/static/'
MEDIA_URL = '/media/'
PROJECT_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_ROOT = os.path.join(PROJECT_DIR, 'static')
```

Configuring urls


```python
MySystem/urls.py
from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from django.views.generic.base import RedirectView
from django.conf.urls.static import static
from MySystem import settings
from sample import views
urlpatterns = [
path('admin/', admin.site.urls),
path('accounts/', include('registration.backends.default.urls')),
path('', views.home.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```

Creating view for the home page


```python
sample/views.py
from django.views.generic.base import TemplateView
class home(TemplateView):
template_name = "sample/home.html"
```

Create html pages for Login, Registration and home in the sample/templates folder. Our File structure looks like this :


```
sample/
    __init__.py
    admin.py
    apps.py
    migrations/
        __init__.py
    models.py
    tests.py
    views.py
    templates/
        registration/
             login.html
             registration_form.html
        sample/
             home.html
        base.html

```

## Verification of Users through email

Add the following code at the end of settings file to configure your smtp email address to send verification code whenever a new user register.


```python
ACCOUNT_ACTIVATION_DAYS=3
EMAIL_HOST= 'smtp.gmail.com'
EMAIL_HOST_USER= 'yourEmailAddress'
EMAIL_HOST_PASSWORD= 'yourPassword'
EMAIL_PORT= 587
EMAIL_USE_TLS= True
```

## Now let’s design our templates :-

### base.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Login/Registration</title>
</head>
<body>
Welcome All!
{% block content %}
{% endblock %}
{% if user.is_authenticated %}
<a href="/accounts/logout">Logout</a>
{% else %}

<a href="/accounts/login">Logout</a>
{% endif %}
</body>
</html>

```

### registration_form.html


```html
{% extends 'base.html' %}  
{% block content %}   
<h2>Register</h2>
<form method="post">
     
{% csrf_token %} 
{{form | crispy}}
<button type="submit">Register</button>   
</form>
<a href="/accounts/login">Already have an account</a>
<a href="/accounts/password/reset/">Forgot passwork?</a>
{% endblock %}
```

### login.html

```html
{% extends 'base.html' %}  
{% block content %}   
<h2>Login</h2>   
<form method="post">
     
{% csrf_token %} 
{{form | crispy}}
<button type="submit">Login</button>   
</form>
<a href="/accounts/register">Don't have an account</a>
<a href="/accounts/password/reset/">Forgot passwork?</a>
{% endblock %}
```


### home.html



```html
{% extends 'base.html' %}
{% block content %}
<h2>Home Page</h2>
<h4>Welcome {{user.username}} </h4>
{% endblock %}
```


---


## Conclusion
There you have it. A complete Login and Registration System in Django framework of python.

I hope this tutorial helped you understand the workflow of Django. Using this loosely-coupled pattern can add a lot of boilerplate and abstraction to an application, but it’s also a predictable, familiar pattern that is commonly used across many frameworks, and an important concept to know as a developer.


---

Link to published article: [`Medium`](https://medium.com/code-to-express/build-a-chrome-extension-in-less-than-20-mins-910c85d5135c)


#### Feel free to reach out to me anytime if you want to discuss something.
I would be more than happy if you send your feedback, suggestions.
Moreover, I love to make new friends and we can be friends, just drop me an email.


* **Web:** https://portfolio.abhisheksrivastava.me/
* **Instagram:** https://www.instagram.com/theprogrammedenthusiast/
* **LinkedIn:** https://www.linkedin.com/in/abhishek-srivastava-49482a190/
* **Github:** https://github.com/abhishek2x
* **Email:** abhisheksrivastavabbn@gmail.com
