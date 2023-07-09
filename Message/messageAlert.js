function myAlert(msg) {
	if (confirm("Are you sure you want to Display the massage???")){
		alert(msg);
	}
	else {
		alert("Massage not Display as User Canceled Operation");
	}
}