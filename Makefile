.PHONY: install build clean deploy

install:
	npm install

build:
	npm run build

clean:
	rm -rf dist

deploy: clean build
	gsutil -m rsync -r dist/ gs://newsly-tech

.DEFAULT_GOAL := build
