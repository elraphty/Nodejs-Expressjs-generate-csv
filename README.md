# This is a simple app that generates a csv file and uploads to AWS S3

## How to Run
 - Clone the repo
 - run npm install or yarn add
 - create a .env file in the project root folder

## ENV instructions
In the .env file, the env should have these keys:
 - PORT (App port to listen on)
 - AWS_SECRET (AWS secret key)
 - AWS_ACCESS (AWS access key)
 - AWS_BUCKET (AWS bucket name)

Run npm start in the project root folder, to generate csv navigate to http://localhost:{PORT}/generate-csv on your browser or postman
