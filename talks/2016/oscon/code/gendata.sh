#!/bin/bash

SRC=$1
TEMP_FILE=/tmp/gothree_temp.go
OUT=${SRC/.go/.json}

[[ -f ${SRC} ]] || exit 1

gotracer $1 > $TEMP_FILE && go run $TEMP_FILE | gotracer process > $OUT
ret=$?
[[ $ret -eq 0 ]] && echo "Saved result to $OUT"

exit $ret
