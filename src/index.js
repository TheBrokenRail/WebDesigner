var site = [];
function WebObject() {
    this.type = null;
    this.data = [];
}
function edit(num) {
    switch(site[num].type) {
        case 0:
            options.innerHTML = "<p>Text: </p><input id=\"text\"></input><br><button id=\"save\">Save</button><button id=\"exit\">Exit</button><button id=\"delete\">Delete</button>";
            var save = document.getElementById("save");
            var text = document.getElementById("text");
            text.value = site[num].data[0];
            save.onclick = function() {
                site[num].data[0] = text.value;
                document.getElementById("options").innerHTML = "";
                render();
            }
            break;
        case 1:
            options.innerHTML = "<p>Text: </p><input id=\"text\"></input><br><p>Action (JS): </p><input id=\"js\"></input><br><button id=\"save\">Save</button><button id=\"exit\">Exit</button><button id=\"delete\">Delete</button>";
            var save = document.getElementById("save");
            var text = document.getElementById("text");
            text.value = site[num].data[0];
            var js = document.getElementById("js");
            js.value = site[num].data[1];
            save.onclick = function() {
                site[num].data[0] = text.value;
                site[num].data[1] = js.value;
                document.getElementById("options").innerHTML = "";
                render();
            }
            break;
        case 2:
            options.innerHTML = "<p>Source: </p><input id=\"text\"></input><br><button id=\"save\">Save</button><button id=\"exit\">Exit</button><button id=\"delete\">Delete</button>";
            var save = document.getElementById("save");
            var text = document.getElementById("text");
            text.value = site[num].data[0];
            save.onclick = function() {
                site[num].data[0] = text.value;
                document.getElementById("options").innerHTML = "";
                render();
            }
            break;
        case 3:
            options.innerHTML = "<p>Default Text: </p><input id=\"text\"></input><br><p>ID: </p><input id=\"id\"></input><br><button id=\"save\">Save</button><button id=\"exit\">Exit</button><button id=\"delete\">Delete</button>";
            var save = document.getElementById("save");
            var text = document.getElementById("text");
            text.value = site[num].data[0];
            var id = document.getElementById("id");
            id.value = site[num].data[1];
            save.onclick = function() {
                site[num].data[0] = text.value;
                site[num].data[1] = id.value;
                document.getElementById("options").innerHTML = "";
                render();
            }
            break;
    }
    var exit = document.getElementById("exit");
    exit.onclick = function() {
        document.getElementById("options").innerHTML = "";
    };
    var deleteObj = document.getElementById("delete");
    deleteObj.onclick = function() {
        site[num] = null;
    };
}
function render() {
    var preview = document.getElementById("preview");
    preview.innerHTML = "";
    for (var i = 0; i < site.length; i++) {
        if (site[i] == null) {continue;}
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
            case 2:
                var img = document.createElement("IMG");
                img.src = site[i].data[0];
                eval("img.onclick = function() {edit(" + i + ")};");
                preview.appendChild(img);
                break;
            case 3:
                var input = document.createElement("INPUT");
                input.value = site[i].data[0];
                input.id = site[i].data[1];
                eval("input.onclick = function() {edit(" + i + ")};");
                preview.appendChild(input);
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
        case 2:
            options.innerHTML = "<p>Source: </p><input id=\"text\"></input><br><button id=\"add\">Add</button><button id=\"exit\">Exit</button>";
            var add = document.getElementById("add");
            add.onclick = function() {
                var text = document.getElementById("text");
                var obj = new WebObject();
                obj.type = 2;
                obj.data[0] = text.value;
                document.getElementById("options").innerHTML = "";
                site.push(obj);
                render();
            }
            break;
        case 3:
            options.innerHTML = "<p>Default Text: </p><input id=\"text\"></input><br><p>ID: </p><input id=\"id\"></input><br><button id=\"add\">Add</button><button id=\"exit\">Exit</button>";
            var add = document.getElementById("add");
            add.onclick = function() {
                var text = document.getElementById("text");
                var id = document.getElementById("id");
                var obj = new WebObject();
                obj.type = 3;
                obj.data[0] = text.value;
                obj.data[1] = id.value;
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
