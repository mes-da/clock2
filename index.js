setInterval(() => {
    d = new Date();
    htime=d. getHours();
    mtime= d. getMinutes();
    stime= d. getSeconds();
    hrotation=30*htime + (mtime/2);
    mrotation= 6*mtime;
    srotation=6*stime;

    // console.log(htime,mtime,stime,hour,hrotation,mrotation,srotation,second);
    //hour.style.transform = `rotate ( ${hrotation}deg)`;
    // hour.style.transform = `rotate(${hrotation})`;
    // minute.style.transform = `rotate ( ${mrotation}deg)`;
    second.style.transform = `rotate( ${srotation}deg)`;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;

    
}, 1000);