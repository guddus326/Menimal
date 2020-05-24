function message()
{
	(async () => {
		const { value: formValues } = await Swal.fire({
			showCancelButton: true,
			title: 'Menimal 하고 선물받자!',
			text: "이름과 전화번호를 입력해주세요.",
			html:
		    '<input id="swal-input1" class="swal2-input" value="name">' +
		    '<input id="swal-input2" class="swal2-input" value="phone">',
		  focusConfirm: false,
		  preConfirm: () => {
		    return [
		      document.getElementById('swal-input1').value,
		      document.getElementById('swal-input2').value
		    ]
		  }
		})
		if (formValues) {
		  Swal.fire(JSON.stringify(formValues))
		}
	})()
};