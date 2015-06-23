# Skeleton for Single Page Aplpications
The design is simple as hell: you have a dummy web-server serving static files, where a JS client performs API calls to the Back End.
Well, one thing that is not that simple: the web-server has to proxy API calls through itself, because you can only access resources on the same domain and port.

### Back End
On Back End there is a simple SBT project without any sources. You will have to create the API on your own.

### Front End
The Front End is mostly grabbed from https://github.com/angular/angular-seed.
There is Node Express application, serving static files and proxying API calls to the Back End. By default it proxies the API calls to the balancer (which is determined automatically if you use provided coreos unit files), using port 8080.
The web app is running on port 8000 by default.
