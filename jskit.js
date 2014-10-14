
/**
 * 获取数据类型
 * @usage: is.Array([]) result:true
 */
var is = { 
	types : ["Array", "Boolean", "Date", "Number", "Object", "RegExp", "String", "Window", "HTMLDocument"] 
} 

for( var i = 0, t; t = is.types[i++]; ) { 
	is[t] = (function( type ) { 
		return function( obj ) { 
			return Object.prototype.toString.call( obj ) == "[object " + type + "]"; 
		} 
	} )( t ); 
} 	

/**
 * 获取选中的文本
 */
function getSelected(){
	return document.selection == undefined ? document.getSelection().toString() : document.selection.createRange().text;
}

/**
 * 文字指定范围，部分选中
 * http://www.zhangxinxu.com/study/201004/textarea-test-select-code-test.html
 * @param target 当前要选择的对象, 如文本域对象
 * @param begin  开始位置
 * @param end    结束位置
 */
function textSelect(target, begin, end){
	var begin = parseInt( begin, 10 ), 
		end = parseInt( end, 10 ),
		len = o.value.length;

	if( len ){
		//如果非数值，则表示从起始位置选择到结束位置
		if( !begin ){
			begin = 0;	
		}
		if( !end ){
			end = l;	
		}

		//如果值超过长度，则就是当前对象值的长度
		if( begin > l ){
			begin = l;	
		}
		if( end > l ){
			end = l;	
		}

		//如果为负值，则与长度值相加
		if( begin < 0 ){
			begin = l + begin;
		}
		if( end < 0 ){
			end = l + end;	
		}

		if( target.createTextRange ){ // IE浏览器
			var range = target.createTextRange();         
			range.moveStart( "character",-l );              
			range.moveEnd( "character",-l );
			range.moveStart( "character", begin );
			range.moveEnd( "character", end );
			range.select();
		}else{
			target.setSelectionRange( begin, end );
			target.focus();
		}
	}
};

/**
 * 设置焦点
 */
function setFocus( obj ){ 
 if( obj.setSelectionRange ){
     setTimeout( function(){
      obj.setSelectionRange( 0,0 );
      obj.focus();
  },100 );
 }else{
    if( obj.createTextRange ){
      var range=obj.createTextRange();
      range.collapse( true );
      range.moveEnd( "character",0 );
      range.moveStart( "character",0 );
      range.select();
    }
    try{obj.focus();}catch( e ){}
  }
}

//----------------- 辅助方法 ---------------------

function $$( id ){
	return document.getElementById( id );
}
