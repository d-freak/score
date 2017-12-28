#!/bin/bash

readonly SCRIPT_DIR_PATH=$(dirname `realpath $0`)
readonly SAVE_DIR_PATH=$SCRIPT_DIR_PATH/.domino

export SAVE_DATA_PATH=$SAVE_DIR_PATH/score
export INPUT=$*

if [ $# -eq 0 ]; then
    echo $SAVE_DATA_PATH
    cat $SAVE_DATA_PATH
    exit 0
fi

if [ $1 = "--reset" ]; then
    mv -f $SAVE_DATA_PATH $SAVE_DATA_PATH.bak 2>/dev/null
    echo "done."
    exit 0
fi

if [ $1 = "--ave" ]; then
    node $SCRIPT_DIR_PATH/average.js
    exit 0
fi

mkdir -p $SAVE_DIR_PATH 2>/dev/null

node $SCRIPT_DIR_PATH/score.js

