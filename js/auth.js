// Very small demo auth using localStorage. Replace with real auth (Supabase/Firebase) later.
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm')
    const signupForm = document.getElementById('signupForm')

    if (loginForm) {
        loginForm.addEventListener('submit', e => {
            e.preventDefault();
            const email = document.getElementById('email').value
                // naive check — for demo only
            if (localStorage.getItem('user:' + email)) {
                alert('Logged in (demo)')
                location.href = 'dashboard.html'
            } else {
                alert('No user found. Please sign up first.')
            }
        })
    }

    if (signupForm) {
        signupForm.addEventListener('submit', e => {
            e.preventDefault();
            const name = document.getElementById('name').value
            const email = document.getElementById('email').value
            const password = document.getElementById('password').value
            localStorage.setItem('user:' + email, JSON.stringify({ name, email }))
            alert('Account created (demo). You can now log in.')
            location.href = 'login.html'
        })
    }
})