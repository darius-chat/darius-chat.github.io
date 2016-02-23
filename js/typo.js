var code = (e.keyCode ? e.keyCode : e.which);
   if(code == 13) { //Enter keycode
     alert('enter press');
 }


$('#message-to-send').on('input', function() {
		
  	// par défaut la police est Impact
    document.getElementById("message-to-send").style.fontFamily = "Helvetica";
  
  var x = document.getElementsByClassName("other-message");
  
  //var variablelol = document.getElementByClassName("message");

  //console.log(x[1].innerText);
  
  var i=0;
  
  while(i<x.length){
    myFunction(i,"other-message");
    i++
  }

  
 /* var newclassic;
  
 while(i<x.length){
   newclassic="";
   texte_saisi = x[i].innerText;
   
   console.log(texte_saisi);
   
   // Joie

      if ((texte_saisi.toLowerCase().indexOf(":)") >= 0) ||
          (texte_saisi.toLowerCase().indexOf(":-)") >= 0) || 
          (texte_saisi.toLowerCase().indexOf(":^)") >= 0) ||
          (texte_saisi.toLowerCase().indexOf(":]") >= 0) ||
          (texte_saisi.toLowerCase().indexOf(":-]") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("!!") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("!!!") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("!!!!") >= 0) ||
          
           (texte_saisi.toLowerCase().indexOf("=)") >= 0)
          )
      {
        newclassic = " joie";
      }
  
  // Tristesse

      if ((texte_saisi.toLowerCase().indexOf(":(") >= 0) ||
          (texte_saisi.toLowerCase().indexOf(":-()") >= 0) ||           (texte_saisi.toLowerCase().indexOf(":^(") >= 0) ||
          (texte_saisi.toLowerCase().indexOf(":[") >= 0) ||
          (texte_saisi.toLowerCase().indexOf(":-[") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("...") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("....") >= 0) ||
          (texte_saisi.toLowerCase().indexOf(".....") >= 0) ||
          
           (texte_saisi.toLowerCase().indexOf("=(") >= 0)
          )
      {
        newclassic = " tristesse";
      }
  
  // Colere

      if ((texte_saisi.toLowerCase().indexOf(":@") >= 0) ||
          (texte_saisi.toLowerCase().indexOf(":-@") >= 0) || 
          (texte_saisi.toLowerCase().indexOf("?!") >= 0) ||         
           (texte_saisi.toLowerCase().indexOf("=)") >= 0)
          )
      {
        newclassic = " colere";
      }
  
  // Angoisse

      if ((texte_saisi.toLowerCase().indexOf(":s") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("..!") >= 0) || 
          (texte_saisi.toLowerCase().indexOf("...!") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("!..") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("!...") >= 0) ||        
           (texte_saisi.toLowerCase().indexOf("=)") >= 0)
          )
      {
        newclassic = " a  ngoisse";
      }
      
   console.log(newclassic);
   x[i].className += newclassic;
   
   i++;

 }*/
  
// (x[i].innerText.length > 0){
/*   console.log(i);
   i++;
 }*/
    

  
   // console.log($variablelol.each);
    
    // on récupère le texte saisi
    var texte_saisi = document.getElementById("message-to-send").value;
    
      // Joie

      if ((texte_saisi.toLowerCase().indexOf(":)") >= 0) ||
          (texte_saisi.toLowerCase().indexOf(":-)") >= 0) || 
          (texte_saisi.toLowerCase().indexOf(":^)") >= 0) ||
          (texte_saisi.toLowerCase().indexOf(":]") >= 0) ||
          (texte_saisi.toLowerCase().indexOf(":-]") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("!!") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("!!!") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("!!!!") >= 0) ||
          
           (texte_saisi.toLowerCase().indexOf("=)") >= 0)
          )
      {
        document.getElementById("message-to-send").style.fontFamily = "Joie";
      }
  
  // Tristesse

      if ((texte_saisi.toLowerCase().indexOf(":(") >= 0) ||
          (texte_saisi.toLowerCase().indexOf(":-()") >= 0) ||           (texte_saisi.toLowerCase().indexOf(":^(") >= 0) ||
          (texte_saisi.toLowerCase().indexOf(":[") >= 0) ||
          (texte_saisi.toLowerCase().indexOf(":-[") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("...") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("....") >= 0) ||
          (texte_saisi.toLowerCase().indexOf(".....") >= 0) ||
          
           (texte_saisi.toLowerCase().indexOf("=(") >= 0)
          )
      {
        document.getElementById("message-to-send").style.fontFamily = "Tristesse";
      }
  
  // Colere

      if ((texte_saisi.toLowerCase().indexOf(":@") >= 0) ||
          (texte_saisi.toLowerCase().indexOf(":-@") >= 0) || 
          (texte_saisi.toLowerCase().indexOf("?!") >= 0) ||         
           (texte_saisi.toLowerCase().indexOf("=)") >= 0)
          )
      {
        document.getElementById("message-to-send").style.fontFamily = "Colere";
      }
  
  // Angoisse

      if ((texte_saisi.toLowerCase().indexOf(":s") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("..!") >= 0) || 
          (texte_saisi.toLowerCase().indexOf("...!") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("!..") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("!...") >= 0) ||        
           (texte_saisi.toLowerCase().indexOf("=)") >= 0)
          )
      {
        document.getElementById("message-to-send").style.fontFamily = "Angoisse";
      }
      
      
      
});


function myFunction(i,className){
   var x = document.getElementsByClassName(className);
  
  //var variablelol = document.getElementByClassName("message");

  //console.log(x[1].innerText);

  
  var newclassic;
  
 while(i<x.length){
   newclassic="";
   texte_saisi = x[i].innerText;
   
   console.log(texte_saisi);
   
   // Joie

      if ((texte_saisi.toLowerCase().indexOf(":)") >= 0) ||
          (texte_saisi.toLowerCase().indexOf(":-)") >= 0) || 
          (texte_saisi.toLowerCase().indexOf(":^)") >= 0) ||
          (texte_saisi.toLowerCase().indexOf(":]") >= 0) ||
          (texte_saisi.toLowerCase().indexOf(":-]") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("!!") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("!!!") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("!!!!") >= 0) ||
          
           (texte_saisi.toLowerCase().indexOf("=)") >= 0)
          )
      {
        newclassic = " joie";
      }
  
  // Tristesse

      if ((texte_saisi.toLowerCase().indexOf(":(") >= 0) ||
          (texte_saisi.toLowerCase().indexOf(":-()") >= 0) ||           (texte_saisi.toLowerCase().indexOf(":^(") >= 0) ||
          (texte_saisi.toLowerCase().indexOf(":[") >= 0) ||
          (texte_saisi.toLowerCase().indexOf(":-[") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("...") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("....") >= 0) ||
          (texte_saisi.toLowerCase().indexOf(".....") >= 0) ||
          
           (texte_saisi.toLowerCase().indexOf("=(") >= 0)
          )
      {
        newclassic = " tristesse";
      }
  
  // Colere

      if ((texte_saisi.toLowerCase().indexOf(":@") >= 0) ||
          (texte_saisi.toLowerCase().indexOf(":-@") >= 0) || 
          (texte_saisi.toLowerCase().indexOf("?!") >= 0) ||         
           (texte_saisi.toLowerCase().indexOf("=)") >= 0)
          )
      {
        newclassic = " colere";
      }
  
  // Angoisse

      if ((texte_saisi.toLowerCase().indexOf(":s") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("..!") >= 0) || 
          (texte_saisi.toLowerCase().indexOf("...!") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("!..") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("!...") >= 0) ||        
           (texte_saisi.toLowerCase().indexOf("=)") >= 0)
          )
      {
        newclassic = " angoisse";
      }
      
   console.log(newclassic);
   x[i].className += newclassic;
   
   i++;

 }

}