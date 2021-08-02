const path = require('path');

const { loadPackageDefinition } = require('strophy-grpc-common');

function getCoreDefinition(version) {
  const protoPath = path.join(__dirname, `../protos/core/v${version}/core.proto`);

  return loadPackageDefinition(protoPath, `org.dash.platform.dapi.v${version}.Core`);
}

module.exports = getCoreDefinition;
