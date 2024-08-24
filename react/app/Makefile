#---VARIABLES---------------------------------#
BUILD_DIR := dist
NODE_MODULES := node_modules

#---NPM-----#
NPM = npm
NPM_INSTALL = $(NPM) install --force
NPM_BUILD = $(NPM) run build
NPM_DEV = $(NPM) run dev
NPM_LINT = $(NPM) run lint
NPM_PREVIEW = $(NPM) run preview
#------------#

#---PHPUNIT-#
PHPUNIT = APP_ENV=test $(SYMFONY) php bin/phpunit
#------------#
#---------------------------------------------#

DOTENV= dotenv -e .env.local --

## === 🆘  HELP ==================================================
help: ## Show this help.
	@echo "Makefile Doc"
	@echo "---------------------------"
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'
#---------------------------------------------#

## === ⭐  APPLICATION =================================================
lint:  ## check the project.
	$(NPM_LINT)
.PHONY: lint

dev:  ## Start the dev server.
	$(NPM_DEV)
.PHONY: dev

build:  ## Build the app.
	$(NPM_BUILD)
.PHONY: build

preview:  ## Preview the app.
	$(NPM_PREVIEW)
.PHONY: preview

install: ## Install npm dependencies.
	$(NPM_INSTALL)
.PHONY: npm-install

clean: ## Clean the modules
	rm -rf $(NODE_MODULES) $(BUILD_DIR)
#---------------------------------------------#

## === ⭐  OTHERS =================================================

app:  ## First install.
	$(MAKE) install
	$(MAKE) dev
.PHONY: app