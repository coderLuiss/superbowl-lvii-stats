const superbowl = require("./superbowl-lvii-events.json")

const run = async () => {
    console.log("Hello Bowl!\n")

    console.log("Properties available in our json data:\n")
    console.log(Object.keys(superbowl[0]))

    superbowl.forEach(event => {
        console.log('\nquarter: ', event.quarter,  
                    '\ntime left: ', event.minute, 
                    '\nteam: ', event.team.name,     
                    '\nplayer: ', event.player.name, 
                    '\ntype: ', event.type,     
                    '\ncomment: ', event.comment, 
                    '\nscore: ', event.score.away, ' - ', event.score.home)
    })
    console.log("Chiefs win the Superbowl!");
}

run();
