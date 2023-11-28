import{jsxs as e,Fragment as t,jsx as n}from"react/jsx-runtime";import a,{createContext as r,useContext as o,useCallback as i,useMemo as s,useEffect as d,useState as l,useRef as c,Component as h}from"react";import g,{css as m,createGlobalStyle as p,ThemeProvider as u}from"styled-components";import f from"react-dom";const x=r({minDate:new Date(2022,0,1),maxDate:new Date(2035,11,0),range:void 0,setMinDate:()=>{},setMaxDate:()=>{},setRange:()=>{}}),D=()=>o(x),w={white:"#ffffff",black:"#333333",gray:"#f1f1f1",lightGray:"#aaaaaa",darkBlueHover:"#5185cb",darkBlue:"#2f80ed",blue:"#2f80ed99",lightBlue:"#2f80ed1a",red:"#b91414",orange:"#f97e00"},y={fontFamily:{openSans:"Open Sans"},fontSize:{xl:20,l:15,m:14,s:13},fontWeight:{l:700,m:600,s:400}},$={l:16,m:8,s:4},b={colors:{...w},fonts:{...y},spaces:{...$}},C=m`
  display: flex;
`,k=m`
  ${C}

  flex-direction: column;
`,S=m`
  justify-content: center;
  align-items: center;
`,v=m`
  font-size: ${y.fontSize.s}px;
  font-weight: ${y.fontWeight.m};
  font-style: normal;
  line-height: normal;
`,M=p`
    * {
        font-family: ${y.fontFamily.openSans};
        box-sizing: border-box;
        user-select: none;
        text-decoration: none;
        list-style: none;
        outline: none;
        margin: 0;
        padding: 0;
    }
`,E=g.button`
  ${k}
  ${S}
  ${v}
  
  background: transparent;
  border: none;
  cursor: pointer;
`,W=g.div`
  ${C}
  ${S}
  
  cursor: default;
`,T=g.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`,L=g.h1`
  ${v}

  font-size:  ${y.fontSize.xl}px;
  font-weight: ${y.fontWeight.l};
`,F=g.input`
  ${v}

  margin: ${$.m}px;
  font-size: ${y.fontSize.l}px;
  font-weight: ${y.fontWeight.s};
  width: 100%;
  border: none;
  background: transparent;
`,A=({children:a})=>e(t,{children:[n(M,{}),n(u,{theme:b,children:a})]}),B=({theme:e})=>e.colors.gray,V=g(E)`
  ${v}

  padding: ${({theme:e})=>e.spaces.s}px 0;
  border: 1px solid ${B};
  background-color: ${({theme:e})=>e.colors.white};
  border-bottom: ${({$isTodosEnabled:e})=>e&&"none"};
  border-radius: ${({$isTodosEnabled:e})=>e?"0":"0 0 8px 8px"};
  width: 100%;
  min-width: 224px;
  justify-content: space-between;

  &:hover {
    background-color: ${B};
  }
`,H=a.memo((({title:e,onButtonClick:t,$isTodosEnabled:a})=>n(V,{$isTodosEnabled:a,"data-testid":"calendar-button",onClick:t,children:e})));var I;!function(e){e.Start="Start",e.Between="Between",e.End="End"}(I||(I={}));const N={Sunday:"Su",Monday:"Mo",Tuesday:"Tu",Wednesday:"We",Thursday:"Th",Friday:"Fr",Saturday:"Sa"};var Y;!function(e){e[e.January=0]="January",e[e.February=1]="February",e[e.March=2]="March",e[e.April=3]="April",e[e.May=4]="May",e[e.June=5]="June",e[e.July=6]="July",e[e.August=7]="August",e[e.September=8]="September",e[e.October=9]="October",e[e.November=10]="November",e[e.December=11]="December"}(Y||(Y={}));const z=12,O=[{name:"New Year's Day",date:new Date("2022-01-01")},{name:"Orthodox Christmas Eve",date:new Date("2022-01-06")},{name:"Orthodox Christmas Day",date:new Date("2022-01-07")},{name:"Defender of the Fatherland Day",date:new Date("2022-02-23")},{name:"International Women's Day",date:new Date("2022-03-08")},{name:"March Equinox",date:new Date("2022-03-20")},{name:"International Labor Day",date:new Date("2022-05-01")},{name:"Commemoration Day",date:new Date("2022-05-03")},{name:"Victory Day",date:new Date("2022-05-09")},{name:"June Solstice",date:new Date("2022-06-21")},{name:"Independence Day",date:new Date("2022-07-03")},{name:"September Equinox",date:new Date("2022-09-03")},{name:"Mother's Day",date:new Date("2022-10-14")},{name:"October Revolution Day",date:new Date("2022-11-07")},{name:"Christmas Eve",date:new Date("2022-12-24")},{name:"Christmas Day",date:new Date("2022-12-25")},{name:"New Year's Eve",date:new Date("2022-12-31")}],R=(e,t=!1)=>{const n=new Date(e);if(t){const e=n.getDay(),t=0===e?6:e-1;n.setDate(n.getDate()-t)}else n.setDate(n.getDate()-n.getDay());return n},Z=e=>0===e.getDay()||6===e.getDay(),G=e=>O.some((t=>e.getDate()===t.date.getDate()&&e.getMonth()===t.date.getMonth())),j=e=>`${e.getDate().toString().padStart(2,"0")}/${(e.getMonth()+1).toString().padStart(2,"0")}/${e.getFullYear().toString()}`,J=new Date,_=J.getMonth(),P=J.getFullYear(),q=r({firstDateOfWeek:R(J),selectedDate:J,selectedMonth:_,selectedYear:P,setFirstDateOfWeek:()=>{},setSelectedDate:()=>{},setSelectedMonth:()=>{},setSelectedYear:()=>{}}),K=()=>o(q);function Q(e){const t=localStorage.getItem(e);return t?JSON.parse(t):[]}function U(e,t){localStorage.setItem(e,JSON.stringify(t))}const{Start:X,Between:ee,End:te}=I,{Start:ne,Between:ae,End:re}=I,{darkBlue:oe,blue:ie,lightBlue:se,white:de,orange:le,lightGray:ce,red:he,black:ge}=w,me=({theme:e})=>e.colors.gray,pe=({theme:e})=>e.colors.darkBlueHover,ue=g(E)`
  background-color: ${({$isSelected:e,$rangeState:t})=>((e,t)=>e||t===re?oe:t===ne?ie:t===ae?se:de)(e,t)};
  color: ${({$isSelected:e,$isDisabled:t,$isWeekend:n,$rangeState:a,$isHoliday:r})=>((e,t,n,a,r)=>e||a===ne||a===re?de:r?le:a===ae?oe:t?ce:n?he:ge)(e,t,n,a,r)};
  padding: ${({theme:e})=>e.spaces.m}px;
  border-radius: ${({$rangeState:e})=>(e=>{switch(e){case X:return"8px 0 0 8px";case ee:return"0";case te:return"0 8px 8px 0";default:return"8px"}})(e)};
  width: 32px;
  height: 38px;

  &:hover {
    background-color: ${({$isSelected:e})=>e?pe:me};
  }
`,fe=g.div`
  background-color: ${({theme:e})=>e.colors.orange};
  width: 3px;
  height: 3px;
  border-radius: 50%;
`,{Start:xe,End:De,Between:we}=I,ye=a.memo((a=>{const{dayOfWeek:r,isSelected:o=!1,isDisabled:s=!1,isWeekend:d=!1,isWithRange:l=!1,minDate:c,maxDate:h,isTodosEnabled:g=!1,isHoliday:m=!1}=a,{range:p,setRange:u}=D(),{setSelectedDate:f,setSelectedMonth:x,setSelectedYear:w}=K(),y=r.getDate(),$=r.getMonth(),b=r.getFullYear(),C=i((()=>{if((!c||r>=c)&&(!h||r<=h))if(f(r),x($),w(b),!l||p&&(p.rangeStart||p.rangeEnd)){const e=p&&p.rangeStart?p.rangeStart:r,t=r<e?[r,e]:[e,r];u({rangeStart:t[0],rangeEnd:t[1]})}else u({rangeStart:r,rangeEnd:void 0})}),[c,r,h,f,x,$,w,b,l,p,u]),k=Q(r.toDateString());return n(t,{children:e(ue,{$isDisabled:s,$isHoliday:m,$isSelected:o,$isWeekend:d,$rangeState:(e=>{if(p&&p.rangeStart){if(e.getTime()===p.rangeStart.getTime())return xe;if(p.rangeEnd&&e.getTime()===p.rangeEnd.getTime())return De;if(p.rangeEnd&&e>p.rangeStart&&e<p.rangeEnd)return we}})(r),"data-testid":"day-of-week",onClick:C,children:[y,g&&0!==k.length&&n(fe,{})]})})})),$e=(e,t)=>e.getMonth()!==t,be=(e,t)=>new Date(e,t+1,0).getDate();const Ce=(e,t)=>e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear(),ke=(e,t,n)=>{const a=be(t,e),r=function(e,t){return new Date(e,t,1).getDay()}(t,e);let o;o=n?(7+r-1)%7:(7+r)%7;const{month:i,year:s}=((e,t)=>0===e?{month:11,year:t-1}:{month:e-1,year:t})(e,t),{month:d,year:l}=((e,t)=>11===e?{month:0,year:t+1}:{month:e+1,year:t})(e,t),c=be(s,i),h=Array.from({length:o},((e,t)=>new Date(s,i,c-o+1+t))),g=Array.from({length:a},((n,a)=>new Date(t,e,a+1))),m=a+o,p=7*Math.ceil(6)-m,u=Array.from({length:p},((e,t)=>{const n=new Date(l,d,t+1);return n.getMonth()===d?n:null})).filter((e=>null!==e));return[...h,...g,...u]};var Se;!function(e){e[e.Week=1]="Week",e[e.Month=2]="Month",e[e.Year=3]="Year"}(Se||(Se={}));const ve=({theme:e})=>e.spaces.m,Me=g.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(1, 1fr);
  width: fit-content;
`,Ee=g(Me)`
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: baseline;
`,We=g(W)`
  padding: ${ve}px;
  flex-direction: column;
`,Te=g.p`
  ${v}

  align-self: flex-start;
  padding-left: ${ve}px;
`,{Week:Le,Month:Fe,Year:Ae}=Se,Be=a=>{const{type:r,isMondayFirst:o,isWeekendDate:i,isWithRange:d,minDate:l,maxDate:c,isTodosEnabled:h,isHolidayDate:g}=a,{firstDateOfWeek:m,selectedDate:p,selectedMonth:u,selectedYear:f}=K(),x=s((()=>r===Le?(e=>Array.from({length:7},((t,n)=>{const a=new Date(e);return a.setDate(e.getDate()+n),a})))(m):r===Fe?ke(u,f,o):void 0),[m,u,f,o,r]),D=s((()=>{if(r===Ae)return((e,t=!1)=>Array.from({length:z},((n,a)=>ke(a,e,t))))(f,o)}),[r,f,o]);return e(t,{children:[x&&n(Me,{"data-testid":"day-of-week-grid",children:x.map((e=>n(ye,{dayOfWeek:e,isDisabled:$e(e,u),isHoliday:g&&g(e),isSelected:Ce(e,p),isTodosEnabled:h,isWeekend:i&&i(e),isWithRange:d,maxDate:c,minDate:l},e.getTime())))}),r===Ae&&D&&n(Ee,{"data-testid":"day-of-week-grid-year",children:D.map((t=>{const a=t[7].getMonth();return e(We,{children:[n(Te,{children:Y[a]}),n(Pe,{isMondayFirst:o}),n(Me,{children:t.map((e=>n(ye,{dayOfWeek:e,isDisabled:$e(e,a),isHoliday:g&&g(e),isSelected:Ce(e,p),isTodosEnabled:h,isWeekend:i&&i(e),isWithRange:d,maxDate:c,minDate:l},e.getTime())))})]},t[7].getTime())}))})]})};const Ve={calendar:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n<g id="Icon / Field / Calendar" clip-path="url(#clip0_1_7)">\r\n<path id="Vector" d="M8.2 9.59999C7.97333 9.59999 7.78347 9.52319 7.6304 9.36959C7.4768 9.21652 7.4 9.02666 7.4 8.79999C7.4 8.57332 7.4768 8.38319 7.6304 8.22959C7.78347 8.07652 7.97333 7.99999 8.2 7.99999C8.42667 7.99999 8.6168 8.07652 8.7704 8.22959C8.92347 8.38319 9 8.57332 9 8.79999C9 9.02666 8.92347 9.21652 8.7704 9.36959C8.6168 9.52319 8.42667 9.59999 8.2 9.59999ZM5 9.59999C4.77333 9.59999 4.5832 9.52319 4.4296 9.36959C4.27653 9.21652 4.2 9.02666 4.2 8.79999C4.2 8.57332 4.27653 8.38319 4.4296 8.22959C4.5832 8.07652 4.77333 7.99999 5 7.99999C5.22667 7.99999 5.4168 8.07652 5.5704 8.22959C5.72347 8.38319 5.8 8.57332 5.8 8.79999C5.8 9.02666 5.72347 9.21652 5.5704 9.36959C5.4168 9.52319 5.22667 9.59999 5 9.59999ZM11.4 9.59999C11.1733 9.59999 10.9835 9.52319 10.8304 9.36959C10.6768 9.21652 10.6 9.02666 10.6 8.79999C10.6 8.57332 10.6768 8.38319 10.8304 8.22959C10.9835 8.07652 11.1733 7.99999 11.4 7.99999C11.6267 7.99999 11.8165 8.07652 11.9696 8.22959C12.1232 8.38319 12.2 8.57332 12.2 8.79999C12.2 9.02666 12.1232 9.21652 11.9696 9.36959C11.8165 9.52319 11.6267 9.59999 11.4 9.59999ZM8.2 12.8C7.97333 12.8 7.78347 12.7232 7.6304 12.5696C7.4768 12.4165 7.4 12.2267 7.4 12C7.4 11.7733 7.4768 11.5835 7.6304 11.4304C7.78347 11.2768 7.97333 11.2 8.2 11.2C8.42667 11.2 8.6168 11.2768 8.7704 11.4304C8.92347 11.5835 9 11.7733 9 12C9 12.2267 8.92347 12.4165 8.7704 12.5696C8.6168 12.7232 8.42667 12.8 8.2 12.8ZM5 12.8C4.77333 12.8 4.5832 12.7232 4.4296 12.5696C4.27653 12.4165 4.2 12.2267 4.2 12C4.2 11.7733 4.27653 11.5835 4.4296 11.4304C4.5832 11.2768 4.77333 11.2 5 11.2C5.22667 11.2 5.4168 11.2768 5.5704 11.4304C5.72347 11.5835 5.8 11.7733 5.8 12C5.8 12.2267 5.72347 12.4165 5.5704 12.5696C5.4168 12.7232 5.22667 12.8 5 12.8ZM11.4 12.8C11.1733 12.8 10.9835 12.7232 10.8304 12.5696C10.6768 12.4165 10.6 12.2267 10.6 12C10.6 11.7733 10.6768 11.5835 10.8304 11.4304C10.9835 11.2768 11.1733 11.2 11.4 11.2C11.6267 11.2 11.8165 11.2768 11.9696 11.4304C12.1232 11.5835 12.2 11.7733 12.2 12C12.2 12.2267 12.1232 12.4165 11.9696 12.5696C11.8165 12.7232 11.6267 12.8 11.4 12.8ZM2.6 16C2.16 16 1.7832 15.8435 1.4696 15.5304C1.15653 15.2168 1 14.84 1 14.4V3.19999C1 2.75999 1.15653 2.38346 1.4696 2.07039C1.7832 1.75679 2.16 1.59999 2.6 1.59999H3.4V-1.04904e-05H5V1.59999H11.4V-1.04904e-05H13V1.59999H13.8C14.24 1.59999 14.6168 1.75679 14.9304 2.07039C15.2435 2.38346 15.4 2.75999 15.4 3.19999V14.4C15.4 14.84 15.2435 15.2168 14.9304 15.5304C14.6168 15.8435 14.24 16 13.8 16H2.6ZM2.6 14.4H13.8V6.39999H2.6V14.4Z" fill="#AAAAAA"/>\r\n</g>\r\n<defs>\r\n<clipPath id="clip0_1_7">\r\n<rect width="16" height="16" fill="white"/>\r\n</clipPath>\r\n</defs>\r\n</svg>',clear:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n<g id="Icon / Field / Clear">\r\n<path id="Vector" d="M12.9872 3.04239C10.2573 0.319202 5.77739 0.319202 3.04745 3.04239C0.317516 5.76559 0.317516 10.2344 3.04745 12.9576C5.77739 15.6808 10.1873 15.6808 12.9172 12.9576C15.6471 10.2344 15.7171 5.76559 12.9872 3.04239ZM9.97728 10.9327L8.01733 8.97756L6.05738 10.9327L5.0774 9.95511L7.03735 8L5.0774 6.04489L6.05738 5.06733L8.01733 7.02244L9.97728 5.06733L10.9573 6.04489L8.99731 8L10.9573 9.95511L9.97728 10.9327Z" fill="#AAAAAA"/>\r\n</g>\r\n</svg>',close:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48px" height="48px" viewBox="0,0,256,256"><g fill="#ad1313" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="translate(0,0) scale(10.66667,10.66667)"><path d="M4.70703,3.29297l-1.41406,1.41406l7.29297,7.29297l-7.29297,7.29297l1.41406,1.41406l7.29297,-7.29297l7.29297,7.29297l1.41406,-1.41406l-7.29297,-7.29297l7.29297,-7.29297l-1.41406,-1.41406l-7.29297,7.29297z"></path></g></g></svg>',nextGrid:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n<g id="Icon / Calendar / Next">\r\n<path id="Vector" d="M4.27337 4L3.33337 4.94L6.38671 8L3.33337 11.06L4.27337 12L8.27337 8L4.27337 4Z" fill="black"/>\r\n<path id="Vector_2" d="M8.66668 4L7.72668 4.94L10.78 8L7.72668 11.06L8.66668 12L12.6667 8L8.66668 4Z" fill="black"/>\r\n</g>\r\n</svg>',prevGrid:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n<g id="Icon / Calendar / Prev">\r\n<path id="Vector" d="M11.7266 12L12.6666 11.06L9.61329 8L12.6666 4.94L11.7266 4L7.72663 8L11.7266 12Z" fill="black"/>\r\n<path id="Vector_2" d="M7.33332 12L8.27332 11.06L5.21998 8L8.27331 4.94L7.33331 4L3.33332 8L7.33332 12Z" fill="black"/>\r\n</g>\r\n</svg>'},He="nextGreed",Ie=g(W)`
  padding: ${({theme:e})=>e.spaces.s}px 0;
  width: 100%;
  min-width: 224px;
  justify-content: space-between;
`,Ne=g(E)`
  width: 16px;
  height: 16px;
`,Ye=g.h1`
  ${v}

  font-size: ${({theme:e})=>e.fonts.fontSize.m}px;
  font-weight: ${({theme:e})=>e.fonts.fontWeight.l};
  cursor: pointer;
`,{Week:ze,Month:Oe,Year:Re}=Se,{prevGrid:Ze,nextGrid:Ge}=Ve,je=a.memo((t=>{const{type:a,minDate:r,maxDate:o,isMondayFirst:s}=t,{selectedDate:l,firstDateOfWeek:c,selectedMonth:h,selectedYear:g,setFirstDateOfWeek:m,setSelectedMonth:p,setSelectedYear:u}=K();d((()=>{m(R(l,s))}),[s,l,m]);const f=a===Re?`${g}`:`${Y[h]} ${g}`,x=i((e=>()=>{let t=h,n=g;const i=c;a===Oe&&(e===He?(t=(h+1)%z,n=11===h?g+1:g):(t=(h-1+z)%z,n=0===h?g-1:g)),a===ze&&(e===He?i.setDate(i.getDate()+7):i.setDate(i.getDate()-7),t=c.getMonth(),n=c.getFullYear(),m(new Date(i))),a===Re&&(e===He?n++:n--);const s=new Date(n,t);(!r||s>=r)&&(!o||s<=o)&&(p(t),u(n))}),[c,o,r,h,g,m,p,u,a]);return e(Ie,{children:[n(Ne,{"data-testid":"prev-button",onClick:x("prevGreed"),children:n(T,{src:Ze})}),n(Ye,{"data-testid":"grid-slider",children:f}),n(Ne,{"data-testid":"next-button",onClick:x(He),children:n(T,{src:Ge})})]})})),Je=g.div`
  ${v}

  font-size: ${({theme:e})=>e.fonts.fontSize.m}px;
  font-weight: ${({theme:e})=>e.fonts.fontWeight.l};
  background-color: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.black};
  padding: ${({theme:e})=>e.spaces.m}px;
  width: 32px;
  height: 32px;
`,_e=a.memo((({weekday:e})=>n(Je,{children:e}))),Pe=a.memo((({isMondayFirst:e})=>{const t=s((()=>{const t=Object.values(N);return e?[...t.slice(1),t[0]]:t}),[e]);return n(W,{children:t.map((e=>n(_e,{weekday:e},e)))})})),qe=(e,t)=>{d((()=>{if(!t)return;const n=n=>{e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}}),[e,t])},Ke=({theme:e})=>e.spaces.m,Qe=({theme:e})=>e.spaces.s,Ue=g(W)`
  flex-direction: column;
  align-items: flex-start;
`,Xe=g.label`
  ${v}

  font-size: ${({theme:e})=>e.fonts.fontSize.l}px;
`,et=g(W)`
  border: 1px solid ${({theme:e})=>e.colors.gray};
  padding: ${Ke}px;
  margin: ${Ke}px 0;
  gap: ${Qe}px;
  width: 246px;
  justify-content: flex-start;
  border-radius: 8px;
  position: relative;
`,tt=g(W)`
  gap: ${Qe}px;
`,nt=g.span`
  ${v}

  font-size: ${({theme:e})=>e.fonts.fontSize.s}px;
  font-weight: ${({theme:e})=>e.fonts.fontWeight.s};
  color: ${({theme:e})=>e.colors.red};
`,at=g.div`
  position: absolute;
  top: 56%;
`,{calendar:rt,clear:ot}=Ve,it=a.memo((({label:t,rangeValue:a,Calendar:r})=>{const[o,s]=l(""),[h,g]=l(""),[m,p]=l(!1),u=c(null);qe(u,(()=>{g(""),s(j(f)),p(!1)}));const{selectedDate:f}=K(),{setRange:x}=D();d((()=>{s(j(f))}),[f]);const w=i((()=>{g(""),s(j(f)),p((e=>!e))}),[f,p]),y=i((()=>{g(""),s(""),x({rangeStart:void 0,rangeEnd:void 0}),p(!1)}),[x]);return e(Ue,{children:[e(tt,{children:[n(Xe,{children:t}),h&&n(nt,{children:h})]}),e(et,{children:[n(T,{"data-testid":"calendar-icon-button",src:rt,onClick:w}),n(mt,{inputValue:a||o,setError:g,setInputValue:s,setIsCalendarOpen:p}),o&&n(T,{"data-testid":"clear-icon-button",src:ot,onClick:y})]}),n(at,{ref:u,children:m&&n(r,{})})]})})),st=g(W)`
  gap: ${({theme:e})=>e.spaces.m}px;
  flex-direction: row;
`;a.memo((({Calendar:t})=>{const{range:a}=D(),r=a?.rangeStart?j(a.rangeStart):"",o=a?.rangeEnd?j(a.rangeEnd):"";return n(A,{children:e(st,{children:[n(it,{Calendar:t,label:"From",rangeValue:r}),n(it,{Calendar:t,label:"To",rangeValue:o})]})})}));const dt="Enter Date in dd/mm/yyyy format",lt="/",ct=/^[0-9/]*$/,ht=g(F)`
  margin: 0;
`,gt=a.memo((e=>{const{inputValue:t,setInputValue:a,setError:r,setIsCalendarOpen:o}=e,{setSelectedDate:s,setSelectedMonth:d,setSelectedYear:l}=K(),c=i((e=>{r(""),"Backspace"===e.key&&t.endsWith(lt)&&a(t.slice(0,-1))}),[t,r,a]),h=i((()=>{o(!0)}),[]),g=i((e=>{r(""),o(!0);const t=e.target.value;if(!ct.test(t))return e.preventDefault(),void r(dt);if(t.length>=10){a(t.substring(0,10));const e=t.split(lt),n=parseInt(e[0]),o=parseInt(e[1])-1,i=parseInt(e[2]);if(i>9999)return void r(dt);const c=new Date(i,o,n);c.getDate()!==n||c.getMonth()!==o||c.getFullYear()!==i?r("Invalid Date"):(s(c),d(o),l(i))}2===t.length||5===t.length?a(t+lt):a(t)}),[r,a,o,s,d,l]);return n(ht,{"data-testid":"date-picker-input",placeholder:"Coose Date",type:"text",value:t,onChange:g,onFocus:h,onKeyDown:c})}));var mt=gt;const pt=g(W)`
  flex-direction: column;
`,ut=g.p`
  ${v}

  color: ${({theme:e})=>e.colors.red};
`,ft=g.span`
  ${v}

  text-align: center;
`;class xt extends h{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){this.setState({errorInfo:t})}render(){const{hasError:t,error:a,errorInfo:r}=this.state;return t?e(pt,{"data-testid":"error-boundary",children:[n(L,{children:"An error has occured"}),n(ut,{children:a&&a.toString()}),n(ft,{children:"(╯°□°）╯︵ ┻━┻"}),n(ft,{children:r&&r.componentStack})]}):this.props.children}}const Dt=({theme:e})=>e.spaces.m,wt=g(W)`
  gap: ${Dt}px;
  width: 100%;
`,yt=g(W)`
  border: 1px solid ${({theme:e})=>e.colors.lightGray};
  margin: ${Dt}px 0;
  width: 100%;
  justify-content: flex-start;
  border-radius: 8px;
`,$t=g(E)`
  background-color: ${({theme:e})=>e.colors.darkBlue};
  color: ${({theme:e})=>e.colors.white};
  width: 100px;
  height: 40px;
  border-radius: 8px;
`,bt=a.memo((({todoText:t,onChange:a,onAddTask:r})=>{const o=()=>{r()};return e(wt,{children:[n(yt,{children:n(F,{placeholder:"Enter todo text",type:"text",value:t,onChange:e=>{a(e)},onKeyDown:e=>{"Enter"===e.key&&o()}})}),n($t,{onClick:o,children:"Add task"})]})})),Ct=({theme:e})=>e.spaces.m,kt=g(W)`
  border: 1px solid ${({theme:e})=>e.colors.lightGray};
  gap: ${Ct}px;
  padding: ${Ct}px;
  justify-content: flex-start;
  width: 100%;
  border-radius: 8px;
`,St=g.p`
  ${v}

  text-decoration: ${({$isDone:e})=>e?"line-through":"none"};
  width: 100%;
  max-width: 433px;
  word-wrap: break-word;
`,vt=g(E)`
  &:hover {
    color: ${({theme:e})=>e.colors.red};
  }
`,Mt=a.memo((t=>{const{id:a,todoText:r,isDone:o,setTodos:s}=t,{selectedDate:d}=K(),l=i((()=>{const e=d.toDateString(),t=Q(e).map((e=>e.id===a?{...e,isDone:!e.isDone}:e));s(t),U(e,t)}),[a,d,s]),c=i((()=>{const e=d.toDateString(),t=Q(e).filter((e=>e.id!==a));s(t),U(e,t)}),[a,d,s]);return e(kt,{children:[n("input",{checked:o,type:"checkbox",onChange:l}),n(St,{$isDone:o,children:r}),n(vt,{onClick:c,children:"Delete"})]})})),Et=g(W)`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`,Wt=g(W)`
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
`,Tt=g(E)`
  align-self: flex-end;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.15);
  }
`,{close:Lt}=Ve,Ft=a.memo((({children:t,onClose:a})=>{const r=c(null);qe(r,a);return n(Et,{children:e(Wt,{ref:r,children:[n(Tt,{"data-testid":"modal-close-button",onClick:()=>{a()},children:n(T,{src:Lt})}),t]})})})),At=g(W)`
  gap: ${({theme:e})=>e.spaces.m}px;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  max-height: 350px;
  overflow: auto;
`,Bt=a.memo((({onClose:t})=>{const[a,r]=l(""),[o,s]=l([]),{selectedDate:c}=K();d((()=>{const e=Q(c.toDateString());e&&s(e)}),[c]);const h=i((()=>{t()}),[t]),g=i((e=>{r(e.target.value)}),[]),m=i((()=>{if(""!==a.trim()){const e=c.toDateString(),t=[...o],n={id:String((new Date).getTime()),todoText:a,isDone:!1};t.push(n),s(t),U(e,t),r("")}}),[a,o,c]),p=o.map((({id:e,...t})=>n(Mt,{id:e,setTodos:s,...t},e)));return e(Ft,{"data-testid":"todo-modal",onClose:h,children:[n(L,{children:"Todos for {Date}".replace("{Date}",c.toDateString())}),n(bt,{todoText:a,onAddTask:m,onChange:g}),n(At,{children:0!==o.length?p:"Add some tasks"})]})})),Vt=g(W)`
  background-color: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.gray};
  border-bottom: ${({$isRangeExist:e,$isTodosEnabled:t})=>(e||t)&&"none"};
  border-radius: ${({$isRangeExist:e,$isTodosEnabled:t})=>e||t?"8px 8px 0 0":"8px"};
  padding: 10px;
  flex-direction: column;
`,{Month:Ht,Week:It}=Se,Nt=t=>{const{type:a=Ht,isMondayFirst:r,isWeekendDate:o,isWithRange:s,minDate:d,maxDate:l,isTodosEnabled:c,isHolidayDate:h}=t,{range:g,setRange:m}=D(),p=i((()=>{m&&m(void 0)}),[m]),u=s&&Boolean(g?.rangeStart)&&Boolean(g?.rangeEnd);return n(A,{children:e(xt,{children:[e(Vt,{$isRangeExist:u,$isTodosEnabled:c,"data-testid":"calendar",children:[n(je,{isMondayFirst:r,maxDate:l,minDate:d,type:a}),(a===It||a===Ht)&&n(Pe,{isMondayFirst:r}),n(Be,{isHolidayDate:h,isMondayFirst:r,isTodosEnabled:c,isWeekendDate:o,isWithRange:s,maxDate:l,minDate:d,type:a})]}),u&&n(H,{$isTodosEnabled:c,title:"Clear Range",onButtonClick:p})]})})};class Yt{calendar;constructor(){this.calendar=Nt}addDecorator(e){this.calendar=e(this.calendar)}getCalendar(){return this.calendar}}const zt=e=>{const t=t=>n(e,{...t,isHolidayDate:G}),a=e.displayName||e.name;return t.displayName=`withHolidays(${a})`,t},Ot=e=>{const t=t=>{const{minDate:a,maxDate:r}=D();return n(e,{...t,maxDate:r,minDate:a})},a=e.displayName||e.name;return t.displayName=`withRange(${a})`,t},Rt=e=>{const t=t=>n(e,{...t,isMondayFirst:!0}),a=e.displayName||e.name;return t.displayName=`withMondayFirst(${a})`,t},Zt=e=>{const t=t=>n(e,{...t,isWithRange:!0}),a=e.displayName||e.name;return t.displayName=`withRange(${a})`,t};const Gt=a=>{const r=r=>{const[o,s]=l(!1),{selectedDate:h}=K(),g=function(e="todo-portal-wrapper"){const t=c(null);return d((()=>{let n=document.getElementById(e),a=!1;return n||(a=!0,n=document.createElement("div"),n.id=e,document.body.appendChild(n)),t.current=n,()=>{a&&n?.parentNode&&n.parentNode.removeChild(n)}}),[e]),e=>{if(t.current)return f.createPortal(e,t.current)}}(),m=i((()=>{s(!0)}),[]),p=i((()=>{s(!1)}),[]),u=0!==Q(h.toDateString()).length;return e(t,{children:[n(a,{...r,isTodosEnabled:!0}),n(H,{title:u?"View Tasks":"Add Task",onButtonClick:m}),o&&g(n(Bt,{onClose:p}))]})},o=a.displayName||a.name;return r.displayName=`withTodo(${o})`,r},jt=e=>{const t=t=>n(e,{...t,isWeekendDate:Z}),a=e.displayName||e.name;return t.displayName=`withWeekendsDays(${a})`,t};export{Yt as CalendarService,it as DatePicker,D as useDate,zt as withHolidays,Ot as withMinAndMaxDate,Rt as withMondayFirst,Zt as withRange,Gt as withTodos,jt as withWeekends};
