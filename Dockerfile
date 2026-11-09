# Dockerfile
# This file tells Docker how to build a container that runs the Roomwise site.
# We use nginx, a small and popular web server, to serve our HTML/CSS/JS files.

# 1. Start from the official lightweight nginx image
FROM nginx:alpine

# 2. Copy all our website files into the folder nginx serves from
COPY *.html *.css *.js /usr/share/nginx/html/

# 3. Copy the images folder (product pictures) too
COPY images /usr/share/nginx/html/images

# 4. nginx listens on port 80 inside the container
EXPOSE 80

# (nginx starts automatically — no extra command needed)
