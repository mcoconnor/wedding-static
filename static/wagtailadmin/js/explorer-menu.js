$(function(){var $explorer=$('#explorer');var $body=$('body');$(document).on('click','.dl-trigger',function(){var $this=$(this);$('.nav-main .submenu-active, .nav-wrapper').removeClass('submenu-active');if($explorer.data('dlmenu')&&$explorer.dlmenu('isOpen')){return false;}else{if(!$explorer.children().length){$this.addClass('icon-spinner');$explorer.load($this.data('explorer-menu-url'),function(){$this.removeClass('icon-spinner');if($explorer.find('.dl-menu li').length===0){document.location.href=$this.attr('href');}
$explorer.addClass('dl-menuwrapper').dlmenu({animationClasses:{classin:'dl-animate-in-2',classout:'dl-animate-out-2'}});$explorer.dlmenu('openMenu');});}else{$explorer.dlmenu('openMenu');}}
return false;});$(document).on('keydown click',function(e){if($explorer.data('dlmenu')&&$explorer.dlmenu('isOpen')&&(e.keyCode==27||!e.keyCode)){$explorer.dlmenu('closeMenu');}});});