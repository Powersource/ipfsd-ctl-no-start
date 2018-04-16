const f = require('ipfsd-ctl').create({type: 'go'})

console.log('Running Node')

f.spawn({disposable: true}, (err, ipfsd) => {
  if (err) { throw err }

  console.log('Spawned ipfs')
  
  ipfsd.api.id(function (err, id) {
    if (err) { throw err }
    
    console.log(id)
    ipfsd.stop()
  })
})