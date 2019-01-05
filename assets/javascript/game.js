//characters
var toons = [
  {
    name: "Peter",
    hp: 300,
    def: 2,
    atk: 7,
    pic: "assets/images/peterMain.jpg",
    data: 0
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
var currentPlayer;
var currentDefender;
var p;


//game object
var game = {
    // loads the four player
  loadPlayer: function() {
    for (i = 0; i < toons.length; i++) {
      var theToons = new Image(150, 150);
      theToons.src = toons[i].pic;
      $("#pTitle" + i).append(toons[i].name);
      $("#pic" + i).append(theToons);
      $("#hp" + i).append(toons[i].hp);
      $("#choose" + i).val(toons[i]);

      
      console.log($("#choose"+i).val());
    }
    $("#mainTitle").text("Choose your fighter...");
  },
  //choose fighters
  chosenPlayer: function(x) {
    if (p1 === false && p2 === false) {
      $("#p1Area").append("Player 1");
      $("#p1Area").append(x);
      p1 = true;
      $("#mainTitle").text("Choose your opponent...");
      currentPlayer = toons[p];
      console.log(currentPlayer);
    } else if (p1 === true && p2 === false) {
      $("#defenderArea").append("Defender");
      $("#defenderArea").append(x);
      p2 = true;
      $("#mainTitle").text(null);
      $("#fightTitle").text(" Now, fight to the DEATH...");
      $("#attackButton").show(2000);
      $("#attackButton").text("Attack!!");
      currentDefender = toons[p];
     console.log(currentDefender);
    } else if (p1 === true && p2 === true) {
      console.log("done");
    }
  },
  attackDefender: function(x) {
    currentDefender.hp = currentDefender.hp-currentPlayer.atk;
    $(x).text(currentDefender.hp);
  }
};
//---------------------------------------------------------------------------------------
$(document).ready(function() {
  $("#attackButton").hide();
});
//start button
$(document).on("click", "#start", function() {
  game.loadPlayer();
  $("#start").hide();
});
//choosing fighter and defender
$(document).on("click", "#choose0", function() {
    p = 0;
    game.chosenPlayer(this);
});
$(document).on("click", "#choose1", function() {
    p = 1;
    game.chosenPlayer(this);
});
$(document).on("click", "#choose2", function() {
    p = 2;
    game.chosenPlayer(this);
});
$(document).on("click", "#choose3", function() {
    p = 3;
  game.chosenPlayer(this);
});
//attack button
$(document).on("click", "#attackButton", function() {
  game.attackDefender();
});
