let lang = prompt("Enter language");
let message;
switch (lang) {
  case "ua":
    message = "Січень";
    console.log(message);
    break;

  case "en":
    message = "January";
    console.log(message);
    break;

    case "fr":
        message = "Janvier";
        console.log(message);
        break;
        
    default:
        message = "Введіть іншу мову";
        console.log(message);
}
