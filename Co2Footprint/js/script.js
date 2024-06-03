
// Dieses JavaScript wird ausgeführt, sobald das DOM (Document Object Model) vollständig geladen ist. 
// Es erfasst das Element mit der ID "navigation" und bestimmt dann die Ausrichtung der Navigation basierend auf der Sprachrichtung des Benutzers. 
document.addEventListener("DOMContentLoaded", function() {
    var navigation = document.getElementById('navigation');
  
    // Detect language direction and set navigation alignment
    var language = navigator.language || navigator.userLanguage;
    var languageDirection = language.startsWith('ar') || language.startsWith('he') ? 'rtl' : 'ltr';
    navigation.style.direction = languageDirection;
  });
  

  // Erkennen und Setzen des HTML lang-Attributs für RTL und LTR
  var htmlTag = document.querySelector('html');
  var dir = window.getComputedStyle(htmlTag).direction;
  if (dir === 'rtl') {
    htmlTag.setAttribute('lang', 'ar');
  } else if (dir === 'ltr') {
    htmlTag.setAttribute('lang', 'de');
  }





  document.addEventListener("DOMContentLoaded", function() {
    // Detect language direction
    var language = navigator.language || navigator.userLanguage;
    var isRTL = language.startsWith('ar') || language.startsWith('he'); // Check if the language is right-to-left

    // Get navigation element and indicator element
    var navigation = document.getElementById('navigation');
    var indicator = document.getElementById('indicator');

    // Add appropriate class based on language direction and set the indicator text
    if (isRTL) {
      navigation.classList.add('right');
      indicator.textContent = 'RTL';
    } else {
      indicator.textContent = 'LTR';
    }
  });



  // ------------------- co2 Table JS

   // Daten für die Tabelle (können von einer Datenbank oder einem anderen Backend kommen)
   let data = [
    { country: "Deutschland", company: "Beispiel GmbH", emissions: "1000", source: "Fabrik", date: "2024-04-04" },
    { country: "USA", company: "XYZ Corp", emissions: "1500", source: "Kraftwerk", date: "2024-04-03" },
    // Weitere Datensätze hier hinzufügen
  ];

  let sortOrder = {
    column: 'country', // Default sort by country
    direction: 'asc'
  };

  // Funktion zum Einfügen von Daten in die Tabelle
  function populateTable() {
    const tableBody = document.querySelector('#dataTable tbody');
    tableBody.innerHTML = '';
    data.forEach(record => {
      const row = `
        <tr>
          <td>${record.country}</td>
          <td>${record.company}</td>
          <td>${record.emissions}</td>
          <td>${record.source}</td>
          <td>${record.date}</td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
    updateSortIcons(); // Activate search icon by default
  }

  // Funktion zum Hinzufügen eines neuen Datensatzes
  function addRecord(event) {
    event.preventDefault();

    // Abrufen der Werte aus den Eingabefeldern
    const country = document.getElementById('countryInput').value.trim();
    const company = document.getElementById('companyInput').value.trim();
    const emissionsInput = document.getElementById('co2Input').value.trim();
    const source = document.getElementById('sourceInput').value.trim();
    const date = document.getElementById('dateInput').value.trim();

    // Überprüfen, ob eines der Felder leer ist
    if (!country || !company || !emissionsInput || !source || !date) {
        return; // Funktion beenden, wenn eines der Felder leer ist
    }

    // Überprüfen, ob emissionsInput eine gültige Zahl oder Fließkommazahl ist
    const emissions = parseFloat(emissionsInput);
    if (isNaN(emissions)) {
        return; // Funktion beenden, wenn emissionsInput keine Zahl ist
    }

    // Neuen Datensatz erstellen
    const newRecord = { country, company, emissions, source, date };

    // Den neuen Datensatz zur Datenstruktur hinzufügen
    data.push(newRecord);

    // Die Tabelle mit den aktualisierten Daten aktualisieren
    populateTable();

    // Das Formular zurücksetzen
    document.getElementById('addRecordForm').reset();
}



  // Sort table data
  function sortData(column) {
    if (sortOrder.column === column) {
      sortOrder.direction = sortOrder.direction === 'asc' ? 'desc' : 'asc';
    } else {
      sortOrder.column = column;
      sortOrder.direction = 'asc';
    }

    data.sort((a, b) => {
      const first = sortOrder.direction === 'asc' ? a[column].toLowerCase() : b[column].toLowerCase();
      const second = sortOrder.direction === 'asc' ? b[column].toLowerCase() : a[column].toLowerCase();
      return first.localeCompare(second);
    });

    populateTable();
    updateSortIcons();
  }

  // Sort table data when clicking on sortable headers
  document.querySelectorAll('.sortable-header').forEach(header => {
    header.addEventListener('click', () => {
      const column = header.getAttribute('data-column');
      sortData(column);
    });
  });

  // Update sort icons based on current sort order
  function updateSortIcons() {
    document.querySelectorAll('.sort-icon').forEach(icon => {
      icon.classList.remove('active');
    });
    const sortIcon = document.getElementById(`${sortOrder.column}SortIcon`);
    if (sortIcon) {
      sortIcon.innerHTML = sortOrder.direction === 'asc' ? '&#x25B2;' : '&#x25BC;';
      sortIcon.classList.add('active');
    }
  }

  // Suchfunktion
  function search() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredData = data.filter(record =>
      record.country.toLowerCase().includes(searchTerm) ||
      record.company.toLowerCase().includes(searchTerm)
    );
    // Tabelle mit den gefilterten Daten aktualisieren
    const tableBody = document.querySelector('#dataTable tbody');
    tableBody.innerHTML = '';
    filteredData.forEach(record => {
      const row = `
        <tr>
          <td>${record.country}</td>
          <td>${record.company}</td>
          <td>${record.emissions}</td>
          <td>${record.source}</td>
          <td>${record.date}</td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  }

  // Tabelle und Formular beim Laden der Seite initialisieren
  document.addEventListener('DOMContentLoaded', () => {
    populateTable();
    document.getElementById('addRecordForm').addEventListener('submit', addRecord);
    document.getElementById('searchInput').addEventListener('input', search);
  });



 