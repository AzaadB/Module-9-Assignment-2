const timeDisplay = document.querySelectorAll('.timeDisplay');
// Gets all elements that display time
const timeZones = ["America/Argentina/Buenos_Aires", "Africa/Johannesburg", "America/New_York",
    "Europe/Paris", "Australia/Sydney", "America/Vancouver",];
// Defines timezones to display time
for (let i = 0; i < timeDisplay.length; i++) {
    // Iterates through each time display element
    setInterval(function () {
        // Function passed in will run at interval defined below (creates a 'tick')
        let time = new Date();
        // Creates new Date object
        time = time.toLocaleTimeString("en-US", { timeZone: timeZones[i] });
        // Sets time format to "en-US" timezone to i in array
        timeDisplay[i].innerText = time
        // Set this to be the displayed time in time display element i
    }, 1000);
    // Time updated every 1000 milliseconds (i.e. every second)
}