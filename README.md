This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# My Store

## Pre install info

node version v12.XX.XX

## Install app

npm i

## Task 4 (current)

- Added API service for create product
- FE works and receive product list from DB

Web App Domain:  
 **https://d1pamqutpae0js.cloudfront.net**

## Task 3

Added _axios_ to get products from mock in aws (in "services" folder) + useEffect in "Products" folder

## Task 2 (done)

### URLs

1. _cloudfront (should work)_  
   Web App Domain:  
   **https://d1pamqutpae0js.cloudfront.net**

2. _bucket (shouldn't work due to changes in bucket’s policy)_  
   Bucket website endpoint:  
   **http://shop-app-mb.s3-website-us-east-1.amazonaws.com/**

### Available Scripts

1. build and deploy _new_ app (with/without confirm)  
   **npm run cloudfront:update:build:deploy**  
   **npm run cloudfront:update:build:deploy:nc**

2. receive url of _created_ app in CLOUDFRONT  
   **npm run cloudfront:domainInfo**

3. build and deploy _existing_ app after changes in code (with/without confirm)  
   **npm run client:build:deploy:nc**  
   **npm run client:build:deploy**

4. destroy app (delete all infrastructure)  
   **npm run destroy**

(other scripts in package.json)
