"use strict";var e=require("react/jsx-runtime"),t=require("react"),a=require("styled-components"),n=require("react-dom");function r(e){return e&&e.__esModule?e:{default:e}}var s=r(t),o=r(a),i=r(n);const d=new Date(2022,0,1),l=new Date(2035,11,0),c=t.createContext({minDate:d,maxDate:l,range:void 0,setMinDate:()=>{},setMaxDate:()=>{},setRange:()=>{}}),h=({children:a})=>{const[n,r]=t.useState(d),[s,o]=t.useState(l),[i,h]=t.useState({rangeStart:void 0,rangeEnd:void 0}),u={minDate:n,maxDate:s,range:i,setMinDate:r,setMaxDate:o,setRange:h};return e.jsx(c.Provider,{value:u,children:a})},u=()=>t.useContext(c);var g;!function(e){e.Start="Start",e.Between="Between",e.End="End"}(g||(g={}));const m={Sunday:"Su",Monday:"Mo",Tuesday:"Tu",Wednesday:"We",Thursday:"Th",Friday:"Fr",Saturday:"Sa"};var x;!function(e){e[e.January=0]="January",e[e.February=1]="February",e[e.March=2]="March",e[e.April=3]="April",e[e.May=4]="May",e[e.June=5]="June",e[e.July=6]="July",e[e.August=7]="August",e[e.September=8]="September",e[e.October=9]="October",e[e.November=10]="November",e[e.December=11]="December"}(x||(x={}));const f=12,p=[{name:"New Year's Day",date:new Date("2022-01-01")},{name:"Orthodox Christmas Eve",date:new Date("2022-01-06")},{name:"Orthodox Christmas Day",date:new Date("2022-01-07")},{name:"Defender of the Fatherland Day",date:new Date("2022-02-23")},{name:"International Women's Day",date:new Date("2022-03-08")},{name:"March Equinox",date:new Date("2022-03-20")},{name:"International Labor Day",date:new Date("2022-05-01")},{name:"Commemoration Day",date:new Date("2022-05-03")},{name:"Victory Day",date:new Date("2022-05-09")},{name:"June Solstice",date:new Date("2022-06-21")},{name:"Independence Day",date:new Date("2022-07-03")},{name:"September Equinox",date:new Date("2022-09-03")},{name:"Mother's Day",date:new Date("2022-10-14")},{name:"October Revolution Day",date:new Date("2022-11-07")},{name:"Christmas Eve",date:new Date("2022-12-24")},{name:"Christmas Day",date:new Date("2022-12-25")},{name:"New Year's Eve",date:new Date("2022-12-31")}],D=(e,t=!1)=>{const a=new Date(e);if(t){const e=a.getDay(),t=0===e?6:e-1;a.setDate(a.getDate()-t)}else a.setDate(a.getDate()-a.getDay());return a},w=e=>0===e.getDay()||6===e.getDay(),y=e=>p.some((t=>e.getDate()===t.date.getDate()&&e.getMonth()===t.date.getMonth())),C=e=>`${e.getDate().toString().padStart(2,"0")}/${(e.getMonth()+1).toString().padStart(2,"0")}/${e.getFullYear().toString()}`,b=new Date,$=b.getMonth(),k=b.getFullYear(),S=D(b),j=t.createContext({firstDateOfWeek:S,selectedDate:b,selectedMonth:$,selectedYear:k,setFirstDateOfWeek:()=>{},setSelectedDate:()=>{},setSelectedMonth:()=>{},setSelectedYear:()=>{}}),v=({children:a})=>{const[n,r]=t.useState(S),[s,o]=t.useState(b),[i,d]=t.useState($),[l,c]=t.useState(k),h={firstDateOfWeek:n,selectedDate:s,selectedMonth:i,selectedYear:l,setSelectedDate:o,setSelectedMonth:d,setSelectedYear:c,setFirstDateOfWeek:r};return e.jsx(j.Provider,{value:h,children:a})},M=()=>t.useContext(j),E={white:"#ffffff",black:"#333333",gray:"#f1f1f1",lightGray:"#aaaaaa",darkBlueHover:"#5185cb",darkBlue:"#2f80ed",blue:"#2f80ed99",lightBlue:"#2f80ed1a",red:"#b91414",orange:"#f97e00"},W={fontFamily:{openSans:"Open Sans"},fontSize:{xl:20,l:15,m:14,s:13},fontWeight:{l:700,m:600,s:400}},T={l:16,m:8,s:4},L={colors:{...E},fonts:{...W},spaces:{...T}},F=a.css`
  display: flex;
`,A=a.css`
  ${F}

  flex-direction: column;
`,B=a.css`
  justify-content: center;
  align-items: center;
`,R=a.css`
  font-size: ${W.fontSize.s}px;
  font-weight: ${W.fontWeight.m};
  font-style: normal;
  line-height: normal;
`,V=a.createGlobalStyle`
    * {
        font-family: ${W.fontFamily.openSans};
        box-sizing: border-box;
        user-select: none;
        text-decoration: none;
        list-style: none;
        outline: none;
        margin: 0;
        padding: 0;
    }
`,I=o.default.button`
  ${A}
  ${B}
  ${R}
  
  background: transparent;
  border: none;
  cursor: pointer;
`,N=o.default.div`
  ${F}
  ${B}
  
  cursor: default;
`,O=o.default.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`,Y=o.default.h1`
  ${R}

  font-size:  ${W.fontSize.xl}px;
  font-weight: ${W.fontWeight.l};
`,H=o.default.input`
  ${R}

  margin: ${T.m}px;
  font-size: ${W.fontSize.l}px;
  font-weight: ${W.fontWeight.s};
  width: 100%;
  border: none;
  background: transparent;
`,z=({children:t})=>e.jsxs(e.Fragment,{children:[e.jsx(V,{}),e.jsx(a.ThemeProvider,{theme:L,children:t})]}),Z=({theme:e})=>e.colors.gray,G=o.default(I)`
  ${R}

  padding: ${({theme:e})=>e.spaces.s}px 0;
  border: 1px solid ${Z};
  background-color: ${({theme:e})=>e.colors.white};
  border-bottom: ${({$isTodosEnabled:e})=>e&&"none"};
  border-radius: ${({$isTodosEnabled:e})=>e?"0":"0 0 8px 8px"};
  width: 100%;
  min-width: 224px;
  justify-content: space-between;

  &:hover {
    background-color: ${Z};
  }
`,J=s.default.memo((({title:t,onButtonClick:a,$isTodosEnabled:n})=>e.jsx(G,{$isTodosEnabled:n,"data-testid":"calendar-button",onClick:a,children:t})));function P(e){const t=localStorage.getItem(e);return t?JSON.parse(t):[]}function _(e,t){localStorage.setItem(e,JSON.stringify(t))}const{Start:q,Between:K,End:Q}=g,{Start:U,Between:X,End:ee}=g,{darkBlue:te,blue:ae,lightBlue:ne,white:re,orange:se,lightGray:oe,red:ie,black:de}=E,le=({theme:e})=>e.colors.gray,ce=({theme:e})=>e.colors.darkBlueHover,he=o.default(I)`
  background-color: ${({$isSelected:e,$rangeState:t})=>((e,t)=>e||t===ee?te:t===U?ae:t===X?ne:re)(e,t)};
  color: ${({$isSelected:e,$isDisabled:t,$isWeekend:a,$rangeState:n,$isHoliday:r})=>((e,t,a,n,r)=>e||n===U||n===ee?re:r?se:n===X?te:t?oe:a?ie:de)(e,t,a,n,r)};
  padding: ${({theme:e})=>e.spaces.m}px;
  border-radius: ${({$rangeState:e})=>(e=>{switch(e){case q:return"8px 0 0 8px";case K:return"0";case Q:return"0 8px 8px 0";default:return"8px"}})(e)};
  width: 32px;
  height: 38px;

  &:hover {
    background-color: ${({$isSelected:e})=>e?ce:le};
  }
`,ue=o.default.div`
  background-color: ${({theme:e})=>e.colors.orange};
  width: 3px;
  height: 3px;
  border-radius: 50%;
`,{Start:ge,End:me,Between:xe}=g,fe=s.default.memo((a=>{const{dayOfWeek:n,isSelected:r=!1,isDisabled:s=!1,isWeekend:o=!1,isWithRange:i=!1,minDate:d,maxDate:l,isTodosEnabled:c=!1,isHoliday:h=!1}=a,{range:g,setRange:m}=u(),{setSelectedDate:x,setSelectedMonth:f,setSelectedYear:p}=M(),D=n.getDate(),w=n.getMonth(),y=n.getFullYear(),C=t.useCallback((()=>{if((!d||n>=d)&&(!l||n<=l)&&(x(n),f(w),p(y),i))if(g&&(g.rangeStart||g.rangeEnd)){const e=g&&g.rangeStart?g.rangeStart:n,t=n<e?[n,e]:[e,n];m({rangeStart:t[0],rangeEnd:t[1]})}else m({rangeStart:n,rangeEnd:void 0})}),[d,n,l,x,f,w,p,y,i,g,m]),b=P(n.toDateString());return e.jsx(e.Fragment,{children:e.jsxs(he,{$isDisabled:s,$isHoliday:h,$isSelected:r,$isWeekend:o,$rangeState:(e=>{if(g&&g.rangeStart){if(e.getTime()===g.rangeStart.getTime())return ge;if(g.rangeEnd&&e.getTime()===g.rangeEnd.getTime())return me;if(g.rangeEnd&&e>g.rangeStart&&e<g.rangeEnd)return xe}})(n),"data-testid":"day-of-week",onClick:C,children:[D,c&&0!==b.length&&e.jsx(ue,{})]})})})),pe=(e,t)=>e.getMonth()!==t,De=(e,t)=>new Date(e,t+1,0).getDate();const we=(e,t)=>e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear(),ye=(e,t,a)=>{const n=De(t,e),r=function(e,t){return new Date(e,t,1).getDay()}(t,e);let s;s=a?(7+r-1)%7:(7+r)%7;const{month:o,year:i}=((e,t)=>0===e?{month:11,year:t-1}:{month:e-1,year:t})(e,t),{month:d,year:l}=((e,t)=>11===e?{month:0,year:t+1}:{month:e+1,year:t})(e,t),c=De(i,o),h=Array.from({length:s},((e,t)=>new Date(i,o,c-s+1+t))),u=Array.from({length:n},((a,n)=>new Date(t,e,n+1))),g=n+s,m=7*Math.ceil(6)-g,x=Array.from({length:m},((e,t)=>{const a=new Date(l,d,t+1);return a.getMonth()===d?a:null})).filter((e=>null!==e));return[...h,...u,...x]};var Ce;!function(e){e[e.Week=1]="Week",e[e.Month=2]="Month",e[e.Year=3]="Year"}(Ce||(Ce={}));const be=({theme:e})=>e.spaces.m,$e=o.default.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(1, 1fr);
  width: fit-content;
`,ke=o.default($e)`
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: baseline;
`,Se=o.default(N)`
  padding: ${be}px;
  flex-direction: column;
`,je=o.default.p`
  ${R}

  align-self: flex-start;
  padding-left: ${be}px;
`,{Week:ve,Month:Me,Year:Ee}=Ce,We=a=>{const{type:n,isMondayFirst:r,isWeekendDate:s,isWithRange:o,minDate:i,maxDate:d,isTodosEnabled:l,isHolidayDate:c}=a,{firstDateOfWeek:h,selectedDate:u,selectedMonth:g,selectedYear:m}=M(),p=t.useMemo((()=>n===ve?(e=>Array.from({length:7},((t,a)=>{const n=new Date(e);return n.setDate(e.getDate()+a),n})))(h):n===Me?ye(g,m,r):void 0),[h,g,m,r,n]),D=t.useMemo((()=>{if(n===Ee)return((e,t=!1)=>Array.from({length:f},((a,n)=>ye(n,e,t))))(m,r)}),[n,m,r]);return e.jsxs(e.Fragment,{children:[p&&e.jsx($e,{"data-testid":"day-of-week-grid",children:p.map((t=>e.jsx(fe,{dayOfWeek:t,isDisabled:pe(t,g),isHoliday:c&&c(t),isSelected:we(t,u),isTodosEnabled:l,isWeekend:s&&s(t),isWithRange:o,maxDate:d,minDate:i},t.getTime())))}),n===Ee&&D&&e.jsx(ke,{"data-testid":"day-of-week-grid-year",children:D.map((t=>{const a=t[7].getMonth();return e.jsxs(Se,{children:[e.jsx(je,{children:x[a]}),e.jsx(Ze,{isMondayFirst:r}),e.jsx($e,{children:t.map((t=>e.jsx(fe,{dayOfWeek:t,isDisabled:pe(t,a),isHoliday:c&&c(t),isSelected:we(t,u),isTodosEnabled:l,isWeekend:s&&s(t),isWithRange:o,maxDate:d,minDate:i},t.getTime())))})]},t[7].getTime())}))})]})};const Te={calendar:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n<g id="Icon / Field / Calendar" clip-path="url(#clip0_1_7)">\r\n<path id="Vector" d="M8.2 9.59999C7.97333 9.59999 7.78347 9.52319 7.6304 9.36959C7.4768 9.21652 7.4 9.02666 7.4 8.79999C7.4 8.57332 7.4768 8.38319 7.6304 8.22959C7.78347 8.07652 7.97333 7.99999 8.2 7.99999C8.42667 7.99999 8.6168 8.07652 8.7704 8.22959C8.92347 8.38319 9 8.57332 9 8.79999C9 9.02666 8.92347 9.21652 8.7704 9.36959C8.6168 9.52319 8.42667 9.59999 8.2 9.59999ZM5 9.59999C4.77333 9.59999 4.5832 9.52319 4.4296 9.36959C4.27653 9.21652 4.2 9.02666 4.2 8.79999C4.2 8.57332 4.27653 8.38319 4.4296 8.22959C4.5832 8.07652 4.77333 7.99999 5 7.99999C5.22667 7.99999 5.4168 8.07652 5.5704 8.22959C5.72347 8.38319 5.8 8.57332 5.8 8.79999C5.8 9.02666 5.72347 9.21652 5.5704 9.36959C5.4168 9.52319 5.22667 9.59999 5 9.59999ZM11.4 9.59999C11.1733 9.59999 10.9835 9.52319 10.8304 9.36959C10.6768 9.21652 10.6 9.02666 10.6 8.79999C10.6 8.57332 10.6768 8.38319 10.8304 8.22959C10.9835 8.07652 11.1733 7.99999 11.4 7.99999C11.6267 7.99999 11.8165 8.07652 11.9696 8.22959C12.1232 8.38319 12.2 8.57332 12.2 8.79999C12.2 9.02666 12.1232 9.21652 11.9696 9.36959C11.8165 9.52319 11.6267 9.59999 11.4 9.59999ZM8.2 12.8C7.97333 12.8 7.78347 12.7232 7.6304 12.5696C7.4768 12.4165 7.4 12.2267 7.4 12C7.4 11.7733 7.4768 11.5835 7.6304 11.4304C7.78347 11.2768 7.97333 11.2 8.2 11.2C8.42667 11.2 8.6168 11.2768 8.7704 11.4304C8.92347 11.5835 9 11.7733 9 12C9 12.2267 8.92347 12.4165 8.7704 12.5696C8.6168 12.7232 8.42667 12.8 8.2 12.8ZM5 12.8C4.77333 12.8 4.5832 12.7232 4.4296 12.5696C4.27653 12.4165 4.2 12.2267 4.2 12C4.2 11.7733 4.27653 11.5835 4.4296 11.4304C4.5832 11.2768 4.77333 11.2 5 11.2C5.22667 11.2 5.4168 11.2768 5.5704 11.4304C5.72347 11.5835 5.8 11.7733 5.8 12C5.8 12.2267 5.72347 12.4165 5.5704 12.5696C5.4168 12.7232 5.22667 12.8 5 12.8ZM11.4 12.8C11.1733 12.8 10.9835 12.7232 10.8304 12.5696C10.6768 12.4165 10.6 12.2267 10.6 12C10.6 11.7733 10.6768 11.5835 10.8304 11.4304C10.9835 11.2768 11.1733 11.2 11.4 11.2C11.6267 11.2 11.8165 11.2768 11.9696 11.4304C12.1232 11.5835 12.2 11.7733 12.2 12C12.2 12.2267 12.1232 12.4165 11.9696 12.5696C11.8165 12.7232 11.6267 12.8 11.4 12.8ZM2.6 16C2.16 16 1.7832 15.8435 1.4696 15.5304C1.15653 15.2168 1 14.84 1 14.4V3.19999C1 2.75999 1.15653 2.38346 1.4696 2.07039C1.7832 1.75679 2.16 1.59999 2.6 1.59999H3.4V-1.04904e-05H5V1.59999H11.4V-1.04904e-05H13V1.59999H13.8C14.24 1.59999 14.6168 1.75679 14.9304 2.07039C15.2435 2.38346 15.4 2.75999 15.4 3.19999V14.4C15.4 14.84 15.2435 15.2168 14.9304 15.5304C14.6168 15.8435 14.24 16 13.8 16H2.6ZM2.6 14.4H13.8V6.39999H2.6V14.4Z" fill="#AAAAAA"/>\r\n</g>\r\n<defs>\r\n<clipPath id="clip0_1_7">\r\n<rect width="16" height="16" fill="white"/>\r\n</clipPath>\r\n</defs>\r\n</svg>',clear:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n<g id="Icon / Field / Clear">\r\n<path id="Vector" d="M12.9872 3.04239C10.2573 0.319202 5.77739 0.319202 3.04745 3.04239C0.317516 5.76559 0.317516 10.2344 3.04745 12.9576C5.77739 15.6808 10.1873 15.6808 12.9172 12.9576C15.6471 10.2344 15.7171 5.76559 12.9872 3.04239ZM9.97728 10.9327L8.01733 8.97756L6.05738 10.9327L5.0774 9.95511L7.03735 8L5.0774 6.04489L6.05738 5.06733L8.01733 7.02244L9.97728 5.06733L10.9573 6.04489L8.99731 8L10.9573 9.95511L9.97728 10.9327Z" fill="#AAAAAA"/>\r\n</g>\r\n</svg>',close:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48px" height="48px" viewBox="0,0,256,256"><g fill="#ad1313" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="translate(0,0) scale(10.66667,10.66667)"><path d="M4.70703,3.29297l-1.41406,1.41406l7.29297,7.29297l-7.29297,7.29297l1.41406,1.41406l7.29297,-7.29297l7.29297,7.29297l1.41406,-1.41406l-7.29297,-7.29297l7.29297,-7.29297l-1.41406,-1.41406l-7.29297,7.29297z"></path></g></g></svg>',nextGrid:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n<g id="Icon / Calendar / Next">\r\n<path id="Vector" d="M4.27337 4L3.33337 4.94L6.38671 8L3.33337 11.06L4.27337 12L8.27337 8L4.27337 4Z" fill="black"/>\r\n<path id="Vector_2" d="M8.66668 4L7.72668 4.94L10.78 8L7.72668 11.06L8.66668 12L12.6667 8L8.66668 4Z" fill="black"/>\r\n</g>\r\n</svg>',prevGrid:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n<g id="Icon / Calendar / Prev">\r\n<path id="Vector" d="M11.7266 12L12.6666 11.06L9.61329 8L12.6666 4.94L11.7266 4L7.72663 8L11.7266 12Z" fill="black"/>\r\n<path id="Vector_2" d="M7.33332 12L8.27332 11.06L5.21998 8L8.27331 4.94L7.33331 4L3.33332 8L7.33332 12Z" fill="black"/>\r\n</g>\r\n</svg>'},Le="nextGreed",Fe=o.default(N)`
  padding: ${({theme:e})=>e.spaces.s}px 0;
  width: 100%;
  min-width: 224px;
  justify-content: space-between;
`,Ae=o.default(I)`
  width: 16px;
  height: 16px;
`,Be=o.default.h1`
  ${R}

  font-size: ${({theme:e})=>e.fonts.fontSize.m}px;
  font-weight: ${({theme:e})=>e.fonts.fontWeight.l};
  cursor: pointer;
`,{Week:Re,Month:Ve,Year:Ie}=Ce,{prevGrid:Ne,nextGrid:Oe}=Te,Ye=s.default.memo((a=>{const{type:n,minDate:r,maxDate:s,isMondayFirst:o}=a,{selectedDate:i,firstDateOfWeek:d,selectedMonth:l,selectedYear:c,setFirstDateOfWeek:h,setSelectedMonth:u,setSelectedYear:g}=M();t.useEffect((()=>{h(D(i,o))}),[o,i,h]);const m=n===Ie?`${c}`:`${x[l]} ${c}`,p=t.useCallback((e=>()=>{let t=l,a=c;const o=d;n===Ve&&(e===Le?(t=(l+1)%f,a=11===l?c+1:c):(t=(l-1+f)%f,a=0===l?c-1:c)),n===Re&&(e===Le?o.setDate(o.getDate()+7):o.setDate(o.getDate()-7),t=d.getMonth(),a=d.getFullYear(),h(new Date(o))),n===Ie&&(e===Le?a++:a--);const i=new Date(a,t);(!r||i>=r)&&(!s||i<=s)&&(u(t),g(a))}),[d,s,r,l,c,h,u,g,n]);return e.jsxs(Fe,{children:[e.jsx(Ae,{"data-testid":"prev-button",onClick:p("prevGreed"),children:e.jsx(O,{src:Ne})}),e.jsx(Be,{"data-testid":"grid-slider",children:m}),e.jsx(Ae,{"data-testid":"next-button",onClick:p(Le),children:e.jsx(O,{src:Oe})})]})})),He=o.default.div`
  ${R}

  font-size: ${({theme:e})=>e.fonts.fontSize.m}px;
  font-weight: ${({theme:e})=>e.fonts.fontWeight.l};
  background-color: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.black};
  padding: ${({theme:e})=>e.spaces.m}px;
  width: 32px;
  height: 32px;
`,ze=s.default.memo((({weekday:t})=>e.jsx(He,{children:t}))),Ze=s.default.memo((({isMondayFirst:a})=>{const n=t.useMemo((()=>{const e=Object.values(m);return a?[...e.slice(1),e[0]]:e}),[a]);return e.jsx(N,{children:n.map((t=>e.jsx(ze,{weekday:t},t)))})})),Ge=(e,a)=>{t.useEffect((()=>{if(!a)return;const t=t=>{e.current&&!e.current.contains(t.target)&&a(t)};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}}),[e,a])},Je=({theme:e})=>e.spaces.m,Pe=({theme:e})=>e.spaces.s,_e=o.default(N)`
  flex-direction: column;
  align-items: flex-start;
`,qe=o.default.label`
  ${R}

  font-size: ${({theme:e})=>e.fonts.fontSize.l}px;
`,Ke=o.default(N)`
  border: 1px solid ${({theme:e})=>e.colors.gray};
  padding: ${Je}px;
  margin: ${Je}px 0;
  gap: ${Pe}px;
  width: 246px;
  justify-content: flex-start;
  border-radius: 8px;
  position: relative;
`,Qe=o.default(N)`
  gap: ${Pe}px;
`,Ue=o.default.span`
  ${R}

  font-size: ${({theme:e})=>e.fonts.fontSize.s}px;
  font-weight: ${({theme:e})=>e.fonts.fontWeight.s};
  color: ${({theme:e})=>e.colors.red};
`,Xe=o.default.div`
  position: absolute;
  top: 56%;
`,{calendar:et,clear:tt}=Te,at=s.default.memo((({label:a,rangeValue:n,Calendar:r})=>{const[s,o]=t.useState(""),[i,d]=t.useState(""),[l,c]=t.useState(!1),h=t.useRef(null);Ge(h,(()=>{d(""),o(C(g)),c(!1)}));const{selectedDate:g}=M(),{setRange:m}=u();t.useEffect((()=>{o(C(g))}),[g]);const x=t.useCallback((()=>{d(""),o(C(g)),c((e=>!e))}),[g,c]),f=t.useCallback((()=>{d(""),o(""),m({rangeStart:void 0,rangeEnd:void 0}),c(!1)}),[m]);return e.jsxs(_e,{children:[e.jsxs(Qe,{children:[e.jsx(qe,{children:a}),i&&e.jsx(Ue,{children:i})]}),e.jsxs(Ke,{children:[e.jsx(O,{"data-testid":"calendar-icon-button",src:et,onClick:x}),e.jsx(lt,{inputValue:n||s,setError:d,setInputValue:o,setIsCalendarOpen:c}),s&&e.jsx(O,{"data-testid":"clear-icon-button",src:tt,onClick:f})]}),e.jsx(Xe,{ref:h,children:l&&e.jsx(r,{})})]})})),nt=o.default(N)`
  gap: ${({theme:e})=>e.spaces.m}px;
  flex-direction: row;
`;s.default.memo((({Calendar:t})=>{const{range:a}=u(),n=a?.rangeStart?C(a.rangeStart):"",r=a?.rangeEnd?C(a.rangeEnd):"";return e.jsx(z,{children:e.jsxs(nt,{children:[e.jsx(at,{Calendar:t,label:"From",rangeValue:n}),e.jsx(at,{Calendar:t,label:"To",rangeValue:r})]})})}));const rt="Enter Date in dd/mm/yyyy format",st="/",ot=/^[0-9/]*$/,it=o.default(H)`
  margin: 0;
`,dt=s.default.memo((a=>{const{inputValue:n,setInputValue:r,setError:s,setIsCalendarOpen:o}=a,{setSelectedDate:i,setSelectedMonth:d,setSelectedYear:l}=M(),c=t.useCallback((e=>{s(""),"Backspace"===e.key&&n.endsWith(st)&&r(n.slice(0,-1))}),[n,s,r]),h=t.useCallback((()=>{o(!0)}),[]),u=t.useCallback((e=>{s(""),o(!0);const t=e.target.value;if(!ot.test(t))return e.preventDefault(),void s(rt);if(t.length>=10){r(t.substring(0,10));const e=t.split(st),a=parseInt(e[0]),n=parseInt(e[1])-1,o=parseInt(e[2]);if(o>9999)return void s(rt);const c=new Date(o,n,a);c.getDate()!==a||c.getMonth()!==n||c.getFullYear()!==o?s("Invalid Date"):(i(c),d(n),l(o))}2===t.length||5===t.length?r(t+st):r(t)}),[s,r,o,i,d,l]);return e.jsx(it,{"data-testid":"date-picker-input",placeholder:"Coose Date",type:"text",value:n,onChange:u,onFocus:h,onKeyDown:c})}));var lt=dt;const ct=o.default(N)`
  flex-direction: column;
`,ht=o.default.p`
  ${R}

  color: ${({theme:e})=>e.colors.red};
`,ut=o.default.span`
  ${R}

  text-align: center;
`;class gt extends t.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){this.setState({errorInfo:t})}render(){const{hasError:t,error:a,errorInfo:n}=this.state;return t?e.jsxs(ct,{"data-testid":"error-boundary",children:[e.jsx(Y,{children:"An error has occured"}),e.jsx(ht,{children:a&&a.toString()}),e.jsx(ut,{children:"(╯°□°）╯︵ ┻━┻"}),e.jsx(ut,{children:n&&n.componentStack})]}):this.props.children}}const mt=({theme:e})=>e.spaces.m,xt=o.default(N)`
  gap: ${mt}px;
  width: 100%;
`,ft=o.default(N)`
  border: 1px solid ${({theme:e})=>e.colors.lightGray};
  margin: ${mt}px 0;
  width: 100%;
  justify-content: flex-start;
  border-radius: 8px;
`,pt=o.default(I)`
  background-color: ${({theme:e})=>e.colors.darkBlue};
  color: ${({theme:e})=>e.colors.white};
  width: 100px;
  height: 40px;
  border-radius: 8px;
`,Dt=s.default.memo((({todoText:t,onChange:a,onAddTask:n})=>{const r=()=>{n()};return e.jsxs(xt,{children:[e.jsx(ft,{children:e.jsx(H,{placeholder:"Enter todo text",type:"text",value:t,onChange:e=>{a(e)},onKeyDown:e=>{"Enter"===e.key&&r()}})}),e.jsx(pt,{onClick:r,children:"Add task"})]})})),wt=({theme:e})=>e.spaces.m,yt=o.default(N)`
  border: 1px solid ${({theme:e})=>e.colors.lightGray};
  gap: ${wt}px;
  padding: ${wt}px;
  justify-content: flex-start;
  width: 100%;
  border-radius: 8px;
`,Ct=o.default.p`
  ${R}

  text-decoration: ${({$isDone:e})=>e?"line-through":"none"};
  width: 100%;
  max-width: 433px;
  word-wrap: break-word;
`,bt=o.default(I)`
  &:hover {
    color: ${({theme:e})=>e.colors.red};
  }
`,$t=s.default.memo((a=>{const{id:n,todoText:r,isDone:s,setTodos:o}=a,{selectedDate:i}=M(),d=t.useCallback((()=>{const e=i.toDateString(),t=P(e).map((e=>e.id===n?{...e,isDone:!e.isDone}:e));o(t),_(e,t)}),[n,i,o]),l=t.useCallback((()=>{const e=i.toDateString(),t=P(e).filter((e=>e.id!==n));o(t),_(e,t)}),[n,i,o]);return e.jsxs(yt,{children:[e.jsx("input",{checked:s,type:"checkbox",onChange:d}),e.jsx(Ct,{$isDone:s,children:r}),e.jsx(bt,{onClick:l,children:"Delete"})]})})),kt=o.default(N)`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`,St=o.default(N)`
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
`,jt=o.default(I)`
  align-self: flex-end;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.15);
  }
`,{close:vt}=Te,Mt=s.default.memo((({children:a,onClose:n})=>{const r=t.useRef(null);Ge(r,n);return e.jsx(kt,{children:e.jsxs(St,{ref:r,children:[e.jsx(jt,{"data-testid":"modal-close-button",onClick:()=>{n()},children:e.jsx(O,{src:vt})}),a]})})})),Et=o.default(N)`
  gap: ${({theme:e})=>e.spaces.m}px;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  max-height: 350px;
  overflow: auto;
`,Wt=s.default.memo((({onClose:a})=>{const[n,r]=t.useState(""),[s,o]=t.useState([]),{selectedDate:i}=M();t.useEffect((()=>{const e=P(i.toDateString());e&&o(e)}),[i]);const d=t.useCallback((()=>{a()}),[a]),l=t.useCallback((e=>{r(e.target.value)}),[]),c=t.useCallback((()=>{if(""!==n.trim()){const e=i.toDateString(),t=[...s],a={id:String((new Date).getTime()),todoText:n,isDone:!1};t.push(a),o(t),_(e,t),r("")}}),[n,s,i]),h=s.map((({id:t,...a})=>e.jsx($t,{id:t,setTodos:o,...a},t)));return e.jsxs(Mt,{"data-testid":"todo-modal",onClose:d,children:[e.jsx(Y,{children:"Todos for {Date}".replace("{Date}",i.toDateString())}),e.jsx(Dt,{todoText:n,onAddTask:c,onChange:l}),e.jsx(Et,{children:0!==s.length?h:"Add some tasks"})]})})),Tt=o.default(N)`
  background-color: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.gray};
  border-bottom: ${({$isRangeExist:e,$isTodosEnabled:t})=>(e||t)&&"none"};
  border-radius: ${({$isRangeExist:e,$isTodosEnabled:t})=>e||t?"8px 8px 0 0":"8px"};
  padding: 10px;
  flex-direction: column;
  width: fit-content;
`,{Month:Lt,Week:Ft}=Ce,At=a=>{const{type:n=Lt,isMondayFirst:r,isWeekendDate:s,isWithRange:o,minDate:i,maxDate:d,isTodosEnabled:l,isHolidayDate:c}=a,{range:g,setRange:m}=u(),x=t.useCallback((()=>{m&&m(void 0)}),[m]),f=o&&Boolean(g?.rangeStart)&&Boolean(g?.rangeEnd);return e.jsx(z,{children:e.jsx(gt,{children:e.jsx(v,{children:e.jsxs(h,{children:[e.jsxs(Tt,{$isRangeExist:f,$isTodosEnabled:l,"data-testid":"calendar",children:[e.jsx(Ye,{isMondayFirst:r,maxDate:d,minDate:i,type:n}),(n===Ft||n===Lt)&&e.jsx(Ze,{isMondayFirst:r}),e.jsx(We,{isHolidayDate:c,isMondayFirst:r,isTodosEnabled:l,isWeekendDate:s,isWithRange:o,maxDate:d,minDate:i,type:n})]}),f&&e.jsx(J,{$isTodosEnabled:l,title:"Clear Range",onButtonClick:x})]})})})})};exports.CalendarService=class{calendar;constructor(){this.calendar=At}addDecorator(e){this.calendar=e(this.calendar)}getCalendar(){return this.calendar}},exports.DatePicker=at,exports.ICONS=Te,exports.useDate=u,exports.withHolidays=t=>{const a=a=>e.jsx(t,{...a,isHolidayDate:y}),n=t.displayName||t.name;return a.displayName=`withHolidays(${n})`,a},exports.withMinAndMaxDate=t=>{const a=a=>{const{minDate:n,maxDate:r}=u();return e.jsx(t,{...a,maxDate:r,minDate:n})},n=t.displayName||t.name;return a.displayName=`withRange(${n})`,a},exports.withMondayFirst=t=>{const a=a=>e.jsx(t,{...a,isMondayFirst:!0}),n=t.displayName||t.name;return a.displayName=`withMondayFirst(${n})`,a},exports.withRange=t=>{const a=a=>e.jsx(t,{...a,isWithRange:!0}),n=t.displayName||t.name;return a.displayName=`withRange(${n})`,a},exports.withTodos=a=>{const n=n=>{const[r,s]=t.useState(!1),{selectedDate:o}=M(),d=function(e="todo-portal-wrapper"){const a=t.useRef(null);return t.useEffect((()=>{let t=document.getElementById(e),n=!1;return t||(n=!0,t=document.createElement("div"),t.id=e,document.body.appendChild(t)),a.current=t,()=>{n&&t?.parentNode&&t.parentNode.removeChild(t)}}),[e]),e=>{if(a.current)return i.default.createPortal(e,a.current)}}(),l=t.useCallback((()=>{s(!0)}),[]),c=t.useCallback((()=>{s(!1)}),[]),h=0!==P(o.toDateString()).length;return e.jsxs(e.Fragment,{children:[e.jsx(a,{...n,isTodosEnabled:!0}),e.jsx(J,{title:h?"View Tasks":"Add Task",onButtonClick:l}),r&&d(e.jsx(Wt,{onClose:c}))]})},r=a.displayName||a.name;return n.displayName=`withTodo(${r})`,n},exports.withWeekends=t=>{const a=a=>e.jsx(t,{...a,isWeekendDate:w}),n=t.displayName||t.name;return a.displayName=`withWeekendsDays(${n})`,a};
//# sourceMappingURL=index.js.map
