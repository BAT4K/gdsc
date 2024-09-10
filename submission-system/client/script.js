// client/script.js

document.addEventListener('DOMContentLoaded', async () => {
    const form = document.getElementById('submission-form');
    const input = document.getElementById('submission-input');
    const submissionList = document.getElementById('submission-list');

    // Function to create a submission list item with a delete button
    function createSubmissionListItem(submission) {
        const li = document.createElement('li');
        li.classList.add('flex', 'justify-between', 'items-center', 'bg-white', 'p-2', 'rounded', 'shadow');

        const span = document.createElement('span');
        span.textContent = submission.text;

        // Create delete button as an "X"
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '×';
        deleteButton.classList.add(
            'text-red-500', 
            'text-xl', 
            'font-semibold', 
            'hover:text-red-700', 
            'transition', 
            'duration-200', 
            'ease-in-out'
        );

        // Event listener for delete button
        deleteButton.addEventListener('click', async () => {
            if (confirm('Are you sure you want to delete this submission?')) {
                try {
                    const response = await fetch(`/api/submissions/${submission._id}`, {
                        method: 'DELETE',
                    });
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    const data = await response.json();
                    if (data.success) {
                        // Remove the list item from the DOM
                        submissionList.removeChild(li);
                    } else {
                        alert('Error deleting submission. Please try again.');
                    }
                } catch (error) {
                    console.error('Error deleting submission:', error);
                    alert('An error occurred while deleting the submission.');
                }
            }
        });

        li.appendChild(span);
        li.appendChild(deleteButton);

        return li;
    }

    // Handle form submission
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

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            if (data.success) {
                const newSubmission = data.submission;
                const li = createSubmissionListItem(newSubmission);
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

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Ensure the data is an array
        if (Array.isArray(data)) {
            data.forEach((submission) => {
                if (submission.text) {
                    const li = createSubmissionListItem(submission);
                    submissionList.appendChild(li);
                }
            });
        } else {
            throw new Error('Unexpected data format');
        }
    } catch (error) {
        console.error('Error fetching submissions:', error);
        alert('Failed to load submissions.');
    }
});
