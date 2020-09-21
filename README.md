# prettier-config
Shared [Prettier](https://prettier.io/) config for my projects.

## Install
```
npm install -D @sureshraj/prettier-config
```

## Usage
A `prettier` key in your `package.json` file.

```json
{
  "prettier": "@sureshraj/prettier-config"
}
```

#### OR

Use the `prettier.config.js` file if you need to extend 
the configuration to overwrite some properties from 
the shared configuration. Refer to the [official guide](https://prettier.io/docs/en/configuration.html#sharing-configurations) 
for more information.

```javascript
// prettier.config.js
const sharedConfig = require("@company/prettier-config");
 
module.exports = {
  ...sharedConfig,
  semi: false,
};
```