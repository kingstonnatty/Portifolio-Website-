var notification = document.getElementById("notification");
var notificationPop= document.querySelector(".notification");
var story= document.querySelector(".story-view");
var newPost= document.querySelector(".new-post");
var container= document.querySelector(".main");
var cn = document.getElementById('close-not');
var r = document.querySelector(':root');
var body= document.getElementsByTagName("body");
const register = document.getElementById("register");

const form = document.getElementById('reg-form')
const email = document.getElementById('email');
const username = document.getElementById('username')
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();

    console.log("it works");
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerHTML = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const isValidRemail = remail => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(remail).toLowerCase());
}

function validateInputs() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const usernameValue = username.value.trim();



    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    if(usernameValue === '') {
      setError(username, 'Username can not be empty');
    }
    else {
      setSuccess(username);
    }



    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
        document.getElementById("register").onclick = function () {
          location.href = "index.html";
    }
      
  }

};
const displayNot = () => {
    notificationPop.style.display="block";

}

function closeNot(){
    notificationPop.style.display="none";
}
function addPost(){
    newPost.style.display="block";
    container.style.opacity=0.5;
}
function closePost(){
    newPost.style.display="none";
    container.style.opacity=1;
}
notification.addEventListener('click',displayNot );

  function light(){
    r.style.setProperty('--color-whites', '#e2d8d8');
    r.style.setProperty('--color-white', '#f0eef6');
    r.style.setProperty('--color-black', '#241e38');
    r.style.setProperty('--color-blue', '#1b78fa');
    r.style.setProperty('--color-gray', '#9e98b3');
  }
  function dark(){
    r.style.setProperty('--color-whites', '#222230');
    r.style.setProperty('--color-white', '#42435c');
    r.style.setProperty('--color-black', '#eeecff');
   
  }

  function showStory(){
    story.style.display = "block";
  }
  function closeStory(){
    story.style.display = "none";
  }

