#!/bin/bash

if [ $# -eq 0 ]; then
    echo "ex.) ./score.sh x334 y335 z336" 1>&2
    exit 1
fi

mkdir -p .domino 2>/dev/null

export SAVE_DATA_PATH=".domino/score"
export INPUT=$*

node score.js
