const mongoose = require('mongoose');
const { GridFSBucket } = require('mongodb');

function getGridFSBucket() {
  if (!mongoose.connection.db) {
    throw new Error('MongoDB connection is not ready');
  }

  return new GridFSBucket(mongoose.connection.db, { bucketName: 'uploads' });
}

module.exports = { getGridFSBucket };
