# gas-clasp-starter
A starter template for Google Apps Script by [google/clasp](https://github.com/google/clasp)

## Article
[(Japanese) Google Apps Script をローカル環境で快適に開発するためのテンプレートを作りました](https://qiita.com/howdy39/items/0e799a9bfc1d3bccf6e5)

## Tech Stack
- [google/clasp](https://github.com/google/clasp)
- [webpack](https://webpack.js.org/)
- [TypeScript](http://www.typescriptlang.org/)
- [TSLint](https://palantir.github.io/tslint/)
- [Prettier](https://prettier.io/)
- [Jest](https://facebook.github.io/jest/)

## Prerequisites
- [Node.js](https://nodejs.org/)
- [google/clasp](https://github.com/google/clasp)

## Getting Started
### Create new GAS project for running test codes
Access [Google Apps Script](https://script.google.com/home) and create a new project.

### Clone the repository
```
git clone --depth=1 https://github.com/pizzacat83/gas-clasp-starter.git <project_name>
```

### Install dependencies
```
cd <project_name>
npm install
```

### Configuration
#### Open `.clasp.json`, change scriptId
What is scriptId ? https://github.com/google/clasp#scriptid-required

Set the scriptId of the project for test you created [here](#create-new-gas-project-for-running-test-codes).

```JSON
{
  "scriptId": <your_script_id>,
  "rootDir": "dist"
}
```

#### Open `src/appsscript.json`, change timeZone (optional)
[Apps Script Manifests](https://developers.google.com/apps-script/concepts/manifests)
```JSON
{
  "timeZone": "Asia/Tokyo", ## Change timeZone
  "dependencies": {
  },
  "exceptionLogging": "STACKDRIVER"
}
```

#### Setup for `clasp run`
Follow [instructions](https://github.com/google/clasp/blob/master/docs/run.md) of the clasp document.

#### Copy `.clasp.json` to `.clasp.test.json`
```bash
cp .clasp.json .clasp.test.json
```

#### Open `.clasp.release.json`, change scriptId
Set the scriptId of the project for release.

```JSON
{
  "scriptId": <your_script_id>,
  "rootDir": "dist"
}
```

#### chmod scripts for deployment
```bash
chmod u+x ./deploy.test.sh
chmod u+x ./deploy.release.sh
```

### Deploy to test project
```bash
./deploy.test.sh
```

### Test
```
npm test
```

### Deploy to release project
```
./deploy.release.sh
```

## Others
### howdy39/gas-clasp-library
[howdy39/gas-clasp-library](https://github.com/howdy39/gas-clasp-library) is sample project made with [Google Apps Script Libraries](https://developers.google.com/apps-script/guides/libraries).   
also, `gas-clasp-library` use circle CI.

### takanakahiko/sao-clasp
[takanakahiko/sao-clasp](https://github.com/takanakahiko/sao-clasp) was made based on gas-clasp-starter and [SAO](https://github.com/saojs/sao).



## License
This software is released under the MIT License, see LICENSE.txt.
