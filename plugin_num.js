var _plugin_num_target="";
var _plugin_num;	
				function getNum(target)
				{
					if(document.getElementById("pluginnumdiv")&&target==_plugin_num_target)return;
					var num = document.createElement("div");
					num.id = "pluginnumdiv";
					target.setAttribute("readOnly","true");
					target.offsetParent.style.position="relative";
					target.offsetParent.appendChild(num);
					var l = target.offsetLeft;
					var t = target.offsetTop+target.scrollHeight+10;
					num.style.top=t;
					num.style.left=l;
					var id = target.id;
					num.innerHTML = "<ul><li class='pluginkey'>1</li><li class='pluginkey'>2</li><li class='pluginkey'>3</li><li class='pluginkey'>4</li><li class='pluginkey'>5</li><li class='pluginbtn'>清空</li></ul>";
					num.innerHTML += "<ul><li class='pluginkey'>6</li><li class='pluginkey'>7</li><li class='pluginkey'>8</li><li class='pluginkey'>9</li><li class='pluginkey'>0</li><li class='pluginbtn'>确定</li></ul>";
					btn = document.getElementsByTagName("li");
					for(var i=0;i<btn.length;i++)
					{
						if(i==5)
							btn[i].onclick = function(){target.value = "";};
						else
							if(i==11)
								btn[i].onclick = function(){target.offsetParent.removeChild(num);_plugin_num=undefined;};
							else
								btn[i].onclick = function(){target.value = (parseFloat(target.value)==0||parseFloat(target.value)==NaN)?this.innerHTML:(target.value+this.innerHTML); };
						//btn[i].setAttribute("class","plugin_key");
					}
					_plugin_num = num;
					_plugin_num_target = target;
					document.onclick = function(e){
						var evt = e?e:window.event;
						var ele =evt.srcElement || evt.target;
						var cls = ele.getAttribute("class")==null?ele.getAttribute("className"):ele.getAttribute("class");
						if(ele!=_plugin_num_target&&ele!=_plugin_num&&cls!="pluginkey"&&cls!="pluginbtn")
						{
							if(_plugin_num!=undefined)_plugin_num.offsetParent.removeChild(_plugin_num);
							_plugin_num=undefined
						}
					}
				}