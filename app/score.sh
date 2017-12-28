#!/bin/bash

readonly SCRIPT_DIR_PATH=$(dirname `realpath $0`)
readonly SAVE_DIR_PATH=$SCRIPT_DIR_PATH/.domino

export SAVE_DATA_PATH=$SAVE_DIR_PATH/score
export INPUT=$*

mkdir -p $SAVE_DIR_PATH 2>/dev/null

if [ $# -eq 0 ]; then
    echo $SAVE_DATA_PATH
    cat $SAVE_DATA_PATH
    exit 0
fi

node $SCRIPT_DIR_PATH/score.js

