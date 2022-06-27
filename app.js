setInterval(showTime, 1000);
        function showTime() {
            let time = new Date();
            let hour = time.getHours();
            let min = time.getMinutes();
            let sec = time.getSeconds();
            let period = document.getElementById("period");
 
            if (hour > 12) {
                hour -= 12;
                period.innerHTML = "PM";
            }
            if (hour == 0) {
                hr = 12;
                period.innerHTML = "AM";
            }
 
            hour = hour < 10 ? "0" + hour : hour;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;
 
 
            document.getElementById("hour").innerHTML = hour;
            document.getElementById("minutes").innerHTML = min;
            document.getElementById("seconds").innerHTML = sec;
        }
        showTime();

        function getDate() {
            let date = new Date ();
            let today = date.toLocaleDateString();
            let datum = document.getElementById("datum");
            datum.innerText = today;
       };

getDate()
 

