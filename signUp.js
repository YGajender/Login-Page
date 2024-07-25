const usernameExp = /^[a-z0-9]{4,20}$/;
const phoneExp = /^[0-9]{10}$/;
const emailExp = /^[a-zA-Z0-9\.\_\-]+\@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$/;
const passExp = /^[a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\-\+\/\>\<]{6,20}$/;

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.querySelector("#userName");
    const phonenumber = document.querySelector("#userPhoneNo");
    const email = document.querySelector("#userEmailInput");
    const password = document.querySelector("#passwordInput");
    const cpassword = document.querySelector("#userConfirmPassword");

    //data sate to local storage and get the data from local storage to console
    const userdata = {
        username: username.value,
        phonenumber: phonenumber.value,
        email: email.value,
        password: password.value,
        cpassword: cpassword.value
    };

    console.log(JSON.stringify(userdata), "JSON.stringify(userdata)")

    const setToLocal = localStorage.setItem('userdata', JSON.stringify(userdata));

    console.log(`>>>>>>>>>setToLocal`, setToLocal);

    const storedUserdataJSON = localStorage.getItem('userdata');
    // if (storedUserdataJSON) {
    //     document.write('submit')
    // } else {
    //     document.write('not submit')
    // }
    const storedUserdata = JSON.parse(storedUserdataJSON);
    console.log('local storage:', storedUserdata);

    if (
        check(username, usernameExp, "Only alphabets & numbers allowed. Range 4-20")
    ) {
        if (check(phonenumber, phoneExp, "Only numbers allowed. Max 10 chars")) {
            if (check(email, emailExp, "Enter a valid email address")) {
                if (
                    check(
                        password,
                        passExp,
                        "Range 6-20. Allowed sp. chars [!@#$%^&*()_-+/><]"
                    )
                ) {
                    if (
                        check2(password, cpassword, "Confirm Password must match password")
                    ) { }
                }
            }
        }
    }
    check2(password, cpassword, "Only numbers allowed. Max 10 chars");
});


function check(element, regex, msg) {
    if (element.value.match(regex)) {
        element.parentElement.nextElementSibling.innerHTML = "";
        return true;
    } else {
        element.parentElement.nextElementSibling.innerHTML = msg;
        return false;
    }
}

function check2(element1, element2, msg) {
    if (element1.value === element2.value && element2.value > 0) {
        element2.parentElement.nextElementSibling.innerHTML = "";
        return true;
    } else {
        element2.parentElement.nextElementSibling.innerHTML = msg;
        return false;
    }
}

