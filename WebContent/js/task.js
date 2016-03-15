self.addEventListener("message", messageReceived, false);

function messageReceived(event) {

	var result;
	if (event.data == "t1") {
		result = handleTask1();
	} else {
		result = "Another Task Completed";

	}

	self.postMessage(result);
}

function handleTask1() {
	for (var int = 0; int < 100000000000000; int++) {

	}
	return "Task 1 completed";
}
