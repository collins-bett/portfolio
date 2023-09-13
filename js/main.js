/** @format */

//send contact form message
let returnedData;
function validateInputs(name, email, message) {
  var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (name.length < 1) {
    returnedData = "Your name should have at least 2 characters";
    return false;
  } else if (!re.test(email)) {
    returnedData = "Please enter a valid email address";
    return false;
  } else if (message.length < 1) {
    returnedData = "Your message should have at least 2 characters";
    return false;
  } else {
    return true;
  }
}
$("#myForm").on("submit", (e) => {
  e.preventDefault();
  validate();
});
function validate() {
  $(".new_loader").fadeIn("slow");
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#message").val();

  if (validateInputs(name, email, message)) {
    $.post(
      "send_mail.php",
      { name_php: name, email_php: email, message_php: message },
      function (data) {
        if (data == "Message Sent Successfully!") {
          swal({
            showConfirmButton: false,
            title: data,
            text: "",
            icon: "success",
            button: false,
            customClass: "swal-popup",
            timer: 2000,
          });
          $("#name").val("");
          $("#email").val("");
          $("#message").val("");
          $(".new_loader").fadeOut("slow");
        } else {
          swal({
            showConfirmButton: false,
            title: data,
            text: "",
            icon: "error",
            button: false,
            timer: 2000,
          });
          $(".new_loader").fadeOut("slow");
        }
      }
    );
  } else {
    swal({
      showConfirmButton: false,
      title: returnedData,
      text: "",
      icon: "warning",
      button: false,
      timer: 2000,
    });
    $(".new_loader").fadeOut("slow");
  }
  return false;
}

// $("#sendm").on("click", validate);
