document.addEventListener('DOMContentLoaded', () => {
    loadTransferredData();
});

function loadTransferredData() {
    const transferredData = JSON.parse(localStorage.getItem('transferredData')) || [];
    const tableBody = document.getElementById('transferred-data-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    transferredData.forEach((entry, index) => {
        entry.items.forEach(item => {
            const row = tableBody.insertRow();
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${entry.date}</td>
                <td>${entry.day}</td>
                <td>${entry.branchName}</td>
                <td>${item.item}</td>
                <td>${item.quantity}</td>
                <td>${item.buyPrice}</td>
                <td>${item.revenue}</td>
                <td>${item.salePrice}</td>
                <td>${entry.cash}</td>
                <td>${entry.network}</td>
                <td>${entry.expenses}</td>
                <td>${entry.note}</td>
                <td><button onclick="deleteEntry(${index})">حذف</button></td>
            `;
        });
    });
}

function deleteEntry(index) {
    const transferredData = JSON.parse(localStorage.getItem('transferredData')) || [];
    transferredData.splice(index, 1);
    localStorage.setItem('transferredData', JSON.stringify(transferredData));
    loadTransferredData();
}
