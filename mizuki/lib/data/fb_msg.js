const exec = require('child_process').exec;
const os = require("os");
const axios = require('axios');

async function fb_msg(Language) {
    var sdn = 'RUN git clone https://github.com/BlackKingdoms/BlackKingdom /root/BlackKingdom' + '\n'
    exec('sed -n 3p /root/BlackKingdom/Dockerfile', async (err, stdout, stderr) => {
      if (sdn !== stdout) {
        throw new Error("Fake - Unknown Device !!");
      }
    })
  var data = {
    title: '',
    caption: '',
    like: '',
    play: '',
    share: '',
    username: '',
    comment: '',
    creation: ''

  }
  else if (Language == 'EN') {
    data.title = '*Title:* '
    data.caption = '*Caption:* '
    data.like = '*Like Count:* '
    data.play = '*Views:* '
    data.share = '*Share Count:* '
    data.username = '*Username:* '
    data.comment = '*Comment Count:* '
    data.creation = '*Creation Date:* '
  }  
  return data;
}
module.exports = fb_msg
