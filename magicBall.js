fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);

var answer = floor(random(1, 5));

if (answer === 1) {
   text("NOT GOING TO", 158, 209);
   text("HAPPEN", 175, 229); 
} else if (answer===2){
   text("NOPE",188,239);
} else if (answer===3){
   text("YES",185,238);
} else if (answer===4){
   text("PROBABLY NOT",154,243);
} else {
   text("MAYBE",204,288);
}
