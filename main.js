function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status == "200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
getfile("data.json",function(text)
{
  var data=JSON.parse(text);
  console.log(data);
  details(data.basics);
  objective(data.Careerobjective);
})
var child=document.querySelector(".childone");

function details(det){
  var img=document.createElement("img");
  img.src=det.image;
  child.appendChild(img);

  var name=document.createElement("h3");
  name.textContent=det.name;
  child.appendChild(name);

  var phoneno=document.createElement("h4");
  phoneno.textContent=det.phoneno;
  child.appendChild(phoneno);

  var mail=document.createElement("a");
  mail.href="mailto:himakavya9785@gmail.com";
  mail.textContent=det.email;
  child.appendChild(mail);

  var print=document.createElement("h2");
  print.textContent="ADDRESS";
  child.appendChild(print);

  var line=document.createElement("hr");
  child.appendChild(line);

  var address=document.createElement("h3");
  address.textContent=det.address;
  child.appendChild(address);
}

var child1=document.querySelector(".childtwo");

function objective(inf) {

  var print1=document.createElement("h2");
  print1.textContent="CAREER OBJECTIVE";
  child1.appendChild(print1);
  var line1=document.createElement("hr");
  child1.appendChild(line1);

  var info=document.createElement("h2");
  info.textContent=inf.info;
  child1.appendChild(info);
}
