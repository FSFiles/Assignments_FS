function loadData() {
    const data = JSON.parse(localStorage.getItem("formData")) || []
    const table = document.getElementById("TableShow")

    table.innerHTML = ""
    
    data.forEach((item) => {
        table.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.phone}</td>
                <td>${item.reg}</td>
            </tr>
        `
    })
}

loadData()

document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault()

    const name = document.getElementById("nameInput").value
    const phone = document.getElementById("phoneInput").value
    const reg = document.getElementById("RegInput").value

    if (!name || !phone || !reg) {
        alert("Fill all fields")
        return
    }
    const data = JSON.parse(localStorage.getItem("formData")) || []

    data.push({ name, phone, reg })

    localStorage.setItem("formData", JSON.stringify(data))

    alert("Data added successfully")

    this.reset()

    loadData()
})