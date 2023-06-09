#!/bin/bash

sed '/"scripts":/,/}/d' dist/package.json > dist/temp.json

mv dist/temp.json dist/package.json