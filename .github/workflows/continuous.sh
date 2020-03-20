#!/usr/bin/env bash
set -euo pipefail
shopt -s inherit_errexit


yarn install --immutable --immutable-cache --check-cache
yarn workspace @cspotcode/node-plop test
yarn workspace @cspotcode/plop build
yarn workspace @cspotcode/plop test
