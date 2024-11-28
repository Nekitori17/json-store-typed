import fs from "fs";

interface Store {
  path: string;
  Store: Record<string, any>;
  get(key?: string): any;
  set(key: string, value: any): void;
  del(key: string): void;
  save(): void;
}

class Store {
  path: string;
  Store: Record<string, any>;

  constructor(path: string) {
    this.path = path;
    if (!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));
    this.Store = JSON.parse(fs.readFileSync(path, "utf8"));
  }

  get(key?: string): any {
    if (!key) return clone(this.Store);
    return clone(this.Store[key]);
  }

  set(key: string, value: any): void {
    this.Store[key] = clone(value);
    this.save();
  }

  del(key: string): void {
    delete this.Store[key];
    this.save();
  }

  save(): void {
    fs.writeFileSync(this.path, JSON.stringify(this.Store, null, 2));
  }
}

function clone(data: any): any {
  if (data === undefined) return undefined;
  return JSON.parse(JSON.stringify(data));
}

export default function (path: string): Store {
  return new Store(path);
}
