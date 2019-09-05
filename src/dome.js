window.onload=function(){
    let canvas=document.getElementById('glcanvas'),
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    // 创建顶点着色器
    let VSHADER_SOURCE = 
        'void main() {\n' +
          '  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n' +
          '  gl_PointSize = 10.0;\n' + 
        '}\n';
    // 创建片元着色器
    let FSHADER_SOURCE =
            'void main() {\n' +
            '  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' +
        '}\n';
    
    var program = gl.createProgram();
    // 创建顶点着色器 
    var vShader = gl.createShader(gl.VERTEX_SHADER);
    // 创建片元着色器 
    var fShader = gl.createShader(gl.FRAGMENT_SHADER);
    // shader容器与着色器绑定 
    gl.shaderSource(vShader, VSHADER_SOURCE);
    gl.shaderSource(fShader, FSHADER_SOURCE);
    // 将GLSE语言编译成浏览器可用代码 
    gl.compileShader(vShader);
    gl.compileShader(fShader);
    // 将着色器添加到程序上 
    gl.attachShader(program, vShader);
    gl.attachShader(program, fShader);
    // 链接程序，在链接操作执行以后，可以任意修改shader的源代码，
    // 对shader重新编译不会影响整个程序，除非重新链接程序 
    gl.linkProgram(program);
    // 加载并使用链接好的程序 
    gl.useProgram(program);

    // 绘制一个点
    gl.clearColor(0.0,0.0,0.0,1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0 ,1);
}