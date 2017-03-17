## Requirements

nodejs: ^6.9.4
npm: ^3.10.10

## Scripts

### Development mode

Start the webpack dev server with
```
$ npm start
```

Build the js bundle with
```
$ npm run build:dev
```

### Production mode

Use
```
$ npm run build
```
to build a production-optimized js bundle. The command expects you to have set the `API_HOST` environment variable. It should point to the API host URL. Possible ways to do this are
```
$ export API_HOST=https://www.dude-expenses.com
```
or 
```
$ API_HOST=http://localhost:8080 npm run build
```
