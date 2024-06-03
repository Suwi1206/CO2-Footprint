
// Um eine Website  gegen Code-Injektionen schützen, gibt es mehrere Methoden

/*
1- Validierung auf der Client-Seite: Verwenden Sie JavaScript, um sicherzustellen, 
dass die Benutzereingaben den erwarteten Format- und Inhaltserwartungen entsprechen, bevor das Formular abgeschickt wird. 
*/

/*
2- Escape von Benutzereingaben: Bevor Sie Benutzereingaben in Ihre Datenbank einfügen oder auf Ihrer Website anzeigen, 
sollten Sie sicherstellen, dass Sie sie "escapen" (also Sonderzeichen wie <, >, ", ', & usw.
*/

/*
3- Regelmäßige Aktualisierung der Sicherheitsmaßnahmen:
*/


/*
----------------------------
validateForm Kontakt
----------------------------
*/

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error = document.getElementById("error");

    // Reset Fehlermeldung
    error.innerHTML = "";

    // Validierung der Eingaben
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        error.innerHTML = "Bitte füllen Sie alle Felder aus.";
        return false;
    }

    // Validierung der E-Mail-Adresse
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        error.innerHTML = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
        return false;
    }

    // Escape von Benutzereingaben
    name = escapeHTML(name);
    email = escapeHTML(email);
    message = escapeHTML(message);

    // Hier können Sie den Code für das Absenden des Formulars an Ihren Server einfügen
    // Zum Beispiel mit AJAX oder einer Formularaktion
    console.log("Name: " + name);
    console.log("E-Mail: " + email);
    console.log("Nachricht: " + message);

    // Hier können Sie das Formular zurücksetzen oder eine Bestätigungsnachricht anzeigen
    document.getElementById("contactForm").reset();
    error.innerHTML = "Vielen Dank! Ihre Nachricht wurde gesendet.";
    return false;
}

function escapeHTML(str) {
    return str.replace(/[&<>"']/g, function(match) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        }[match];
    });
}




/*
----------------------------
validateFormCo2
----------------------------
*/


function validateForm2() {
    var isValid = true;

    // Validation for countryInput
    var countryInput = document.getElementById("countryInput").value.trim();
    var countryError = document.getElementById("countryError");
    if (countryInput === "") {
      countryError.innerHTML = "Land darf nicht leer sein";
      isValid = false;
    } else {
      countryError.innerHTML = "";
    }

    // Validation for companyInput
    var companyInput = document.getElementById("companyInput").value.trim();
    var companyError = document.getElementById("companyError");
    if (companyInput === "") {
      companyError.innerHTML = "Unternehmen darf nicht leer sein";
      isValid = false;
    } else {
      companyError.innerHTML = "";
    }

    // Validation for co2Input
    var co2Input = document.getElementById("co2Input").value.trim();
    var co2Error = document.getElementById("co2Error");
    if (co2Input === "") {
      co2Error.innerHTML = "CO-Emissionen darf nicht leer sein";
      isValid = false;
    } else if (isNaN(co2Input)) {
      co2Error.innerHTML = "CO-Emissionen muss eine Zahl sein";
      isValid = false;
    } else {
      co2Error.innerHTML = "";
    }

    // Validation for sourceInput
    var sourceInput = document.getElementById("sourceInput").value.trim();
    var sourceError = document.getElementById("sourceError");
    if (sourceInput === "") {
      sourceError.innerHTML = "Emissionsquelle darf nicht leer sein";
      isValid = false;
    } else {
      sourceError.innerHTML = "";
    }

    // Validation for dateInput
    var dateInput = document.getElementById("dateInput").value.trim();
    var dateError = document.getElementById("dateError");
    if (dateInput === "") {
      dateError.innerHTML = "Erfassungsdatum darf nicht leer sein";
      isValid = false;
    } else {
      dateError.innerHTML = "";
    }

    // Return true if all fields are valid, otherwise false
    return isValid;
  }