FROM bleshik/scala:2.11.5
MAINTAINER Alexey Balchunas <bleshik@gmail.com>
ADD /api /api
RUN cd /api && sbt test && sbt stage
WORKDIR /api
EXPOSE 8080
ENTRYPOINT [ "target/universal/stage/bin/api" ]
CMD []
