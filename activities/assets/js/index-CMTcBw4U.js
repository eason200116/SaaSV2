import{a5 as k,b as h,l as B,r as g,E as M,A as x,aV as C,_ as P,Q as m,I as i,K as s,R,a7 as $,U as e,V as a,aj as y,ak as f}from"./index-CvMvgJCr.js";const A=k({__name:"index",setup(b,{expose:l}){l();const{t:r}=h(),t=B(),c=g([{title:r("betAmounts"),body:[]},{title:r("rewordPercent"),body:[]}]),_=async()=>{const o=await x(C());if(o){const d=o.data;console.log(o),d.map(p=>(c[0].body.push(p.lotteryAmount+""),c[1].body.push(p.exchange_Rate*1e3*100/1e3+"%"),p))}};M(()=>{_()});function u(){t.back()}const n={$t:r,router:t,pointRule:c,getProductRules:_,onClick:u,toBet:()=>{sessionStorage.setItem("clickedGameType","lottery"),t.push({path:"/"})}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),w={class:"pointMall-rule__container content"},N={class:"pointMall-rule__container-pointRule"},V={class:"pointMall-rule__container-pointRule__title"},I={class:"pointMall-rule__container-pointRule__body"},S={class:"toBet"};function j(b,l,r,t,c,_){const u=m("NavBar"),v=m("van-icon");return i(),s("div",w,[R(u,{title:t.$t("pointsRule"),"left-arrow":"",onClickLeft:t.onClick},null,8,["title"]),$(` <div class="pointMall-rule__container-claimRule">
			<div class="pointMall-rule__container-claimRule__title">1.{{ $t('claimPoints') }}</div>
			<div class="pointMall-rule__container-claimRule__body">
				<div>{{ $t('descRules1') }}</div>
				<div>
					<p>{{ $t('inviteFriends') }}</p>
					<p>{{ $t('earnPoints') }}</p>
				</div>
				<div @click="router.push({ path: '/main/InvitationBonus' })">
					<span> {{ $t('toClaim') }} </span>
					<van-icon name="upgrade" />
				</div>
			</div>
		</div> `),e("div",N,[e("div",V,a(t.$t("bonusPoints")),1),e("div",I,[e("div",null,a(t.$t("descRules2")),1),e("div",null,[(i(!0),s(y,null,f(t.pointRule,(n,o)=>(i(),s("div",{key:o},[e("p",null,a(n.title),1),(i(!0),s(y,null,f(n.body,d=>(i(),s("li",{key:d},a(d),1))),128))]))),128))]),e("div",{onClick:l[0]||(l[0]=n=>t.toBet())},[e("span",S,a(t.$t("goBetting")),1),R(v,{name:"upgrade",color:"#D23838"})])])])])}const E=P(A,[["render",j],["__scopeId","data-v-26d63714"],["__file","/Users/eason/v1/Activities-工作副本/src/views/activity/PointMall/Rules/index.vue"]]);export{E as default};
