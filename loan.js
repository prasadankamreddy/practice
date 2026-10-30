function check() {
    const username = document.getElementById('name').value.trim();
    const cibil = document.getElementById('cibil').value;
    const salary = document.getElementById('Salary').value;

    const status = document.getElementById('status');
    const loanimg = document.getElementById('loanimg');

    const usererror = document.getElementById('usererror');
    const cibilerror = document.getElementById('cibilerror');
    const salaryerror = document.getElementById('salaryerror');

    // Clear previous errors
    usererror.textContent = "";
    cibilerror.textContent = "";
    salaryerror.textContent = "";

    // Validation
    let valid = true;

    if (username === "") {
        usererror.textContent = "Please enter a valid name";
        usererror.className = "text-danger";
        valid = false;
    }

    if (cibil === "") {
        cibilerror.textContent = "Please enter a valid cibil score";
        cibilerror.className = "text-danger";
        valid = false;
    }

    if (salary === "") {
        salaryerror.textContent = "Please enter a valid salary";
        salaryerror.className = "text-danger";
        valid = false;
    }

    // Stop execution if fields are empty
    if (!valid) {
        status.textContent = "Please fill all fields!";
        loanimg.src = "frame.png";
        return;
    }

    // Loan Calculation
    let loanamount = 0;

    if (cibil >= 800 && salary >= 50000) {
        loanamount = '20 Lakhs';
    } else if (cibil >= 750 && salary >= 45000) {
        loanamount = '15 Lakhs';
    } else if (cibil >= 700 && salary >= 40000) {
        loanamount = '10 Lakhs';
    } else if (cibil >= 650 && salary >= 35000) {
        loanamount = '5 Lakhs';
    }

    // Final Result
    if (loanamount == 0) {
        status.textContent = `Sorry ${username} Better Luck Next Time!`;
        status.className = 'text-bg-danger my-2 p-3';
        loanimg.src = 'rejected.jpg';
    } else {
        status.textContent = `Congratulations ${username}! You are eligible for ${loanamount}`;
        status.className = 'text-bg-success my-2 p-3';
        loanimg.src = 'approved.avif';
    }
}