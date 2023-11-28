import{jsxs as e,Fragment as t,jsx as n}from"react/jsx-runtime";import a,{createContext as r,useContext as o,useCallback as i,useMemo as s,useEffect as d,useState as l,useRef as c,Component as h}from"react";import g,{css as m,createGlobalStyle as p,ThemeProvider as u,styled as f}from"styled-components";import x from"react-dom";const D=r({minDate:new Date(2022,0,1),maxDate:new Date(2035,11,0),range:void 0,setMinDate:()=>{},setMaxDate:()=>{},setRange:()=>{}}),w=()=>o(D),y={white:"#ffffff",black:"#333333",gray:"#f1f1f1",lightGray:"#aaaaaa",darkBlueHover:"#5185cb",darkBlue:"#2f80ed",blue:"#2f80ed99",lightBlue:"#2f80ed1a",red:"#b91414",orange:"#f97e00"},$={fontFamily:{openSans:"Open Sans"},fontSize:{xl:20,l:15,m:14,s:13},fontWeight:{l:700,m:600,s:400}},b={l:16,m:8,s:4},C={colors:{...y},fonts:{...$},spaces:{...b}},k=m`
  display: flex;
`,S=m`
  ${k}

  flex-direction: column;
`,v=m`
  justify-content: center;
  align-items: center;
`,M=m`
  font-size: ${$.fontSize.s}px;
  font-weight: ${$.fontWeight.m};
  font-style: normal;
  line-height: normal;
`,E=p`
    * {
        font-family: ${$.fontFamily.openSans};
        box-sizing: border-box;
        user-select: none;
        text-decoration: none;
        list-style: none;
        outline: none;
        margin: 0;
        padding: 0;
    }
`,W=g.button`
  ${S}
  ${v}
  ${M}
  
  background: transparent;
  border: none;
  cursor: pointer;
`,T=g.div`
  ${k}
  ${v}
  
  cursor: default;
`,L=g.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`,F=g.h1`
  ${M}

  font-size:  ${$.fontSize.xl}px;
  font-weight: ${$.fontWeight.l};
`,A=g.input`
  ${M}

  margin: ${b.m}px;
  font-size: ${$.fontSize.l}px;
  font-weight: ${$.fontWeight.s};
  width: 100%;
  border: none;
  background: transparent;
`,B=({children:a})=>e(t,{children:[n(E,{}),n(u,{theme:C,children:a})]}),V=({theme:e})=>e.colors.gray,H=f(W)`
  ${M}

  padding: ${({theme:e})=>e.spaces.s}px 0;
  border: 1px solid ${V};
  background-color: ${({theme:e})=>e.colors.white};
  border-bottom: ${({$isTodosEnabled:e})=>e&&"none"};
  border-radius: ${({$isTodosEnabled:e})=>e?"0":"0 0 8px 8px"};
  width: 100%;
  min-width: 224px;
  justify-content: space-between;

  &:hover {
    background-color: ${V};
  }
`,I=a.memo((({title:e,onButtonClick:t,$isTodosEnabled:a})=>n(H,{$isTodosEnabled:a,"data-testid":"calendar-button",onClick:t,children:e})));var N;!function(e){e.Start="Start",e.Between="Between",e.End="End"}(N||(N={}));const Y={Sunday:"Su",Monday:"Mo",Tuesday:"Tu",Wednesday:"We",Thursday:"Th",Friday:"Fr",Saturday:"Sa"};var z;!function(e){e[e.January=0]="January",e[e.February=1]="February",e[e.March=2]="March",e[e.April=3]="April",e[e.May=4]="May",e[e.June=5]="June",e[e.July=6]="July",e[e.August=7]="August",e[e.September=8]="September",e[e.October=9]="October",e[e.November=10]="November",e[e.December=11]="December"}(z||(z={}));const O=12,R=[{name:"New Year's Day",date:new Date("2022-01-01")},{name:"Orthodox Christmas Eve",date:new Date("2022-01-06")},{name:"Orthodox Christmas Day",date:new Date("2022-01-07")},{name:"Defender of the Fatherland Day",date:new Date("2022-02-23")},{name:"International Women's Day",date:new Date("2022-03-08")},{name:"March Equinox",date:new Date("2022-03-20")},{name:"International Labor Day",date:new Date("2022-05-01")},{name:"Commemoration Day",date:new Date("2022-05-03")},{name:"Victory Day",date:new Date("2022-05-09")},{name:"June Solstice",date:new Date("2022-06-21")},{name:"Independence Day",date:new Date("2022-07-03")},{name:"September Equinox",date:new Date("2022-09-03")},{name:"Mother's Day",date:new Date("2022-10-14")},{name:"October Revolution Day",date:new Date("2022-11-07")},{name:"Christmas Eve",date:new Date("2022-12-24")},{name:"Christmas Day",date:new Date("2022-12-25")},{name:"New Year's Eve",date:new Date("2022-12-31")}],Z=(e,t=!1)=>{const n=new Date(e);if(t){const e=n.getDay(),t=0===e?6:e-1;n.setDate(n.getDate()-t)}else n.setDate(n.getDate()-n.getDay());return n},G=e=>0===e.getDay()||6===e.getDay(),j=e=>R.some((t=>e.getDate()===t.date.getDate()&&e.getMonth()===t.date.getMonth())),J=e=>`${e.getDate().toString().padStart(2,"0")}/${(e.getMonth()+1).toString().padStart(2,"0")}/${e.getFullYear().toString()}`,_=new Date,P=_.getMonth(),q=_.getFullYear(),K=r({firstDateOfWeek:Z(_),selectedDate:_,selectedMonth:P,selectedYear:q,setFirstDateOfWeek:()=>{},setSelectedDate:()=>{},setSelectedMonth:()=>{},setSelectedYear:()=>{}}),Q=()=>o(K);function U(e){const t=localStorage.getItem(e);return t?JSON.parse(t):[]}function X(e,t){localStorage.setItem(e,JSON.stringify(t))}const{Start:ee,Between:te,End:ne}=N,{Start:ae,Between:re,End:oe}=N,{darkBlue:ie,blue:se,lightBlue:de,white:le,orange:ce,lightGray:he,red:ge,black:me}=y,pe=({theme:e})=>e.colors.gray,ue=({theme:e})=>e.colors.darkBlueHover,fe=f(W)`
  background-color: ${({$isSelected:e,$rangeState:t})=>((e,t)=>e||t===oe?ie:t===ae?se:t===re?de:le)(e,t)};
  color: ${({$isSelected:e,$isDisabled:t,$isWeekend:n,$rangeState:a,$isHoliday:r})=>((e,t,n,a,r)=>e||a===ae||a===oe?le:r?ce:a===re?ie:t?he:n?ge:me)(e,t,n,a,r)};
  padding: ${({theme:e})=>e.spaces.m}px;
  border-radius: ${({$rangeState:e})=>(e=>{switch(e){case ee:return"8px 0 0 8px";case te:return"0";case ne:return"0 8px 8px 0";default:return"8px"}})(e)};
  width: 32px;
  height: 38px;

  &:hover {
    background-color: ${({$isSelected:e})=>e?ue:pe};
  }
`,xe=f.div`
  background-color: ${({theme:e})=>e.colors.orange};
  width: 3px;
  height: 3px;
  border-radius: 50%;
`,{Start:De,End:we,Between:ye}=N,$e=a.memo((a=>{const{dayOfWeek:r,isSelected:o=!1,isDisabled:s=!1,isWeekend:d=!1,isWithRange:l=!1,minDate:c,maxDate:h,isTodosEnabled:g=!1,isHoliday:m=!1}=a,{range:p,setRange:u}=w(),{setSelectedDate:f,setSelectedMonth:x,setSelectedYear:D}=Q(),y=r.getDate(),$=r.getMonth(),b=r.getFullYear(),C=i((()=>{if((!c||r>=c)&&(!h||r<=h))if(f(r),x($),D(b),!l||p&&(p.rangeStart||p.rangeEnd)){const e=p&&p.rangeStart?p.rangeStart:r,t=r<e?[r,e]:[e,r];u({rangeStart:t[0],rangeEnd:t[1]})}else u({rangeStart:r,rangeEnd:void 0})}),[c,r,h,f,x,$,D,b,l,p,u]),k=U(r.toDateString());return n(t,{children:e(fe,{$isDisabled:s,$isHoliday:m,$isSelected:o,$isWeekend:d,$rangeState:(e=>{if(p&&p.rangeStart){if(e.getTime()===p.rangeStart.getTime())return De;if(p.rangeEnd&&e.getTime()===p.rangeEnd.getTime())return we;if(p.rangeEnd&&e>p.rangeStart&&e<p.rangeEnd)return ye}})(r),"data-testid":"day-of-week",onClick:C,children:[y,g&&0!==k.length&&n(xe,{})]})})})),be=(e,t)=>e.getMonth()!==t,Ce=(e,t)=>new Date(e,t+1,0).getDate();const ke=(e,t)=>e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear(),Se=(e,t,n)=>{const a=Ce(t,e),r=function(e,t){return new Date(e,t,1).getDay()}(t,e);let o;o=n?(7+r-1)%7:(7+r)%7;const{month:i,year:s}=((e,t)=>0===e?{month:11,year:t-1}:{month:e-1,year:t})(e,t),{month:d,year:l}=((e,t)=>11===e?{month:0,year:t+1}:{month:e+1,year:t})(e,t),c=Ce(s,i),h=Array.from({length:o},((e,t)=>new Date(s,i,c-o+1+t))),g=Array.from({length:a},((n,a)=>new Date(t,e,a+1))),m=a+o,p=7*Math.ceil(6)-m,u=Array.from({length:p},((e,t)=>{const n=new Date(l,d,t+1);return n.getMonth()===d?n:null})).filter((e=>null!==e));return[...h,...g,...u]};var ve;!function(e){e[e.Week=1]="Week",e[e.Month=2]="Month",e[e.Year=3]="Year"}(ve||(ve={}));const Me=({theme:e})=>e.spaces.m,Ee=f.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(1, 1fr);
  width: fit-content;
`,We=f(Ee)`
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: baseline;
`,Te=f(T)`
  padding: ${Me}px;
  flex-direction: column;
`,Le=f.p`
  ${M}

  align-self: flex-start;
  padding-left: ${Me}px;
`,{Week:Fe,Month:Ae,Year:Be}=ve,Ve=a=>{const{type:r,isMondayFirst:o,isWeekendDate:i,isWithRange:d,minDate:l,maxDate:c,isTodosEnabled:h,isHolidayDate:g}=a,{firstDateOfWeek:m,selectedDate:p,selectedMonth:u,selectedYear:f}=Q(),x=s((()=>r===Fe?(e=>Array.from({length:7},((t,n)=>{const a=new Date(e);return a.setDate(e.getDate()+n),a})))(m):r===Ae?Se(u,f,o):void 0),[m,u,f,o,r]),D=s((()=>{if(r===Be)return((e,t=!1)=>Array.from({length:O},((n,a)=>Se(a,e,t))))(f,o)}),[r,f,o]);return e(t,{children:[x&&n(Ee,{"data-testid":"day-of-week-grid",children:x.map((e=>n($e,{dayOfWeek:e,isDisabled:be(e,u),isHoliday:g&&g(e),isSelected:ke(e,p),isTodosEnabled:h,isWeekend:i&&i(e),isWithRange:d,maxDate:c,minDate:l},e.getTime())))}),r===Be&&D&&n(We,{"data-testid":"day-of-week-grid-year",children:D.map((t=>{const a=t[7].getMonth();return e(Te,{children:[n(Le,{children:z[a]}),n(qe,{isMondayFirst:o}),n(Ee,{children:t.map((e=>n($e,{dayOfWeek:e,isDisabled:be(e,a),isHoliday:g&&g(e),isSelected:ke(e,p),isTodosEnabled:h,isWeekend:i&&i(e),isWithRange:d,maxDate:c,minDate:l},e.getTime())))})]},t[7].getTime())}))})]})};const He={calendar:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n<g id="Icon / Field / Calendar" clip-path="url(#clip0_1_7)">\r\n<path id="Vector" d="M8.2 9.59999C7.97333 9.59999 7.78347 9.52319 7.6304 9.36959C7.4768 9.21652 7.4 9.02666 7.4 8.79999C7.4 8.57332 7.4768 8.38319 7.6304 8.22959C7.78347 8.07652 7.97333 7.99999 8.2 7.99999C8.42667 7.99999 8.6168 8.07652 8.7704 8.22959C8.92347 8.38319 9 8.57332 9 8.79999C9 9.02666 8.92347 9.21652 8.7704 9.36959C8.6168 9.52319 8.42667 9.59999 8.2 9.59999ZM5 9.59999C4.77333 9.59999 4.5832 9.52319 4.4296 9.36959C4.27653 9.21652 4.2 9.02666 4.2 8.79999C4.2 8.57332 4.27653 8.38319 4.4296 8.22959C4.5832 8.07652 4.77333 7.99999 5 7.99999C5.22667 7.99999 5.4168 8.07652 5.5704 8.22959C5.72347 8.38319 5.8 8.57332 5.8 8.79999C5.8 9.02666 5.72347 9.21652 5.5704 9.36959C5.4168 9.52319 5.22667 9.59999 5 9.59999ZM11.4 9.59999C11.1733 9.59999 10.9835 9.52319 10.8304 9.36959C10.6768 9.21652 10.6 9.02666 10.6 8.79999C10.6 8.57332 10.6768 8.38319 10.8304 8.22959C10.9835 8.07652 11.1733 7.99999 11.4 7.99999C11.6267 7.99999 11.8165 8.07652 11.9696 8.22959C12.1232 8.38319 12.2 8.57332 12.2 8.79999C12.2 9.02666 12.1232 9.21652 11.9696 9.36959C11.8165 9.52319 11.6267 9.59999 11.4 9.59999ZM8.2 12.8C7.97333 12.8 7.78347 12.7232 7.6304 12.5696C7.4768 12.4165 7.4 12.2267 7.4 12C7.4 11.7733 7.4768 11.5835 7.6304 11.4304C7.78347 11.2768 7.97333 11.2 8.2 11.2C8.42667 11.2 8.6168 11.2768 8.7704 11.4304C8.92347 11.5835 9 11.7733 9 12C9 12.2267 8.92347 12.4165 8.7704 12.5696C8.6168 12.7232 8.42667 12.8 8.2 12.8ZM5 12.8C4.77333 12.8 4.5832 12.7232 4.4296 12.5696C4.27653 12.4165 4.2 12.2267 4.2 12C4.2 11.7733 4.27653 11.5835 4.4296 11.4304C4.5832 11.2768 4.77333 11.2 5 11.2C5.22667 11.2 5.4168 11.2768 5.5704 11.4304C5.72347 11.5835 5.8 11.7733 5.8 12C5.8 12.2267 5.72347 12.4165 5.5704 12.5696C5.4168 12.7232 5.22667 12.8 5 12.8ZM11.4 12.8C11.1733 12.8 10.9835 12.7232 10.8304 12.5696C10.6768 12.4165 10.6 12.2267 10.6 12C10.6 11.7733 10.6768 11.5835 10.8304 11.4304C10.9835 11.2768 11.1733 11.2 11.4 11.2C11.6267 11.2 11.8165 11.2768 11.9696 11.4304C12.1232 11.5835 12.2 11.7733 12.2 12C12.2 12.2267 12.1232 12.4165 11.9696 12.5696C11.8165 12.7232 11.6267 12.8 11.4 12.8ZM2.6 16C2.16 16 1.7832 15.8435 1.4696 15.5304C1.15653 15.2168 1 14.84 1 14.4V3.19999C1 2.75999 1.15653 2.38346 1.4696 2.07039C1.7832 1.75679 2.16 1.59999 2.6 1.59999H3.4V-1.04904e-05H5V1.59999H11.4V-1.04904e-05H13V1.59999H13.8C14.24 1.59999 14.6168 1.75679 14.9304 2.07039C15.2435 2.38346 15.4 2.75999 15.4 3.19999V14.4C15.4 14.84 15.2435 15.2168 14.9304 15.5304C14.6168 15.8435 14.24 16 13.8 16H2.6ZM2.6 14.4H13.8V6.39999H2.6V14.4Z" fill="#AAAAAA"/>\r\n</g>\r\n<defs>\r\n<clipPath id="clip0_1_7">\r\n<rect width="16" height="16" fill="white"/>\r\n</clipPath>\r\n</defs>\r\n</svg>',clear:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n<g id="Icon / Field / Clear">\r\n<path id="Vector" d="M12.9872 3.04239C10.2573 0.319202 5.77739 0.319202 3.04745 3.04239C0.317516 5.76559 0.317516 10.2344 3.04745 12.9576C5.77739 15.6808 10.1873 15.6808 12.9172 12.9576C15.6471 10.2344 15.7171 5.76559 12.9872 3.04239ZM9.97728 10.9327L8.01733 8.97756L6.05738 10.9327L5.0774 9.95511L7.03735 8L5.0774 6.04489L6.05738 5.06733L8.01733 7.02244L9.97728 5.06733L10.9573 6.04489L8.99731 8L10.9573 9.95511L9.97728 10.9327Z" fill="#AAAAAA"/>\r\n</g>\r\n</svg>',close:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48px" height="48px" viewBox="0,0,256,256"><g fill="#ad1313" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="translate(0,0) scale(10.66667,10.66667)"><path d="M4.70703,3.29297l-1.41406,1.41406l7.29297,7.29297l-7.29297,7.29297l1.41406,1.41406l7.29297,-7.29297l7.29297,7.29297l1.41406,-1.41406l-7.29297,-7.29297l7.29297,-7.29297l-1.41406,-1.41406l-7.29297,7.29297z"></path></g></g></svg>',nextGrid:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n<g id="Icon / Calendar / Next">\r\n<path id="Vector" d="M4.27337 4L3.33337 4.94L6.38671 8L3.33337 11.06L4.27337 12L8.27337 8L4.27337 4Z" fill="black"/>\r\n<path id="Vector_2" d="M8.66668 4L7.72668 4.94L10.78 8L7.72668 11.06L8.66668 12L12.6667 8L8.66668 4Z" fill="black"/>\r\n</g>\r\n</svg>',prevGrid:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n<g id="Icon / Calendar / Prev">\r\n<path id="Vector" d="M11.7266 12L12.6666 11.06L9.61329 8L12.6666 4.94L11.7266 4L7.72663 8L11.7266 12Z" fill="black"/>\r\n<path id="Vector_2" d="M7.33332 12L8.27332 11.06L5.21998 8L8.27331 4.94L7.33331 4L3.33332 8L7.33332 12Z" fill="black"/>\r\n</g>\r\n</svg>'},Ie="nextGreed",Ne=f(T)`
  padding: ${({theme:e})=>e.spaces.s}px 0;
  width: 100%;
  min-width: 224px;
  justify-content: space-between;
`,Ye=f(W)`
  width: 16px;
  height: 16px;
`,ze=f.h1`
  ${M}

  font-size: ${({theme:e})=>e.fonts.fontSize.m}px;
  font-weight: ${({theme:e})=>e.fonts.fontWeight.l};
  cursor: pointer;
`,{Week:Oe,Month:Re,Year:Ze}=ve,{prevGrid:Ge,nextGrid:je}=He,Je=a.memo((t=>{const{type:a,minDate:r,maxDate:o,isMondayFirst:s}=t,{selectedDate:l,firstDateOfWeek:c,selectedMonth:h,selectedYear:g,setFirstDateOfWeek:m,setSelectedMonth:p,setSelectedYear:u}=Q();d((()=>{m(Z(l,s))}),[s,l,m]);const f=a===Ze?`${g}`:`${z[h]} ${g}`,x=i((e=>()=>{let t=h,n=g;const i=c;a===Re&&(e===Ie?(t=(h+1)%O,n=11===h?g+1:g):(t=(h-1+O)%O,n=0===h?g-1:g)),a===Oe&&(e===Ie?i.setDate(i.getDate()+7):i.setDate(i.getDate()-7),t=c.getMonth(),n=c.getFullYear(),m(new Date(i))),a===Ze&&(e===Ie?n++:n--);const s=new Date(n,t);(!r||s>=r)&&(!o||s<=o)&&(p(t),u(n))}),[c,o,r,h,g,m,p,u,a]);return e(Ne,{children:[n(Ye,{"data-testid":"prev-button",onClick:x("prevGreed"),children:n(L,{src:Ge})}),n(ze,{"data-testid":"grid-slider",children:f}),n(Ye,{"data-testid":"next-button",onClick:x(Ie),children:n(L,{src:je})})]})})),_e=f.div`
  ${M}

  font-size: ${({theme:e})=>e.fonts.fontSize.m}px;
  font-weight: ${({theme:e})=>e.fonts.fontWeight.l};
  background-color: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.black};
  padding: ${({theme:e})=>e.spaces.m}px;
  width: 32px;
  height: 32px;
`,Pe=a.memo((({weekday:e})=>n(_e,{children:e}))),qe=a.memo((({isMondayFirst:e})=>{const t=s((()=>{const t=Object.values(Y);return e?[...t.slice(1),t[0]]:t}),[e]);return n(T,{children:t.map((e=>n(Pe,{weekday:e},e)))})})),Ke=(e,t)=>{d((()=>{if(!t)return;const n=n=>{e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}}),[e,t])},Qe=({theme:e})=>e.spaces.m,Ue=({theme:e})=>e.spaces.s,Xe=f(T)`
  flex-direction: column;
  align-items: flex-start;
`,et=f.label`
  ${M}

  font-size: ${({theme:e})=>e.fonts.fontSize.l}px;
`,tt=f(T)`
  border: 1px solid ${({theme:e})=>e.colors.gray};
  padding: ${Qe}px;
  margin: ${Qe}px 0;
  gap: ${Ue}px;
  width: 246px;
  justify-content: flex-start;
  border-radius: 8px;
  position: relative;
`,nt=f(T)`
  gap: ${Ue}px;
`,at=f.span`
  ${M}

  font-size: ${({theme:e})=>e.fonts.fontSize.s}px;
  font-weight: ${({theme:e})=>e.fonts.fontWeight.s};
  color: ${({theme:e})=>e.colors.red};
`,rt=f.div`
  position: absolute;
  top: 56%;
`,{calendar:ot,clear:it}=He,st=a.memo((({label:t,rangeValue:a,Calendar:r})=>{const[o,s]=l(""),[h,g]=l(""),[m,p]=l(!1),u=c(null);Ke(u,(()=>{g(""),s(J(f)),p(!1)}));const{selectedDate:f}=Q(),{setRange:x}=w();d((()=>{s(J(f))}),[f]);const D=i((()=>{g(""),s(J(f)),p((e=>!e))}),[f,p]),y=i((()=>{g(""),s(""),x({rangeStart:void 0,rangeEnd:void 0}),p(!1)}),[x]);return e(Xe,{children:[e(nt,{children:[n(et,{children:t}),h&&n(at,{children:h})]}),e(tt,{children:[n(L,{"data-testid":"calendar-icon-button",src:ot,onClick:D}),n(pt,{inputValue:a||o,setError:g,setInputValue:s,setIsCalendarOpen:p}),o&&n(L,{"data-testid":"clear-icon-button",src:it,onClick:y})]}),n(rt,{ref:u,children:m&&n(r,{})})]})})),dt=f(T)`
  gap: ${({theme:e})=>e.spaces.m}px;
  flex-direction: row;
`;a.memo((({Calendar:t})=>{const{range:a}=w(),r=a?.rangeStart?J(a.rangeStart):"",o=a?.rangeEnd?J(a.rangeEnd):"";return n(B,{children:e(dt,{children:[n(st,{Calendar:t,label:"From",rangeValue:r}),n(st,{Calendar:t,label:"To",rangeValue:o})]})})}));const lt="Enter Date in dd/mm/yyyy format",ct="/",ht=/^[0-9/]*$/,gt=f(A)`
  margin: 0;
`,mt=a.memo((e=>{const{inputValue:t,setInputValue:a,setError:r,setIsCalendarOpen:o}=e,{setSelectedDate:s,setSelectedMonth:d,setSelectedYear:l}=Q(),c=i((e=>{r(""),"Backspace"===e.key&&t.endsWith(ct)&&a(t.slice(0,-1))}),[t,r,a]),h=i((()=>{o(!0)}),[]),g=i((e=>{r(""),o(!0);const t=e.target.value;if(!ht.test(t))return e.preventDefault(),void r(lt);if(t.length>=10){a(t.substring(0,10));const e=t.split(ct),n=parseInt(e[0]),o=parseInt(e[1])-1,i=parseInt(e[2]);if(i>9999)return void r(lt);const c=new Date(i,o,n);c.getDate()!==n||c.getMonth()!==o||c.getFullYear()!==i?r("Invalid Date"):(s(c),d(o),l(i))}2===t.length||5===t.length?a(t+ct):a(t)}),[r,a,o,s,d,l]);return n(gt,{"data-testid":"date-picker-input",placeholder:"Coose Date",type:"text",value:t,onChange:g,onFocus:h,onKeyDown:c})}));var pt=mt;const ut=f(T)`
  flex-direction: column;
`,ft=f.p`
  ${M}

  color: ${({theme:e})=>e.colors.red};
`,xt=f.span`
  ${M}

  text-align: center;
`;class Dt extends h{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){this.setState({errorInfo:t})}render(){const{hasError:t,error:a,errorInfo:r}=this.state;return t?e(ut,{"data-testid":"error-boundary",children:[n(F,{children:"An error has occured"}),n(ft,{children:a&&a.toString()}),n(xt,{children:"(╯°□°）╯︵ ┻━┻"}),n(xt,{children:r&&r.componentStack})]}):this.props.children}}const wt=({theme:e})=>e.spaces.m,yt=f(T)`
  gap: ${wt}px;
  width: 100%;
`,$t=f(T)`
  border: 1px solid ${({theme:e})=>e.colors.lightGray};
  margin: ${wt}px 0;
  width: 100%;
  justify-content: flex-start;
  border-radius: 8px;
`,bt=f(W)`
  background-color: ${({theme:e})=>e.colors.darkBlue};
  color: ${({theme:e})=>e.colors.white};
  width: 100px;
  height: 40px;
  border-radius: 8px;
`,Ct=a.memo((({todoText:t,onChange:a,onAddTask:r})=>{const o=()=>{r()};return e(yt,{children:[n($t,{children:n(A,{placeholder:"Enter todo text",type:"text",value:t,onChange:e=>{a(e)},onKeyDown:e=>{"Enter"===e.key&&o()}})}),n(bt,{onClick:o,children:"Add task"})]})})),kt=({theme:e})=>e.spaces.m,St=f(T)`
  border: 1px solid ${({theme:e})=>e.colors.lightGray};
  gap: ${kt}px;
  padding: ${kt}px;
  justify-content: flex-start;
  width: 100%;
  border-radius: 8px;
`,vt=f.p`
  ${M}

  text-decoration: ${({$isDone:e})=>e?"line-through":"none"};
  width: 100%;
  max-width: 433px;
  word-wrap: break-word;
`,Mt=f(W)`
  &:hover {
    color: ${({theme:e})=>e.colors.red};
  }
`,Et=a.memo((t=>{const{id:a,todoText:r,isDone:o,setTodos:s}=t,{selectedDate:d}=Q(),l=i((()=>{const e=d.toDateString(),t=U(e).map((e=>e.id===a?{...e,isDone:!e.isDone}:e));s(t),X(e,t)}),[a,d,s]),c=i((()=>{const e=d.toDateString(),t=U(e).filter((e=>e.id!==a));s(t),X(e,t)}),[a,d,s]);return e(St,{children:[n("input",{checked:o,type:"checkbox",onChange:l}),n(vt,{$isDone:o,children:r}),n(Mt,{onClick:c,children:"Delete"})]})})),Wt=f(T)`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`,Tt=f(T)`
  box-shadow: 0px 0px 13px 0px ${({theme:e})=>e.colors.lightGray};
  background-color: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.gray};
  padding: ${({theme:e})=>e.spaces.m}px;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  height: fit-content;
  position: relative;
  border-radius: 10px;
`,Lt=f(W)`
  align-self: flex-end;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.15);
  }
`,{close:Ft}=He,At=a.memo((({children:t,onClose:a})=>{const r=c(null);Ke(r,a);return n(Wt,{children:e(Tt,{ref:r,children:[n(Lt,{"data-testid":"modal-close-button",onClick:()=>{a()},children:n(L,{src:Ft})}),t]})})})),Bt=f(T)`
  gap: ${({theme:e})=>e.spaces.m}px;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  max-height: 350px;
  overflow: auto;
`,Vt=a.memo((({onClose:t})=>{const[a,r]=l(""),[o,s]=l([]),{selectedDate:c}=Q();d((()=>{const e=U(c.toDateString());e&&s(e)}),[c]);const h=i((()=>{t()}),[t]),g=i((e=>{r(e.target.value)}),[]),m=i((()=>{if(""!==a.trim()){const e=c.toDateString(),t=[...o],n={id:String((new Date).getTime()),todoText:a,isDone:!1};t.push(n),s(t),X(e,t),r("")}}),[a,o,c]),p=o.map((({id:e,...t})=>n(Et,{id:e,setTodos:s,...t},e)));return e(At,{"data-testid":"todo-modal",onClose:h,children:[n(F,{children:"Todos for {Date}".replace("{Date}",c.toDateString())}),n(Ct,{todoText:a,onAddTask:m,onChange:g}),n(Bt,{children:0!==o.length?p:"Add some tasks"})]})})),Ht=f(T)`
  background-color: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.gray};
  border-bottom: ${({$isRangeExist:e,$isTodosEnabled:t})=>(e||t)&&"none"};
  border-radius: ${({$isRangeExist:e,$isTodosEnabled:t})=>e||t?"8px 8px 0 0":"8px"};
  padding: 10px;
  flex-direction: column;
`,{Month:It,Week:Nt}=ve,Yt=t=>{const{type:a=It,isMondayFirst:r,isWeekendDate:o,isWithRange:s,minDate:d,maxDate:l,isTodosEnabled:c,isHolidayDate:h}=t,{range:g,setRange:m}=w(),p=i((()=>{m&&m(void 0)}),[m]),u=s&&Boolean(g?.rangeStart)&&Boolean(g?.rangeEnd);return n(B,{children:e(Dt,{children:[e(Ht,{$isRangeExist:u,$isTodosEnabled:c,"data-testid":"calendar",children:[n(Je,{isMondayFirst:r,maxDate:l,minDate:d,type:a}),(a===Nt||a===It)&&n(qe,{isMondayFirst:r}),n(Ve,{isHolidayDate:h,isMondayFirst:r,isTodosEnabled:c,isWeekendDate:o,isWithRange:s,maxDate:l,minDate:d,type:a})]}),u&&n(I,{$isTodosEnabled:c,title:"Clear Range",onButtonClick:p})]})})};class zt{calendar;constructor(){this.calendar=Yt}addDecorator(e){this.calendar=e(this.calendar)}getCalendar(){return this.calendar}}const Ot=e=>{const t=t=>n(e,{...t,isHolidayDate:j}),a=e.displayName||e.name;return t.displayName=`withHolidays(${a})`,t},Rt=e=>{const t=t=>{const{minDate:a,maxDate:r}=w();return n(e,{...t,maxDate:r,minDate:a})},a=e.displayName||e.name;return t.displayName=`withRange(${a})`,t},Zt=e=>{const t=t=>n(e,{...t,isMondayFirst:!0}),a=e.displayName||e.name;return t.displayName=`withMondayFirst(${a})`,t},Gt=e=>{const t=t=>n(e,{...t,isWithRange:!0}),a=e.displayName||e.name;return t.displayName=`withRange(${a})`,t};const jt=a=>{const r=r=>{const[o,s]=l(!1),{selectedDate:h}=Q(),g=function(e="todo-portal-wrapper"){const t=c(null);return d((()=>{let n=document.getElementById(e),a=!1;return n||(a=!0,n=document.createElement("div"),n.id=e,document.body.appendChild(n)),t.current=n,()=>{a&&n?.parentNode&&n.parentNode.removeChild(n)}}),[e]),e=>{if(t.current)return x.createPortal(e,t.current)}}(),m=i((()=>{s(!0)}),[]),p=i((()=>{s(!1)}),[]),u=0!==U(h.toDateString()).length;return e(t,{children:[n(a,{...r,isTodosEnabled:!0}),n(I,{title:u?"View Tasks":"Add Task",onButtonClick:m}),o&&g(n(Vt,{onClose:p}))]})},o=a.displayName||a.name;return r.displayName=`withTodo(${o})`,r},Jt=e=>{const t=t=>n(e,{...t,isWeekendDate:G}),a=e.displayName||e.name;return t.displayName=`withWeekendsDays(${a})`,t};export{zt as CalendarService,st as DatePicker,w as useDate,Ot as withHolidays,Rt as withMinAndMaxDate,Zt as withMondayFirst,Gt as withRange,jt as withTodos,Jt as withWeekends};
