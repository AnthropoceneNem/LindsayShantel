const numInput3 = document.getElementById('numInput3');
const generateBtn = document.getElementById('generateTable');
const clearBtn3 = document.getElementById('clearTable');
const tableResult = document.getElementById('tableResult');

generateBtn.addEventListener('click', () => {
    const n = Number(numInput3.value);

    // Validate input
    if (isNaN(n) || n < 1 || n > 20) {
        tableResult.textContent = 'Please enter a valid number (1 to 20).';
        tableResult.style.color = 'crimson';
        return;
    }

    tableResult.style.color = 'black';
    let output = '<ul>';
    for (let i = 1; i <= 12; i++) {
        output += `<li>${n} × ${i} = ${n * i}</li>`;
    }
    output += '</ul>';

    tableResult.innerHTML = output;
});

// Clear button
clearBtn3.addEventListener('click', () => {
    numInput3.value = '';
    tableResult.innerHTML = '';
});
