document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault()
    const email = document.getElementById("username").value
    const result = document.getElementById("resultCont")
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (regex.test(email)) {
        result.innerHTML = "✅ Valid Email Address"
        result.style.color = "green"
    } else {
        result.innerHTML = "❌ Invalid Email Address"
        result.style.color = "red"
    }
})




