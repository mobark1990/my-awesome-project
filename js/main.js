document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('main-form').addEventListener('submit', transferData);
});

function transferData(event) {
    event.preventDefault();
    const formData = {
        branchName: document.getElementById('branch-name').value,
        cash: parseInt(document.getElementById('cash').value) || 0,
        network: parseInt(document.getElementById('network').value) || 0,
        expenses: parseInt(document.getElementById('expenses').value) || 0,
        note: document.getElementById('note').value,
        items: [
            {
                item: 'حاشي',
                quantity: parseInt(document.getElementById('quantity-hashi').value) || 0,
                buyPrice: parseInt(document.getElementById('buyPrice-hashi').value) || 0,
                salePrice: parseInt(document.getElementById('salePrice-hashi').value) || 0
            },
            {
                item: 'غنم',
                quantity: parseInt(document.getElementById('quantity-ghanam').value) || 0,
                buyPrice: parseInt(document.getElementById('buyPrice-ghanam').value) || 0,
                salePrice: parseInt(document.getElementById('salePrice-ghanam').value) || 0
            }
        ]
    };

    const transferredData = JSON.parse(localStorage.getItem('transferredData')) || [];
    transferredData.push(formData);
    localStorage.setItem('transferredData', JSON.stringify(transferredData));
    alert('تم نقل البيانات بنجاح!');
    clearFields();
}

function clearFields() {
    document.getElementById('branch-name').value = '';
    document.getElementById('cash').value = '';
    document.getElementById('network').value = '';
    document.getElementById('expenses').value = '';
    document.getElementById('note').value = '';
    document.getElementById('quantity-hashi').value = '';
    document.getElementById('buyPrice-hashi').value = '';
    document.getElementById('salePrice-hashi').value = '';
    document.getElementById('quantity-ghanam').value = '';
    document.getElementById('buyPrice-ghanam').value = '';
    document.getElementById('salePrice-ghanam').value = '';
}
