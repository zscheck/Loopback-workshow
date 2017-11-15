'use strict';

module.exports = function(Players) {
  Players.disableRemoteMethod('delete', true);
};
