import DHT from '@hyperswarm/dht'

const node = new DHT()

let key = '61549339af45e2aba02c26ff43768285c3d361b5401d3e0cdd2b3598d0940d4c'

const remotePublicKey = Buffer.from(key, 'hex')
const encryptedSocket = node.connect(remotePublicKey)

encryptedSocket.on('open', function () {
  console.log('Connected to server')
})

encryptedSocket.on('data', function (data) {
  console.log('Remote said:', data.toString())
})