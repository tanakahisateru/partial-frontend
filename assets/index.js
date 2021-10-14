import 'normalize.css/normalize.css';

import './css/common.css';
import './css/index.css';

// import jQuery from 'jquery';
// ProvidePlugin でどの JS ファイルからでも jQuery が常に見える
window.jQuery = jQuery;
window.$ = jQuery;
// ただし ProvidePlugin は js ファイル内スコープ用
// window 代入のこれがないと HTML では $ が使えない

import './js/length-check-input';

import './stimulus-bootstrap';
import './controllers/length_check_controller';
