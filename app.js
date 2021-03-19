
var pronoun = ["the", "our", "your", "my"];
var adj = ["great", "big", "amazing", "awesome"];
var noun = ["jogger", "racoon", "dragon", "developer"];
var extension = [".com", ".net", ".us", ".io"];

for (var i = 0; i < pronoun.length; i++) {
  for (var j = 0; j < adj.length; j++) {
    for (var k = 0; k < noun.length; k++) {
      for (var l = 0; l < extension.length; l++) {
        console.log(pronoun[i]+adj[j]+noun[k]+extension[l]);
      }
    }
  }
}

