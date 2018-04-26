const f = require('ipfsd-ctl').create({type: 'go'})

console.log('Running Node')

f.spawn({repoPath: './repo/', disposable: false}, (err, ipfsd) => {
  if (err) { throw err }

  console.log('Spawned ipfs')

  //console.log('ipfsd object:', ipfsd)

  ipfsd.init({directory: ipfsd.repoPath}, (err, ipfsd2) => {
    if (err) {
      console.error('Failed to initialize repo (might already be created):', err)
    } else {
      console.log('Initialized repo')
    }

    console.log('ipfsd:', ipfsd2)

    ipfsd.start({}, (err, ipfs) => {
      if (err) {
        console.error('Failed to start:', err)
      } else {
        console.log('Started ipfs')
      }

      ipfs.id(function (err, id) {
        if (err) { throw err }
        
        console.log('id:', id)
        ipfsd.stop()
      })

    })
  })
})