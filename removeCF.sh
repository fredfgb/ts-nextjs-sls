aws cloudfront wait distribution-deployed --id ELOZUE3TYOSJN --profile docpay
ETAG=$(aws cloudfront get-distribution-config --id ELOZUE3TYOSJN | jq -r '.ETag')
aws cloudfront delete-distribution --id ELOZUE3TYOSJN --if-match $ETAG --profile docpay
