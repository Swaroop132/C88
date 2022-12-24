var canvas = new fabric.Canvas('myCanvas')

BallY = 0;
BallX = 0;
HoleY = 400;
HoleX = 800;

block_image_width = 5;
block_image_height = 5;

function load_img() {
	fabric.Image.fromURL("golf-h.png", function (Img) {
		HoleObj = Img;
		HoleObj.scaleToWidth(50);
		HoleObj.scaleToHeight(50);
		HoleObj.set({
			top: HoleY,
			left: HoleX
		});
		canvas.add(HoleObj);
	});
	new_image();
}

function new_image() {
	fabric.Image.fromURL("ball.png", function (Img) {
		BallObj = Img;
		BallObj.scaleToWidth(50);
		BallObj.scaleToHeight(50);
		BallObj.set({
			top: BallY,
			left: BallX
		});
		canvas.add(BallObj);
	});
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ((BallX == HoleX) && (BallY == HoleY)) {
		canvas.remove(BallObj);
	} else {
		if (keyPressed == '38') {
			up();
			console.log("up");
		}
		if (keyPressed == '40') {
			down();
			console.log("down");
		}
		if (keyPressed == '37') {
			left();
			console.log("left");
		}
		if (keyPressed == '39') {
			right();
			console.log("right");
		}
	}

	function up() {
		if (BallY >= 0) {
			BallY = BallY - block_image_height;
			console.log("Block image height = " + block_image_height);
			console.log("When the up key is pressed, x = " + BallX + ", y = " + BallY)
			canvas.remove(BallObj);
			new_image();
		}

	}

	function down() {
		if (BallY <= 450) {
			BallY = BallY + block_image_height;
			console.log("Block image height = " + block_image_height);
			console.log("When the up key is pressed, x = " + BallX + ", y = " + BallY)
			canvas.remove(BallObj);
			new_image();
		}
	}

	function left() {
		if (BallX > 5) {
			BallX = BallX - block_image_width;
			console.log("Block image height = " + block_image_height);
			console.log("When the up key is pressed, x = " + BallX + ", y = " + BallY)
			canvas.remove(BallObj);
			new_image();
		}
	}

	function right() {
		if (BallX <= 1050) {
			BallX = BallX + block_image_width;
			console.log("Block image height = " + block_image_height);
			console.log("When the up key is pressed, x = " + BallX + ", y = " + BallY)
			canvas.remove(BallObj);
			new_image();
		}
	}

}

