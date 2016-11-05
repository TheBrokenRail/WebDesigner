function WebObject() {
    this.type = null;
    this.data = [];
}
function add(type) {
    var options = document.getElementById("options");
    switch(type) {
        case 0:
            options.innerHTML = "<p>Text: </p><input id=\"text\"></input><br><button id=\"add\">Add</button><button id=\"exit\">Exit</button>";
            var add = document.getElementById("add");
            add.onclick = function() {
                var text = document.getElementById("text");
                var obj = new WebObject();
                obj.type = 0;
                obj.data[0] = text.value;
                document.getElementById("options").innerHTML = "";
            }
    }
    var exit = document.getElementById("exit");
    exit.onclick = function() {
        document.getElementById("options").innerHTML = "";
    }
}
var site = [];
