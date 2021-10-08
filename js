({
	doInit : function(component, event, helper) {
		var table = document.createElement('table');
        for (var i = 1; i < 1000; i++)
        {
           var tr = document.createElement('tr');   

           var td1 = document.createElement('td');
        
           var text1 = document.createTextNode('Record'+i);
    
           td1.appendChild(text1);
   
           tr.appendChild(td1);

           table.appendChild(tr);
        }
       
          document.body.appendChild(table);       
	}
})
