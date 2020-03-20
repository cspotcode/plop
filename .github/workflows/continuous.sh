#!/usr/bin/env bash
set -euo pipefail
shopt -s inherit_errexit


yarn install --immutable --immutable-cache --check-cache

yarn workspaces foreach --topological run build
yarn workspaces foreach test
