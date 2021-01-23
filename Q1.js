function add_list() {
  if (document.getElementById("add").value.trim() == "") {
     alert("内容不能为空");
    }else {
     var data = loadData();
     var todo = { "title": document.getElementById("add").value, "done": false };
     var get = document.getElementById("get");
     get.reset();
     data.push(todo);
     saveData(data);
     load();
 }
}

function load() {
  var todo_list = document.getElementById("todo_list");
  var done_list = document.getElementById("done_list");
  var save_list = localStorage.getItem("todo");
  if (save_list != null) {
    var data = JSON.parse(save_list);
    var todoCount = 0;
    var doneCount = 0;
    var todoString = "";
    var doneString = "";
      for (var i = 0; i <= data.length - 1; i++) {
         if (!data[i].done) {
           todoString +="<li draggable='true'><input type='checkbox' onchange='update(" 
                      +i+ ",\"done\",true)'/>" 
                      +"<p id='p-"+i+"'onclick='edit(" +i+ ")'>" 
                      +data[i].title + "</p>" 
                      +"<a href='javascript:remove("+i+")'>-</a></li>";
                      todoCount++;
          }else{
            doneString +="<li draggable='true'><input type='checkbox' onchange='update(" 
                       +i+",\"done\",false)'checked='checked' />" 
                       +"<p id='p-" + i + "'onclick='edit("+i+")'>" 
                       + data[i].title + "</p>" 
                       +"<a href='javascript:remove("+i+")'>-</a></li>";
                       doneCount++;
         }
   };
      todo_count.innerHTML = todoCount;
      done_count.innerHTML = doneCount;
      todo_list.innerHTML = todoString;
      done_list.innerHTML = doneString;
    } else {
      todo_count.innerHTML = 0;
      done_count.innerHTML = 0;
      todo_list.innerHTML = "";
      done_list.innerHTML = "";
  }
  }

  function edit(i) {
    load();
    var p = document.getElementById("p-"+i);
    title = p.innerHTML;
    p.innerHTML = "<input id='input-"+i+"'value='"+title+"'/>";
    var input = document.getElementById("input-"+i);
    input.setSelectionRange(0, input.value.length);
    input.focus();
    input.onblur = function() {
        if (input.value.length == 0) {
             p.innerHTML = title;
           alert("请填写内容");
        } else {
             update(i, "title", input.value);
       }
     };
    }

  function update(i, field, value) {
    var data = loadData();
    var todo = data.splice(i, 1)[0];
    todo[field] = value;
    data.splice(i, 0, todo);
    saveData(data);
    load();
  }    

 function loadData() {
   var save_list = localStorage.getItem("todo");
   if (save_list != null) {
     return JSON.parse(save_list);
    }else{ 
      return [];
    }
  }

 function saveSort() {
   var todo_list = document.getElementById("todo_list");
   var done_list = document.getElementById("done_list");
   var ts = todo_list.getElementsByTagName("p");
   var ds = done_list.getElementsByTagName("p");
   var data = [];
   for (i = 0; i < ts.length; i++) {
     var todo = { "title": ts[i].innerHTML, "done": false };
     data.unshift(todo);
    }
    for (i = 0; i < ds.length; i++) {
     var todo = { "title": ds[i].innerHTML, "done": true };
     data.unshift(todo);
   }
   saveData(data);
  }
  
  function saveData(data) {
    localStorage.setItem("todo", JSON.stringify(data));
  }
  
  function remove(i) {
    var data = loadData();
    var todo = data.splice(i, 1)[0];
    saveData(data);
    load();
  }

  window.onload = load;