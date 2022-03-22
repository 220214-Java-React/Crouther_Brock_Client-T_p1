function init(){

	var isMobile = false;
	toggleCss();
	
	window.addEventListener("resize", toggleCss);
	
	function toggleCss(){
		
		if(window.innerWidth < window.innerHeight){
			document.getElementById("css").href = "css/login_vrt.css";
			isMobile = true;
		}
	}
}