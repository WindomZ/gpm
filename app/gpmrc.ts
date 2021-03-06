/**
 * Created by axetroy on 17-3-23.
 * The parser for .gpmrc
 */
import * as path from 'path';
import * as fs from 'fs-extra';
import { EventEmitter } from 'events';

import { isExistPath, runShell } from './utils';

interface Rc$ {
  name: string;
  hooks: PlainObject$;
}

interface PlainObject$ {
  [s: string]: string;
}

class Gpmrc extends EventEmitter {
  public name: string;
  public exist: boolean = false;
  public rc: Rc$ = { name: 'gpm', hooks: {} };
  constructor() {
    super();
  }

  /**
   * load .gpmrc file, found .gpmrc file in the dir
   * @param {string} dir
   * @returns {Promise<void>}
   */
  async load(dir: string): Promise<void> {
    const rcPath = path.join(dir, '.gpmrc');
    if (await isExistPath(rcPath)) {
      this.rc = <Rc$>await fs.readJson(rcPath);
      this.exist = true;
    }
  }

  /**
   * run .gpmrc file hook
   * @param {string} hookName
   * @param {PlainObject$} options
   * @returns {Promise<void>}
   */
  async runHook(hookName: string, options: PlainObject$ = {}): Promise<void> {
    const hooks = this.rc.hooks || {};
    if (hooks[hookName]) {
      await runShell(hooks.add, { ...{ stdio: 'inherit' }, ...options });
    }
  }
}

export default Gpmrc;
