

  
  var arr= [
    {
     
      
      "title": "delectus aut autem",
     
    },
    {
     
    
      "title": "quis ut nam facilis et officia qui",
      
    },
    {
      
    
      "title": "fugiat veniam minus",
     
    },
    {
     
     
      "title": "et porro tempora",
     
    },
    {
      
     
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
     
    }];
   //= JSON.parse(JSON.stringify(arr));

  window.addEventListener("load", renderElement);

  function renderElement(){
    var ele=document.getElementById("task-list");
       var firstRow='<tr>'+
                    '<th>Sr. No.</th>'+
                    '<th>Title</th>'+
                    '<th>Actions</th>'+
                    '</tr>';
        ele.innerHTML=firstRow;
        for(let i=0; i<arr.length; i++){
            var sr=i+1;
            var element = '<tr>'+
            '<td>'+ sr +'</td>'+
            '<td>'+arr[i].title+'</td>'+
            '<td class="operations">'+
                '<button type="button" id="edit-'+i+'"class="button">Edit</button>'+
                '<button type="button" id="delete-'+i+'" onclick="deleteVal(this)" class="button">Remove</button>'+
            '</td>'+
          '</tr>';
         
          ele.innerHTML+=element;

        }
  }





