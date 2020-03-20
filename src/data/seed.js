handleFileUpload(file) {
  if (!file) {
    return
  }

  const key = `${this.client.auth.user.id}-${file.name}`;
  const bucket = 'hrr44-navi-photo';
  const url = `http://${bucket}.s3.amazonaws.com/${encodeURIComponent(key)}`;

  return convertImageToBSONBinaryObject(file)
    .then(result => {
      // AWS S3 Request
      const args = {
        ACL: 'public-read',
        Bucket: bucket,
        ContentType: file.type,
        Key: key,
        Body: result
      }

      const request = new AwsRequest.Builder()
        .withService('s3')
        .withAction('PutObject')
        .withRegion('us-east-1')
        .withArgs(args)
        .build()

      return this.aws.execute(request)
    })
    .then(result => {
      // MongoDB Request
      const gallery = this.mongodb.db('data').collection('gallery')
      return gallery.insertOne({
        owner_id: this.client.auth.user.id,
        url,
        file: {
          name: file.name,
          type: file.type
        },
        ETag: result.ETag,
        ts: new Date()
      })
    })
    .then(result => {
      // Update UI
      this.getEntries()
    })
    .catch(error)
 };