#!/bin/bash

if [ -z "$GH_TOKEN" ]; then
  echo "Missing Github token";
  exit 1;
fi

if [ -z "$RELEASE_ID" ]; then
  echo "Missing release ID";
  exit 1;
fi

DRAFT_STATUS="false"
RELEASE_NAME=$(date '+%Y-%m-%d.%H%M')

curl "https://api.github.com/repos/CraveFood/farmblocks/releases/$RELEASE_ID" \
  -H "Accept: application/vnd.github.v3+json"\
  -H "Authorization: token $GH_TOKEN"\
  -X PATCH \
  --data "{\"name\": \"$RELEASE_NAME\", \"tag_name\": \"$RELEASE_NAME\", \"draft\": $DRAFT_STATUS}"

