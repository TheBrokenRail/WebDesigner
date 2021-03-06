var site = [];
function WebObject() {
    this.type = null;
    this.data = [];
}
function edit(num) {
    switch(site[num].type) {
        case 0:
            options.innerHTML = "<p>Text: </p><input id=\"text\"></input><br><p>CSS: </p><input id=\"css\"></input><br><button id=\"save\">Save</button><button id=\"exit\">Exit</button><button id=\"delete\">Delete</button><button id=\"up\">Up</button><button id=\"down\">Down</button>";
            var save = document.getElementById("save");
            var text = document.getElementById("text");
            text.value = site[num].data[0];
            var css = document.getElementById("css");
            css.value = site[num].data[1];
            save.onclick = function() {
                site[num].data[0] = text.value;
                site[num].data[1] = css.value;
                document.getElementById("options").innerHTML = "";
                render(false);
            }
            break;
        case 1:
            options.innerHTML = "<p>Text: </p><input id=\"text\"></input><br><p>Action (JS): </p><input id=\"js\"></input><br><p>CSS: </p><input id=\"css\"></input><br><button id=\"save\">Save</button><button id=\"exit\">Exit</button><button id=\"delete\">Delete</button><button id=\"up\">Up</button><button id=\"down\">Down</button>";
            var save = document.getElementById("save");
            var text = document.getElementById("text");
            text.value = site[num].data[0];
            var js = document.getElementById("js");
            js.value = site[num].data[1];
            var css = document.getElementById("css");
            css.value = site[num].data[2];
            save.onclick = function() {
                site[num].data[0] = text.value;
                site[num].data[1] = js.value;
                site[num].data[2] = css.value;
                document.getElementById("options").innerHTML = "";
                render(false);
            }
            break;
        case 2:
            options.innerHTML = "<p>Source: </p><input id=\"text\"></input><br><p>CSS: </p><input id=\"css\"></input><br><button id=\"save\">Save</button><button id=\"exit\">Exit</button><button id=\"delete\">Delete</button><button id=\"up\">Up</button><button id=\"down\">Down</button>";
            var save = document.getElementById("save");
            var text = document.getElementById("text");
            text.value = site[num].data[0];
            var css = document.getElementById("css");
            css.value = site[num].data[1];
            save.onclick = function() {
                site[num].data[0] = text.value;
                site[num].data[1] = css.value;
                document.getElementById("options").innerHTML = "";
                render(false);
            }
            break;
        case 3:
            options.innerHTML = "<p>Default Text: </p><input id=\"text\"></input><br><p>ID: </p><input id=\"id\"></input><br><p>CSS: </p><input id=\"css\"></input><br><button id=\"save\">Save</button><button id=\"exit\">Exit</button><button id=\"delete\">Delete</button><button id=\"up\">Up</button><button id=\"down\">Down</button>";
            var save = document.getElementById("save");
            var text = document.getElementById("text");
            text.value = site[num].data[0];
            var id = document.getElementById("id");
            id.value = site[num].data[1];
            var css = document.getElementById("css");
            css.value = site[num].data[2];
            save.onclick = function() {
                site[num].data[0] = text.value;
                site[num].data[1] = id.value;
                site[num].data[2] = css.value;
                document.getElementById("options").innerHTML = "";
                render(false);
            }
            break;
        case 4:
            options.innerHTML = "<p>Text: </p><input id=\"text\"></input><br><p>Link: </p><input id=\"link\"></input><br><p>CSS: </p><input id=\"css\"></input><br><button id=\"save\">Save</button><button id=\"exit\">Exit</button><button id=\"delete\">Delete</button><button id=\"up\">Up</button><button id=\"down\">Down</button>";
            var save = document.getElementById("save");
            var text = document.getElementById("text");
            text.value = site[num].data[0];
            var link = document.getElementById("link");
            link.value = site[num].data[1];
            var css = document.getElementById("css");
            css.value = site[num].data[2];
            save.onclick = function() {
                site[num].data[0] = text.value;
                site[num].data[1] = link.value;
                site[num].data[2] = css.value;
                document.getElementById("options").innerHTML = "";
                render(false);
            }
            break;
    }
    var exit = document.getElementById("exit");
    exit.onclick = function() {
        document.getElementById("options").innerHTML = "";
    };
    var deleteObj = document.getElementById("delete");
    deleteObj.onclick = function() {
        site.splice(num, 1);
        render(false);
        document.getElementById("options").innerHTML = "";
    };
    var up = document.getElementById("up");
    up.onclick = function() {
        if (num > 0) {
            site.splice(num - 1, 0, site.splice(num, 1)[0]);
            render(false);
            num = num - 1;
        }
    };
    var down = document.getElementById("down");
    down.onclick = function() {
        if (num + 1 < site.length) {
            site.splice(num + 1, 0, site.splice(num, 1)[0]);
            render(false);
            num = num + 1;
        }
    };
}
function render(real) {
    var preview = document.getElementById("preview");
    preview.innerHTML = "";
    for (var i = 0; i < site.length; i++) {
        if (site[i] == null) {continue;}
        switch(site[i].type) {
            case 0:
                var text = document.createElement("P");
                text.innerHTML = site[i].data[0];
                if (!real) {
                    text.setAttribute("onclick","edit(" + i + ");");
                }
                text.setAttribute("style",site[i].data[1]);
                preview.appendChild(text);
                break;
            case 1:
                var button = document.createElement("BUTTON");
                button.innerHTML = site[i].data[0];
                if (!real) {
                    button.setAttribute("onclick","edit(" + i + ");");
                } else {
                    button.setAttribute("onclick",site[i].data[1]);
                }
                button.setAttribute("style",site[i].data[2]);
                preview.appendChild(button);
                break;
            case 2:
                var img = document.createElement("IMG");
                img.src = site[i].data[0];
                if (!real) {
                    img.setAttribute("onclick","edit(" + i + ");");
                }
                img.setAttribute("style",site[i].data[1]);
                preview.appendChild(img);
                break;
            case 3:
                var input = document.createElement("INPUT");
                input.value = site[i].data[0];
                input.id = site[i].data[1];
                if (!real) {
                    input.setAttribute("onclick","edit(" + i + ");");
                }
                input.setAttribute("style",site[i].data[2]);
                preview.appendChild(input);
                break;
            case 4:
                var link = document.createElement("A");
                link.innerHTML = site[i].data[0];
                if (!real) {
                    link.setAttribute("onclick","edit(" + i + ");");
                    link.setAttribute("href","#");
                } else {
                    link.setAttribute("href",site[i].data[1]);
                }
                link.setAttribute("style",site[i].data[2]);
                preview.appendChild(link);
                break;
        }
    }
}
function add(type) {
    var options = document.getElementById("options");
    switch(type) {
        case 0:
            options.innerHTML = "<p>Text: </p><input id=\"text\"></input><br><p>CSS: </p><input id=\"css\"></input><br><button id=\"add\">Add</button><button id=\"exit\">Exit</button>";
            var add = document.getElementById("add");
            add.onclick = function() {
                var text = document.getElementById("text");
                var css = document.getElementById("css");
                var obj = new WebObject();
                obj.type = 0;
                obj.data[0] = text.value;
                obj.data[1] = css.value;
                document.getElementById("options").innerHTML = "";
                site.push(obj);
                render(false);
            }
            break;
        case 1:
            options.innerHTML = "<p>Text: </p><input id=\"text\"></input><br><p>Action (JS): </p><input id=\"js\"></input><br><p>CSS: </p><input id=\"css\"></input><br><button id=\"add\">Add</button><button id=\"exit\">Exit</button>";
            var add = document.getElementById("add");
            add.onclick = function() {
                var text = document.getElementById("text");
                var js = document.getElementById("js");
                var css = document.getElementById("css");
                var obj = new WebObject();
                obj.type = 1;
                obj.data[0] = text.value;
                obj.data[1] = js.value;
                obj.data[2] = css.value;
                document.getElementById("options").innerHTML = "";
                site.push(obj);
                render(false);
            }
            break;
        case 2:
            options.innerHTML = "<p>Source: </p><input id=\"text\"></input><br><p>CSS: </p><input id=\"css\"></input><br><button id=\"add\">Add</button><button id=\"exit\">Exit</button>";
            var add = document.getElementById("add");
            add.onclick = function() {
                var text = document.getElementById("text");
                var css = document.getElementById("css");
                var obj = new WebObject();
                obj.type = 2;
                obj.data[0] = text.value;
                obj.data[1] = css.value;
                document.getElementById("options").innerHTML = "";
                site.push(obj);
                render(false);
            }
            break;
        case 3:
            options.innerHTML = "<p>Default Text: </p><input id=\"text\"></input><br><p>ID: </p><input id=\"id\"></input><br><p>CSS: </p><input id=\"css\"></input><br><button id=\"add\">Add</button><button id=\"exit\">Exit</button>";
            var add = document.getElementById("add");
            add.onclick = function() {
                var text = document.getElementById("text");
                var id = document.getElementById("id");
                var css = document.getElementById("css");
                var obj = new WebObject();
                obj.type = 3;
                obj.data[0] = text.value;
                obj.data[1] = id.value;
                obj.data[2] = css.value;
                document.getElementById("options").innerHTML = "";
                site.push(obj);
                render(false);
            }
            break;
        case 4:
            options.innerHTML = "<p>Text: </p><input id=\"text\"></input><br><p>Link: </p><input id=\"link\"></input><br><p>CSS: </p><input id=\"css\"></input><br><button id=\"add\">Add</button><button id=\"exit\">Exit</button>";
            var add = document.getElementById("add");
            add.onclick = function() {
                var text = document.getElementById("text");
                var link = document.getElementById("link");
                var css = document.getElementById("css");
                var obj = new WebObject();
                obj.type = 4;
                obj.data[0] = text.value;
                obj.data[1] = link.value;
                obj.data[2] = css.value;
                document.getElementById("options").innerHTML = "";
                site.push(obj);
                render(false);
            }
            break;
    }
    var exit = document.getElementById("exit");
    exit.onclick = function() {
        document.getElementById("options").innerHTML = "";
    };
}

function exportToHTML() {
    render(true);
    var html = document.getElementById("preview").innerHTML;
    render(false);
    return html;
}
