var canvas = document.querySelector('canvas'),
cx = canvas.getContext('2d'),
output = {
  angle: document.querySelector('#angle'),
  length: document.querySelector('#length'),
  vertical: document.querySelector('#vd'),  // 垂直 vertical
  horizontal: document.querySelector('#hd') // 水平 horizontal
},
mx = my = angle = x = y = dist = grd = 0;
canvas.height = canvas.width = w = h = 400;

canvas.addEventListener('mousemove', function(ev) {
  x = ev.clientX;
  y = ev.clientY;
  canvas.width = 400;

  // 红球位置起引出红线
  cx.beginPath();
  cx.moveTo(200, 200);
  cx.strokeStyle = 'red';
  cx.lineTo(x, y);
  cx.stroke();
  cx.closePath();

  // 垂直方向蓝线
  cx.beginPath();
  cx.strokeStyle = 'blue';
  cx.moveTo(x, y);
  cx.lineTo(x, 200);
  cx.stroke();
  cx.closePath();

  // 水平绿线
  cx.beginPath();
  cx.strokeStyle = 'green';
  cx.moveTo(x, 200);
  cx.lineTo(200, 200);
  cx.stroke();
  cx.closePath();

  // 绘制黄秋
  cx.beginPath();
  grd = cx.createRadialGradient(x,y,3,x,y,10);
  grd.addColorStop(0, "white");
  grd.addColorStop(1, "orange");
  cx.fillStyle = grd;
  cx.arc( x, y, 10 , 0, Math.PI*2, true );
  cx.fill();
  cx.closePath();

  // 绘制红球
  cx.beginPath();
  grd = cx.createRadialGradient(200,200,3,200,200,10);
  grd.addColorStop(0, "white");
  grd.addColorStop(1, "red");
  cx.fillStyle = grd;
  cx.arc( 200, 200, 10 , 0, Math.PI*2, true );
  cx.fill();
  cx.closePath();

  // 计算要展示的几个数据
  mx = x - 200;
  my = y - 200;
  dist = Math.sqrt(mx * mx + my * my);
  angle = Math.atan2( my, mx ) * 180 / Math.PI;
  output.horizontal.innerHTML = Math.abs(mx);
  output.vertical.innerHTML = Math.abs(my);
  output.length.innerHTML = ((dist*100)>>0)/100;
  output.angle.innerHTML = ((angle*100)>>0)/100;
}, false);

