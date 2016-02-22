$('#message-to-send').on('input', function() {
		
  	// par défaut la police est Impact
    document.getElementById("message-to-send").style.fontFamily = "Helvetica";
    
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

