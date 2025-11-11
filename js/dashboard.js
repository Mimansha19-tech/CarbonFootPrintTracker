document.addEventListener('DOMContentLoaded', () => {
    const summary = document.getElementById('summary')
    if (summary) {
        summary.innerHTML = '<strong>Welcome!</strong> This is a starter dashboard.\n' +
            '<p>Your AI tips will appear here.</p>'
    }
})