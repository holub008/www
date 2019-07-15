# www

My personal site

# About

I currently deploy the site via an S3 bucket. An express server is provided to serve the site as well (convenient for local development).

## Deploy to S3

See [this guide](https://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html) to set up a bucket for web hosting.

To push site content updates (anything in `public/`), I use the following alias:

```sh
alias push_site='(cd ~/www/public/ && aws s3 sync --acl public-read --exclude ".*" --delete . s3://kholub.com)'
```

## Serve via express

To serve the site, run the following from the project root:

```sh
npm start
```
