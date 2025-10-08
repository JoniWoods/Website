// Secure form submission handler
// This obfuscates the access key and adds additional security measures

(function() {
    'use strict';
    
    // Obfuscated access key (base64 encoded)
    const encodedKey = 'M2NhMjNiYTMtYzIxYi00YmYwLTgxN2EtMTBkMWFjZTQ4OGVh';
    
    // Decode the access key
    function decodeKey() {
        try {
            return atob(encodedKey);
        } catch (e) {
            console.error('Failed to decode access key');
            return null;
        }
    }
    
    // Form submission handler
    function handleFormSubmission(event) {
        event.preventDefault();
        
        const form = event.target;
        const formData = new FormData(form);
        
        // Add the decoded access key
        const accessKey = decodeKey();
        if (!accessKey) {
            alert('Form configuration error. Please contact support.');
            return;
        }
        
        formData.set('access_key', accessKey);
        
        // Add bot protection
        const botCheck = formData.get('botcheck');
        if (botCheck) {
            // This is likely a bot
            return false;
        }
        
        // Add timestamp for additional verification
        formData.set('_timestamp', new Date().toISOString());
        
        // Submit to Web3Forms
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // Redirect to success page
                window.location.href = '/transformation-success.html';
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form. Please try again.');
        });
    }
    
    // Initialize when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('transformation-form');
        if (form) {
            form.addEventListener('submit', handleFormSubmission);
        }
    });
})();