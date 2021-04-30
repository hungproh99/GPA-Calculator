var rows = $(document.querySelector("#ctl00_mainContent_divGrade > table.table.table-hover > tbody")).find("tr:has(td)"),
    count = 0,
    gpa = 0,
    total = 0;

for (var i = 0; i < rows.length; i++) {
    cols = rows[i].querySelectorAll("td, th");
    if (cols[3].innerText.includes("VOV") ||
        cols[3].innerText.includes("GDQP") ||
        cols[3].innerText.includes("TRS") ||
        cols[3].innerText.includes("LAB")) {
        rows.splice(i, 1), i--;
    }
}

for (var i = 0; i < rows.length; i++) {
    cols = rows[i].querySelectorAll("td, th");
    if (cols[9].innerText.includes("Passed")) {
        count++;
        total += Number(cols[8].innerText) * Number(cols[7].innerText);
    }
}

gpa = total / (count * 3);

$(document.getElementById("ctl00_mainContent_lblRollNumber")).append(' - <span class="label label-warning">GPA: ' + gpa.toFixed(2) + '</span>');