//characters
var toons = [
    {
        name: "Peter",
        hp: 300,
        def: 2,
        atk: 7,
        pic: "assets/images/peterMain.jpg"
    },
    {
        name: "Bart",
        hp: 240,
        def: 5,
        atk: 10,
        pic: "assets/images/bartMain.png"
    },
    {
        name: "Cartman",
        hp: 280,
        def: 3,
        atk: 8,
        pic: "assets/images/cartmanMain.png"
    },
    {
        name: "Beavis",
        hp: 260,
        def: 4,
        atk: 9,
        pic: "assets/images/beavisMain.jpg"
    }
];
var p1 = false;
var p2 = false;
//game object
var game = {
    loadPlayer: function () {
        for (i = 0; i < 4; i++) {
            var theToons = new Image(150, 150);
            theToons.src = toons[i].pic;
            $("#pTitle" + i).append(toons[i].name);
            $("#choose" + i).append(theToons);
            $("#choose" + i).append("<br>" + "<h3>" + toons[i].hp + "<h3>");
        }
        $("#mainTitle").text("Choose your fighter...")
    },

    chosenPlayer: function (x) {
        if (p1 === false && p2 === false) {
            $("#p1Area").append("Player 1" + "<br>");
            $("#p1Area").append(x);
            p1 = true;
            $("#mainTitle").text("Choose your opponent...")
        } else if (p1 === true && p2 === false) {
            $("#defenderArea").append("Defender" + "<br>");
            $("#defenderArea").append(x);
            p2 = true;
            $("#mainTitle").text(null);
            $("#fightTitle").text(" Now, fight to the DEATH...");
            $("#fightButton").show(2000);
            $("#fightButton").text("Attack!!");

        } else if (p1 === true && p2 === true) {
            console.log("done");

        }
        
    }
};
$(document).ready(function() {
    $("#fightButton").hide();
})
//start button
$(document).on("click", "#start", function () {
    game.loadPlayer();
    $("#start").hide();
});
//choosing fighter and defender
$(document).on("click", ".fighter", function () {
    game.chosenPlayer(this);
});


