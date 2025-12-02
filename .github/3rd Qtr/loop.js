const num = document.getElementById('numInput');
const numInputBtn = document.getElementById('count');
const resultDiv = document.getElementById('countResult');
const resultDivClear = document.getElementById('clearCount');

numInputBtn.addEventListener('click', () => {
    const n = Number(num.value);
    if (isNaN(n) || n < 1  || n > 1000) {
        console.error('Please enter a valid positive number. (1 to 1000)');
        // ageResult.textContent = 'Please enter a valid number for number.';
        // ageResult.style.color = 'crimson';
        return;
    }
    
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
    // resultDiv.innerHTML = output.trim();
});