let numberOfMonth = prompt("Який номер поточного місяця?");
let month;
switch (numberOfMonth) {
  case "1":
    month = "Січень";
    alert("Зима");
    break;

  case "2":
    month = "Лютий";
    alert("Зима");
    break;

  case "3":
    month = "Березень";
    alert("Весна");
    break;

  case "4":
    month = "Квітень";
    alert("Весна");
    break;

  case "5":
    month = "Травень";
    alert("Весна");
    break;

  case "6":
    month = "Червень";
    alert("Літо");
    break;

  case "7":
    month = "Липень";
    alert("Літо");
    break;

  case "8":
    month = "Серпень";
    alert("Літо");
    break;

  case "9":
    month = "Вересень";
    alert("Осінь");
    break;

  case "10":
    month = "Жовтень";
    alert("Осінь");
    break;

  case "11":
    month = "Листопад";
    alert("Осінь");
    break;

  case "12":
    month = "Грудень";
    alert("Зима");
    break;

  default:
    alert("Введіть інший номер місяця");
    console.log(message);
}
