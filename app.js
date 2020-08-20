(function () {

    var Names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    var helloSpeaker = {
      speakword: "hello"
    };
      function helloSpeakerspeak(name) {
   console.log(helloSpeaker.speakword + " " + name);
 }
    var byeSpeaker = {
      speakword: "Good bye",
    }
    function byeSpeakerspeak(name) {
  console.log(byeSpeaker.speakword + " " + name);
}

    for (var i = 0; i < Names.length; i++) {
    var firstLetter = Names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
       byeSpeakerspeak(Names[i]);
     }
     else {
       helloSpeakerspeak(Names[i]);
     }
   }

})();
