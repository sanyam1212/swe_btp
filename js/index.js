var $TABLE = $('#table');
var $BTN = $('#export-btn');
var arr = new Array();
var i=1;
//var $EXPORT = $('#export');

$('.table-add').click(function () {
  var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide table-line');
  $TABLE.find('table').append($clone);
});

$('.table-remove').click(function () {
  $(this).parents('tr').detach();
});

$('.table-up').click(function () {
  var $row = $(this).parents('tr');
  if ($row.index() === 1) return; 
  $row.prev().before($row.get(0));
});

$('.table-down').click(function () {
  var $row = $(this).parents('tr');
  $row.next().after($row.get(0));
});

//jQuery helpers
jQuery.fn.pop = [].pop;
jQuery.fn.shift = [].shift;

function exportTableToCSV(filename) {
    var csv = [];
    var rows = document.querySelectorAll("table tr");
    
    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");
        
        for (var j = 0; j < cols.length; j++) 
            row.push(cols[j].innerText);
        
        csv.push(row.join(","));        
    }

    // Download CSV file
    downloadCSV(csv.join("\n"), filename);
}

function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;
    csvFile = new Blob([csv], {type: "text/csv"});                // CSV file
    downloadLink = document.createElement("a");                   // Download link
    downloadLink.download = filename;                             // File name
    downloadLink.href = window.URL.createObjectURL(csvFile);      // Create a link to the file
    downloadLink.style.display = "none";                          // Hide download link
    document.body.appendChild(downloadLink);                      // Add the link to DOM
    downloadLink.click();                                         // Click download link
}

function add(){
   /* var d = new Date(),
    h = (d.getHours()<10?'0':'') + d.getHours(),
    m = (d.getMinutes()<10?'0':'') + d.getMinutes();
    s = (d.getSeconds()<10?'0':'') + d.getSeconds();
  var time = h + ':' + m + ':' + s;
  alert(time);
  arr.push(time);*/
  document.getElementById("serial").innerHTML = i;
  //document.getElementById("ts").innerHTML = time;
  i++;
}
/*
function change(){
  //document.getElementById("select");
  var d = new Date(),
    h = (d.getHours()<10?'0':'') + d.getHours(),
    m = (d.getMinutes()<10?'0':'') + d.getMinutes();
    s = (d.getSeconds()<10?'0':'') + d.getSeconds();
  var time1 = h + ':' + m + ':' + s;
  alert(time1);
  document.getElementById("ts").innerHTML ="hi";
  var s = document.getElementById("serial").innerHTML;
  alert(s);
  document.getElementById("tab").rows[i-1].cells[5].innerHTML = time1;
}*/