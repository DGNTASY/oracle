run:
	@make build && node ./bin/index.js

build:
	@npx tsc --outDir ./bin