const validateFields = (form, fieldsArray) => {
 
  fieldsArray.forEach(field => {
    field.removeClass('input-error')
    if(field.val().trim() === "") {
      field.addClass('input-error')
      field.attr('placeholder', "Enter data")

    }
  });

  const inputErrors = form.find('.input-error');

  return inputErrors.length === 0
};

$('.form').submit(e => {
  e.preventDefault();

  const form = $(e.currentTarget);

  const name = form.find('[name="name"]');
  const phone = form.find('[name="phone"]');
  const comment = form.find('[name="comment"]');
  const to = form.find('[name="to"]');

  const inputsToValid = [name,phone,comment,to,];

  const isValid = validateFields(form,inputsToValid);

  const modal = $('#modal-ajax');
  const modalContent = modal.find('.modal-ajax__content')
  
  modalContent.removeClass('modal-ajax__content_error')
  
  if(isValid) {

    const requset = $.ajax({
      url:"https://webdev-api.loftschool.com/sendmail",
      method:"post",
      dataType: 'json',
      data: {
        name: name.val(),
        phone: phone.val(),
        comment: comment.val(),
        to: to.val(),
      },

    });

    requset.done(data => {
      modalContent.text(data.message);
      let form = document.querySelector(".form").reset();
      // $("form")[0].reset();
    });

    requset.fail(data => {
      const message = data.responseJSON.message;
      modalContent.text(message);
      modalContent.addClass('modal-ajax__content_error')
    });

    requset.always(() => {
      $.fancybox.open({
        src:"#modal-ajax",
        type:"inline"
     })
    })
  }



});

$(".app-submit-btn").on("click", e => {
  e.preventDefault();

  $.fancybox.close();
})

