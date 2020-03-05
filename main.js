!function () {
    function writecode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTage')
        let n = 0
        let id = setInterval(() => {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n >= code.length) {
                window.clearInterval(id)
                fn && fn.call()
            }
        },15)
    }
    let code = `
    /*
     *让我们开始为皮卡丘的诞生做一点准备
     */
    .code-wrapper{
        flex: 1;
        height: 50%;
        padding:10px;
    }
    .preview-wrapper{
        flex: 1;
        height: 50%;
    }
  .preview{
      height:100%;
      display:flex;
      justify-content:center;
      align-items:center;
      background:#fee433;
        
    }
    .wrapper{
      width:100%;
      height:165px;
      position:relative;
    }
    /*
     *开始生成鼻子👃
     */
    .nose{
      width:8px;
      height:0px;
      border-style:solid;
      border-width:12px;
      border-color:black transparent transparent ;
      border-radius:11px;
      position:absolute;
      left:50%;
      transform:translateX(-50%);
      top:28px;
    }
    /*
    *开始生成眼睛👀
    */
    .eye{
      width:49px;
      height:49px;
      background:#2e2e2e;
      position:absolute;
      border-radius:50%;
      border:2px solid #000000;
    }
    .eye::before{
      content:'';
      display:block;
      width:24px;
      height:24px;
      background:white;
      position:absolute;
      border-radius:50%;
      left:6px;
      top:-1px;
      border:1px solid #000;
    }
    .eye.left{
      right:50%;
      margin-right:90px;
    }
    .eye.right{
      left:50%;
      margin-left:90px;
    }
    /*
    *开始生成可爱脸颊🌈
    */
    .face{
      width:68px;
      height:68px;
      background:#fb111b;
      border:2px solid black;
      border-radius:50%;
      position:absolute;
      top:85px;
    }
    .face.left{
      right:50%;
      margin-right:116px;
    }
    .face.right{
      left:50%;
      margin-left:116px;
    }
    /*
    *开始生成上嘴唇👄
    */
    .upperlip{
      height:18px;
      width:70px;
      border:3px solid black;
      top:49px;
      position:absolute;
      background:#fee433;
    }
    .upperlip.left{
      right:50%;
      border-bottom-left-radius:50px 28px;
      border-top:none;
      border-right:none;
      transform:rotate(-20deg);
  
    }
    .upperlip.right{
      left:50%;
       border-bottom-right-radius:50px 28px;
      border-top:none;
      border-left:none;
      transform:rotate(20deg);
      
    }
    /*
    *开始生成下嘴唇👄
    */
    .lowerlip{
      width:200px;
      height:1500px;
      background:#A0070f;
      border-radius:100px /700px;
      border:2px solid black;
      bottom:0;
      position:absolute;
      overflow:hidden;
    }
    .lowerlip::after{
      content:'';
      position:absolute;
      bottom:0;
      width:100px;
      height:90px;
      background:#fc4a62;
      left:50%;
      margin-left:-50px;
      border-radius:50px;
      
    }
    .lowerlip-wrapper{
      width:200px;
      bottom:0;
      left:50%;
      margin-left:-100px;
      position:absolute;
      height:110px;
      overflow:hidden;
     
    }
    .wrapper >:not(:last-child){
        z-index: 1;
    }
    /*
    *⚡️ 皮卡丘由bibi安装完成 ⚡️
    */
    `
    writecode('',code)
}.call()