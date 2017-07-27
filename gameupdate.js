var nama = 'Hulk';
var peran = 'Ksatria';
var tahunlahir = 1990;
var umur = 2017 - tahunlahir;
var playerhealth = tahunlahir * Math.random();
var monsterhealth = tahunlahir * Math.random();
var kodemonster = Math.floor(Math.pow(100, Math.random()));

if (nama.length>0 && peran == 'Ksatria'){
  console.log("Selamat datang di Dunia Proxytia, " +nama);
  console.log("Halo Ksatria "+nama+", kamu dapat menyerang dengan senjatamu");
}else if (nama.length>0 && peran == 'Tabib'){
  console.log("Selamat datang di Dunia Proxytia, " +nama);
  console.log("Halo Tabib "+nama+", kamu dapat membantu temanmu yang terluka");
}else if (nama.length>0 && peran == 'Penyihir'){
  console.log("Selamat datang di Dunia Proxytia, " +nama);
  console.log("Halo Penyihir "+nama+", ciptakan keajaiban yang membantu kemenanganmu");
}else{
  console.log("Peranmu adalah kacung");
  peran = "kacung";
}


var i =0;

while (i <= tahunlahir){
  if (i%umur == 0){
    console.log(peran + ' ' + nama + ' menyerang monster!');
    monsterhealth -= umur;
    i++;
  }else if(i%kodemonster == 0){
    console.log('Monster menyerang ' + peran + ' ' + nama + '!');
    playerhealth -= kodemonster;
    i++;
  }else if(i%umur == i%kodemonster == 0 ){
    console.log('Health keduanya bertambah');
    playerhealth += kodemonster;
    monsterhealth += umur;
    i++;
  }else{
    i++;
  }
}

console.log(playerhealth);
console.log(monsterhealth);

if (playerhealth > monsterhealth){
  console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!');
}else{
  console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');
}
