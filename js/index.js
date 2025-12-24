document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("username").value.trim();
    const result = document.getElementById("resultCont");

    // Correct regex (works for basic email validation)
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
        result.innerHTML = "✅ Valid Email Address";
        result.style.color = "green";
    } else {
        result.innerHTML = "❌ Invalid Email Address";
        result.style.color = "red";
    }
});




