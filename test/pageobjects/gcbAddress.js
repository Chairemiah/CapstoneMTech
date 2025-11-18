import { $ } from '@wdio/globals'
import Base from './base.js';

class GCBAddress extends Base {
  
    get  () {
        return $('');
    }
}

export default new GCBAddress();
