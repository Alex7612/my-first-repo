export { copyright };

/**Retrives HTML Element from id lastest-date. Then checks the year and replaces the 
 * inner HTML with the current year */
function copyright() {
    // Date
    var today = new Date();

    // HTMLElements
    var element = document.getElementById(latest-date);

    element.innerHTML = today.getFullYear;
    console.log(today.getFullYear);
}