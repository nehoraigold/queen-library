var Queen = {}

Queen.bohemianRhapsody = function() {
    console.log("Beelzebub has a devil put aside for me!");
    var forMe = setInterval(() => {console.log("...for meeeee...")},1000);
    setTimeout(() => clearInterval(forMe),2000);
    setTimeout(() => console.log("Cue guitar solo."),3000);
}

Queen.anotherOne = function(word) {
    if (word === undefined) {
        return false;
    }
    if (word.toLowerCase() === "bites the dust") {
        return true;
    }
    return false;
}

Queen.somebodyToLove = function(name) {
    if (name === undefined || name === "") {
        return "Can anybody find me SOMEBODY to love?";
    }
    console.log("Can anybodyyyyyyy");
    console.log("find meeeeeee...");
    console.log("a " + name + " to...")
    console.log("love?");
}

Queen.willRock = function(input) {
    if (input === undefined || input === "") {
        return "You need to give something for Queen to rock.";
    }
    var rand = Math.floor(Math.random() * 2) + 1;
    if (rand > 1) {
        return "Yes, Queen will certainly rock " + input + ".";
    } else {
        return "No, Queen won't rock " + input + ".";
    }
}

Queen.rideMyBicycle = function() {
    window.location.href = "https://www.youtube.com/watch?v=GugsCdLHm-Q";
    return "All I want to do is...";
}