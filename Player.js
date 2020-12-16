class Player {
    constructor(){}
    getCount() {
        var playerCountref = database.ref('playerCount')
        playerCountref.on("value", function(data){
            playerCount = data.val();    
        })

    }
    updateCount(Count) {
        database.ref('/').update({playerCount: Count})
    }

    update(name) {
        var playerPosition = "Player" + playerCount
        database.ref(playerPosition).set({Name: name})

    }
}