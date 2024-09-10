document.addEventListener('DOMContentLoaded', async () => {
    const form = document.getElementById('submission-form');
    const input = document.getElementById('submission-input');
    const submissionList = document.getElementById('submission-list');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const submission = input.value.trim();
        
        if (submission === '') {
            alert('Please enter a valid submission.');
            return;
        }
        
        try {
            const response = await fetch('/api/submissions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ submission }),
            });
            
            const data = await response.json();
            
            if (data.success) {
                const li = document.createElement('li');
                li.textContent = submission;
                submissionList.appendChild(li);
                input.value = ''; // Clear the input field
            } else {
                alert('Error submitting your entry. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    });
    
    // Fetch and display all previous submissions on page load
    try {
        const response = await fetch('/api/submissions');
        const data = await response.json();
        
        data.forEach(submission => {
            const li = document.createElement('li');
            li.textContent = submission.text;
            submissionList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching submissions:', error);
        alert('Failed to load submissions.');
    }
});
