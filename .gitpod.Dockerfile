FROM woahbase/alpine-hugo

USER root

RUN apt-get update && apt-get install -yq hugo
