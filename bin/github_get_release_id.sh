#!/bin/bash

if [ -z "$GH_TOKEN" ]; then
  echo "Missing Github token";
  exit 1;
fi

RELEASE_NAME="master"

export RELEASE_ID=$(
curl https://api.github.com/repos/CraveFood/farmblocks/releases \
  -H "Authorization: token $GH_TOKEN"\
  -H "Accept: application/vnd.github.v3+json"\
  | jq ".[] | select(.name == \"$RELEASE_NAME\") | .id" 
)
 
echo $RELEASE_ID 
