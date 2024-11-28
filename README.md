## json-store-typed
=========

Simple json store for node. Saves changes on disk immediately and blocking, so only relevant for cli applications and such.

Typed Version

**Installation**
-----
```sh
npm i json-store-typed
```

**Usage**
-----

```typescript
import jsonStore from "json-store-typed";
let db = jsonStore('./index.json');

db.set('foo', 'bar');
db.get('foo');                // bar

db.set('obj', {foo: 'bar'});
db.get('obj').foo             // bar
```
> [Original Source by Julian Gruber](https://github.com/juliangruber/json-store)