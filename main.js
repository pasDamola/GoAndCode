let twitterRoot = document.getElementById("react-root");
twitterRoot.parentNode.removeChild(twitterRoot);
let body = document.body;
let image = document.createElement("img");
image.setAttribute("width", "100%");
image.setAttribute("height", "100%");
image.src = ("src", "https://image.shutterstock.com/image-vector/abstract-futuristic-cyberspace-binary-code-600w-740523562.jpg");
body.appendChild(image);

