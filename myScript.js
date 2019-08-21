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
   {  
      
       var tab=document.getElementsByTagName("table")[0];
      var val=document.getElementById("searchbar-text").value;
      if(val.length==0)
        {
            alert("Enter the task to be added");
            return;
        }      
      
      var newRow='<tr>'+'<td>'+val+'</td>'+'<td>'+'<button type="button" class="button">Edit</button>'
      +'<button type="button" class="button">Remove</button>'+'</td>'+'</tr>';
      tab.innerHTML+=newRow;


   }
   function setVal(ele)
   {
    var val=ele.innerHTML;
    alert(val);

   }
   function hideSuggestions()
   {
    document.getElementById("autocomplete-suggestions").style.display="none";
   }