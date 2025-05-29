let img;
let x = 0;
let speed = 5;
let 왼쪽이동 = false;
let 오른쪽이동 = true;

//씬 = 시작 > 지나감 > 회상 > 다시 > 끝
let 씬 = '시작';

let catX = 200;
let 고양이걷기 = [];
let 고양이걸음프레임 = 0;
let 뒤로걷기 = [];

let ratX = 480;
let 쥐보임 = true;
let 쥐걷기 = [];
let 쥐프레임 = 0;

function preload() {
	bg1 = loadImage("BG/친구.png");
	bg2 = loadImage("BG/주인.png");
	bg3 = loadImage("BG/들판.png");

	고양이걷기.push(loadImage("고양이걷기/111.png"));
	고양이걷기.push(loadImage("고양이걷기/222.png"));
	고양이걷기.push(loadImage("고양이걷기/333.png"));
	고양이걷기.push(loadImage("고양이걷기/444.png"));
	catSitImg = loadImage("고양이걷기/앉은.png");

	뒤로걷기.push(loadImage("고양이걷기/뒤1.png"));
	뒤로걷기.push(loadImage("고양이걷기/뒤2.png"));
	뒤로걷기.push(loadImage("고양이걷기/뒤3.png"));
	뒤로걷기.push(loadImage("고양이걷기/뒤4.png"));
	catSitImg2 = loadImage("고양이걷기/뒤앉은.png");

	쥐걷기.push(loadImage("lat/쥐1.png"));
	쥐걷기.push(loadImage("lat/쥐2.png"));
}

function setup() {
	createCanvas(900, 600);
	textSize(20);
	fill(255);
	textAlign(LEFT, TOP);
}

function draw() {
	background(0);
	image(bg1, x + 960, height / 2 - bg1.height / 2);
	image(bg2, x + 2120, height / 2 - bg2.height / 2);
	image(bg3, x + 3280, height / 2 - bg3.height / 2);

	let alpha = map(sin(frameCount * 0.1), -1, 1, 50, 200);

	if (씬 === "시작") {
		textSize(20);
		fill(255, alpha);
    textAlign(LEFT, TOP);
		text("스페이스 키를 눌러 시작", 20, 20);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(30);
    text("진정한 행복이란 무엇인가가", width / 2, height / 2 - 50);

	}

	if (씬 === "지나감") {
		filter(GRAY);

		if (오른쪽이동 == true) {
			if (keyIsDown(RIGHT_ARROW)) {
				x -= speed;

				if (x <= -4300) {
					catX += 2;
				}

				if (frameCount % 15 === 0) {
					고양이걸음프레임 = (고양이걸음프레임 + 1) % 고양이걷기.length;
				}
				image(고양이걷기[고양이걸음프레임], catX, 500);

				if (frameCount % 15 === 0) {
					쥐프레임 = (쥐프레임 + 1) % 쥐걷기.length;
				}
				image(쥐걷기[쥐프레임], ratX, 580);
			} else {
				image(쥐걷기[쥐프레임], ratX, 580);
				image(catSitImg, catX + 55, 480);
			}

		}
	}
  if (씬 == '다시') {
	  if (왼쪽이동 == true) {
	  	if (keyIsDown(LEFT_ARROW)) {
	  		x += speed;
	  		image(뒤로걷기[고양이걸음프레임], catX, 480);
	  		if (frameCount % 15 === 0) {
	  			고양이걸음프레임 = (고양이걸음프레임 + 1) % 뒤로걷기.length;
	  		}
	  	} else {
		  	image(catSitImg2, catX, 480);
		  }
    }
	}

	x = constrain(x, -4500, 100);
	catX = constrain(catX, 200, 500);
	ratX = constrain(ratX, 200, 710);

	fill(50);
	noStroke();
	rect(x + 5240, 0, 500, height);

	if (쥐보임) {
		if (x <= -4300) {
			ratX += 3;
		}
		if (ratX >= 710) {
			fill(250, 250, 0, alpha);
			ellipse(ratX + 15, 590, 15, 15);
		}
	}

	if (씬 == '회상' && catX != 500) {
		fill(255, alpha);
		text("push '→' key", 20, 20);
	}

	if (catX >= 495 && catX <= 505 && 쥐보임) {
	
		text("쥐를 클릭하세요", 20, 6);
	}

  if (씬 =='다시' && x >= 100) {
    {
      씬 = '끝';
    }
  }

  if (씬 == '끝') {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(30);
    text("양지원, 김상완, 최의진", width / 2, height / 2 - 50);
  }


}

function mousePressed() {
	if (쥐보임 && catX >= 495 && catX <= 505) {
		let d = dist(mouseX, mouseY, ratX + 15, 590);
		if (d < 15) {
			쥐보임 = false;
			왼쪽이동 = true;
			오른쪽이동 = false;
      씬 = '다시';

		}
	}

	if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
	let fs = fullscreen();
    fullscreen(!fs);
	}


}

function keyPressed() {
	if (씬 === '시작' && key === ' ') {
		씬 = '지나감';
	}
}

