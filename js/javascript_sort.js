/*$(document).ready(function () {
	var myar100 = new Array(); 
	var li1=$('li' , '#list') 
	document.getElementById('list').style.fontsize='14px'; 
		$('.sort_AZ').click(function(){
			for(var li2=0;li2<li1.length;li2++) { 
				myar100[li2]=li1[li2].innerHTML; 
			} 
			myar100.sort(); 
			for(var li3=0;li3<li1.length;li3++) { 
				li1[li3].innerHTML=myar100[li3];
			} 
		});

		$('.sort_ZA').click(function(){
			var li1=document.getElementsByTagName('li'); 
			for(var li2=0;li2<li1.length;li2++) { 
				myar100[li2]=li1[li2].innerHTML; 
			} 
			myar100.sort(); 
			myar100.reverse(); 
			for(var li3=0;li3<li1.length;li3++) { 
				li1[li3].innerHTML=myar100[li3]; 
			} 
		});
})*/

$(document).ready(function () {
	function setLi(id,arrayLi){ 
		$('#'+id).empty().append(arrayLi); 
	}

	function sortEvenOdd(id, oddSort) { 
		var even = $('#'+id + ' li:even'); 
		var odd = $('li:odd', '#'+id); 

	if(!oddSort){ 
		setLi(id, concatArray(even, odd)); 
		}
		else{ 
			setLi(id, concatArray(odd, even)); 
		} 
	}

	function concatArray(firstArray, secondArray) { 
		$(secondArray).each(function () { 
			firstArray.push(this); 
		}); 
	return firstArray; 
	}