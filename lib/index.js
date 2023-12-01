"use strict";var e=require("react/jsx-runtime"),t=require("react"),a=require("styled-components"),n=require("react-dom");function r(e){return e&&e.__esModule?e:{default:e}}var s=r(t),o=r(a),i=r(n);const d=new Date(2022,0,1),l=new Date(2035,11,0),c=t.createContext({minDate:d,maxDate:l,range:void 0,setMinDate:()=>{},setMaxDate:()=>{},setRange:()=>{}}),h=()=>t.useContext(c),u={white:"#ffffff",black:"#333333",gray:"#f1f1f1",lightGray:"#aaaaaa",darkBlueHover:"#5185cb",darkBlue:"#2f80ed",blue:"#2f80ed99",lightBlue:"#2f80ed1a",red:"#b91414",orange:"#f97e00"},g={fontFamily:{openSans:"Open Sans"},fontSize:{xl:20,l:15,m:14,s:13},fontWeight:{l:700,m:600,s:400}},m={l:16,m:8,s:4},x={colors:{...u},fonts:{...g},spaces:{...m}},f=a.css`
  display: flex;
`,p=a.css`
  ${f}

  flex-direction: column;
`,D=a.css`
  justify-content: center;
  align-items: center;
`,w=a.css`
  font-size: ${g.fontSize.s}px;
  font-weight: ${g.fontWeight.m};
  font-style: normal;
  line-height: normal;
`,y=a.createGlobalStyle`
    * {
        font-family: ${g.fontFamily.openSans};
        box-sizing: border-box;
        user-select: none;
        text-decoration: none;
        list-style: none;
        outline: none;
        margin: 0;
        padding: 0;
    }
`,C=o.default.button`
  ${p}
  ${D}
  ${w}
  
  background: transparent;
  border: none;
  cursor: pointer;
`,b=o.default.div`
  ${f}
  ${D}
  
  cursor: default;
`,$=o.default.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`,k=o.default.h1`
  ${w}

  font-size:  ${g.fontSize.xl}px;
  font-weight: ${g.fontWeight.l};
`,S=o.default.input`
  ${w}

  margin: ${m.m}px;
  font-size: ${g.fontSize.l}px;
  font-weight: ${g.fontWeight.s};
  width: 100%;
  border: none;
  background: transparent;
`,j=({children:t})=>e.jsxs(e.Fragment,{children:[e.jsx(y,{}),e.jsx(a.ThemeProvider,{theme:x,children:t})]}),v=({theme:e})=>e.colors.gray,M=o.default(C)`
  ${w}

  padding: ${({theme:e})=>e.spaces.s}px 0;
  border: 1px solid ${v};
  background-color: ${({theme:e})=>e.colors.white};
  border-bottom: ${({$isTodosEnabled:e})=>e&&"none"};
  border-radius: ${({$isTodosEnabled:e})=>e?"0":"0 0 8px 8px"};
  min-width: 246px;
  justify-content: space-between;

  &:hover {
    background-color: ${v};
  }
`,E=s.default.memo((({title:t,onButtonClick:a,$isTodosEnabled:n})=>e.jsx(M,{$isTodosEnabled:n,"data-testid":"calendar-button",onClick:a,children:t})));var T;!function(e){e.Start="Start",e.Between="Between",e.End="End"}(T||(T={}));const W={Sunday:"Su",Monday:"Mo",Tuesday:"Tu",Wednesday:"We",Thursday:"Th",Friday:"Fr",Saturday:"Sa"};var L;!function(e){e[e.January=0]="January",e[e.February=1]="February",e[e.March=2]="March",e[e.April=3]="April",e[e.May=4]="May",e[e.June=5]="June",e[e.July=6]="July",e[e.August=7]="August",e[e.September=8]="September",e[e.October=9]="October",e[e.November=10]="November",e[e.December=11]="December"}(L||(L={}));const F=12,A=[{name:"New Year's Day",date:new Date("2022-01-01")},{name:"Orthodox Christmas Eve",date:new Date("2022-01-06")},{name:"Orthodox Christmas Day",date:new Date("2022-01-07")},{name:"Defender of the Fatherland Day",date:new Date("2022-02-23")},{name:"International Women's Day",date:new Date("2022-03-08")},{name:"March Equinox",date:new Date("2022-03-20")},{name:"International Labor Day",date:new Date("2022-05-01")},{name:"Commemoration Day",date:new Date("2022-05-03")},{name:"Victory Day",date:new Date("2022-05-09")},{name:"June Solstice",date:new Date("2022-06-21")},{name:"Independence Day",date:new Date("2022-07-03")},{name:"September Equinox",date:new Date("2022-09-03")},{name:"Mother's Day",date:new Date("2022-10-14")},{name:"October Revolution Day",date:new Date("2022-11-07")},{name:"Christmas Eve",date:new Date("2022-12-24")},{name:"Christmas Day",date:new Date("2022-12-25")},{name:"New Year's Eve",date:new Date("2022-12-31")}],B=(e,t=!1)=>{const a=new Date(e);if(t){const e=a.getDay(),t=0===e?6:e-1;a.setDate(a.getDate()-t)}else a.setDate(a.getDate()-a.getDay());return a},V=e=>0===e.getDay()||6===e.getDay(),R=e=>A.some((t=>e.getDate()===t.date.getDate()&&e.getMonth()===t.date.getMonth())),H=e=>`${e.getDate().toString().padStart(2,"0")}/${(e.getMonth()+1).toString().padStart(2,"0")}/${e.getFullYear().toString()}`,I=new Date,Y=I.getMonth(),z=I.getFullYear(),N=B(I),O=t.createContext({firstDateOfWeek:N,selectedDate:I,selectedMonth:Y,selectedYear:z,setFirstDateOfWeek:()=>{},setSelectedDate:()=>{},setSelectedMonth:()=>{},setSelectedYear:()=>{}}),Z=()=>t.useContext(O);function G(e){const t=localStorage.getItem(e);return t?JSON.parse(t):[]}function J(e,t){localStorage.setItem(e,JSON.stringify(t))}const{Start:P,Between:_,End:q}=T,{Start:K,Between:Q,End:U}=T,{darkBlue:X,blue:ee,lightBlue:te,white:ae,orange:ne,lightGray:re,red:se,black:oe}=u,ie=({theme:e})=>e.colors.gray,de=({theme:e})=>e.colors.darkBlueHover,le=o.default(C)`
  background-color: ${({$isSelected:e,$rangeState:t})=>((e,t)=>e||t===U?X:t===K?ee:t===Q?te:ae)(e,t)};
  color: ${({$isSelected:e,$isDisabled:t,$isWeekend:a,$rangeState:n,$isHoliday:r})=>((e,t,a,n,r)=>e||n===K||n===U?ae:r?ne:n===Q?X:t?re:a?se:oe)(e,t,a,n,r)};
  padding: ${({theme:e})=>e.spaces.m}px;
  border-radius: ${({$rangeState:e})=>(e=>{switch(e){case P:return"8px 0 0 8px";case _:return"0";case q:return"0 8px 8px 0";default:return"8px"}})(e)};
  width: 32px;
  height: 38px;

  &:hover {
    background-color: ${({$isSelected:e})=>e?de:ie};
  }
`,ce=o.default.div`
  background-color: ${({theme:e})=>e.colors.orange};
  width: 3px;
  height: 3px;
  border-radius: 50%;
`,{Start:he,End:ue,Between:ge}=T,me=s.default.memo((a=>{const{dayOfWeek:n,isSelected:r=!1,isDisabled:s=!1,isWeekend:o=!1,isWithRange:i=!1,minDate:d,maxDate:l,isTodosEnabled:c=!1,isHoliday:u=!1}=a,{range:g,setRange:m}=h(),{setSelectedDate:x,setSelectedMonth:f,setSelectedYear:p}=Z(),D=n.getDate(),w=n.getMonth(),y=n.getFullYear(),C=t.useCallback((()=>{if((!d||n>=d)&&(!l||n<=l)&&(x(n),f(w),p(y),i))if(g&&(g.rangeStart||g.rangeEnd)){const e=g&&g.rangeStart?g.rangeStart:n,t=n<e?[n,e]:[e,n];m({rangeStart:t[0],rangeEnd:t[1]})}else m({rangeStart:n,rangeEnd:void 0})}),[d,n,l,x,f,w,p,y,i,g,m]),b=G(n.toDateString());return e.jsx(e.Fragment,{children:e.jsxs(le,{$isDisabled:s,$isHoliday:u,$isSelected:r,$isWeekend:o,$rangeState:(e=>{if(g&&g.rangeStart){if(e.getTime()===g.rangeStart.getTime())return he;if(g.rangeEnd&&e.getTime()===g.rangeEnd.getTime())return ue;if(g.rangeEnd&&e>g.rangeStart&&e<g.rangeEnd)return ge}})(n),"data-testid":"day-of-week",onClick:C,children:[D,c&&0!==b.length&&e.jsx(ce,{})]})})})),xe=(e,t)=>e.getMonth()!==t,fe=(e,t)=>new Date(e,t+1,0).getDate();const pe=(e,t)=>e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear(),De=(e,t,a)=>{const n=fe(t,e),r=function(e,t){return new Date(e,t,1).getDay()}(t,e);let s;s=a?(7+r-1)%7:(7+r)%7;const{month:o,year:i}=((e,t)=>0===e?{month:11,year:t-1}:{month:e-1,year:t})(e,t),{month:d,year:l}=((e,t)=>11===e?{month:0,year:t+1}:{month:e+1,year:t})(e,t),c=fe(i,o),h=Array.from({length:s},((e,t)=>new Date(i,o,c-s+1+t))),u=Array.from({length:n},((a,n)=>new Date(t,e,n+1))),g=n+s,m=7*Math.ceil(6)-g,x=Array.from({length:m},((e,t)=>{const a=new Date(l,d,t+1);return a.getMonth()===d?a:null})).filter((e=>null!==e));return[...h,...u,...x]};var we;!function(e){e[e.Week=1]="Week",e[e.Month=2]="Month",e[e.Year=3]="Year"}(we||(we={}));const ye=({theme:e})=>e.spaces.m,Ce=o.default.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(1, 1fr);
  width: fit-content;
`,be=o.default(Ce)`
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: baseline;
`,$e=o.default(b)`
  padding: ${ye}px;
  flex-direction: column;
`,ke=o.default.p`
  ${w}

  align-self: flex-start;
  padding-left: ${ye}px;
`,{Week:Se,Month:je,Year:ve}=we,Me=a=>{const{type:n,isMondayFirst:r,isWeekendDate:s,isWithRange:o,minDate:i,maxDate:d,isTodosEnabled:l,isHolidayDate:c}=a,{firstDateOfWeek:h,selectedDate:u,selectedMonth:g,selectedYear:m}=Z(),x=t.useMemo((()=>n===Se?(e=>Array.from({length:7},((t,a)=>{const n=new Date(e);return n.setDate(e.getDate()+a),n})))(h):n===je?De(g,m,r):void 0),[h,g,m,r,n]),f=t.useMemo((()=>{if(n===ve)return((e,t=!1)=>Array.from({length:F},((a,n)=>De(n,e,t))))(m,r)}),[n,m,r]);return e.jsxs(e.Fragment,{children:[x&&e.jsx(Ce,{"data-testid":"day-of-week-grid",children:x.map((t=>e.jsx(me,{dayOfWeek:t,isDisabled:xe(t,g),isHoliday:c&&c(t),isSelected:pe(t,u),isTodosEnabled:l,isWeekend:s&&s(t),isWithRange:o,maxDate:d,minDate:i},t.getTime())))}),n===ve&&f&&e.jsx(be,{"data-testid":"day-of-week-grid-year",children:f.map((t=>{const a=t[7].getMonth();return e.jsxs($e,{children:[e.jsx(ke,{children:L[a]}),e.jsx(Ne,{isMondayFirst:r}),e.jsx(Ce,{children:t.map((t=>e.jsx(me,{dayOfWeek:t,isDisabled:xe(t,a),isHoliday:c&&c(t),isSelected:pe(t,u),isTodosEnabled:l,isWeekend:s&&s(t),isWithRange:o,maxDate:d,minDate:i},t.getTime())))})]},t[7].getTime())}))})]})};const Ee={calendar:"data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg id='Icon / Field / Calendar' clip-path='url(%23clip0_1_7)'%3e%3cpath id='Vector' d='M8.2 9.59999C7.97333 9.59999 7.78347 9.52319 7.6304 9.36959C7.4768 9.21652 7.4 9.02666 7.4 8.79999C7.4 8.57332 7.4768 8.38319 7.6304 8.22959C7.78347 8.07652 7.97333 7.99999 8.2 7.99999C8.42667 7.99999 8.6168 8.07652 8.7704 8.22959C8.92347 8.38319 9 8.57332 9 8.79999C9 9.02666 8.92347 9.21652 8.7704 9.36959C8.6168 9.52319 8.42667 9.59999 8.2 9.59999ZM5 9.59999C4.77333 9.59999 4.5832 9.52319 4.4296 9.36959C4.27653 9.21652 4.2 9.02666 4.2 8.79999C4.2 8.57332 4.27653 8.38319 4.4296 8.22959C4.5832 8.07652 4.77333 7.99999 5 7.99999C5.22667 7.99999 5.4168 8.07652 5.5704 8.22959C5.72347 8.38319 5.8 8.57332 5.8 8.79999C5.8 9.02666 5.72347 9.21652 5.5704 9.36959C5.4168 9.52319 5.22667 9.59999 5 9.59999ZM11.4 9.59999C11.1733 9.59999 10.9835 9.52319 10.8304 9.36959C10.6768 9.21652 10.6 9.02666 10.6 8.79999C10.6 8.57332 10.6768 8.38319 10.8304 8.22959C10.9835 8.07652 11.1733 7.99999 11.4 7.99999C11.6267 7.99999 11.8165 8.07652 11.9696 8.22959C12.1232 8.38319 12.2 8.57332 12.2 8.79999C12.2 9.02666 12.1232 9.21652 11.9696 9.36959C11.8165 9.52319 11.6267 9.59999 11.4 9.59999ZM8.2 12.8C7.97333 12.8 7.78347 12.7232 7.6304 12.5696C7.4768 12.4165 7.4 12.2267 7.4 12C7.4 11.7733 7.4768 11.5835 7.6304 11.4304C7.78347 11.2768 7.97333 11.2 8.2 11.2C8.42667 11.2 8.6168 11.2768 8.7704 11.4304C8.92347 11.5835 9 11.7733 9 12C9 12.2267 8.92347 12.4165 8.7704 12.5696C8.6168 12.7232 8.42667 12.8 8.2 12.8ZM5 12.8C4.77333 12.8 4.5832 12.7232 4.4296 12.5696C4.27653 12.4165 4.2 12.2267 4.2 12C4.2 11.7733 4.27653 11.5835 4.4296 11.4304C4.5832 11.2768 4.77333 11.2 5 11.2C5.22667 11.2 5.4168 11.2768 5.5704 11.4304C5.72347 11.5835 5.8 11.7733 5.8 12C5.8 12.2267 5.72347 12.4165 5.5704 12.5696C5.4168 12.7232 5.22667 12.8 5 12.8ZM11.4 12.8C11.1733 12.8 10.9835 12.7232 10.8304 12.5696C10.6768 12.4165 10.6 12.2267 10.6 12C10.6 11.7733 10.6768 11.5835 10.8304 11.4304C10.9835 11.2768 11.1733 11.2 11.4 11.2C11.6267 11.2 11.8165 11.2768 11.9696 11.4304C12.1232 11.5835 12.2 11.7733 12.2 12C12.2 12.2267 12.1232 12.4165 11.9696 12.5696C11.8165 12.7232 11.6267 12.8 11.4 12.8ZM2.6 16C2.16 16 1.7832 15.8435 1.4696 15.5304C1.15653 15.2168 1 14.84 1 14.4V3.19999C1 2.75999 1.15653 2.38346 1.4696 2.07039C1.7832 1.75679 2.16 1.59999 2.6 1.59999H3.4V-1.04904e-05H5V1.59999H11.4V-1.04904e-05H13V1.59999H13.8C14.24 1.59999 14.6168 1.75679 14.9304 2.07039C15.2435 2.38346 15.4 2.75999 15.4 3.19999V14.4C15.4 14.84 15.2435 15.2168 14.9304 15.5304C14.6168 15.8435 14.24 16 13.8 16H2.6ZM2.6 14.4H13.8V6.39999H2.6V14.4Z' fill='%23AAAAAA'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_1_7'%3e%3crect width='16' height='16' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",clear:"data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg id='Icon / Field / Clear'%3e%3cpath id='Vector' d='M12.9872 3.04239C10.2573 0.319202 5.77739 0.319202 3.04745 3.04239C0.317516 5.76559 0.317516 10.2344 3.04745 12.9576C5.77739 15.6808 10.1873 15.6808 12.9172 12.9576C15.6471 10.2344 15.7171 5.76559 12.9872 3.04239ZM9.97728 10.9327L8.01733 8.97756L6.05738 10.9327L5.0774 9.95511L7.03735 8L5.0774 6.04489L6.05738 5.06733L8.01733 7.02244L9.97728 5.06733L10.9573 6.04489L8.99731 8L10.9573 9.95511L9.97728 10.9327Z' fill='%23AAAAAA'/%3e%3c/g%3e%3c/svg%3e",close:"data:image/svg+xml,%3csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48px' height='48px' viewBox='0%2c0%2c256%2c256'%3e%3cg fill='%23ad1313' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'%3e%3cg transform='translate(0%2c0) scale(10.66667%2c10.66667)'%3e%3cpath d='M4.70703%2c3.29297l-1.41406%2c1.41406l7.29297%2c7.29297l-7.29297%2c7.29297l1.41406%2c1.41406l7.29297%2c-7.29297l7.29297%2c7.29297l1.41406%2c-1.41406l-7.29297%2c-7.29297l7.29297%2c-7.29297l-1.41406%2c-1.41406l-7.29297%2c7.29297z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",nextGrid:"data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg id='Icon / Calendar / Next'%3e%3cpath id='Vector' d='M4.27337 4L3.33337 4.94L6.38671 8L3.33337 11.06L4.27337 12L8.27337 8L4.27337 4Z' fill='black'/%3e%3cpath id='Vector_2' d='M8.66668 4L7.72668 4.94L10.78 8L7.72668 11.06L8.66668 12L12.6667 8L8.66668 4Z' fill='black'/%3e%3c/g%3e%3c/svg%3e",prevGrid:"data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg id='Icon / Calendar / Prev'%3e%3cpath id='Vector' d='M11.7266 12L12.6666 11.06L9.61329 8L12.6666 4.94L11.7266 4L7.72663 8L11.7266 12Z' fill='black'/%3e%3cpath id='Vector_2' d='M7.33332 12L8.27332 11.06L5.21998 8L8.27331 4.94L7.33331 4L3.33332 8L7.33332 12Z' fill='black'/%3e%3c/g%3e%3c/svg%3e"},Te="nextGreed",We=o.default(b)`
  padding: ${({theme:e})=>e.spaces.s}px 0;
  width: 100%;
  min-width: 224px;
  justify-content: space-between;
`,Le=o.default(C)`
  width: 16px;
  height: 16px;
`,Fe=o.default.h1`
  ${w}

  font-size: ${({theme:e})=>e.fonts.fontSize.m}px;
  font-weight: ${({theme:e})=>e.fonts.fontWeight.l};
  cursor: pointer;
`,{Week:Ae,Month:Be,Year:Ve}=we,{prevGrid:Re,nextGrid:He}=Ee,Ie=s.default.memo((a=>{const{type:n,minDate:r,maxDate:s,isMondayFirst:o}=a,{selectedDate:i,firstDateOfWeek:d,selectedMonth:l,selectedYear:c,setFirstDateOfWeek:h,setSelectedMonth:u,setSelectedYear:g}=Z();t.useEffect((()=>{h(B(i,o))}),[o,i,h]);const m=n===Ve?`${c}`:`${L[l]} ${c}`,x=t.useCallback((e=>()=>{let t=l,a=c;const o=d;n===Be&&(e===Te?(t=(l+1)%F,a=11===l?c+1:c):(t=(l-1+F)%F,a=0===l?c-1:c)),n===Ae&&(e===Te?o.setDate(o.getDate()+7):o.setDate(o.getDate()-7),t=d.getMonth(),a=d.getFullYear(),h(new Date(o))),n===Ve&&(e===Te?a++:a--);const i=new Date(a,t);(!r||i>=r)&&(!s||i<=s)&&(u(t),g(a))}),[d,s,r,l,c,h,u,g,n]);return e.jsxs(We,{children:[e.jsx(Le,{"data-testid":"prev-button",onClick:x("prevGreed"),children:e.jsx($,{src:Re})}),e.jsx(Fe,{"data-testid":"grid-slider",children:m}),e.jsx(Le,{"data-testid":"next-button",onClick:x(Te),children:e.jsx($,{src:He})})]})})),Ye=o.default.div`
  ${w}

  font-size: ${({theme:e})=>e.fonts.fontSize.m}px;
  font-weight: ${({theme:e})=>e.fonts.fontWeight.l};
  background-color: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.black};
  padding: ${({theme:e})=>e.spaces.m}px;
  width: 32px;
  height: 32px;
`,ze=s.default.memo((({weekday:t})=>e.jsx(Ye,{children:t}))),Ne=s.default.memo((({isMondayFirst:a})=>{const n=t.useMemo((()=>{const e=Object.values(W);return a?[...e.slice(1),e[0]]:e}),[a]);return e.jsx(b,{children:n.map((t=>e.jsx(ze,{weekday:t},t)))})})),Oe=(e,a)=>{t.useEffect((()=>{if(!a)return;const t=t=>{e.current&&!e.current.contains(t.target)&&a(t)};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}}),[e,a])},Ze=({theme:e})=>e.spaces.m,Ge=({theme:e})=>e.spaces.s,Je=o.default(b)`
  flex-direction: column;
  align-items: flex-start;
`,Pe=o.default.label`
  ${w}

  font-size: ${({theme:e})=>e.fonts.fontSize.l}px;
`,_e=o.default(b)`
  border: 1px solid ${({theme:e})=>e.colors.gray};
  padding: ${Ze}px;
  margin: ${Ze}px 0;
  gap: ${Ge}px;
  width: 246px;
  justify-content: flex-start;
  border-radius: 8px;
`,qe=o.default(b)`
  gap: ${Ge}px;
`,Ke=o.default.span`
  ${w}

  font-size: ${({theme:e})=>e.fonts.fontSize.s}px;
  font-weight: ${({theme:e})=>e.fonts.fontWeight.s};
  color: ${({theme:e})=>e.colors.red};
`,{calendar:Qe,clear:Ue}=Ee,Xe=s.default.memo((({label:a,rangeValue:n,Calendar:r})=>{const[s,o]=t.useState(""),[i,d]=t.useState(""),[l,c]=t.useState(!1),u=t.useRef(null);Oe(u,(()=>{d(""),o(H(g)),c(!1)}));const{selectedDate:g}=Z(),{setRange:m}=h();t.useEffect((()=>{o(H(g))}),[g]);const x=t.useCallback((()=>{d(""),o(H(g)),c((e=>!e))}),[g,c]),f=t.useCallback((()=>{d(""),o(""),m({rangeStart:void 0,rangeEnd:void 0}),c(!1)}),[m]);return e.jsx(j,{children:e.jsxs(Je,{children:[e.jsxs(qe,{children:[e.jsx(Pe,{children:a}),i&&e.jsx(Ke,{children:i})]}),e.jsxs(_e,{children:[e.jsx($,{"data-testid":"calendar-icon-button",src:Qe,onClick:x}),e.jsx(ot,{inputValue:n||s,setError:d,setInputValue:o,setIsCalendarOpen:c}),s&&e.jsx($,{"data-testid":"clear-icon-button",src:Ue,onClick:f})]}),e.jsx("div",{ref:u,children:l&&e.jsx(r,{})})]})})})),et=o.default(b)`
  gap: ${({theme:e})=>e.spaces.m}px;
  flex-direction: row;
`;s.default.memo((({Calendar:t})=>{const{range:a}=h(),n=a?.rangeStart?H(a.rangeStart):"",r=a?.rangeEnd?H(a.rangeEnd):"";return e.jsx(j,{children:e.jsxs(et,{children:[e.jsx(Xe,{Calendar:t,label:"From",rangeValue:n}),e.jsx(Xe,{Calendar:t,label:"To",rangeValue:r})]})})}));const tt="Enter Date in dd/mm/yyyy format",at="/",nt=/^[0-9/]*$/,rt=o.default(S)`
  margin: 0;
`,st=s.default.memo((a=>{const{inputValue:n,setInputValue:r,setError:s,setIsCalendarOpen:o}=a,{setSelectedDate:i,setSelectedMonth:d,setSelectedYear:l}=Z(),c=t.useCallback((e=>{s(""),"Backspace"===e.key&&n.endsWith(at)&&r(n.slice(0,-1))}),[n,s,r]),h=t.useCallback((()=>{o(!0)}),[]),u=t.useCallback((e=>{s(""),o(!0);const t=e.target.value;if(!nt.test(t))return e.preventDefault(),void s(tt);if(t.length>=10){r(t.substring(0,10));const e=t.split(at),a=parseInt(e[0]),n=parseInt(e[1])-1,o=parseInt(e[2]);if(o>9999)return void s(tt);const c=new Date(o,n,a);c.getDate()!==a||c.getMonth()!==n||c.getFullYear()!==o?s("Invalid Date"):(i(c),d(n),l(o))}2===t.length||5===t.length?r(t+at):r(t)}),[s,r,o,i,d,l]);return e.jsx(rt,{"data-testid":"date-picker-input",placeholder:"Coose Date",type:"text",value:n,onChange:u,onFocus:h,onKeyDown:c})}));var ot=st;const it=o.default(b)`
  flex-direction: column;
`,dt=o.default.p`
  ${w}

  color: ${({theme:e})=>e.colors.red};
`,lt=o.default.span`
  ${w}

  text-align: center;
`;class ct extends t.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){this.setState({errorInfo:t})}render(){const{hasError:t,error:a,errorInfo:n}=this.state;return t?e.jsxs(it,{"data-testid":"error-boundary",children:[e.jsx(k,{children:"An error has occured"}),e.jsx(dt,{children:a&&a.toString()}),e.jsx(lt,{children:"(╯°□°）╯︵ ┻━┻"}),e.jsx(lt,{children:n&&n.componentStack})]}):this.props.children}}const ht=({theme:e})=>e.spaces.m,ut=o.default(b)`
  gap: ${ht}px;
  width: 100%;
`,gt=o.default(b)`
  border: 1px solid ${({theme:e})=>e.colors.lightGray};
  margin: ${ht}px 0;
  width: 100%;
  justify-content: flex-start;
  border-radius: 8px;
`,mt=o.default(C)`
  background-color: ${({theme:e})=>e.colors.darkBlue};
  color: ${({theme:e})=>e.colors.white};
  width: 100px;
  height: 40px;
  border-radius: 8px;
`,xt=s.default.memo((({todoText:t,onChange:a,onAddTask:n})=>{const r=()=>{n()};return e.jsxs(ut,{children:[e.jsx(gt,{children:e.jsx(S,{placeholder:"Enter todo text",type:"text",value:t,onChange:e=>{a(e)},onKeyDown:e=>{"Enter"===e.key&&r()}})}),e.jsx(mt,{onClick:r,children:"Add task"})]})})),ft=({theme:e})=>e.spaces.m,pt=o.default(b)`
  border: 1px solid ${({theme:e})=>e.colors.lightGray};
  gap: ${ft}px;
  padding: ${ft}px;
  justify-content: flex-start;
  width: 100%;
  border-radius: 8px;
`,Dt=o.default.p`
  ${w}

  text-decoration: ${({$isDone:e})=>e?"line-through":"none"};
  width: 100%;
  max-width: 433px;
  word-wrap: break-word;
`,wt=o.default(C)`
  &:hover {
    color: ${({theme:e})=>e.colors.red};
  }
`,yt=s.default.memo((a=>{const{id:n,todoText:r,isDone:s,setTodos:o}=a,{selectedDate:i}=Z(),d=t.useCallback((()=>{const e=i.toDateString(),t=G(e).map((e=>e.id===n?{...e,isDone:!e.isDone}:e));o(t),J(e,t)}),[n,i,o]),l=t.useCallback((()=>{const e=i.toDateString(),t=G(e).filter((e=>e.id!==n));o(t),J(e,t)}),[n,i,o]);return e.jsxs(pt,{children:[e.jsx("input",{checked:s,type:"checkbox",onChange:d}),e.jsx(Dt,{$isDone:s,children:r}),e.jsx(wt,{onClick:l,children:"Delete"})]})})),Ct=o.default(b)`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`,bt=o.default(b)`
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
`,$t=o.default(C)`
  align-self: flex-end;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.15);
  }
`,{close:kt}=Ee,St=s.default.memo((({children:a,onClose:n})=>{const r=t.useRef(null);Oe(r,n);return e.jsx(Ct,{children:e.jsxs(bt,{ref:r,children:[e.jsx($t,{"data-testid":"modal-close-button",onClick:()=>{n()},children:e.jsx($,{src:kt})}),a]})})})),jt=o.default(b)`
  gap: ${({theme:e})=>e.spaces.m}px;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  max-height: 350px;
  overflow: auto;
`,vt=s.default.memo((({onClose:a})=>{const[n,r]=t.useState(""),[s,o]=t.useState([]),{selectedDate:i}=Z();t.useEffect((()=>{const e=G(i.toDateString());e&&o(e)}),[i]);const d=t.useCallback((()=>{a()}),[a]),l=t.useCallback((e=>{r(e.target.value)}),[]),c=t.useCallback((()=>{if(""!==n.trim()){const e=i.toDateString(),t=[...s],a={id:String((new Date).getTime()),todoText:n,isDone:!1};t.push(a),o(t),J(e,t),r("")}}),[n,s,i]),h=s.map((({id:t,...a})=>e.jsx(yt,{id:t,setTodos:o,...a},t)));return e.jsxs(St,{"data-testid":"todo-modal",onClose:d,children:[e.jsx(k,{children:"Todos for {Date}".replace("{Date}",i.toDateString())}),e.jsx(xt,{todoText:n,onAddTask:c,onChange:l}),e.jsx(jt,{children:0!==s.length?h:"Add some tasks"})]})})),Mt=o.default(b)`
  background-color: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.gray};
  border-bottom: ${({$isRangeExist:e,$isTodosEnabled:t})=>(e||t)&&"none"};
  border-radius: ${({$isRangeExist:e,$isTodosEnabled:t})=>e||t?"8px 8px 0 0":"8px"};
  padding: 10px;
  flex-direction: column;
  width: fit-content;
`,{Month:Et,Week:Tt}=we,Wt=a=>{const{type:n=Et,isMondayFirst:r,isWeekendDate:s,isWithRange:o,minDate:i,maxDate:d,isTodosEnabled:l,isHolidayDate:c}=a,{range:u,setRange:g}=h(),m=t.useCallback((()=>{g&&g(void 0)}),[g]),x=o&&Boolean(u?.rangeStart)&&Boolean(u?.rangeEnd);return e.jsx(j,{children:e.jsxs(ct,{children:[e.jsxs(Mt,{$isRangeExist:x,$isTodosEnabled:l,"data-testid":"calendar",children:[e.jsx(Ie,{isMondayFirst:r,maxDate:d,minDate:i,type:n}),(n===Tt||n===Et)&&e.jsx(Ne,{isMondayFirst:r}),e.jsx(Me,{isHolidayDate:c,isMondayFirst:r,isTodosEnabled:l,isWeekendDate:s,isWithRange:o,maxDate:d,minDate:i,type:n})]}),x&&e.jsx(E,{$isTodosEnabled:l,title:"Clear Range",onButtonClick:m})]})})};exports.CalendarService=class{calendar;constructor(){this.calendar=Wt}addDecorator(e){this.calendar=e(this.calendar)}getCalendar(){return this.calendar}},exports.DatePicker=Xe,exports.DateProvider=({children:a})=>{const[n,r]=t.useState(d),[s,o]=t.useState(l),[i,h]=t.useState({rangeStart:void 0,rangeEnd:void 0}),u={minDate:n,maxDate:s,range:i,setMinDate:r,setMaxDate:o,setRange:h};return e.jsx(c.Provider,{value:u,children:a})},exports.useDate=h,exports.withHolidays=t=>{const a=a=>e.jsx(t,{...a,isHolidayDate:R}),n=t.displayName||t.name;return a.displayName=`withHolidays(${n})`,a},exports.withMondayFirst=t=>{const a=a=>e.jsx(t,{...a,isMondayFirst:!0}),n=t.displayName||t.name;return a.displayName=`withMondayFirst(${n})`,a},exports.withRange=t=>{const a=a=>e.jsx(t,{...a,isWithRange:!0}),n=t.displayName||t.name;return a.displayName=`withRange(${n})`,a},exports.withTodos=a=>{const n=n=>{const[r,s]=t.useState(!1),{selectedDate:o}=Z(),d=function(e="todo-portal-wrapper"){const a=t.useRef(null);return t.useEffect((()=>{let t=document.getElementById(e),n=!1;return t||(n=!0,t=document.createElement("div"),t.id=e,document.body.appendChild(t)),a.current=t,()=>{n&&t?.parentNode&&t.parentNode.removeChild(t)}}),[e]),e=>{if(a.current)return i.default.createPortal(e,a.current)}}(),l=t.useCallback((()=>{s(!0)}),[]),c=t.useCallback((()=>{s(!1)}),[]),h=0!==G(o.toDateString()).length;return e.jsxs(j,{children:[e.jsx(a,{...n,isTodosEnabled:!0}),e.jsx(E,{title:h?"View Tasks":"Add Task",onButtonClick:l}),r&&d(e.jsx(vt,{onClose:c}))]})},r=a.displayName||a.name;return n.displayName=`withTodo(${r})`,n},exports.withWeekends=t=>{const a=a=>e.jsx(t,{...a,isWeekendDate:V}),n=t.displayName||t.name;return a.displayName=`withWeekendsDays(${n})`,a};
//# sourceMappingURL=index.js.map
