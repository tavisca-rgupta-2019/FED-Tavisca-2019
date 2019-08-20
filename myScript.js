function getContent(obj) {
    var obj1=obj.getAttribute("id");
    //var arr=document.querySelectorAll(obj1);
    let content=document.querySelectorAll(".content");
    for(let c of content)
    {
        c.style.display="none";
    }

    document.getElementById("selected-"+obj1).style.display="block";
   }

   function showSuggestions()
   {
       document.getElementById("autocomplete-suggestions").style.display="block";

   }
   function addTask()
   {  var tab=document.getElementsByTagName("table");
      var value=document.getElementById("searchbar-text").value;
      var newRow='<tr>'+'<td>'+value+'</td>'+'<td>'+'<button type="button" class="button">Edit</button>'
      +'<button type="button" class="button">Remove</button>'+'</td>'+'</tr>'
      tab.innerHTML+=newRow;


   }
   function hideSuggestions()
   {
    document.getElementById("autocomplete-suggestions").style.display="none";
   }