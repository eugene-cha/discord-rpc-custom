var rpc = require("discord-rpc")

const client = new rpc.Client({
  transport: 'ipc'
})

client.on('ready', () => {
  
  client.request('SET_ACTIVITY', {
    pid: process.pid,
    activity: {
      // THIS WILL SHOW AS "Playing <Status>" from the outisde
      details: "", // Enter a detailed description of the activity
      assets: {
        large_image: "", // Enter the filename of the image registered within Rich-Presence
        large_text: "", // Text description for this image (not required)
        small_image: "",
        small_text: ""
      },
      timestamps: {
        start: Date.now() // Time output for how long the activity is continuing (not required)
      },
    }
  })
})

client.login({
  clientId : "" // Input your bot Application ID
}).catch(console.error);