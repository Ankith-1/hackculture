// All states map view code JS
const coords = { x: 0, y: 0 };
const particles = []; // Array to hold particle elements

window.addEventListener("mousemove", function (e) {
  // Capture mouse coordinates, accounting for scroll
  coords.x = e.clientX + window.scrollX;
  coords.y = e.clientY + window.scrollY;

  createParticle();
});

function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('trail');
  document.body.appendChild(particle);

  // Set the initial position of the particle
  particle.style.left = coords.x + 'px';
  particle.style.top = coords.y + 'px';

  // Remove the particle after animation finishes
  setTimeout(() => {
    particle.remove();
  }, 600); // The duration of the trail animation
}

var templeView;
var timg1,timg2,timg3,timg4;
var gujarat,karnataka,punjab,uttrakhand,kerala,odisha,tamilNadu,maharashtra,madhyaPradesh,westBengal,rajasthan,uttarPradesh,JammuKashmir,telannga;
gujarat="gujarat";
karnataka="karnataka";
punjab="punjab";
uttrakhand="uttrakhand";
kerala="kerala";
odisha="odisha";
tamilNadu="tamilNadu";
maharashtra="maharashtra";
madhyaPradesh="madhyaPradesh";
westBengal="westBengal";
rajasthan="rajasthan";
uttarPradesh="uttarPradesh";
JammuKashmir="JammuKashmir";
telannga="telannga";
bihar="bihar";
HimachalPradesh="HimachalPradesh";
Haryana="haryana";
Jharkhand="Jharkhand"
Chhattisgarh="Chhattisgarh";
Andhrapradesh="Andhrapradesh";
Goa="Goa";
Sikkim="Sikkim";
Assam="Assam";
ArunachalPradesh="ArunachalPradesh";
Nagaland="Nagaland";
Manipur="Manipur";
Mizoram="Mizoram";
Tripura="Tripura";
Meghalaya="Meghalaya";
const closeView = () =>{
  document.getElementById("slideContainer").style.display='none';
  document.getElementById("outerSlideFunc").style.display='none';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'none';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'none';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'none';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'none';
}
document.getElementById("View").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/gujSlide.PNG";
   templeView = "gujarat";
  document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("rajasthanView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/rajasthan UI.png";
  templeView='rajasthan'
  document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});


document.getElementById("himachalView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/HP UI.png";
  templeView='himachalPradesh'
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("JharkhandView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  templeView='jharkhand'
  sourceView.src="./images/JK UI.png";
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("MeghalayaView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/meghalaya UI.png";
  templeView='meghalya'
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("KarnatakaView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/Karnataka UI.png";
   templeView = "karnataka";
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});


document.getElementById("AssamView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/assam UI.png";
  templeView='assam';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("TripuraView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/tripura UI.png";
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("MizoramView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/mizoram UI.png";
  templeView = 'mizoram';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("NagalandView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/nagaland UI.png";
  templeView='nagaland';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("JammuKashmirView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/JK UI.png";
  templeView='JammuKashmir';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("WestBengalView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/west bengal UI.png";
  templeView='westBengal';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("keralaView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/Kerala UI.png";
  templeView='kerala';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("SikkimView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/sikkim UI.png";
  templeView='sikkim';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("ArunachalPradeshView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/arunachal pradesh UI.png";
  templeView='arunachalPradesh';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});




document.getElementById("ManipurView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/manipur UI.png";
  templeView='manipur';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});


document.getElementById("tamilNaduView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/TN UI.png";
  templeView='tamilNadu';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("MaharashtraView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/maharastra UI.png";
  templeView='maharashtra';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("TelanganaView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  templeView = 'telannga';
  sourceView.src="./images/telangana UI.png";
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("ChhattisgarhView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/chhatisgarh UI.png";
  templeView='chhattisgarh'
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("HaryanaView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/haryana UI.png";
  templeView='haryana';
  document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("OdishaView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/odisha UI.png";
  templeView='odisha';
  document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});


document.getElementById("AndhraPradeshView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/AP UI.png";
  templeView='Andhrapradesh';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("PunjabView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/punjab UI.png";
  templeView = 'punjab';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("UttrakhanView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/uttarakhand UI.png";
  templeView = 'uttrakhand';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("GoaView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/goa UI.png";
  templeView='goa';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});
document.getElementById("MadhyaPradeshView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/Madhya pradesh UI.png";
  templeView='madhyaPradesh';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("UttarPradeshView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/uttarpradesh UI.png";
  templeView='uttarPradesh';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("LadakhView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/";
  templeView='ladakh';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("BiharView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/bihar UI.png";
  templeView='bihar';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});


document.getElementById("templeViewOn").addEventListener("click", function(event){
  // var sourceView = document.getElementById("sourceMapImage");
  // sourceView.src="./images/Madhya pradesh UI.png";
  document.getElementById('AccessTempleView').style.display='block';
  if(templeView == 'gujarat'){
    var timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/somnath.jpeg';
    timg1.style.marginTop='100px';
    document.getElementById('TempleImage3').hidden=true;
    var timg2 = document.getElementById('TempleImage2');
    timg2.src = './images/akshardhamtemple.jpeg';
  } else if(templeView=='karnataka'){
     timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/udupitemple.jpeg';
    timg1.style.marginTop='100px';
    document.getElementById('TempleImage3').hidden=true;
     timg2 = document.getElementById('TempleImage2').hidden=true;
    timg2.src = './images/akshardhamtemple.jpeg';
  } else if(templeView =='punjab'){
    timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/goldenTemple.jpeg';
    timg1.style.marginTop='100px';
    document.getElementById('TempleImage3').hidden=true;
     timg2 = document.getElementById('TempleImage2').hidden=true;
    timg2.src = './images/akshardhamtemple.jpeg';
  } else if(templeView =='uttrakhand'){
    timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/badrinath.jpeg';
    timg1.style.marginTop='100px';
    document.getElementById('TempleImage3').hidden=true;
     timg2 = document.getElementById('TempleImage2');
    timg2.src = './images/kedarnath.jpeg';
  }else if(templeView=='kerala'){
    timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/Padmanabhaswamy.jpeg';
    timg1.style.marginTop='100px';
    document.getElementById('TempleImage3').hidden=true;
     timg2 = document.getElementById('TempleImage2');
    timg2.src = './images/sabariMala.jpeg';
  } else if(templeView=='odisha'){
    timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/jagannath.jpeg';
    timg1.style.marginTop='100px';
    document.getElementById('TempleImage3').hidden=true;
    timg2 = document.getElementById('TempleImage2').hidden=true;
    timg2.src = './images/sabariMala.jpeg';
  }else if(templeView=='tamilNadu'){
    timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/rameshwaram.jpeg';
    timg1.style.marginTop='100px';
    document.getElementById('TempleImage3').hidden=true;
    timg2 = document.getElementById('TempleImage2').hidden=true;
    timg2.src = './images/sabariMala.jpeg';
  }else if(templeView=='maharashtra'){
    timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/shirdi.jpeg';
    timg1.style.marginTop='100px';
    timg2 = document.getElementById('TempleImage2').hidden=true;
    timg2.src = './images/sabariMala.jpeg';
    timg3=document.getElementById('TempleImage3');
    timg3.src='./images/bhimashankartemple.jpeg'
  }else if(templeView=='madhyaPradesh'){
    timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/mahakaleshwar.jpeg';
    timg1.style.marginTop='100px';
    timg2 = document.getElementById('TempleImage2');
    timg2.src = './images/kalbhairav.jpeg';
    document.getElementById('TempleImage3').hidden=true;
  }else if(templeView=='westBengal'){
    timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/kalighattemple.jpeg';
    timg1.style.marginTop='100px';
    document.getElementById('TempleImage3').hidden=true;
    timg2 = document.getElementById('TempleImage2').hidden=true;
    timg2.src = './images/sabariMala.jpeg';
  }else if(templeView=='rajasthan'){
    timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/ranakpur.jpeg';
    timg1.style.marginTop='100px';
    document.getElementById('TempleImage3').hidden=true;
    timg2 = document.getElementById('TempleImage2').hidden=true;
    timg2.src = './images/sabariMala.jpeg';
  }else if(templeView=='uttarPradesh'){
    timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/kashivishwanath.jpeg';
    timg1.style.marginTop='100px';
    document.getElementById('TempleImage3').hidden=true;
    timg2 = document.getElementById('TempleImage2').hidden=true;
    timg2.src = './images/sabariMala.jpeg';
  }else if(templeView=='JammuKashmir'){
    timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/amarnath.jpeg';
    timg1.style.marginTop='100px';
    timg2 = document.getElementById('TempleImage2');
    timg2.src = './images/vaishnodevi.jpeg';
    timg2.style.marginTop='100px';
    document.getElementById('TempleImage3').hidden=true;
  }else if(templeView=='telannga'){
    document.getElementById('AccessTempleView').style.display='none';  
  }
  else if(templeView==''){
    document.getElementById('AccessTempleView').style.display='none';

  }else{
    document.getElementById('AccessTempleView').style.display='none';
  }
  event.preventDefault();
});

// function accessTemple(){
//   if(templeView == 'gujarat'){
//     var timg1 = document.getElementById('TempleImage1');
//     timg1.src='./images/somnath.jpeg';
//     var timg2 = document.getElementById('TempleImage2');
//     timg2.src = './images/akshardhamtemple.jpeg';
//   }
// }

var fimg1,fimg2,fimg3,fimg4;
document.getElementById("festivalViewOn").addEventListener("click", function(event){
  document.getElementById("AccessFestivalView").style.display='block';
  if(templeView==gujarat){
    fimg1=document.getElementById("FestivalImage1");
    fimg1.src='./images/GUJARAT.png';
  }else if(templeView==rajasthan){
    fimg1=document.getElementById("FestivalImage1");
    fimg1.src='./images/RAJASTHAN.png';
  }else if(templeView==maharashtra){
    fimg1=document.getElementById("FestivalImage1");
    fimg1.src='./images/MAHARASHTRA.png';
  }else if(templeView==HimachalPradesh){
    fimg1=document.getElementById("FestivalImage1");
    fimg1.src='./images/HIMACHAL.png';
  }else if(templeView==Jharkhand){
    fimg1=document.getElementById("FestivalImage1");
    fimg1.src='./images/JHARKHAND.png';
  }else if(templeView==Goa){
    fimg1=document.getElementById("FestivalImage1");
    fimg1.src='./images/Goa.png';
  }else if(templeView==tamilNadu){
    fimg1=document.getElementById("FestivalImage1");
    fimg1.src='./images/TAMIL_NADU.png';
  }else if(templeView==Andhrapradesh){
    fimg1=document.getElementById("FestivalImage1");
    fimg1.src='./images/ANDHRA_PRADESH.png';
  }else if(templeView==Chhattisgarh){
    fimg1=document.getElementById("FestivalImage1");
    fimg1.src='./images/CHATTISGARH.png';
  }else if(templeView==bihar){
    fimg1=document.getElementById("FestivalImage1");
    fimg1.src='./images/BIHAR.png';
  }else if(templeView==Sikkim){
    fimg1=document.getElementById("FestivalImage1");
    fimg1.src='./images/SIKKIM.png';
  }else if(templeView==kerala){
    fimg1=document.getElementById("FestivalImage1");
    fimg1.src='./images/KERALA.png';
  }else if(templeView==odisha){
    fimg1=document.getElementById("FestivalImage1");
    fimg1.src='./images/ODISHA.png';
  }else if(templeView==Meghalaya){
    fimg1=document.getElementById("FestivalImage1");
    fimg1.src='./images/MEGHALAYA.png';
  }
});
document.getElementById("closeFestivalView").addEventListener("click",function(){
  document.getElementById("AccessFestivalView").style.display='none';

})
document.getElementById("closeTempleView").addEventListener("click", function(event){
  // var sourceView = document.getElementById("sourceMapImage");
  // sourceView.src="./images/Madhya pradesh UI.png";
  document.getElementById('AccessTempleView').style.display='none';
  event.preventDefault();
});
var festivalImage1;
document.getElementById("festivalViewOn").addEventListener("click",function(){
  if(templeView==gujarat){
    festivalImage1= document.getElementById("FestivalImage1");
    festivalImage1.src="./images/guj";
  }
})

var fdimg1,fdimg2,fdimg3;

document.getElementById("ViewFood").addEventListener("click",function(){
  document.getElementById("accessFoodItem").style.display="block";
  if(templeView==gujarat){
    fdimg1=document.getElementById("FoodImage1");
    fdimg1.src="./images/FoodGuj.png";
  }else if(templeView==rajasthan){
    fdimg1=document.getElementById("FoodImage1");
    fdimg1.src="./images/FoodRaj.png";
  }else if(templeView==telannga){
    fdimg1=document.getElementById("FoodImage1");
    fdimg1.src="./images/FoodTel.png";
  }else if(templeView==JammuKashmir){
    fdimg1=document.getElementById("FoodImage1");
    fdimg1.src="./images/FoodJ&K.png";
  }
  else if(templeView==westBengal){
    fdimg1=document.getElementById("FoodImage1");
    fdimg1.src="./images/FoodWB.png";
  }else if(templeView==karnataka){
    fdimg1=document.getElementById("FoodImage1");
    fdimg1.src="./images/FoodKar.png";
  }else if(templeView==bihar){
    fdimg1=document.getElementById("FoodImage1");
    fdimg1.src="./images/FoodBih.png";
  }
  else if(templeView==uttarPradesh){
    fdimg1=document.getElementById("FoodImage1");
    fdimg1.src="./images/FoodUP.png";
  }
  else if(templeView==JammuKashmir){
    fdimg1=document.getElementById("FoodImage1");
    fdimg1.src="./images/FoodJ&K.png";
  }
  else if(templeView==ArunachalPradesh){
    fdimg1=document.getElementById("FoodImage1");
    fdimg1.src="./images/FoodAr{.png";
  }
  else if(templeView==andhraPradesh){
    fdimg1=document.getElementById("FoodImage1");
    fdimg1.src="./images/FoodAnP.png";
  }else if(templeView==Chhattisgarh){
    fdimg1=document.getElementById("FoodImage1");
    fdimg1.src="./images/FoodCht.png";
  }
  else if(templeView==Goa){
    fdimg1=document.getElementById("FoodImage1");
    fdimg1.src="./images/FoodGoa.png";
  }else if(templeView==HimachalPradesh){
    fdimg1=document.getElementById("FoodImage1");
    fdimg1.src="./images/FodddHP.png";
  }
  else if(templeView==Nagaland){
    fdimg1=document.getElementById("FoodImage1");
    fdimg1.src="./images/FoodNaga.png";
  }
  else if(templeView==Sikkim){
    fdimg1=document.getElementById("FoodImage1");
    fdimg1.src="./images/FoodSik.png";
  }
  else if(templeView==Jharkhand){
    fdimg1=document.getElementById("FoodImage1");
    fdimg1.src="./images/FoodJhar.png";
  }
  else if(templeView==Mizoram){
    fdimg1=document.getElementById("FoodImage1");
    fdimg1.src="./images/FoodMizo.pngs";
  }
  else if(templeView==Tripura){
    fdimg1=document.getElementById("FoodImage1");
    fdimg1.src="./images/FoodTrip.png";
  }
  else if(templeView==Meghalaya){
    fdimg1=document.getElementById("FoodImage1");
    fdimg1.src="./images/FoodMegh.png"; 
  }
  else if(templeView==bihar){
    fdimg1=document.getElementById("FoodImage1");
    fdimg1.src="./images/FoodBih.png"; 
  }
  else if(templeView==tamilNadu){
    fdimg1=document.getElementById("FoodImage1");
    fdimg1.src="./images/FoodTN.png"; 
  }
  else if(templeView==punjab){
    fdimg1=document.getElementById("FoodImage1");
    fdimg1.src="./images/FoodPun.png"; 
  }
});

document.getElementById("closeFoodView").addEventListener("click",function(){
  document.getElementById("accessFoodItem").style.display="none";
});
var art1,art2,art3,art4,art5;
document.getElementById("viewArtAndDance").addEventListener("click",function(){
  document.getElementById("accessArtItem").style.display="block";
  console.log("hi")
  if(templeView==gujarat){
    art1 = document.getElementById("ArtImage1");
    art1.src="./images/ART_GUJARAT.PNG";
    art2 = document.getElementById("ArtImage2");
    art2.src="./images/ART_GUJARAT_3.PNG";
  }else if(templeView==rajasthan){
    art1 = document.getElementById("ArtImage1");
    art1.src="./images/ART_RAJASTHAN.PNG";
    art2 = document.getElementById("ArtImage2");
    art2.src="./images/ART_RAJASTHAN 2.PNG";
  }else if(templeView==punjab){
    art1 = document.getElementById("ArtImage1");
    art1.src="./images/ART_PUNJAB.PNG";
    art2 = document.getElementById("ArtImage2");
    art2.src="./images/ART_PUNJAB_2.PNG";
  }else if(templeView==Haryana){
    art1 = document.getElementById("ArtImage1");
    art1.src="./images/ART_HARYANA.PNG";
    art2 = document.getElementById("ArtImage2").hidden=true;
    art2.src="./images/ART_GUJARAT_3.PNG";
  } else if(templeView==ArunachalPradesh){
    art1 = document.getElementById("ArtImage1");
    art1.src="./images/ART_ARUNACHAL.PNG";
  } else if(templeView==HimachalPradesh){
    art1 = document.getElementById("ArtImage1");
    art1.src="./images/ART_HIMACHAL.PNG";
  }else if(templeView==westBengal){
    art1 = document.getElementById("ArtImage1");
    art1.src="./images/ART_WEST_BENGAL.PNG";
    art2 = document.getElementById("ArtImage2");
    art2.src="./images/ART_WEST_BENGAL_2.PNG";
  }else if(templeView==bihar){
    art1 = document.getElementById("ArtImage1");
    art1.src="./images/ART_BIHAR.PNG";
  } else if(templeView==uttrakhand){
    art1 = document.getElementById("ArtImage1");
    art1.src="./images/ART_UTTAR_PRADESH.PNG";
    art2 = document.getElementById("ArtImage2");
    art2.src="./images/ART_UTTAR_PRADESH_2.PNG";
  } else if(templeView==madhyaPradesh){
    art1 = document.getElementById("ArtImage1");
    art1.src="./images/ART_MADHYA_PRADESH.PNG";
    art2 = document.getElementById("ArtImage2");
    art2.src="./images/ART_MADHYA_PRADESH_2.PNG";
  }else if(templeView==karnataka){
    art1 = document.getElementById("ArtImage1");
    art1.src="./images/ART_KARNATAKA.PNG";
    art2 = document.getElementById("ArtImage2").hidden=true;
  }else if(templeView==maharashtra){
    art1 = document.getElementById("ArtImage1");
    art1.src="./images/ART_MAHARASHTRA.PNG";
    art2 = document.getElementById("ArtImage2").hidden=true;
  }else if(templeView==Jharkhand){
    art1 = document.getElementById("ArtImage1");
    art1.src="./images/ART_JHARKHAND.PNG";
    art2 = document.getElementById("ArtImage2").hidden=true;
  }else if(templeView==Chhattisgarh){
    art1 = document.getElementById("ArtImage1");
    art1.src="./images/ART_CHHASTTISGARH.PNG";
    art2 = document.getElementById("ArtImage2").hidden=true;
  }else if(templeView==Mizoram){
    art1 = document.getElementById("");
    art1.src="./images/ART_MIZORAM.PNG";
    art2 = document.getElementById("ArtImage2").hidden=true;
  }else if(templeView==Manipur){
    art1 = document.getElementById("ArtImage1");
    art1.src="./images/ART_MANIPUR.PNG";
    art2 = document.getElementById("ArtImage2").hidden=true;
  }else if(templeView==Meghalaya){
    art1 = document.getElementById("ArtImage1");
    art1.src="./images/ART_MEGHALAYA.PNG";
    art2 = document.getElementById("ArtImage2").hidden=true;
  }else if(templeView==Tripura){
    art1 = document.getElementById("ArtImage1");
    art1.src="./images/tripura UI.png";
    art2 = document.getElementById("ArtImage2").hidden=true;
  }else if(templeView==ArunachalPradesh){
    art1 = document.getElementById("ArtImage1");
    art1.src="./images/ART_ARUNACHAL.PNG";
    art2 = document.getElementById("ArtImage2").hidden=true;
  }else if(templeView==kerala){
    art1 = document.getElementById("ArtImage1");
    art1.src="./images/ART_KERALA.PNG";
    art2 = document.getElementById("ArtImage2").hidden=true;  
  }else if(templeView==JammuKashmir){
    art1 = document.getElementById("ArtImage1");
    art1.src="./images/ART_J&K.PNG";
    art2 = document.getElementById("ArtImage2").hidden=true;  
  }
});

document.getElementById("closeArtView").addEventListener("click",function(){
  document.getElementById("accessArtItem").style.display="none";

})