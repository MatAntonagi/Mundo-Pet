const phoneInput = document.getElementById('phone');

export function phoneMask() {
    phoneInput.addEventListener('input',  () => {
        let value = phoneInput.value.replace(/\D/g, ''); // remove o que não é número. 
        if (value.length > 11) {
            value = value.slice(0, 11); // limita a 11 dígitos.
        }

        // Format the phone number
        if (value.length > 6) {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // formata -> (XX) XXXXX-XXXX
        } else if (value.length > 2) {
            value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2'); // formata -> (XX) XXXXX
        } else if (value.length > 0) {
            value = value.replace(/(\d{0,2})/, '($1'); // formata -> (XX
        }

        phoneInput.value = value;
    })
}

export function firstCapitalLetter(inputElement) {
  inputElement.addEventListener("input", () => {
    let value = inputElement.value;

    if (value.length > 0) {
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }

    inputElement.value = value;
  });
}