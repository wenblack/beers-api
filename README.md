# Wiki Beer API

* * *


Welcome to the WBAPI, you global database about beers! This documentation should help you familiarise yourself with the resources available and how to consume them with HTTP requests.

### Getting started

Let's make our first API request to the Wiki Beer API!

Open up a terminal and use [curl](http://curl.haxx.se) or [httpie](http://httpie.org) to make an API request for a resource. In the example below, we're trying to get all users:

    http localhost:3000/api/users
    

We'll use [httpie](http://httpie.org) for our examples as it displays responses nicely and gives us a whole lot more useful information. If you don't want to download httpie, just use the _curl_ command instead.

Here is the response we get:

   
    HTTP/1.1 200 OK
    Connection: keep-alive
    Keep-Alive: timeout=5
    Vary: Accept-Encoding
    content-length: 198
    content-type: application/json; charset=utf-8
    date: Tue, 05 Sep 2023 17:56:45 GMT
    etag: "1707rzh1xeo5i"

    {
        "users": [
        {
            "email": "example@gmail.com",
            "id": "5fca049e-f74f-4812-95fc-7ff07fd4c670",
            "name": "wenblackis"
        },
        {
            "email": "john@gmail.com",
            "id": "ef6e792c-6718-4f18-ba67-97af66cecd89",
            "name": "John DOE"
        }
    ]
}
    

If your response looks slightly different don't panic. This is probably because more data has been added to WBAPI since we made this documentation.

### Base URL

The **Base URL** is the root URL for all of the API, if you ever make a request to WBAPI and you get back a **404 NOT FOUND** response then check the Base URL first.

The Base URL for WBAPI is:

    http://localhost:3000/api/
    

The documentation below assumes you are prepending the Base URL to the endpoints in order to make requests.

### Authentication

WBAPI is a **completely open API**. No authentication is required to query and get data. This also means that we've limited what you can do to just **GET**\-ing the data.

### Searching

There is a `search` route, that filters all beers. This allows you to make queries like:

`http://localhost:3000/api/search/heineken`

All searches will use case-insensitive partial matches on the set of search fields. To see the set of search fields for each resource, check out the individual resource documentation.

Resources
=========

* * *

### Root

The Root resource provides information on all available resources within the API.

**Example request:**

    http http://localhost:3000/api/
    

**Example response:**

    HTTP/1.0 200 OK
    Content-Type: application/json
    {
        "beers": "http://localhost:3000/api/beers/",
        "detail": "http://localhost:3000/api/detail/",
        "search": "http://localhost:3000/api/search/",
        "users": "http://localhost:3000/api/users/",
        "user": "http://localhost:3000/api/user/",
    }
    

**Attributes:**

*   `beers` _string_ -- The URL root for Beers resources
*   `detail` _string_ -- The URL root for Detail resources
*   `search` _string_ -- The URL root for Search resources
*   `user` _string_ -- The URL root for User Info resources
*   `users` _string_ -- The URL root for Users resources




**Endpoints**

*   `/beers/:id/` -- get all beer from specific categorie
*   `/detail/:id/` -- get all info about a specific categorie
*   `/search/:name/` -- filter all beers with starts with name
*   `/user/:id/` -- get info about specifi beer
*   `/users/` -- get all users info

**Example request:**

    http http://localhost:3000/api/beers/lager/
    

**Example response:**

    HTTP/1.1 200 OK
    Connection: keep-alive
    Keep-Alive: timeout=5
    Vary: Accept-Encoding
    content-length: 446
    content-type: application/json; charset=utf-8
    date: Tue, 05 Sep 2023 18:19:00 GMT
    etag: "r76yvdxtxwca"

    {   
        "data": [
        {
            "Beer": [
                {
                    "ABV": 4,
                    "IBU": 19,
                    "categorieId": "clly0riw70000mwese8gq5ytv",
                    "createdAt": "2023-08-30T17:36:57.731Z",
                    "description": "água,malte e lúpulo",
                    "id": "clly0rpfm0001mwesa9hmyh6f",
                    "name": "heineken",
                    "rating": 4
                },
                {
                    "ABV": 5,
                    "IBU": 14,
                    "categorieId": "clly0riw70000mwese8gq5ytv",
                    "createdAt": "2023-08-30T17:59:11.534Z",
                    "description": "água,malte e lúpulo",
                    "id": "clly1kalp0003mwesmtasx13l",
                    "name": "stella artois",
                    "rating": 4
                }
            ],
            "_count": {
                "Beer": 2
                }
            }
        ]
    }

* * *



