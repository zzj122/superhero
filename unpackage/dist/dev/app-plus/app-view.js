var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'msg']]],[1,'']]])
Z([3,'txt'])
Z([3,'text'])
Z([[7],[3,'myval']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'movie-score-wapper'])
Z([3,'index'])
Z([3,'yellow'])
Z([[7],[3,'yellowScore']])
Z(z[1])
Z([3,'star-ico'])
Z([3,'../static/icons/Star-yellow.png'])
Z(z[1])
Z([3,'gray'])
Z([[7],[3,'grayScore']])
Z(z[5])
Z([3,'../static/icons/Star-huise.png'])
Z([[2,'=='],[[7],[3,'showNum']],[1,1]])
Z([3,'movie-score'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'innerScore']]],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([1,true])
Z(z[1])
Z([3,'circular'])
Z([1,1000])
Z(z[1])
Z([1,3000])
Z(z[3])
Z([3,'../../static/carousel/e5a517d7a444a0d96a73ac1895d786fe.jpg'])
Z(z[3])
Z([3,'../../static/carousel/e990e2c413afb92862024dc487030049.jpg'])
Z(z[3])
Z([3,'../../static/carousel/65a3aa5084c7eacada1c41dd2bc3ae1e.jpg'])
Z(z[3])
Z([3,'../../static/carousel/8512f2d12c8a0f547e9a2acd2915009a.jpg'])
Z([3,'page-block hot'])
Z([3,'hot-title-wapper'])
Z([3,'hot-icon'])
Z([3,'../../static/icons/fire.png'])
Z([3,'hot-title'])
Z([3,'热门'])
Z([3,'page-block conter'])
Z([3,'true'])
Z([3,'single-poster'])
Z([3,'poster-item'])
Z([3,'poster'])
Z([3,'../../static/poster/6620453c0a39128e1f689cde7d8981d1.jpg'])
Z([3,'movie-name'])
Z([3,'三少爷的剑'])
Z([3,'__l'])
Z([3,'4.7'])
Z([3,'1'])
Z(z[31])
Z(z[23])
Z(z[24])
Z(z[25])
Z([3,'../../static/poster/97e7f5ac345fd024f1c562390113e7c1.jpg'])
Z(z[27])
Z([3,'深海食人鲨'])
Z(z[29])
Z([3,'6.6'])
Z(z[31])
Z([3,'2'])
Z(z[23])
Z(z[24])
Z(z[25])
Z([3,'../../static/poster/0f7c1b3aefd51f39636464a8b4297bc6.jpg'])
Z(z[27])
Z([3,'洋葱头历险记'])
Z(z[29])
Z([3,'8.9'])
Z(z[31])
Z([3,'3'])
Z(z[23])
Z(z[24])
Z(z[25])
Z([3,'../../static/poster/4963bf993ac3693f98f8a229cce36425.jpg'])
Z(z[27])
Z([3,'美女与野兽'])
Z(z[29])
Z([3,'8.2'])
Z(z[31])
Z([3,'4'])
Z(z[23])
Z(z[24])
Z(z[25])
Z([3,'../../static/poster/eb515c45383e022e3a638c8ab515497b.jpg'])
Z(z[27])
Z([3,'大师的寂寞'])
Z(z[29])
Z([3,'5.6'])
Z(z[31])
Z([3,'5'])
Z(z[23])
Z(z[24])
Z(z[25])
Z([3,'../../static/poster/ffdca86868a3833ce5274a9c188605c1.jpg'])
Z(z[27])
Z([3,'总有一次哭泣让你瞬间长大'])
Z(z[29])
Z([3,'7.3'])
Z(z[31])
Z([3,'6'])
Z(z[15])
Z(z[16])
Z(z[17])
Z([3,'../../static/icons/guess-u-like.png'])
Z(z[19])
Z([3,'猜你喜欢'])
Z([3,'page-block guess-u-like'])
Z([3,'single-like-movie'])
Z([3,'like-movie'])
Z([3,'../../static/poster/justice.png'])
Z([3,'movie-desc'])
Z([3,'movie-title'])
Z([3,'正义联盟'])
Z(z[29])
Z([3,'9.1'])
Z(z[31])
Z([3,'7'])
Z([3,'movie-info'])
Z([3,'2018 / 动作 / 科幻 / 奇幻'])
Z(z[100])
Z([3,'上映日期 : 2017-11-17(美国/中国大陆)'])
Z([3,'__e'])
Z([3,'movie-oper'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'praiseMe']],[[4],[[5],[1,0]]]]]]]]]]])
Z([3,'praise-ico'])
Z([3,'../../static/icons/praise.png'])
Z([3,'praise-me'])
Z([3,'赞一下'])
Z([[6],[[7],[3,'animationDataArr']],[1,0]])
Z([3,'praise-me animation-opacity'])
Z([3,'+1'])
Z(z[90])
Z(z[91])
Z([3,'../../static/poster/civilwar.jpg'])
Z(z[93])
Z(z[94])
Z([3,'美国队长3'])
Z(z[29])
Z(z[97])
Z(z[31])
Z([3,'8'])
Z(z[100])
Z([3,'2018 / 动作 / 科幻 / 冒险'])
Z(z[100])
Z([3,'上映日期 : 2016-05-06(中国大陆/美国) / 2016-04-12(加州首映)'])
Z(z[104])
Z(z[105])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'praiseMe']],[[4],[[5],[1,1]]]]]]]]]]])
Z(z[107])
Z(z[108])
Z(z[109])
Z(z[110])
Z([[6],[[7],[3,'animationDataArr']],[1,1]])
Z(z[112])
Z(z[113])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'这是个人页面'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([3,'search-block'])
Z([3,'search-ico-wapper'])
Z([3,'search-ico'])
Z([3,'../../static/icons/search.png'])
Z([3,'search-text'])
Z([3,'10'])
Z([3,'搜索预告'])
Z([3,'text'])
Z([3,'movie-list page-block'])
Z([3,'movie-wapper'])
Z([3,'poster'])
Z([3,'../../static/poster/civilwar.jpg'])
Z(z[10])
Z(z[11])
Z([3,'../../static/poster/justice.png'])
Z(z[10])
Z(z[11])
Z([3,'../../static/poster/6620453c0a39128e1f689cde7d8981d1.jpg'])
Z(z[10])
Z(z[11])
Z([3,'../../static/poster/0f7c1b3aefd51f39636464a8b4297bc6.jpg'])
Z(z[10])
Z(z[11])
Z([3,'../../static/poster/97e7f5ac345fd024f1c562390113e7c1.jpg'])
Z(z[10])
Z(z[11])
Z([3,'../../static/poster/a990f12bf7a65d25d759f324623dd576.jpg'])
Z(z[10])
Z(z[11])
Z([3,'../../static/poster/de17ea1db138c21bc0db8e5501cef8f9.jpg'])
Z(z[10])
Z(z[11])
Z([3,'../../static/poster/cff266a45f18ad9d7a3dcef20818195a.jpg'])
Z(z[10])
Z(z[11])
Z([3,'../../static/poster/2c077784f4bc3e6cbbdc9eeeafa1a3f3.jpg'])
Z(z[10])
Z(z[11])
Z([3,'../../static/poster/eb515c45383e022e3a638c8ab515497b.jpg'])
Z(z[10])
Z(z[11])
Z([3,'../../static/poster/ffdca86868a3833ce5274a9c188605c1.jpg'])
Z(z[10])
Z(z[11])
Z([3,'../../static/poster/4963bf993ac3693f98f8a229cce36425.jpg'])
Z(z[10])
Z(z[11])
Z([3,'../../static/chao/3feaba6d2fa592f78e40f78e780c3468_th1.jpg'])
Z(z[10])
Z(z[11])
Z([3,'../../static/chao/eac5e17f44a15c02c7290cf77641126a_th1.jpg'])
Z(z[10])
Z(z[11])
Z([3,'../../static/chao/WechatIMG92.jpeg'])
Z(z[10])
Z(z[11])
Z([3,'../../static/chao/7e616ff3fa415455358a920173f7e9b6_th1.jpg'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/helloComp.wxml','./components/trailerStars.wxml','./pages/index/index.wxml','./pages/mine/mine.wxml','./pages/search/search.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
var xC=_oz(z,0,e,s,gg)
_(oB,xC)
var oD=_mz(z,'input',['class',1,'type',1,'value',2],[],e,s,gg)
_(oB,oD)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var cF=_n('view')
_rz(z,cF,'class',0,e,s,gg)
var oH=_v()
_(cF,oH)
var cI=function(lK,oJ,aL,gg){
var eN=_mz(z,'image',['class',5,'src',1],[],lK,oJ,gg)
_(aL,eN)
return aL
}
oH.wxXCkey=2
_2z(z,3,cI,e,s,gg,oH,'yellow','index','index')
var bO=_v()
_(cF,bO)
var oP=function(oR,xQ,fS,gg){
var hU=_mz(z,'image',['class',10,'src',1],[],oR,xQ,gg)
_(fS,hU)
return fS
}
bO.wxXCkey=2
_2z(z,9,oP,e,s,gg,bO,'gray','index','')
var hG=_v()
_(cF,hG)
if(_oz(z,12,e,s,gg)){hG.wxVkey=1
var oV=_n('view')
_rz(z,oV,'class',13,e,s,gg)
var cW=_oz(z,14,e,s,gg)
_(oV,cW)
_(hG,oV)
}
hG.wxXCkey=1
_(r,cF)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var lY=_n('view')
_rz(z,lY,'class',0,e,s,gg)
var aZ=_mz(z,'swiper',['autoplay',1,'circular',1,'class',2,'duration',3,'indicatorDots',4,'interval',5],[],e,s,gg)
var t1=_n('swiper-item')
var e2=_mz(z,'image',['class',7,'src',1],[],e,s,gg)
_(t1,e2)
_(aZ,t1)
var b3=_n('swiper-item')
var o4=_mz(z,'image',['class',9,'src',1],[],e,s,gg)
_(b3,o4)
_(aZ,b3)
var x5=_n('swiper-item')
var o6=_mz(z,'image',['class',11,'src',1],[],e,s,gg)
_(x5,o6)
_(aZ,x5)
var f7=_n('swiper-item')
var c8=_mz(z,'image',['class',13,'src',1],[],e,s,gg)
_(f7,c8)
_(aZ,f7)
_(lY,aZ)
var h9=_n('view')
_rz(z,h9,'class',15,e,s,gg)
var o0=_n('view')
_rz(z,o0,'class',16,e,s,gg)
var cAB=_mz(z,'image',['class',17,'src',1],[],e,s,gg)
_(o0,cAB)
var oBB=_n('view')
_rz(z,oBB,'class',19,e,s,gg)
var lCB=_oz(z,20,e,s,gg)
_(oBB,lCB)
_(o0,oBB)
_(h9,o0)
_(lY,h9)
var aDB=_mz(z,'scroll-view',['class',21,'scrollX',1],[],e,s,gg)
var tEB=_n('view')
_rz(z,tEB,'class',23,e,s,gg)
var eFB=_n('view')
_rz(z,eFB,'class',24,e,s,gg)
var bGB=_mz(z,'image',['class',25,'src',1],[],e,s,gg)
_(eFB,bGB)
var oHB=_n('view')
_rz(z,oHB,'class',27,e,s,gg)
var xIB=_oz(z,28,e,s,gg)
_(oHB,xIB)
_(eFB,oHB)
var oJB=_mz(z,'trailer-stars',['bind:__l',29,'innerScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(eFB,oJB)
_(tEB,eFB)
_(aDB,tEB)
var fKB=_n('view')
_rz(z,fKB,'class',33,e,s,gg)
var cLB=_n('view')
_rz(z,cLB,'class',34,e,s,gg)
var hMB=_mz(z,'image',['class',35,'src',1],[],e,s,gg)
_(cLB,hMB)
var oNB=_n('view')
_rz(z,oNB,'class',37,e,s,gg)
var cOB=_oz(z,38,e,s,gg)
_(oNB,cOB)
_(cLB,oNB)
var oPB=_mz(z,'trailer-stars',['bind:__l',39,'innerScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(cLB,oPB)
_(fKB,cLB)
_(aDB,fKB)
var lQB=_n('view')
_rz(z,lQB,'class',43,e,s,gg)
var aRB=_n('view')
_rz(z,aRB,'class',44,e,s,gg)
var tSB=_mz(z,'image',['class',45,'src',1],[],e,s,gg)
_(aRB,tSB)
var eTB=_n('view')
_rz(z,eTB,'class',47,e,s,gg)
var bUB=_oz(z,48,e,s,gg)
_(eTB,bUB)
_(aRB,eTB)
var oVB=_mz(z,'trailer-stars',['bind:__l',49,'innerScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(aRB,oVB)
_(lQB,aRB)
_(aDB,lQB)
var xWB=_n('view')
_rz(z,xWB,'class',53,e,s,gg)
var oXB=_n('view')
_rz(z,oXB,'class',54,e,s,gg)
var fYB=_mz(z,'image',['class',55,'src',1],[],e,s,gg)
_(oXB,fYB)
var cZB=_n('view')
_rz(z,cZB,'class',57,e,s,gg)
var h1B=_oz(z,58,e,s,gg)
_(cZB,h1B)
_(oXB,cZB)
var o2B=_mz(z,'trailer-stars',['bind:__l',59,'innerScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(oXB,o2B)
_(xWB,oXB)
_(aDB,xWB)
var c3B=_n('view')
_rz(z,c3B,'class',63,e,s,gg)
var o4B=_n('view')
_rz(z,o4B,'class',64,e,s,gg)
var l5B=_mz(z,'image',['class',65,'src',1],[],e,s,gg)
_(o4B,l5B)
var a6B=_n('view')
_rz(z,a6B,'class',67,e,s,gg)
var t7B=_oz(z,68,e,s,gg)
_(a6B,t7B)
_(o4B,a6B)
var e8B=_mz(z,'trailer-stars',['bind:__l',69,'innerScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(o4B,e8B)
_(c3B,o4B)
_(aDB,c3B)
var b9B=_n('view')
_rz(z,b9B,'class',73,e,s,gg)
var o0B=_n('view')
_rz(z,o0B,'class',74,e,s,gg)
var xAC=_mz(z,'image',['class',75,'src',1],[],e,s,gg)
_(o0B,xAC)
var oBC=_n('view')
_rz(z,oBC,'class',77,e,s,gg)
var fCC=_oz(z,78,e,s,gg)
_(oBC,fCC)
_(o0B,oBC)
var cDC=_mz(z,'trailer-stars',['bind:__l',79,'innerScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(o0B,cDC)
_(b9B,o0B)
_(aDB,b9B)
_(lY,aDB)
var hEC=_n('view')
_rz(z,hEC,'class',83,e,s,gg)
var oFC=_n('view')
_rz(z,oFC,'class',84,e,s,gg)
var cGC=_mz(z,'image',['class',85,'src',1],[],e,s,gg)
_(oFC,cGC)
var oHC=_n('view')
_rz(z,oHC,'class',87,e,s,gg)
var lIC=_oz(z,88,e,s,gg)
_(oHC,lIC)
_(oFC,oHC)
_(hEC,oFC)
_(lY,hEC)
var aJC=_n('view')
_rz(z,aJC,'class',89,e,s,gg)
var tKC=_n('view')
_rz(z,tKC,'class',90,e,s,gg)
var eLC=_mz(z,'image',['class',91,'src',1],[],e,s,gg)
_(tKC,eLC)
var bMC=_n('view')
_rz(z,bMC,'class',93,e,s,gg)
var oNC=_n('view')
_rz(z,oNC,'class',94,e,s,gg)
var xOC=_oz(z,95,e,s,gg)
_(oNC,xOC)
_(bMC,oNC)
var oPC=_mz(z,'trailer-stars',['bind:__l',96,'innerScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(bMC,oPC)
var fQC=_n('view')
_rz(z,fQC,'class',100,e,s,gg)
var cRC=_oz(z,101,e,s,gg)
_(fQC,cRC)
_(bMC,fQC)
var hSC=_n('view')
_rz(z,hSC,'class',102,e,s,gg)
var oTC=_oz(z,103,e,s,gg)
_(hSC,oTC)
_(bMC,hSC)
_(tKC,bMC)
var cUC=_mz(z,'view',['bindtap',104,'class',1,'data-event-opts',2],[],e,s,gg)
var oVC=_mz(z,'image',['class',107,'src',1],[],e,s,gg)
_(cUC,oVC)
var lWC=_n('view')
_rz(z,lWC,'class',109,e,s,gg)
var aXC=_oz(z,110,e,s,gg)
_(lWC,aXC)
_(cUC,lWC)
var tYC=_mz(z,'view',['animation',111,'class',1],[],e,s,gg)
var eZC=_oz(z,113,e,s,gg)
_(tYC,eZC)
_(cUC,tYC)
_(tKC,cUC)
_(aJC,tKC)
var b1C=_n('view')
_rz(z,b1C,'class',114,e,s,gg)
var o2C=_mz(z,'image',['class',115,'src',1],[],e,s,gg)
_(b1C,o2C)
var x3C=_n('view')
_rz(z,x3C,'class',117,e,s,gg)
var o4C=_n('view')
_rz(z,o4C,'class',118,e,s,gg)
var f5C=_oz(z,119,e,s,gg)
_(o4C,f5C)
_(x3C,o4C)
var c6C=_mz(z,'trailer-stars',['bind:__l',120,'innerScore',1,'showNum',2,'vueId',3],[],e,s,gg)
_(x3C,c6C)
var h7C=_n('view')
_rz(z,h7C,'class',124,e,s,gg)
var o8C=_oz(z,125,e,s,gg)
_(h7C,o8C)
_(x3C,h7C)
var c9C=_n('view')
_rz(z,c9C,'class',126,e,s,gg)
var o0C=_oz(z,127,e,s,gg)
_(c9C,o0C)
_(x3C,c9C)
_(b1C,x3C)
var lAD=_mz(z,'view',['bindtap',128,'class',1,'data-event-opts',2],[],e,s,gg)
var aBD=_mz(z,'image',['class',131,'src',1],[],e,s,gg)
_(lAD,aBD)
var tCD=_n('view')
_rz(z,tCD,'class',133,e,s,gg)
var eDD=_oz(z,134,e,s,gg)
_(tCD,eDD)
_(lAD,tCD)
var bED=_mz(z,'view',['animation',135,'class',1],[],e,s,gg)
var oFD=_oz(z,137,e,s,gg)
_(bED,oFD)
_(lAD,bED)
_(b1C,lAD)
_(aJC,b1C)
_(lY,aJC)
_(r,lY)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var oHD=_n('view')
var fID=_oz(z,0,e,s,gg)
_(oHD,fID)
_(r,oHD)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var hKD=_n('view')
_rz(z,hKD,'class',0,e,s,gg)
var oLD=_n('view')
_rz(z,oLD,'class',1,e,s,gg)
var cMD=_n('view')
_rz(z,cMD,'class',2,e,s,gg)
var oND=_mz(z,'image',['class',3,'src',1],[],e,s,gg)
_(cMD,oND)
_(oLD,cMD)
var lOD=_mz(z,'input',['class',5,'maxlength',1,'placeholder',2,'type',3],[],e,s,gg)
_(oLD,lOD)
_(hKD,oLD)
var aPD=_n('view')
_rz(z,aPD,'class',9,e,s,gg)
var tQD=_n('view')
_rz(z,tQD,'class',10,e,s,gg)
var eRD=_mz(z,'image',['class',11,'src',1],[],e,s,gg)
_(tQD,eRD)
_(aPD,tQD)
var bSD=_n('view')
_rz(z,bSD,'class',13,e,s,gg)
var oTD=_mz(z,'image',['class',14,'src',1],[],e,s,gg)
_(bSD,oTD)
_(aPD,bSD)
var xUD=_n('view')
_rz(z,xUD,'class',16,e,s,gg)
var oVD=_mz(z,'image',['class',17,'src',1],[],e,s,gg)
_(xUD,oVD)
_(aPD,xUD)
var fWD=_n('view')
_rz(z,fWD,'class',19,e,s,gg)
var cXD=_mz(z,'image',['class',20,'src',1],[],e,s,gg)
_(fWD,cXD)
_(aPD,fWD)
var hYD=_n('view')
_rz(z,hYD,'class',22,e,s,gg)
var oZD=_mz(z,'image',['class',23,'src',1],[],e,s,gg)
_(hYD,oZD)
_(aPD,hYD)
var c1D=_n('view')
_rz(z,c1D,'class',25,e,s,gg)
var o2D=_mz(z,'image',['class',26,'src',1],[],e,s,gg)
_(c1D,o2D)
_(aPD,c1D)
var l3D=_n('view')
_rz(z,l3D,'class',28,e,s,gg)
var a4D=_mz(z,'image',['class',29,'src',1],[],e,s,gg)
_(l3D,a4D)
_(aPD,l3D)
var t5D=_n('view')
_rz(z,t5D,'class',31,e,s,gg)
var e6D=_mz(z,'image',['class',32,'src',1],[],e,s,gg)
_(t5D,e6D)
_(aPD,t5D)
var b7D=_n('view')
_rz(z,b7D,'class',34,e,s,gg)
var o8D=_mz(z,'image',['class',35,'src',1],[],e,s,gg)
_(b7D,o8D)
_(aPD,b7D)
var x9D=_n('view')
_rz(z,x9D,'class',37,e,s,gg)
var o0D=_mz(z,'image',['class',38,'src',1],[],e,s,gg)
_(x9D,o0D)
_(aPD,x9D)
var fAE=_n('view')
_rz(z,fAE,'class',40,e,s,gg)
var cBE=_mz(z,'image',['class',41,'src',1],[],e,s,gg)
_(fAE,cBE)
_(aPD,fAE)
var hCE=_n('view')
_rz(z,hCE,'class',43,e,s,gg)
var oDE=_mz(z,'image',['class',44,'src',1],[],e,s,gg)
_(hCE,oDE)
_(aPD,hCE)
var cEE=_n('view')
_rz(z,cEE,'class',46,e,s,gg)
var oFE=_mz(z,'image',['class',47,'src',1],[],e,s,gg)
_(cEE,oFE)
_(aPD,cEE)
var lGE=_n('view')
_rz(z,lGE,'class',49,e,s,gg)
var aHE=_mz(z,'image',['class',50,'src',1],[],e,s,gg)
_(lGE,aHE)
_(aPD,lGE)
var tIE=_n('view')
_rz(z,tIE,'class',52,e,s,gg)
var eJE=_mz(z,'image',['class',53,'src',1],[],e,s,gg)
_(tIE,eJE)
_(aPD,tIE)
var bKE=_n('view')
_rz(z,bKE,'class',55,e,s,gg)
var oLE=_mz(z,'image',['class',56,'src',1],[],e,s,gg)
_(bKE,oLE)
_(aPD,bKE)
_(hKD,aPD)
_(r,hKD)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],[".",[1],"page { width: 100%; height: 100%; background-color: #f7f7f7; }\n.",[1],"page-block { background-color: #FFFFFF; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/helloComp.wxss']=setCssToHead([".",[1],"txt { color: green; }\n",],undefined,{path:"./components/helloComp.wxss"});    
__wxAppCode__['components/helloComp.wxml']=$gwx('./components/helloComp.wxml');

__wxAppCode__['components/trailerStars.wxss']=setCssToHead([".",[1],"movie-score-wapper { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"star-ico { width: ",[0,20],"; height: ",[0,20],"; }\n.",[1],"movie-score { font-size: 12px; color: grey; margin-left: ",[0,8],"; }\n",],undefined,{path:"./components/trailerStars.wxss"});    
__wxAppCode__['components/trailerStars.wxml']=$gwx('./components/trailerStars.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead([".",[1],"txt { color: green; }\n.",[1],"movie-score-wapper { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"star-ico { width: ",[0,20],"; height: ",[0,20],"; }\n.",[1],"movie-score { font-size: 12px; color: grey; margin-left: ",[0,8],"; }\n.",[1],"circular { width: 100%; height: ",[0,440],"; }\n.",[1],"hot { margin-top: ",[0,12],"; padding: ",[0,20],"; }\n.",[1],"hot-title-wapper { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"hot-icon{ width: ",[0,40],"; height: ",[0,40],"; margin: 0 ",[0,20],"; }\n.",[1],"hot-title { font-size: 20px; font-weight: bold; }\n.",[1],"conter { width: 100%; white-space: nowrap; }\n.",[1],"single-poster { display: inline-block; margin-left: ",[0,20],"; }\n.",[1],"poster-item { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\n.",[1],"poster { width: ",[0,200],"; height: ",[0,270],"; }\n.",[1],"movie-name { width: ",[0,200],"; margin-top: ",[0,10],"; font-size: 14px; font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.",[1],"guess-u-like { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\n.",[1],"single-like-movie { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; -webkit-box-align: stretch; -webkit-align-items: stretch; align-items: stretch; padding: 0 ",[0,20]," ",[0,30]," ",[0,20],"; }\n.",[1],"like-movie { width: ",[0,180],"; height: ",[0,240],"; border-radius: 3%; }\n.",[1],"movie-desc { width: ",[0,340],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\n.",[1],"movie-title { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.",[1],"movie-info { color: #808080; font-size: 14px; }\n.",[1],"movie-oper { width: ",[0,140],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; border-left: 2px dashed #dbdbda; }\n.",[1],"praise-ico { width: ",[0,40],"; height: ",[0,40],"; }\n.",[1],"praise-me { font-size: 14px; color: #feab2a; }\n.",[1],"animation-opacity { font-weight: bold; opacity: 0; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/mine/mine.wxss']=undefined;    
__wxAppCode__['pages/mine/mine.wxml']=$gwx('./pages/mine/mine.wxml');

__wxAppCode__['pages/search/search.wxss']=setCssToHead([".",[1],"search-ico { width: ",[0,40],"; height: ",[0,40],"; }\n.",[1],"search-text { font-size: 14px; background-color: #eaeaea; height: ",[0,60],"; width: ",[0,650],"; }\n.",[1],"search-block { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; padding: 0 ",[0,20]," ",[0,15]," ",[0,20],"; position: fixed; top: 100; z-index: 100; background-color: #f8f8f8; }\n.",[1],"search-ico-wapper { background-color: #eaeaea; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; padding: 0 ",[0,10],"; }\n.",[1],"poster { width: ",[0,200],"; height: ",[0,270],"; }\n.",[1],"movie-list { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-box-pack: start; -webkit-justify-content: flex-start; justify-content: flex-start; -webkit-flex-wrap: wrap; flex-wrap: wrap; padding: ",[0,90]," ",[0,10]," 0 ",[0,16],"; }\n.",[1],"movie-wapper { padding: ",[0,10]," ",[0,20],"; }\n",],undefined,{path:"./pages/search/search.wxss"});    
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
