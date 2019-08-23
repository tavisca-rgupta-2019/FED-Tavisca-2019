

function getContent(obj) {
    var obj1 = obj.getAttribute("id");

    let content = document.querySelectorAll(".content");
    for (let c of content) {
        c.style.display = "none";
    }

    document.getElementById("selected-" + obj1).style.display = "block";
}

function showSuggestions(obj) {
    var searchString=obj.toUpperCase();
    document.getElementById("autocomplete-suggestions-list").innerHTML='';
    for (let i = 0; i < arr.length; i++) {
        
        if ((arr[i].title).toUpperCase().indexOf(searchString) > -1) {
            populateSuggestionsList(arr[i].title);
        }
    }
    

}

function populateSuggestionsList(str)
 {   var val='<li onmouseover="setVal(this)">'+str+'</li>';
    document.getElementById("autocomplete-suggestions-list").innerHTML+=val;
    document.getElementById("autocomplete-suggestions").style.display = 'block';

 }


function addTask() {

    var tab = document.getElementById("task-list");
    var val = document.getElementById("searchbar-text").value;
    if (val.length == 0) {
        alert("Enter the task to be added");
        return;
    }
    for(let i=0;i<arr.length;i++)
    {if(arr[i].title==val)
        return;
    }
    arr.push({
        "title": val,
    });
    var index = parseInt(document.querySelectorAll("#task-list>tbody:last-child>tr>td")[0].innerHTML);
    var id=index+1;



    var newRow = '<tr>' + '<td>' + id + '</td>' + '<td>' + val + '</td>' + '<td>' + '<button type="button" id="Edit-'+index+'" onclick="editVal(this)" class="button">Edit</button>'
        + '<button type="button" id="delete-'+index+'"class="button" onclick="deleteVal(this)">Remove</button>' + '</td>' + '</tr>';
    tab.innerHTML += newRow;


}
function setVal(ele) {
    var val = ele.innerHTML;
    document.getElementById("searchbar-text").value = val;

}
function hideSuggestions() {
    document.getElementById("autocomplete-suggestions").style.display = "none";
}
function deleteVal(obj){
    var rownumber=parseInt((obj.id).substring(7))+1;
    document.getElementById("task-list").deleteRow(rownumber);
    arr.splice(rownumber-1,1);
    document.getElementById("task-list").innerHTML="";
    renderElement();
    
    
}
function editVal(obj)
{ var parent=obj.parentElement;
  var element=parent.previousSibling;
  console.log(element.innerHTML);
  element.innerHTML="";
  var inputbar='<input type="text" placeholder="Enter the task..." id="edit-task-bar" value="" onchange="alterTask(this)">'

  element.innerHTML=inputbar;
}
function alterTask(obj)
{ 
var parent=obj.parentElement;
var val=obj.value;
for(let i=0;i<arr.length;i++)
{if(arr[i].title==val)
    {alert("Task already exists");
     return;
    }
}

var index=parent.previousSibling.innerHTML;
arr.splice(index-1,1);
arr.splice(index-1,0,{"title":val})
document.getElementById("task-list").innerHTML="";
renderElement();


//parent.innerHTML=obj.value;


}