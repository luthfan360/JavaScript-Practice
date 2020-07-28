function dimension() {
    var h = 9;
    var w = 16;
    var s = 24;

    var c = Math.pow(h,2) + Math.pow(w,2);
    var cs = Math.sqrt(c);
    var scm = s * 2.5;
    var sc = scm / cs;
    var hcm = sc * h;
    var wcm = sc * w;

    console.log('Your monitor is ' + s + ' inch')
    console.log('Diagonal : ' + (scm).toFixed(1) + ' cm')
    console.log('Height : ' + (hcm).toFixed(1) + ' cm')
    console.log('Width : ' + (wcm).toFixed(1) + ' cm')
}
dimension()

