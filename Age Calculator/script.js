document.addEventListener("DOMContentLoaded", function () {
    let userInput = document.getElementById("date");
    let calculateBtn = document.getElementById("calculateBtn");
    let result = document.getElementById("result");

    if (!userInput || !calculateBtn || !result) {
        console.error("Error: Missing HTML elements.");
        return;
    }

    userInput.max = new Date().toISOString().split("T")[0];

    calculateBtn.addEventListener("click", function () {
        calculateAge();
    });

    function calculateAge() {
        let birthDate = new Date(userInput.value);

        if (isNaN(birthDate)) {
            alert("Please enter a valid date!");
            return;
        }

        let d1 = birthDate.getDate();
        let m1 = birthDate.getMonth() + 1;
        let y1 = birthDate.getFullYear();

        let today = new Date();
        let d2 = today.getDate();
        let m2 = today.getMonth() + 1;
        let y2 = today.getFullYear();

        let d3, m3, y3;
        y3 = y2 - y1;

        if (m2 >= m1) {
            m3 = m2 - m1;
        } else {
            y3--;
            m3 = 12 + m2 - m1;
        }

        if (d2 >= d1) {
            d3 = d2 - d1;
        } else {
            m3--;
            d3 = getDaysInMonth(y1, m1 - 1) + d2 - d1; 
        }

        if (m3 < 0) {
            m3 = 11;
            y3--;
        }

        result.innerText = `You are ${y3} years, ${m3} months, and ${d3} days old.`;
        console.log(`Age: ${y3} years, ${m3} months, ${d3} days`);
    }

    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();  
    }
});
