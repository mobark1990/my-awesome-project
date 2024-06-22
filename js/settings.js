document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('payroll-form').addEventListener('submit', submitPayroll);
    document.getElementById('delivery-form').addEventListener('submit', submitDeliveryReceipt);
});

function submitPayroll(event) {
    event.preventDefault();
    const payrollData = {
        employeeName: document.getElementById('employee-name').value,
        salary: parseFloat(document.getElementById('salary').value)
    };

    const payrollRecords = JSON.parse(localStorage.getItem('payrollData')) || [];
    payrollRecords.push(payrollData);
    localStorage.setItem('payrollData', JSON.stringify(payrollRecords));
    alert('تم سحب الراتب بنجاح!');
    document.getElementById('employee-name').value = '';
    document.getElementById('salary').value = '';
}

function submitDeliveryReceipt(event) {
    event.preventDefault();
    const deliveryData = {
        transactionType: document.getElementById('transaction-type').value,
        item: document.getElementById('item').value,
        quantity: parseFloat(document.getElementById('quantity').value),
        receiverName: document.getElementById('receiver-name').value
    };

    const deliveryRecords = JSON.parse(localStorage.getItem('deliveryData')) || [];
    deliveryRecords.push(deliveryData);
    localStorage.setItem('deliveryData', JSON.stringify(deliveryRecords));
    alert('تم إرسال المذكرة بنجاح!');
    document.getElementById('transaction-type').value = 'تسليم';
    document.getElementById('item').value = 'حاشي';
    document.getElementById('quantity').value = '';
    document.getElementById('receiver-name').value = '';
}
