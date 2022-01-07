import DHT from '@hyperswarm/dht'

const node = new DHT()

const remotePublicKey = Buffer.from('hex-from-above', 'hex')
const encryptedSocket = node.connect(remotePublicKey)

encryptedSocket.on('open', function () {
  console.log('Connected to server')
})

encryptedSocket.on('data', function (data) {
  console.log('Remote said:', data.toString())
})