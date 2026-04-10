let inventory = [];

function addProduct() {
    let name = document.getElementById("productName").value;
    let qty = parseInt(document.getElementById("productQty").value);

    if (name === "" || isNaN(qty)) {
        alert("Enter valid details");
        return;
    }

    let product = inventory.find(p => p.name === name);

    if (product) {
        product.qty += qty;
    } else {
        inventory.push({ name: name, qty: qty });
    }

    updateTable();
}

function sellProduct() {
    let name = document.getElementById("sellName").value;
    let qty = parseInt(document.getElementById("sellQty").value);

    let product = inventory.find(p => p.name === name);

    if (!product) {
        alert("Product not found");
        return;
    }

    if (product.qty < qty) {
        alert("Not enough stock");
        return;
    }

    product.qty -= qty;  // Similar to DB Trigger Logic

    updateTable();
}

function updateTable() {
    let table = document.querySelector("#inventoryTable tbody");
    table.innerHTML = "";

    inventory.forEach(p => {
        let row = `<tr>
                    <td>${p.name}</td>
                    <td>${p.qty}</td>
                   </tr>`;
        table.innerHTML += row;
    });
}
