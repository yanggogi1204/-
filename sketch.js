let img;
let x = 0;
let speed = 5;
let 왼쪽이동 = false;
let 오른쪽이동 = true;
let back = 0;
//씬 = 시작 > 인트로 > 인트로2 > 인트로3 > 지나감 > 회상 > 다시 > 끝 > 크레딧딧
let 씬 = '시작';

let 카운트 = 0;   
let ratMove = 3;
let 인트로쥐 = -180;
let 쥐오른쪽 = true;
let 쥐왼쪽 = false;

let 인트로2고양이 = -200;

//인트로3 변수
let 인트로3쥐 = 1000;

let textFill = 0;
let text2X = 300;
let text1X = 500;
let text1Fill = 0;

let eyes = 0;

let 우정 = true;
let 사랑 = true;
let 자유 = true;

let 우정화면 = 0;
let 사랑화면 = 0;
let 자유화면 = 0;

let 하얀화면_우정 = 0;
let 하얀화면_사랑 = 0;
let 하얀화면_자유 = 0;

let 돌아가 = 0;

let catX = 200;
let 고양이걷기 = [];
let 고양이걸음프레임 = 0;
let 뒤로걷기 = [];

// 쥐
//ratX = 480
let ratX = 450;
let 쥐보임 = true;
let 쥐걷기 = [];
let 쥐프레임 = 0;

let introRatF = [];
let introRatB = [];


function preload() {
	bg1 = loadImage("BG/친구.png");
	bg2 = loadImage("BG/주인.png");
	bg3 = loadImage("BG/들판.png");

	흑백1 = loadImage("BG/친구흑백.png");
	흑백2 = loadImage("BG/주인흑백.png");
	흑백3 = loadImage("BG/들판흑백.png");

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
	쥐앉기 = loadImage("lat/앉은쥐.png");

	introRatF.push(loadImage("lat/인트로쥐1.png"));
	introRatF.push(loadImage("lat/인트로쥐2.png"));

	introRatB.push(loadImage("lat/인트로쥐back1.png"));
	introRatB.push(loadImage("lat/인트로쥐back2.png"));

	

}

function setup() {
	createCanvas(900, 600);
	textSize(20);
	fill(255);
	
	angleMode(DEGREES);


}

function draw() {

	background(back);
 	
	let alpha = map(sin(frameCount * 10), -1, 1, 50, 150); // AI 도움


	if (씬 === "시작") {

		textSize(20);
		fill(255, alpha);
    	textAlign(LEFT, TOP);
		text("스페이스 키를 눌러 시작", 20, 20);

	 	fill(255);
   	 	textSize(60);
  		text("행복을 잡아라", 260, 250);
		
		textSize(20);
		textAlign(CENTER, CENTER);
		text("양지원, 김상완, 최의진", 120, 570);

	}


	x = constrain(x, -4500, 150);
	catX = constrain(catX, 200, 500);
	

	fill(50);
	noStroke();
	rect(x + 5240, 0, 500, height);



 	if (씬 == '인트로') {
	
	카운트 += 1;

	let 왼쪽눈X = 250 + (mouseX - 250) * 0.1;
	let 왼쪽눈Y = 240 + (mouseY - 240) * 0.1;
	let 오른쪽눈X = 650 + (mouseX - 650) * 0.1;
	let 오른쪽눈Y = 240 + (mouseY - 240) * 0.1;

	eyes += 2;
	fill(155,255,10, eyes);

	push();
    fill(250,250,0, eyes);
	rotate(20);
	ellipse(310,150, 200,100);
	pop();
  
  
    push();
    fill(250,250,0, eyes);
    rotate(-20);
	ellipse(550,460, 200,100);
    pop();
  
	fill(0, eyes);
	왼쪽눈X = constrain(왼쪽눈X, 200, 300);
	왼쪽눈Y = constrain(왼쪽눈Y, 200, 280);
	오른쪽눈X = constrain(오른쪽눈X, 600, 700);
	오른쪽눈Y = constrain(오른쪽눈Y, 200, 280);

// 눈동자
	ellipse(왼쪽눈X,왼쪽눈Y, 20,80);
	ellipse(오른쪽눈X,오른쪽눈Y, 20,80);

		if (카운트 > 100) {

			fill(255, 255, 0, alpha);
			ellipse(인트로쥐 + 125, 550, 80, 80);


			if (쥐오른쪽 == true) {

				인트로쥐 += 10;
				image(introRatF[쥐프레임], 인트로쥐, 450);
				if (frameCount % 8 === 0) {
					쥐프레임 = (쥐프레임 + 1) % introRatF.length;
				}

				if (인트로쥐 >= 600) {
					쥐오른쪽 = false;
					쥐왼쪽 = true;
				}
			} 

			if (쥐왼쪽 == true) {
				인트로쥐 -= 10;
				image(introRatB[쥐프레임], 인트로쥐, 450);
				if (frameCount % 8 === 0) {
					쥐프레임 = (쥐프레임 + 1) % introRatB.length;
				}
				if (인트로쥐 <= 60) {
					쥐왼쪽 = false;
					쥐오른쪽 = true;
				
				}
			}

 		}
  	}

  // 인트로2
	if (씬 == '인트로2') {
		if (인트로쥐 <=1000) {
			인트로쥐 += 10;
		}
		if (frameCount % 15 === 0) {
			쥐프레임 = (쥐프레임 + 1) % 쥐걷기.length;
		}

		image(쥐걷기[쥐프레임], 인트로쥐, 570);

		if (인트로쥐 >= 1000) {
			인트로2고양이 += speed;
			if (frameCount % 15 === 0) {
				고양이걸음프레임 = (고양이걸음프레임 + 1) % 고양이걷기.length;
			}
			image(고양이걷기[고양이걸음프레임], 인트로2고양이, 500);
			if (인트로2고양이 >= 200) {
				씬 = '인트로3';
			}
		}
	}


	if (씬 == '인트로3') {

		image(쥐앉기, 인트로3쥐, 570);
		fill(text1Fill);
		text("→ 키를 눌러 이동하세요", text1X, 450);

		text1Fill = constrain(text1Fill, 0, 150);

		if (인트로3쥐 >= 800) {
			text1Fill += 3;
		}
		else if (인트로3쥐 <  800) {
			text1Fill -= 3;
		}

		if (keyIsDown(RIGHT_ARROW)) {

			text1X -= 4;
			인트로3쥐 -= speed;

			if (frameCount % 15 === 0) {
			고양이걸음프레임 = (고양이걸음프레임 + 1) % 고양이걷기.length;
			}
		image(고양이걷기[고양이걸음프레임], 200	, 500);
		}
		else {
			image(catSitImg, catX + 55, 480);

		}

		if (인트로3쥐 <= 450) {
			씬 = '지나감';
		}
		
	}

	if (씬 === "지나감") {

		image(흑백1, x + 1160, height / 2 - bg1.height / 2);
		image(흑백2, x + 2320, height / 2 - bg2.height / 2);
		image(흑백3, x + 3480, height / 2 - bg3.height / 2);
		

		if (오른쪽이동 == true) {

			ratX = constrain(ratX, 450, 680);
				if (ratX >= 680) {
						image(쥐앉기, ratX, 570);
						fill(250, 250, 0, alpha);
						ellipse(ratX + 15, 590, 15, 15);
				}

		

			if (keyIsDown(RIGHT_ARROW)) {
				x -= speed;
				
				if (frameCount % 15 === 0) {
					고양이걸음프레임 = (고양이걸음프레임 + 1) % 고양이걷기.length;
					
				}
				if (frameCount % 8 === 0) {
					쥐프레임 = (쥐프레임 + 1) % 쥐걷기.length;
				}

				image(고양이걷기[고양이걸음프레임], catX, 500);
				image(쥐걷기[쥐프레임], ratX, 570);


			} else {
				image(catSitImg, catX + 55, 480);

				image(쥐앉기, ratX, 570);

			}
			if (x <= -4500) {
				씬 = '전환점';
			}
		}
	}


	if (씬 == '전환점') {


		back = constrain(back, 0, 150);

		if (ratX < 680) {
			ratX += 6;
			image(쥐걷기[쥐프레임], ratX, 570);
		}
		else if (ratX >= 680) {
			image(쥐앉기, ratX, 570);
			fill(250, 250, 0, alpha);
			ellipse(ratX + 18, 590, 15, 15);

		}

		if (frameCount % 8 === 0) {
			쥐프레임 = (쥐프레임 + 1) % 쥐걷기.length;
		}
		if (frameCount % 15 === 0) {
			고양이걸음프레임 = (고양이걸음프레임 + 1) % 고양이걷기.length;
		}

		if (keyIsDown(RIGHT_ARROW)) {
			catX += speed;
			back += 3;
			image(고양이걷기[고양이걸음프레임], catX, 500);
		}
		 else {
		image(catSitImg, catX + 55, 480);
		}

		if (catX >= 495 && catX <= 505 && 쥐보임) {
			
			text("쥐를 클릭해 잡으세요", 600, 400);
		}

	
		
	}


	if (씬 == '다시') {

		back = constrain(back, 0, 255);
		back -= 2;
		카운트 += 1;
		let beta = map(sin(frameCount * 5), -1, 1, 30, 100);

		fill(100,100,0, beta);

		if (우정) {
			image(흑백1, x + 1160, height / 2 - bg1.height / 2);
			ellipse(x + 1600, height / 2, 500, 400);
		}
		if (우정 == false) {
			image(bg1, x + 1160, height / 2 - bg1.height / 2);
		}

		if (사랑) {
			image(흑백2, x + 2320, height / 2 - bg2.height / 2);
			ellipse(x + 2700, height / 2, 500, 400);
		}
		if (사랑 == false) {
			image(bg2, x + 2320, height / 2 - bg2.height / 2);
		}

		if (자유) {
			image(흑백3, x + 3480, height / 2 - bg3.height / 2);
			ellipse(x + 3900, height / 2, 500, 400);
		}
		if (자유 == false) {
			image(bg3, x + 3480, height / 2 - bg3.height / 2);
		}
		


		if (카운트 >= 100) {
			
			if (text2X <= 390) {
				textFill += 4 ;
			}
			else if (text2X > 390) {
				textFill -= 4;
			}
			fill(150, textFill);
			text("← 키를 눌러 이동하세요", text2X, 450);


		
			if (keyIsDown(LEFT_ARROW)) {
				x += speed;
				text2X += 5;

				image(뒤로걷기[고양이걸음프레임], catX, 500);
				if (frameCount % 15 === 0) {
					고양이걸음프레임 = (고양이걸음프레임 + 1) % 뒤로걷기.length;
				}
			}
			else if (keyIsDown(RIGHT_ARROW)) {
				x -= speed;
				
				if (frameCount % 15 === 0) {
					고양이걸음프레임 = (고양이걸음프레임 + 1) % 고양이걷기.length;
					
				}
			image(고양이걷기[고양이걸음프레임], catX, 500);

			}
			else {
				image(catSitImg2, catX, 480);
			}
	  		
		}
		else if (카운트 < 100) {
			image(catSitImg2, catX, 480);

		}


		if (우정화면 == 1) {
			fill(250, 하얀화면_우정);
			rect(0, 0, width, height);
			fill(0, 하얀화면_우정);
			textSize(30);
			text('잃어버린 우정을 찾았습니다',450, 300);

			if (하얀화면_우정 < 250) {
				하얀화면_우정 += 4;
			}
			else if (하얀화면_우정 >= 250) {
				우정화면 = 2;
				우정 = false;
			}
		}
		if (우정화면 == 2) {
			fill(250, 하얀화면_우정);
			rect(0, 0, width, height);
			fill(0, 하얀화면_우정);
			textSize(30);
			text('잃어버린 우정을 찾았습니다',450, 300);
			if (하얀화면_우정 > 0) {
				하얀화면_우정 -= 4;
			}

		}


		if (사랑화면 == 1) {

			fill(250, 하얀화면_사랑);
			rect(0, 0, width, height);

			fill(0, 하얀화면_사랑);
			textSize(30);
			text('잃어버린 사랑을 찾았습니다',450, 300);

			if (하얀화면_사랑 < 250) {
				하얀화면_사랑 += 4;
			}
			else if (하얀화면_사랑 >= 250) {
				사랑화면 = 2;
				사랑 = false;
			}
		}
		if (사랑화면 == 2) {

			fill(255, 하얀화면_사랑);
			rect(0, 0, width, height);

			fill(0, 하얀화면_사랑);
			textSize(30);
			text('잃어버린 사랑을 찾았습니다',450, 300);

			if (하얀화면_사랑 > 0) {
				하얀화면_사랑 -= 4;
			}
		}
	

		if (자유화면 == 1) {

			fill(250, 하얀화면_자유);
			rect(0, 0, width, height);

			fill(0, 하얀화면_자유);
			textSize(30);
			text('잃어버린 자유를 찾았습니다',450, 300);

			if (하얀화면_자유 < 250) {
				하얀화면_자유 += 4;
			}
			else if (하얀화면_자유 >= 250) {
				자유화면 = 2;
				자유 = false;
			}
		}
		if (자유화면 == 2) {
			fill(250, 하얀화면_자유);
			rect(0, 0, width, height);

			fill(0, 하얀화면_자유);
			textSize(30);
			text('잃어버린 자유를 찾았습니다',450, 300);

			if (하얀화면_자유 > 0) {
				하얀화면_자유 -= 4;
			}
		}


		if (자유 == false && 우정 == false && 사랑 == false) {
			if (x >= 100) {
				씬 = '끝';
			}
		}
		else {
			돌아가 = constrain(돌아가, 0, 200);
			if (x >= 100) {

				돌아가 += 5;
				fill(255,돌아가);
				textAlign(CENTER, CENTER);
				text('모든 행복을 찾지 못했습니다.',450, 300);
				text('모든 행복을 찾고 돌아오세요',450, 360);
			}
			else if (x < 100) {
				돌아가 -= 5;
				fill(255, 돌아가);
				textAlign(CENTER, CENTER);
				text('모든 행복을 찾지 못했습니다.',450, 300);
				text('모든 행복을 찾고 돌아오세요',450, 360);
			}
		}

  	}


	if (씬 == '끝') {
    	fill(0);
		
		back += 5;

		if (back > 255) {
 	  	 	textAlign(CENTER, CENTER);
   		 	textSize(50);
			text("The End", width / 2, height / 2);
		}
  	}

}



function mousePressed() {
	if (씬 == '전환점' && catX >= 495 && catX <= 505) {
		let d = dist(mouseX, mouseY, ratX + 18, 590);
		if (d < 15) {
			쥐보임 = false;
			왼쪽이동 = true;
			오른쪽이동 = false;
        	씬 = '다시';
			카운트 = 0;

		}
	}
	if (씬 == '인트로') {
		let d = dist(mouseX, mouseY, 인트로쥐 + 125, 550);
		if (카운트 > 100) {
			if (d < 40) {
				씬 = '인트로2';
				인트로쥐 = -150;
			}
		}
	}

	if (씬 == '다시') {
		
		let d1 = dist(mouseX, mouseY, x + 1600, height / 2);
		let d2 = dist(mouseX, mouseY, x + 2700, height / 2);
		let d3 = dist(mouseX, mouseY, x + 3900, height / 2);

		if (d1 < 250) {
			우정화면 = 1;
		}
		if (d2 < 250) {
			사랑화면 = 1;
		}
		if (d3 < 250) {
			자유화면 = 1;
		}

	}
}

function keyPressed() {

	if (씬 === '시작' && key === ' ') {
		씬 = '인트로';
	}
}
