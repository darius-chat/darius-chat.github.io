$('#envoyer').on('click',function() {

  var x = document.getElementsByClassName("other-message");
  
  
  var i=0;
  
  while(i<x.length){
    myFunction(i,"other-message");
    i++;
  }
});

$('#message-to-send').keypress(function (e) {
  

  
  var x = document.getElementsByClassName("other-message");
  
  var i=0;
  
  while(i<x.length){
    myFunction(i,"other-message");
    i++;
  }
});




$('#message-to-send').on('input', function() {
		
  	// par défaut la police est Impact
    document.getElementById("message-to-send").style.fontFamily = "Helvetica";
  
  var x = document.getElementsByClassName("other-message");
  
  //var variablelol = document.getElementByClassName("message");

  var i=0;
  
  while(i<x.length){
    myFunction(i,"other-message");
    i++;
  }

  
 /* var newclassic;
  
 while(i<x.length){
   newclassic="";
   texte_saisi = x[i].innerText;
   
   
   
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
      

   x[i].className += newclassic;
   
   i++;

 }*/
  
// (x[i].innerText.length > 0){
/*  
   i++;
 }*/
    

  
    
  var remember = document.getElementById('cbox1');

  if (remember.checked){
     // on récupère le texte saisi
    var texte_saisi = document.getElementById("message-to-send").value;
  var box = document.getElementById("message-to-send");
    
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
  
/*  if(texte_saisi.toLowerCase().indexOf(":)") >= 0){
    box.value=box.value.replace(":)","");;}
  
  if(texte_saisi.toLowerCase().indexOf(":-)") >= 0){
    box.value=box.value.replace(":-)","");;}
  
  if(texte_saisi.toLowerCase().indexOf(":^)") >= 0){
    box.value=box.value.replace(":^)","");;}
  
  if(texte_saisi.toLowerCase().indexOf(":]") >= 0){
    box.value=box.value.replace(":]","");;}
  
  if(texte_saisi.toLowerCase().indexOf(":-]") >= 0){
    box.value=box.value.replace(":-]","");;}
  
  if(texte_saisi.toLowerCase().indexOf("=)") >= 0){
    box.value=box.value.replace("=)","");;}
  
  if(texte_saisi.toLowerCase().indexOf(":(") >= 0){
    box.value=box.value.replace(":(","");;}
  
  if(texte_saisi.toLowerCase().indexOf(":-(") >= 0){
    box.value=box.value.replace(":-(","");;}
  
  if(texte_saisi.toLowerCase().indexOf(":-[") >= 0){
    box.value=box.value.replace(":-[)","");;}
  
  if(texte_saisi.toLowerCase().indexOf(":[") >= 0){
    box.value=box.value.replace(":[","");;}
  
  if(texte_saisi.toLowerCase().indexOf(":s") >= 0){
    box.value=box.value.replace(":s","");;}
  
  if(texte_saisi.toLowerCase().indexOf(":@") >= 0){
    box.value=box.value.replace(":@","");;}
  
  if(texte_saisi.toLowerCase().indexOf(":-@") >= 0){
    box.value=box.value.replace(":-@","");;}*/
  
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
          (texte_saisi.toLowerCase().indexOf("?!") >= 0)
          )
      {
        document.getElementById("message-to-send").style.fontFamily = "Colere";
      }
  
  // Angoisse

      if ((texte_saisi.toLowerCase().indexOf(":s") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("..!") >= 0) || 
          (texte_saisi.toLowerCase().indexOf("...!") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("!..") >= 0) ||
          (texte_saisi.toLowerCase().indexOf("!...") >= 0)
          )
      {
        document.getElementById("message-to-send").style.fontFamily = "Angoisse";
      }
      
  }
  
   
      
      
});


function myFunction(i,className){
   var x = document.getElementsByClassName(className);
  
  //var variablelol = document.getElementByClassName("message");


  
  var newclassic;
  
 while(i<x.length){
   newclassic="";
   texte_saisi = x[i].innerText;

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
      
 
   x[i].className += newclassic;
   
   i++;

 }

}