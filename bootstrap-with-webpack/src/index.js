require('expose?$!expose?jQuery!jquery');
require('bootstrap-webpack');

var index = require('./template/index.html');
$('#content').html(index);