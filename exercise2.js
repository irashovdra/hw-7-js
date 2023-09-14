let drink = prompt("Який напій Ви бажаєте?");
let message;
switch (drink) {
  case "Кава":
    message = "Сума до оплати - 40 грн";
    console.log(message);
    break;

  case "Чай":
    message = "Сума до оплати - 35 грн";
    console.log(message);
    break;

  case "Сік":
    message = "Сума до оплати - 30 грн";
    console.log(message);
    break;

  default:
    message = "Oops.. Цього напія немає в наявності";
    console.log(message);
}
