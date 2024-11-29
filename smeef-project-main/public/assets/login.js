document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulated login logic
    fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.success) {
                // Save role in local storage and redirect
                localStorage.setItem('role', data.role);
                switch (data.role) {
                    case 'admin':
                        window.location.href = '/dashboards/admin-dashboard.html';
                        break;
                    case 'mentor':
                        window.location.href = '/dashboards/mentor-dashboard.html';
                        break;
                    case 'single-mother':
                        window.location.href = '/dashboards/single-mother-dashboard.html';
                        break;
                }
            } else {
                alert('Invalid credentials.');
            }
        });
});
