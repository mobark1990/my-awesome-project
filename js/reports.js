document.addEventListener('DOMContentLoaded', () => {
    loadReports();
});

function loadReports() {
    const transferredData = JSON.parse(localStorage.getItem('transferredData')) || [];
    const totalQuantityTableBody = document.getElementById('total-quantity-table').getElementsByTagName('tbody')[0];
    const totalBuyPriceTableBody = document.getElementById('total-buy-price-table').getElementsByTagName('tbody')[0];

    let totalQuantities = {};
    let totalBuyPrices = {};

    transferredData.forEach(entry => {
        entry.items.forEach(item => {
            if (!totalQuantities[item.item]) {
                totalQuantities[item.item] = 0;
            }
            if (!totalBuyPrices[item.item]) {
                totalBuyPrices[item.item] = 0;
            }
            totalQuantities[item.item] += item.quantity;
            totalBuyPrices[item.item] += item.buyPrice * item.quantity;
        });
    });

    for (const [item, quantity] of Object.entries(totalQuantities)) {
        const row = totalQuantityTableBody.insertRow();
        row.innerHTML = `<td>${item}</td><td>${quantity}</td>`;
    }

    for (const [item, totalBuyPrice] of Object.entries(totalBuyPrices)) {
        const row = totalBuyPriceTableBody.insertRow();
        row.innerHTML = `<td>${item}</td><td>${totalBuyPrice}</td>`;
    }

    document.getElementById('overall-total-quantity').innerText = `إجمالي الكمية: ${Object.values(totalQuantities).reduce((acc, curr) => acc + curr, 0)}`;
    document.getElementById('overall-total-buy-price').innerText = `إجمالي تكلفة الشراء: ${Object.values(totalBuyPrices).reduce((acc, curr) => acc + curr, 0)}`;
}
