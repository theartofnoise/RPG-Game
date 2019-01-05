//characters
var toons = [
  {
    name: "Peter",
    hp: 300,
    def: 2,
    atk: 14,
    str: 305,
    pic: "assets/images/peterMain.jpg",
    id: 0
  },
  {
    name: "Bart",
    hp: 240,
    def: 5,
    atk: 20,
    str: 288,
    pic: "assets/images/bartMain.png",
    id: 1
  },
  {
    name: "Cartman",
    hp: 280,
    def: 3,
    atk: 16,
    str: 282,
    pic: "assets/images/cartmanMain.png",
    id: 2
  },
  {
    name: "Beavis",
    hp: 260,
    def: 4,
    atk: 18,
    str: 260,
    pic: "assets/images/beavisMain.jpg",
    id: 3
  }
];
var p1 = false;
var p2 = false;
var currentPlayer;
var currentDefender;
var damageGiven;
var damageTaken;
var wins;
var losses;

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
      
    }
    $("#mainTitle").text("Choose your fighter...");
  },
  //choose fighters
  chosenPlayer: function(x, pId) {
    if (p1 === false && p2 === false) {
      $("#p1Area").append("Player 1");
      $("#p1Area").append(x);
      p1 = true;
      $("#mainTitle").text("Choose your opponent...");
      currentPlayer = toons[pId];
      console.log(currentPlayer);
    } else if (p1 === true && p2 === false) {
      $("#defenderArea").append("Defender");
      $("#defenderArea").append(x);
      p2 = true;
      $("#mainTitle").text(null);
      $("#fightTitle").text(" Now, fight to the DEATH...");
      $("#attackButton").show(); //dont forget to add time in show 2000
      $("#attackButton").text("Attack!!");
      currentDefender = toons[pId];
     console.log(currentDefender);
    } else if (p1 === true && p2 === true) {
      console.log("done");
    }
  },
  attackPlayer: function() {
    damageTaken = currentDefender.atk-currentPlayer.def;
    currentPlayer.hp = currentPlayer.hp-damageTaken;
    $("#hp"+currentPlayer.id).text(currentPlayer.hp);
    $("#blows").text(currentDefender.name+" hits back "+currentPlayer.name+" for "+damageTaken+" damage!")
  },
  attackDefender: function() {
    damageGiven = currentPlayer.atk - currentDefender.def;
    currentDefender.hp = currentDefender.hp-damageGiven;
    $("#hp"+currentDefender.id).text(currentDefender.hp);
    $("#blows").text(currentPlayer.name+" hits "+currentDefender.name+" for "+damageGiven+" damage!");
    currentPlayer.atk = Math.round(currentPlayer.atk + (currentPlayer.str / 100));
    console.log(currentPlayer.atk);
    
  },
  loadNext: function() {
    alert("whos next?!");
  }
};
//---------------------------------------------------------------------------------------

$().ready(function() {
  $("#attackButton").hide();
  //start button
  $('#start').on('click', function() {
    game.loadPlayer();
    $(this).hide();
  })
  //choosing fighter and defender
  $('#choose0').on('click', function() {
    game.chosenPlayer(this, 0);
  });
  $('#choose1').on('click', function() {
    game.chosenPlayer(this, 1);
  });
  $('#choose2').on('click', function() {
    game.chosenPlayer(this, 2);
  });
  $('#choose3').on('click', function() {
    game.chosenPlayer(this, 3);
  });
  $('#attackButton').on('click', function() {
    if (currentPlayer.hp > 0) {
    game.attackDefender();
    
    } else {
      alert("Try Again");
    }
    if (currentDefender.hp > 0) {
      setTimeout(function() {
        game.attackPlayer();
      },2000);
    } else {
      $("#blows").text(currentPlayer.name+" WINS!!!")
      p2 = false;
      wins++;
      $("#defenderArea").text("");
      $("#attackButton").hide();
      if (wins < 4) {
      $("#fightTitle").text("Choose your next victim!!");
    } else {
      $("#fightTitle").text(currentPlayer.name+" is the king of the toons!!!");

      }

      
    }
    
  });
})


