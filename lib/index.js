"use strict";var e=require("react/jsx-runtime"),t=require("react"),n=require("styled-components"),a=require("react-dom");const r=new Date(2022,0,1),s=new Date(2035,11,0),o=t.createContext({minDate:r,maxDate:s,range:void 0,setMinDate:()=>{},setMaxDate:()=>{},setRange:()=>{}}),i=()=>t.useContext(o),d={white:"#ffffff",black:"#333333",gray:"#f1f1f1",lightGray:"#aaaaaa",darkBlueHover:"#5185cb",darkBlue:"#2f80ed",blue:"#2f80ed99",lightBlue:"#2f80ed1a",red:"#b91414",orange:"#f97e00"},l={fontFamily:{openSans:"Open Sans"},fontSize:{xl:20,l:15,m:14,s:13},fontWeight:{l:700,m:600,s:400}},c={l:16,m:8,s:4},h={colors:{...d},fonts:{...l},spaces:{...c}},g=n.css`
  display: flex;
`,m=n.css`
  ${g}

  flex-direction: column;
`,u=n.css`
  justify-content: center;
  align-items: center;
`,x=n.css`
  font-size: ${l.fontSize.s}px;
  font-weight: ${l.fontWeight.m};
  font-style: normal;
  line-height: normal;
`,p=n.createGlobalStyle`
    * {
        font-family: ${l.fontFamily.openSans};
        box-sizing: border-box;
        user-select: none;
        text-decoration: none;
        list-style: none;
        outline: none;
        margin: 0;
        padding: 0;
    }
`,f=n.default.button`
  ${m}
  ${u}
  ${x}
  
  background: transparent;
  border: none;
  cursor: pointer;
`,y=n.default.div`
  ${g}
  ${u}
  
  cursor: default;
`,D=n.default.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`,w=n.default.h1`
  ${x}

  font-size:  ${l.fontSize.xl}px;
  font-weight: ${l.fontWeight.l};
`,C=n.default.input`
  ${x}

  margin: ${c.m}px;
  font-size: ${l.fontSize.l}px;
  font-weight: ${l.fontWeight.s};
  width: 100%;
  border: none;
  background: transparent;
`,b=({children:t})=>e.jsxs(e.Fragment,{children:[e.jsx(p,{}),e.jsx(n.ThemeProvider,{theme:h,children:t})]}),$=({theme:e})=>e.colors.gray,k=n.styled(f)`
  ${x}

  padding: ${({theme:e})=>e.spaces.s}px 0;
  border: 1px solid ${$};
  background-color: ${({theme:e})=>e.colors.white};
  border-bottom: ${({$isTodosEnabled:e})=>e&&"none"};
  border-radius: ${({$isTodosEnabled:e})=>e?"0":"0 0 8px 8px"};
  width: 100%;
  min-width: 224px;
  justify-content: space-between;

  &:hover {
    background-color: ${$};
  }
`,j=t.default.memo((({title:t,onButtonClick:n,$isTodosEnabled:a})=>e.jsx(k,{$isTodosEnabled:a,"data-testid":"calendar-button",onClick:n,children:t})));var S;!function(e){e.Start="Start",e.Between="Between",e.End="End"}(S||(S={}));const v={Sunday:"Su",Monday:"Mo",Tuesday:"Tu",Wednesday:"We",Thursday:"Th",Friday:"Fr",Saturday:"Sa"};var M;!function(e){e[e.January=0]="January",e[e.February=1]="February",e[e.March=2]="March",e[e.April=3]="April",e[e.May=4]="May",e[e.June=5]="June",e[e.July=6]="July",e[e.August=7]="August",e[e.September=8]="September",e[e.October=9]="October",e[e.November=10]="November",e[e.December=11]="December"}(M||(M={}));const E=12,T=[{name:"New Year's Day",date:new Date("2022-01-01")},{name:"Orthodox Christmas Eve",date:new Date("2022-01-06")},{name:"Orthodox Christmas Day",date:new Date("2022-01-07")},{name:"Defender of the Fatherland Day",date:new Date("2022-02-23")},{name:"International Women's Day",date:new Date("2022-03-08")},{name:"March Equinox",date:new Date("2022-03-20")},{name:"International Labor Day",date:new Date("2022-05-01")},{name:"Commemoration Day",date:new Date("2022-05-03")},{name:"Victory Day",date:new Date("2022-05-09")},{name:"June Solstice",date:new Date("2022-06-21")},{name:"Independence Day",date:new Date("2022-07-03")},{name:"September Equinox",date:new Date("2022-09-03")},{name:"Mother's Day",date:new Date("2022-10-14")},{name:"October Revolution Day",date:new Date("2022-11-07")},{name:"Christmas Eve",date:new Date("2022-12-24")},{name:"Christmas Day",date:new Date("2022-12-25")},{name:"New Year's Eve",date:new Date("2022-12-31")}],W=(e,t=!1)=>{const n=new Date(e);if(t){const e=n.getDay(),t=0===e?6:e-1;n.setDate(n.getDate()-t)}else n.setDate(n.getDate()-n.getDay());return n},L=e=>0===e.getDay()||6===e.getDay(),F=e=>T.some((t=>e.getDate()===t.date.getDate()&&e.getMonth()===t.date.getMonth())),A=e=>`${e.getDate().toString().padStart(2,"0")}/${(e.getMonth()+1).toString().padStart(2,"0")}/${e.getFullYear().toString()}`,B=new Date,V=B.getMonth(),R=B.getFullYear(),H=W(B),I=t.createContext({firstDateOfWeek:H,selectedDate:B,selectedMonth:V,selectedYear:R,setFirstDateOfWeek:()=>{},setSelectedDate:()=>{},setSelectedMonth:()=>{},setSelectedYear:()=>{}}),N=()=>t.useContext(I);function Y(e){const t=localStorage.getItem(e);return t?JSON.parse(t):[]}function z(e,t){localStorage.setItem(e,JSON.stringify(t))}const{Start:O,Between:Z,End:G}=S,{Start:J,Between:q,End:P}=S,{darkBlue:_,blue:K,lightBlue:Q,white:U,orange:X,lightGray:ee,red:te,black:ne}=d,ae=({theme:e})=>e.colors.gray,re=({theme:e})=>e.colors.darkBlueHover,se=n.styled(f)`
  background-color: ${({$isSelected:e,$rangeState:t})=>((e,t)=>e||t===P?_:t===J?K:t===q?Q:U)(e,t)};
  color: ${({$isSelected:e,$isDisabled:t,$isWeekend:n,$rangeState:a,$isHoliday:r})=>((e,t,n,a,r)=>e||a===J||a===P?U:r?X:a===q?_:t?ee:n?te:ne)(e,t,n,a,r)};
  padding: ${({theme:e})=>e.spaces.m}px;
  border-radius: ${({$rangeState:e})=>(e=>{switch(e){case O:return"8px 0 0 8px";case Z:return"0";case G:return"0 8px 8px 0";default:return"8px"}})(e)};
  width: 32px;
  height: 38px;

  &:hover {
    background-color: ${({$isSelected:e})=>e?re:ae};
  }
`,oe=n.styled.div`
  background-color: ${({theme:e})=>e.colors.orange};
  width: 3px;
  height: 3px;
  border-radius: 50%;
`,{Start:ie,End:de,Between:le}=S,ce=t.default.memo((n=>{const{dayOfWeek:a,isSelected:r=!1,isDisabled:s=!1,isWeekend:o=!1,isWithRange:d=!1,minDate:l,maxDate:c,isTodosEnabled:h=!1,isHoliday:g=!1}=n,{range:m,setRange:u}=i(),{setSelectedDate:x,setSelectedMonth:p,setSelectedYear:f}=N(),y=a.getDate(),D=a.getMonth(),w=a.getFullYear(),C=t.useCallback((()=>{if((!l||a>=l)&&(!c||a<=c))if(x(a),p(D),f(w),!d||m&&(m.rangeStart||m.rangeEnd)){const e=m&&m.rangeStart?m.rangeStart:a,t=a<e?[a,e]:[e,a];u({rangeStart:t[0],rangeEnd:t[1]})}else u({rangeStart:a,rangeEnd:void 0})}),[l,a,c,x,p,D,f,w,d,m,u]),b=Y(a.toDateString());return e.jsx(e.Fragment,{children:e.jsxs(se,{$isDisabled:s,$isHoliday:g,$isSelected:r,$isWeekend:o,$rangeState:(e=>{if(m&&m.rangeStart){if(e.getTime()===m.rangeStart.getTime())return ie;if(m.rangeEnd&&e.getTime()===m.rangeEnd.getTime())return de;if(m.rangeEnd&&e>m.rangeStart&&e<m.rangeEnd)return le}})(a),"data-testid":"day-of-week",onClick:C,children:[y,h&&0!==b.length&&e.jsx(oe,{})]})})})),he=(e,t)=>e.getMonth()!==t,ge=(e,t)=>new Date(e,t+1,0).getDate();const me=(e,t)=>e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear(),ue=(e,t,n)=>{const a=ge(t,e),r=function(e,t){return new Date(e,t,1).getDay()}(t,e);let s;s=n?(7+r-1)%7:(7+r)%7;const{month:o,year:i}=((e,t)=>0===e?{month:11,year:t-1}:{month:e-1,year:t})(e,t),{month:d,year:l}=((e,t)=>11===e?{month:0,year:t+1}:{month:e+1,year:t})(e,t),c=ge(i,o),h=Array.from({length:s},((e,t)=>new Date(i,o,c-s+1+t))),g=Array.from({length:a},((n,a)=>new Date(t,e,a+1))),m=a+s,u=7*Math.ceil(6)-m,x=Array.from({length:u},((e,t)=>{const n=new Date(l,d,t+1);return n.getMonth()===d?n:null})).filter((e=>null!==e));return[...h,...g,...x]};var xe;!function(e){e[e.Week=1]="Week",e[e.Month=2]="Month",e[e.Year=3]="Year"}(xe||(xe={}));const pe=({theme:e})=>e.spaces.m,fe=n.styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(1, 1fr);
  width: fit-content;
`,ye=n.styled(fe)`
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: baseline;
`,De=n.styled(y)`
  padding: ${pe}px;
  flex-direction: column;
`,we=n.styled.p`
  ${x}

  align-self: flex-start;
  padding-left: ${pe}px;
`,{Week:Ce,Month:be,Year:$e}=xe,ke=n=>{const{type:a,isMondayFirst:r,isWeekendDate:s,isWithRange:o,minDate:i,maxDate:d,isTodosEnabled:l,isHolidayDate:c}=n,{firstDateOfWeek:h,selectedDate:g,selectedMonth:m,selectedYear:u}=N(),x=t.useMemo((()=>a===Ce?(e=>Array.from({length:7},((t,n)=>{const a=new Date(e);return a.setDate(e.getDate()+n),a})))(h):a===be?ue(m,u,r):void 0),[h,m,u,r,a]),p=t.useMemo((()=>{if(a===$e)return((e,t=!1)=>Array.from({length:E},((n,a)=>ue(a,e,t))))(u,r)}),[a,u,r]);return e.jsxs(e.Fragment,{children:[x&&e.jsx(fe,{"data-testid":"day-of-week-grid",children:x.map((t=>e.jsx(ce,{dayOfWeek:t,isDisabled:he(t,m),isHoliday:c&&c(t),isSelected:me(t,g),isTodosEnabled:l,isWeekend:s&&s(t),isWithRange:o,maxDate:d,minDate:i},t.getTime())))}),a===$e&&p&&e.jsx(ye,{"data-testid":"day-of-week-grid-year",children:p.map((t=>{const n=t[7].getMonth();return e.jsxs(De,{children:[e.jsx(we,{children:M[n]}),e.jsx(He,{isMondayFirst:r}),e.jsx(fe,{children:t.map((t=>e.jsx(ce,{dayOfWeek:t,isDisabled:he(t,n),isHoliday:c&&c(t),isSelected:me(t,g),isTodosEnabled:l,isWeekend:s&&s(t),isWithRange:o,maxDate:d,minDate:i},t.getTime())))})]},t[7].getTime())}))})]})};const je={calendar:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n<g id="Icon / Field / Calendar" clip-path="url(#clip0_1_7)">\r\n<path id="Vector" d="M8.2 9.59999C7.97333 9.59999 7.78347 9.52319 7.6304 9.36959C7.4768 9.21652 7.4 9.02666 7.4 8.79999C7.4 8.57332 7.4768 8.38319 7.6304 8.22959C7.78347 8.07652 7.97333 7.99999 8.2 7.99999C8.42667 7.99999 8.6168 8.07652 8.7704 8.22959C8.92347 8.38319 9 8.57332 9 8.79999C9 9.02666 8.92347 9.21652 8.7704 9.36959C8.6168 9.52319 8.42667 9.59999 8.2 9.59999ZM5 9.59999C4.77333 9.59999 4.5832 9.52319 4.4296 9.36959C4.27653 9.21652 4.2 9.02666 4.2 8.79999C4.2 8.57332 4.27653 8.38319 4.4296 8.22959C4.5832 8.07652 4.77333 7.99999 5 7.99999C5.22667 7.99999 5.4168 8.07652 5.5704 8.22959C5.72347 8.38319 5.8 8.57332 5.8 8.79999C5.8 9.02666 5.72347 9.21652 5.5704 9.36959C5.4168 9.52319 5.22667 9.59999 5 9.59999ZM11.4 9.59999C11.1733 9.59999 10.9835 9.52319 10.8304 9.36959C10.6768 9.21652 10.6 9.02666 10.6 8.79999C10.6 8.57332 10.6768 8.38319 10.8304 8.22959C10.9835 8.07652 11.1733 7.99999 11.4 7.99999C11.6267 7.99999 11.8165 8.07652 11.9696 8.22959C12.1232 8.38319 12.2 8.57332 12.2 8.79999C12.2 9.02666 12.1232 9.21652 11.9696 9.36959C11.8165 9.52319 11.6267 9.59999 11.4 9.59999ZM8.2 12.8C7.97333 12.8 7.78347 12.7232 7.6304 12.5696C7.4768 12.4165 7.4 12.2267 7.4 12C7.4 11.7733 7.4768 11.5835 7.6304 11.4304C7.78347 11.2768 7.97333 11.2 8.2 11.2C8.42667 11.2 8.6168 11.2768 8.7704 11.4304C8.92347 11.5835 9 11.7733 9 12C9 12.2267 8.92347 12.4165 8.7704 12.5696C8.6168 12.7232 8.42667 12.8 8.2 12.8ZM5 12.8C4.77333 12.8 4.5832 12.7232 4.4296 12.5696C4.27653 12.4165 4.2 12.2267 4.2 12C4.2 11.7733 4.27653 11.5835 4.4296 11.4304C4.5832 11.2768 4.77333 11.2 5 11.2C5.22667 11.2 5.4168 11.2768 5.5704 11.4304C5.72347 11.5835 5.8 11.7733 5.8 12C5.8 12.2267 5.72347 12.4165 5.5704 12.5696C5.4168 12.7232 5.22667 12.8 5 12.8ZM11.4 12.8C11.1733 12.8 10.9835 12.7232 10.8304 12.5696C10.6768 12.4165 10.6 12.2267 10.6 12C10.6 11.7733 10.6768 11.5835 10.8304 11.4304C10.9835 11.2768 11.1733 11.2 11.4 11.2C11.6267 11.2 11.8165 11.2768 11.9696 11.4304C12.1232 11.5835 12.2 11.7733 12.2 12C12.2 12.2267 12.1232 12.4165 11.9696 12.5696C11.8165 12.7232 11.6267 12.8 11.4 12.8ZM2.6 16C2.16 16 1.7832 15.8435 1.4696 15.5304C1.15653 15.2168 1 14.84 1 14.4V3.19999C1 2.75999 1.15653 2.38346 1.4696 2.07039C1.7832 1.75679 2.16 1.59999 2.6 1.59999H3.4V-1.04904e-05H5V1.59999H11.4V-1.04904e-05H13V1.59999H13.8C14.24 1.59999 14.6168 1.75679 14.9304 2.07039C15.2435 2.38346 15.4 2.75999 15.4 3.19999V14.4C15.4 14.84 15.2435 15.2168 14.9304 15.5304C14.6168 15.8435 14.24 16 13.8 16H2.6ZM2.6 14.4H13.8V6.39999H2.6V14.4Z" fill="#AAAAAA"/>\r\n</g>\r\n<defs>\r\n<clipPath id="clip0_1_7">\r\n<rect width="16" height="16" fill="white"/>\r\n</clipPath>\r\n</defs>\r\n</svg>',clear:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n<g id="Icon / Field / Clear">\r\n<path id="Vector" d="M12.9872 3.04239C10.2573 0.319202 5.77739 0.319202 3.04745 3.04239C0.317516 5.76559 0.317516 10.2344 3.04745 12.9576C5.77739 15.6808 10.1873 15.6808 12.9172 12.9576C15.6471 10.2344 15.7171 5.76559 12.9872 3.04239ZM9.97728 10.9327L8.01733 8.97756L6.05738 10.9327L5.0774 9.95511L7.03735 8L5.0774 6.04489L6.05738 5.06733L8.01733 7.02244L9.97728 5.06733L10.9573 6.04489L8.99731 8L10.9573 9.95511L9.97728 10.9327Z" fill="#AAAAAA"/>\r\n</g>\r\n</svg>',close:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48px" height="48px" viewBox="0,0,256,256"><g fill="#ad1313" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="translate(0,0) scale(10.66667,10.66667)"><path d="M4.70703,3.29297l-1.41406,1.41406l7.29297,7.29297l-7.29297,7.29297l1.41406,1.41406l7.29297,-7.29297l7.29297,7.29297l1.41406,-1.41406l-7.29297,-7.29297l7.29297,-7.29297l-1.41406,-1.41406l-7.29297,7.29297z"></path></g></g></svg>',nextGrid:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n<g id="Icon / Calendar / Next">\r\n<path id="Vector" d="M4.27337 4L3.33337 4.94L6.38671 8L3.33337 11.06L4.27337 12L8.27337 8L4.27337 4Z" fill="black"/>\r\n<path id="Vector_2" d="M8.66668 4L7.72668 4.94L10.78 8L7.72668 11.06L8.66668 12L12.6667 8L8.66668 4Z" fill="black"/>\r\n</g>\r\n</svg>',prevGrid:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n<g id="Icon / Calendar / Prev">\r\n<path id="Vector" d="M11.7266 12L12.6666 11.06L9.61329 8L12.6666 4.94L11.7266 4L7.72663 8L11.7266 12Z" fill="black"/>\r\n<path id="Vector_2" d="M7.33332 12L8.27332 11.06L5.21998 8L8.27331 4.94L7.33331 4L3.33332 8L7.33332 12Z" fill="black"/>\r\n</g>\r\n</svg>'},Se="nextGreed",ve=n.styled(y)`
  padding: ${({theme:e})=>e.spaces.s}px 0;
  width: 100%;
  min-width: 224px;
  justify-content: space-between;
`,Me=n.styled(f)`
  width: 16px;
  height: 16px;
`,Ee=n.styled.h1`
  ${x}

  font-size: ${({theme:e})=>e.fonts.fontSize.m}px;
  font-weight: ${({theme:e})=>e.fonts.fontWeight.l};
  cursor: pointer;
`,{Week:Te,Month:We,Year:Le}=xe,{prevGrid:Fe,nextGrid:Ae}=je,Be=t.default.memo((n=>{const{type:a,minDate:r,maxDate:s,isMondayFirst:o}=n,{selectedDate:i,firstDateOfWeek:d,selectedMonth:l,selectedYear:c,setFirstDateOfWeek:h,setSelectedMonth:g,setSelectedYear:m}=N();t.useEffect((()=>{h(W(i,o))}),[o,i,h]);const u=a===Le?`${c}`:`${M[l]} ${c}`,x=t.useCallback((e=>()=>{let t=l,n=c;const o=d;a===We&&(e===Se?(t=(l+1)%E,n=11===l?c+1:c):(t=(l-1+E)%E,n=0===l?c-1:c)),a===Te&&(e===Se?o.setDate(o.getDate()+7):o.setDate(o.getDate()-7),t=d.getMonth(),n=d.getFullYear(),h(new Date(o))),a===Le&&(e===Se?n++:n--);const i=new Date(n,t);(!r||i>=r)&&(!s||i<=s)&&(g(t),m(n))}),[d,s,r,l,c,h,g,m,a]);return e.jsxs(ve,{children:[e.jsx(Me,{"data-testid":"prev-button",onClick:x("prevGreed"),children:e.jsx(D,{src:Fe})}),e.jsx(Ee,{"data-testid":"grid-slider",children:u}),e.jsx(Me,{"data-testid":"next-button",onClick:x(Se),children:e.jsx(D,{src:Ae})})]})})),Ve=n.styled.div`
  ${x}

  font-size: ${({theme:e})=>e.fonts.fontSize.m}px;
  font-weight: ${({theme:e})=>e.fonts.fontWeight.l};
  background-color: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.black};
  padding: ${({theme:e})=>e.spaces.m}px;
  width: 32px;
  height: 32px;
`,Re=t.default.memo((({weekday:t})=>e.jsx(Ve,{children:t}))),He=t.default.memo((({isMondayFirst:n})=>{const a=t.useMemo((()=>{const e=Object.values(v);return n?[...e.slice(1),e[0]]:e}),[n]);return e.jsx(y,{children:a.map((t=>e.jsx(Re,{weekday:t},t)))})})),Ie=(e,n)=>{t.useEffect((()=>{if(!n)return;const t=t=>{e.current&&!e.current.contains(t.target)&&n(t)};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}}),[e,n])},Ne=({theme:e})=>e.spaces.m,Ye=({theme:e})=>e.spaces.s,ze=n.styled(y)`
  flex-direction: column;
  align-items: flex-start;
`,Oe=n.styled.label`
  ${x}

  font-size: ${({theme:e})=>e.fonts.fontSize.l}px;
`,Ze=n.styled(y)`
  border: 1px solid ${({theme:e})=>e.colors.gray};
  padding: ${Ne}px;
  margin: ${Ne}px 0;
  gap: ${Ye}px;
  width: 246px;
  justify-content: flex-start;
  border-radius: 8px;
  position: relative;
`,Ge=n.styled(y)`
  gap: ${Ye}px;
`,Je=n.styled.span`
  ${x}

  font-size: ${({theme:e})=>e.fonts.fontSize.s}px;
  font-weight: ${({theme:e})=>e.fonts.fontWeight.s};
  color: ${({theme:e})=>e.colors.red};
`,qe=n.styled.div`
  position: absolute;
  top: 56%;
`,{calendar:Pe,clear:_e}=je,Ke=t.default.memo((({label:n,rangeValue:a,Calendar:r})=>{const[s,o]=t.useState(""),[d,l]=t.useState(""),[c,h]=t.useState(!1),g=t.useRef(null);Ie(g,(()=>{l(""),o(A(m)),h(!1)}));const{selectedDate:m}=N(),{setRange:u}=i();t.useEffect((()=>{o(A(m))}),[m]);const x=t.useCallback((()=>{l(""),o(A(m)),h((e=>!e))}),[m,h]),p=t.useCallback((()=>{l(""),o(""),u({rangeStart:void 0,rangeEnd:void 0}),h(!1)}),[u]);return e.jsxs(ze,{children:[e.jsxs(Ge,{children:[e.jsx(Oe,{children:n}),d&&e.jsx(Je,{children:d})]}),e.jsxs(Ze,{children:[e.jsx(D,{"data-testid":"calendar-icon-button",src:Pe,onClick:x}),e.jsx(at,{inputValue:a||s,setError:l,setInputValue:o,setIsCalendarOpen:h}),s&&e.jsx(D,{"data-testid":"clear-icon-button",src:_e,onClick:p})]}),e.jsx(qe,{ref:g,children:c&&e.jsx(r,{})})]})})),Qe=n.styled(y)`
  gap: ${({theme:e})=>e.spaces.m}px;
  flex-direction: row;
`;t.default.memo((({Calendar:t})=>{const{range:n}=i(),a=n?.rangeStart?A(n.rangeStart):"",r=n?.rangeEnd?A(n.rangeEnd):"";return e.jsx(b,{children:e.jsxs(Qe,{children:[e.jsx(Ke,{Calendar:t,label:"From",rangeValue:a}),e.jsx(Ke,{Calendar:t,label:"To",rangeValue:r})]})})}));const Ue="Enter Date in dd/mm/yyyy format",Xe="/",et=/^[0-9/]*$/,tt=n.styled(C)`
  margin: 0;
`,nt=t.default.memo((n=>{const{inputValue:a,setInputValue:r,setError:s,setIsCalendarOpen:o}=n,{setSelectedDate:i,setSelectedMonth:d,setSelectedYear:l}=N(),c=t.useCallback((e=>{s(""),"Backspace"===e.key&&a.endsWith(Xe)&&r(a.slice(0,-1))}),[a,s,r]),h=t.useCallback((()=>{o(!0)}),[]),g=t.useCallback((e=>{s(""),o(!0);const t=e.target.value;if(!et.test(t))return e.preventDefault(),void s(Ue);if(t.length>=10){r(t.substring(0,10));const e=t.split(Xe),n=parseInt(e[0]),a=parseInt(e[1])-1,o=parseInt(e[2]);if(o>9999)return void s(Ue);const c=new Date(o,a,n);c.getDate()!==n||c.getMonth()!==a||c.getFullYear()!==o?s("Invalid Date"):(i(c),d(a),l(o))}2===t.length||5===t.length?r(t+Xe):r(t)}),[s,r,o,i,d,l]);return e.jsx(tt,{"data-testid":"date-picker-input",placeholder:"Coose Date",type:"text",value:a,onChange:g,onFocus:h,onKeyDown:c})}));var at=nt;const rt=n.styled(y)`
  flex-direction: column;
`,st=n.styled.p`
  ${x}

  color: ${({theme:e})=>e.colors.red};
`,ot=n.styled.span`
  ${x}

  text-align: center;
`;class it extends t.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){this.setState({errorInfo:t})}render(){const{hasError:t,error:n,errorInfo:a}=this.state;return t?e.jsxs(rt,{"data-testid":"error-boundary",children:[e.jsx(w,{children:"An error has occured"}),e.jsx(st,{children:n&&n.toString()}),e.jsx(ot,{children:"(╯°□°）╯︵ ┻━┻"}),e.jsx(ot,{children:a&&a.componentStack})]}):this.props.children}}const dt=({theme:e})=>e.spaces.m,lt=n.styled(y)`
  gap: ${dt}px;
  width: 100%;
`,ct=n.styled(y)`
  border: 1px solid ${({theme:e})=>e.colors.lightGray};
  margin: ${dt}px 0;
  width: 100%;
  justify-content: flex-start;
  border-radius: 8px;
`,ht=n.styled(f)`
  background-color: ${({theme:e})=>e.colors.darkBlue};
  color: ${({theme:e})=>e.colors.white};
  width: 100px;
  height: 40px;
  border-radius: 8px;
`,gt=t.default.memo((({todoText:t,onChange:n,onAddTask:a})=>{const r=()=>{a()};return e.jsxs(lt,{children:[e.jsx(ct,{children:e.jsx(C,{placeholder:"Enter todo text",type:"text",value:t,onChange:e=>{n(e)},onKeyDown:e=>{"Enter"===e.key&&r()}})}),e.jsx(ht,{onClick:r,children:"Add task"})]})})),mt=({theme:e})=>e.spaces.m,ut=n.styled(y)`
  border: 1px solid ${({theme:e})=>e.colors.lightGray};
  gap: ${mt}px;
  padding: ${mt}px;
  justify-content: flex-start;
  width: 100%;
  border-radius: 8px;
`,xt=n.styled.p`
  ${x}

  text-decoration: ${({$isDone:e})=>e?"line-through":"none"};
  width: 100%;
  max-width: 433px;
  word-wrap: break-word;
`,pt=n.styled(f)`
  &:hover {
    color: ${({theme:e})=>e.colors.red};
  }
`,ft=t.default.memo((n=>{const{id:a,todoText:r,isDone:s,setTodos:o}=n,{selectedDate:i}=N(),d=t.useCallback((()=>{const e=i.toDateString(),t=Y(e).map((e=>e.id===a?{...e,isDone:!e.isDone}:e));o(t),z(e,t)}),[a,i,o]),l=t.useCallback((()=>{const e=i.toDateString(),t=Y(e).filter((e=>e.id!==a));o(t),z(e,t)}),[a,i,o]);return e.jsxs(ut,{children:[e.jsx("input",{checked:s,type:"checkbox",onChange:d}),e.jsx(xt,{$isDone:s,children:r}),e.jsx(pt,{onClick:l,children:"Delete"})]})})),yt=n.styled(y)`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`,Dt=n.styled(y)`
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
`,wt=n.styled(f)`
  align-self: flex-end;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.15);
  }
`,{close:Ct}=je,bt=t.default.memo((({children:n,onClose:a})=>{const r=t.useRef(null);Ie(r,a);return e.jsx(yt,{children:e.jsxs(Dt,{ref:r,children:[e.jsx(wt,{"data-testid":"modal-close-button",onClick:()=>{a()},children:e.jsx(D,{src:Ct})}),n]})})})),$t=n.styled(y)`
  gap: ${({theme:e})=>e.spaces.m}px;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  max-height: 350px;
  overflow: auto;
`,kt=t.default.memo((({onClose:n})=>{const[a,r]=t.useState(""),[s,o]=t.useState([]),{selectedDate:i}=N();t.useEffect((()=>{const e=Y(i.toDateString());e&&o(e)}),[i]);const d=t.useCallback((()=>{n()}),[n]),l=t.useCallback((e=>{r(e.target.value)}),[]),c=t.useCallback((()=>{if(""!==a.trim()){const e=i.toDateString(),t=[...s],n={id:String((new Date).getTime()),todoText:a,isDone:!1};t.push(n),o(t),z(e,t),r("")}}),[a,s,i]),h=s.map((({id:t,...n})=>e.jsx(ft,{id:t,setTodos:o,...n},t)));return e.jsxs(bt,{"data-testid":"todo-modal",onClose:d,children:[e.jsx(w,{children:"Todos for {Date}".replace("{Date}",i.toDateString())}),e.jsx(gt,{todoText:a,onAddTask:c,onChange:l}),e.jsx($t,{children:0!==s.length?h:"Add some tasks"})]})})),jt=n.styled(y)`
  background-color: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.gray};
  border-bottom: ${({$isRangeExist:e,$isTodosEnabled:t})=>(e||t)&&"none"};
  border-radius: ${({$isRangeExist:e,$isTodosEnabled:t})=>e||t?"8px 8px 0 0":"8px"};
  padding: 10px;
  flex-direction: column;
`,{Month:St,Week:vt}=xe,Mt=n=>{const{type:a=St,isMondayFirst:r,isWeekendDate:s,isWithRange:o,minDate:d,maxDate:l,isTodosEnabled:c,isHolidayDate:h}=n,{range:g,setRange:m}=i(),u=t.useCallback((()=>{m&&m(void 0)}),[m]),x=o&&Boolean(g?.rangeStart)&&Boolean(g?.rangeEnd);return e.jsx(b,{children:e.jsxs(it,{children:[e.jsxs(jt,{$isRangeExist:x,$isTodosEnabled:c,"data-testid":"calendar",children:[e.jsx(Be,{isMondayFirst:r,maxDate:l,minDate:d,type:a}),(a===vt||a===St)&&e.jsx(He,{isMondayFirst:r}),e.jsx(ke,{isHolidayDate:h,isMondayFirst:r,isTodosEnabled:c,isWeekendDate:s,isWithRange:o,maxDate:l,minDate:d,type:a})]}),x&&e.jsx(j,{$isTodosEnabled:c,title:"Clear Range",onButtonClick:u})]})})};exports.CalendarService=class{calendar;constructor(){this.calendar=Mt}addDecorator(e){this.calendar=e(this.calendar)}getCalendar(){return this.calendar}},exports.DatePicker=Ke,exports.useDate=i,exports.withHolidays=t=>{const n=n=>e.jsx(t,{...n,isHolidayDate:F}),a=t.displayName||t.name;return n.displayName=`withHolidays(${a})`,n},exports.withMinAndMaxDate=t=>{const n=n=>{const{minDate:a,maxDate:r}=i();return e.jsx(t,{...n,maxDate:r,minDate:a})},a=t.displayName||t.name;return n.displayName=`withRange(${a})`,n},exports.withMondayFirst=t=>{const n=n=>e.jsx(t,{...n,isMondayFirst:!0}),a=t.displayName||t.name;return n.displayName=`withMondayFirst(${a})`,n},exports.withRange=t=>{const n=n=>e.jsx(t,{...n,isWithRange:!0}),a=t.displayName||t.name;return n.displayName=`withRange(${a})`,n},exports.withTodos=n=>{const r=r=>{const[s,o]=t.useState(!1),{selectedDate:i}=N(),d=function(e="todo-portal-wrapper"){const n=t.useRef(null);return t.useEffect((()=>{let t=document.getElementById(e),a=!1;return t||(a=!0,t=document.createElement("div"),t.id=e,document.body.appendChild(t)),n.current=t,()=>{a&&t?.parentNode&&t.parentNode.removeChild(t)}}),[e]),e=>{if(n.current)return a.default.createPortal(e,n.current)}}(),l=t.useCallback((()=>{o(!0)}),[]),c=t.useCallback((()=>{o(!1)}),[]),h=0!==Y(i.toDateString()).length;return e.jsxs(e.Fragment,{children:[e.jsx(n,{...r,isTodosEnabled:!0}),e.jsx(j,{title:h?"View Tasks":"Add Task",onButtonClick:l}),s&&d(e.jsx(kt,{onClose:c}))]})},s=n.displayName||n.name;return r.displayName=`withTodo(${s})`,r},exports.withWeekends=t=>{const n=n=>e.jsx(t,{...n,isWeekendDate:L}),a=t.displayName||t.name;return n.displayName=`withWeekendsDays(${a})`,n};
