var site = [];
function WebObject() {
    this.type = null;
    this.data = [];
}
function render() {
    var preview = document.getElementById("preview");
    preview.innerHTML = "";
    for (var i = 0; i < site.length; i++) {
        switch(site[i].type) {
            case 0:
                var text = document.createElement("P");
                text.innerHTML = site[i].data[0];
                eval("text.onclick = function() {edit(" + i + ")};");
                preview.appendChild(text);
                break;
            case 1:
                var button = document.createElement("BUTTON");
                button.innerHTML = site[i].data[0];
                eval("button.onclick = function() {edit(" + i + ")};");
                preview.appendChild(button);
                break;
        }
    }
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
                site.push(obj);
                render();
            }
            break;
        case 1:
            options.innerHTML = "<p>Text: </p><input id=\"text\"></input><br><p>Action (JS): </p><input id=\"js\"></input><br><button id=\"add\">Add</button><button id=\"exit\">Exit</button>";
            var add = document.getElementById("add");
            add.onclick = function() {
                var text = document.getElementById("text");
                var js = document.getElementById("js");
                var obj = new WebObject();
                obj.type = 1;
                obj.data[0] = text.value;
                obj.data[1] = js.value;
                document.getElementById("options").innerHTML = "";
                site.push(obj);
                render();
            }
            break;
    }
    var exit = document.getElementById("exit");
    exit.onclick = function() {
        document.getElementById("options").innerHTML = "";
    };
}
