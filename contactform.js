window.onload = function() {
    var contactForm = document.getElementById('contactform');

    contactForm.onsubmit = function(e) {
        e.preventDefault(); // prevent default form submission

        // save to localStorage
        localStorage.setItem('name', document.getElementById('name').value);
        localStorage.setItem('email', document.getElementById('email').value);
        localStorage.setItem('phone', document.getElementById('phone').value);
        localStorage.setItem('date', document.getElementById('date').value);
            // radio buttons
        var radOptions = document.getElementsByName('radOption');
        for(var i = 0; i < radOptions.length; i++) {
            if(radOptions[i].checked) {
                localStorage.setItem('radOption', radOptions[i].value);
                break;
            }
        }
            // checkboxes
        var checkValues = [];
        var checkOptions = document.getElementsByName('checkOption');
        for(var i = 0; i < checkOptions.length; i++) {
            if(checkOptions[i].checked) {
                checkValues.push(checkOptions[i].value);
            }
        }
        localStorage.setItem('checkOption', JSON.stringify(checkValues));
            // dropdown
        localStorage.setItem('dropOp', document.getElementById('dropOp').value);
            // textarea
        localStorage.setItem('message', contactForm.elements['message'].value);

        alert('Form submitted');
    };

    contactForm.onreset = function() { // clear local storage
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('phone');
        localStorage.removeItem('date');
        localStorage.removeItem('radOption');
        localStorage.removeItem('checkOption');
        localStorage.removeItem('dropOp');
        localStorage.removeItem('message');
        
        alert('Form and Data Cleared');
    };
};