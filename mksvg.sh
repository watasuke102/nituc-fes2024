#!/usr/bin/bash
if [[ $# -lt 1 ]]; then
  echo "[FATAL] no input svg file" 1>&2
  exit 1
fi

if [[ $1 == "-h" || $1 == "--help" ]]; then
  echo "usage: $0 <svg file path>"
  exit 0
fi

# using https://github.com/RazrFalcon/svgcleaner
if ! command -v $SVGCLEANER 2>&1 > /dev/null; then
  echo '[FATAL] svgcleaner is not found; please set $$SVGCLEANER'
  exit 1
fi

# stroke-(line.*|width) -> stroke(Line.*|Width) && enable-background -> enableBackground
$SVGCLEANER -c --quiet $1 | sed -E 's/stroke-l/strokeL/g; s/stroke-w/strokeW/g; s/enable-b/enableB/g'
