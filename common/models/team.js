'use strict';
// inside the code block that is being exported
module.exports = function(Team) {
  Team.disableRemoteMethod('delete', true);
};
