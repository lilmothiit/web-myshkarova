let imgUrl = "";
let defaultUrl = 'resources/notfound.png';


 class gallery extends HTMLElement
 {
    constructor()
	{
        super();

        imgUrl = this.getAttribute('img').split(',');

        for(let i=0;i<imgUrl.length;i++)
        {
            let img = document.createElement('img');
			img.style.width='250px';
			img.style.height='250px';
			img.style.objectFit = "cover";
            img.className='load-anim';
            img.setAttribute('src','resources/load.png');

            this.appendChild(img);

            setTimeout(
				function()
				{
	                img.setAttribute('src','resources/seamless'+imgUrl[i]+'.png');
					img.style.objectFit = "cover";
	                img.className='';
	                img.onerror = function()
					{
	                    img.setAttribute('src', defaultUrl);
						img.title = "Can't load the image. Check the path."
	                };
	                img.onclick = function()
					{
						if(img.getAttribute('src') != defaultUrl)
						{
							document.body.style.backgroundImage = 'url(resources/seamless'+imgUrl[i]+'.png)';
						}
	                }
            },2000);

        }
    }
 }



customElements.define('l-gallary', gallery);
