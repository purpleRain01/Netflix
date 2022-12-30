// <<<<<<<<<<<<<<<<<<------for suggestions---->>>>>>>>>>>>>>>>>>>



let str="";
let flag=0;
let flagbit=false; 

const pop=["Alph","Alfah","Bravo","BRAH voh","Charlie","CHAR lee","David","Dog","Edward","Frank",	"Freddy","Golf","George","Hotel","Harry","India","Indigo","Juliet","John","Kilo","King","Lincoln","Love","Mary","Mother","Nora","John","Nuts","Ocean","Orange","Paul","Peter","pig","Queen","quee","quotes","rabbit","ruby","risk","sad","solar","thomas","turn","umbrella","unicorn","violet","very","women","wonder","winter","xmas","xyz","yatch","yack","zeebra","zero"];

function suggessions()
    { 
        
        str="";
        var ch=document.getElementById('searchbox').value;
        // alert(ch);
            for(let k=0;k<pop.length;k++)
            {
                var temp=pop[k]; 
                for(let j=0;j<ch.length;j++)
                {
                    // alert(ch[j]+temp[j]);
                    if(temp[j].toUpperCase()==ch[j].toUpperCase())
                    {
                    flag++;
                    flagbit=true;
                    }
                }
                if(flag==ch.length || flagbit==true)
                {
                    // alert(str);
                    str=str+pop[k]+"<br>";
                }
                if(ch==''){str="";}
                
              
                flagbit=false;
                flag=0;
            }   
        document.getElementById('showsimilar').innerHTML=str;    
    }


// <<<<<<<<<<<<<<<<<<------changing poster---->>>>>>>>>>>>>>>>>>>

var flag1=0;//for movie change
var time=2000,opa=1;

const movies=["/Javasrc/phs/movie/audible.jpg","/Javasrc/phs/movie/battleship.jpg","/Javasrc/phs/movie/blackwidow.jpg","/Javasrc/phs/movie/btmn.jpg","/Javasrc/phs/movie/conon.jpg","/Javasrc/phs/movie/dont bre.jpg","/Javasrc/phs/movie/evry.jpg","/Javasrc/phs/movie/inception.jpg","/Javasrc/phs/movie/manuncl.jpg","/Javasrc/phs/movie/pine.jpg","/Javasrc/phs/movie/ready.jpg"];

const movies1=["/Javasrc/phs/series/bbox.jpg","/Javasrc/phs/series/dark.jpg","/Javasrc/phs/series/dsrto.jpg","/Javasrc/phs/series/mk.jpg","/Javasrc/phs/series/money.jpg","/Javasrc/phs/series/narcos.jpg","/Javasrc/phs/series/paranormal.jpg","/Javasrc/phs/series/sabrina.jpg","/Javasrc/phs/series/stranger.jpg","/Javasrc/phs/series/witcher.jpg","/Javasrc/phs/movie/ready.jpg"];


setInterval(f1,time);
function f1()
    {
        var r1=Math.floor(Math.random() * 10);
        var r2=Math.floor(Math.random() * 10);
            
            var img1=document.getElementById('2');
            var img2=document.getElementById('3');


            img1.src=movies[r2];
            img2.src=movies1[r1];   
    }
   




