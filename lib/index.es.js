import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import a,{createContext as r,useContext as o,useState as i,useCallback as s,useMemo as d,useEffect as l,useRef as c,Component as h}from"react";import g,{css as m,createGlobalStyle as p,ThemeProvider as u}from"styled-components";import f from"react-dom";const x=r({minDate:new Date(2022,0,1),maxDate:new Date(2035,11,0),range:void 0,setMinDate:()=>{},setMaxDate:()=>{},setRange:()=>{}}),D=()=>o(x);var w;!function(e){e.Start="Start",e.Between="Between",e.End="End"}(w||(w={}));const y={Sunday:"Su",Monday:"Mo",Tuesday:"Tu",Wednesday:"We",Thursday:"Th",Friday:"Fr",Saturday:"Sa"};var $;!function(e){e[e.January=0]="January",e[e.February=1]="February",e[e.March=2]="March",e[e.April=3]="April",e[e.May=4]="May",e[e.June=5]="June",e[e.July=6]="July",e[e.August=7]="August",e[e.September=8]="September",e[e.October=9]="October",e[e.November=10]="November",e[e.December=11]="December"}($||($={}));const b=12,C=[{name:"New Year's Day",date:new Date("2022-01-01")},{name:"Orthodox Christmas Eve",date:new Date("2022-01-06")},{name:"Orthodox Christmas Day",date:new Date("2022-01-07")},{name:"Defender of the Fatherland Day",date:new Date("2022-02-23")},{name:"International Women's Day",date:new Date("2022-03-08")},{name:"March Equinox",date:new Date("2022-03-20")},{name:"International Labor Day",date:new Date("2022-05-01")},{name:"Commemoration Day",date:new Date("2022-05-03")},{name:"Victory Day",date:new Date("2022-05-09")},{name:"June Solstice",date:new Date("2022-06-21")},{name:"Independence Day",date:new Date("2022-07-03")},{name:"September Equinox",date:new Date("2022-09-03")},{name:"Mother's Day",date:new Date("2022-10-14")},{name:"October Revolution Day",date:new Date("2022-11-07")},{name:"Christmas Eve",date:new Date("2022-12-24")},{name:"Christmas Day",date:new Date("2022-12-25")},{name:"New Year's Eve",date:new Date("2022-12-31")}],k=(e,t=!1)=>{const n=new Date(e);if(t){const e=n.getDay(),t=0===e?6:e-1;n.setDate(n.getDate()-t)}else n.setDate(n.getDate()-n.getDay());return n},S=e=>0===e.getDay()||6===e.getDay(),v=e=>C.some((t=>e.getDate()===t.date.getDate()&&e.getMonth()===t.date.getMonth())),M=e=>`${e.getDate().toString().padStart(2,"0")}/${(e.getMonth()+1).toString().padStart(2,"0")}/${e.getFullYear().toString()}`,E=new Date,W=E.getMonth(),T=E.getFullYear(),L=k(E),F=r({firstDateOfWeek:L,selectedDate:E,selectedMonth:W,selectedYear:T,setFirstDateOfWeek:()=>{},setSelectedDate:()=>{},setSelectedMonth:()=>{},setSelectedYear:()=>{}}),A=({children:t})=>{const[n,a]=i(L),[r,o]=i(E),[s,d]=i(W),[l,c]=i(T),h={firstDateOfWeek:n,selectedDate:r,selectedMonth:s,selectedYear:l,setSelectedDate:o,setSelectedMonth:d,setSelectedYear:c,setFirstDateOfWeek:a};return e(F.Provider,{value:h,children:t})},B=()=>o(F),V={white:"#ffffff",black:"#333333",gray:"#f1f1f1",lightGray:"#aaaaaa",darkBlueHover:"#5185cb",darkBlue:"#2f80ed",blue:"#2f80ed99",lightBlue:"#2f80ed1a",red:"#b91414",orange:"#f97e00"},Y={fontFamily:{openSans:"Open Sans"},fontSize:{xl:20,l:15,m:14,s:13},fontWeight:{l:700,m:600,s:400}},H={l:16,m:8,s:4},I={colors:{...V},fonts:{...Y},spaces:{...H}},N=m`
  display: flex;
`,O=m`
  ${N}

  flex-direction: column;
`,z=m`
  justify-content: center;
  align-items: center;
`,R=m`
  font-size: ${Y.fontSize.s}px;
  font-weight: ${Y.fontWeight.m};
  font-style: normal;
  line-height: normal;
`,Z=p`
    * {
        font-family: ${Y.fontFamily.openSans};
        box-sizing: border-box;
        user-select: none;
        text-decoration: none;
        list-style: none;
        outline: none;
        margin: 0;
        padding: 0;
    }
`,G=g.button`
  ${O}
  ${z}
  ${R}
  
  background: transparent;
  border: none;
  cursor: pointer;
`,j=g.div`
  ${N}
  ${z}
  
  cursor: default;
`,J=g.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`,_=g.h1`
  ${R}

  font-size:  ${Y.fontSize.xl}px;
  font-weight: ${Y.fontWeight.l};
`,P=g.input`
  ${R}

  margin: ${H.m}px;
  font-size: ${Y.fontSize.l}px;
  font-weight: ${Y.fontWeight.s};
  width: 100%;
  border: none;
  background: transparent;
`,q=({children:a})=>t(n,{children:[e(Z,{}),e(u,{theme:I,children:a})]}),K=({theme:e})=>e.colors.gray,Q=g(G)`
  ${R}

  padding: ${({theme:e})=>e.spaces.s}px 0;
  border: 1px solid ${K};
  background-color: ${({theme:e})=>e.colors.white};
  border-bottom: ${({$isTodosEnabled:e})=>e&&"none"};
  border-radius: ${({$isTodosEnabled:e})=>e?"0":"0 0 8px 8px"};
  width: 100%;
  min-width: 224px;
  justify-content: space-between;

  &:hover {
    background-color: ${K};
  }
`,U=a.memo((({title:t,onButtonClick:n,$isTodosEnabled:a})=>e(Q,{$isTodosEnabled:a,"data-testid":"calendar-button",onClick:n,children:t})));function X(e){const t=localStorage.getItem(e);return t?JSON.parse(t):[]}function ee(e,t){localStorage.setItem(e,JSON.stringify(t))}const{Start:te,Between:ne,End:ae}=w,{Start:re,Between:oe,End:ie}=w,{darkBlue:se,blue:de,lightBlue:le,white:ce,orange:he,lightGray:ge,red:me,black:pe}=V,ue=({theme:e})=>e.colors.gray,fe=({theme:e})=>e.colors.darkBlueHover,xe=g(G)`
  background-color: ${({$isSelected:e,$rangeState:t})=>((e,t)=>e||t===ie?se:t===re?de:t===oe?le:ce)(e,t)};
  color: ${({$isSelected:e,$isDisabled:t,$isWeekend:n,$rangeState:a,$isHoliday:r})=>((e,t,n,a,r)=>e||a===re||a===ie?ce:r?he:a===oe?se:t?ge:n?me:pe)(e,t,n,a,r)};
  padding: ${({theme:e})=>e.spaces.m}px;
  border-radius: ${({$rangeState:e})=>(e=>{switch(e){case te:return"8px 0 0 8px";case ne:return"0";case ae:return"0 8px 8px 0";default:return"8px"}})(e)};
  width: 32px;
  height: 38px;

  &:hover {
    background-color: ${({$isSelected:e})=>e?fe:ue};
  }
`,De=g.div`
  background-color: ${({theme:e})=>e.colors.orange};
  width: 3px;
  height: 3px;
  border-radius: 50%;
`,{Start:we,End:ye,Between:$e}=w,be=a.memo((a=>{const{dayOfWeek:r,isSelected:o=!1,isDisabled:i=!1,isWeekend:d=!1,isWithRange:l=!1,minDate:c,maxDate:h,isTodosEnabled:g=!1,isHoliday:m=!1}=a,{range:p,setRange:u}=D(),{setSelectedDate:f,setSelectedMonth:x,setSelectedYear:w}=B(),y=r.getDate(),$=r.getMonth(),b=r.getFullYear(),C=s((()=>{if((!c||r>=c)&&(!h||r<=h)&&(f(r),x($),w(b),l))if(p&&(p.rangeStart||p.rangeEnd)){const e=p&&p.rangeStart?p.rangeStart:r,t=r<e?[r,e]:[e,r];u({rangeStart:t[0],rangeEnd:t[1]})}else u({rangeStart:r,rangeEnd:void 0})}),[c,r,h,f,x,$,w,b,l,p,u]),k=X(r.toDateString());return e(n,{children:t(xe,{$isDisabled:i,$isHoliday:m,$isSelected:o,$isWeekend:d,$rangeState:(e=>{if(p&&p.rangeStart){if(e.getTime()===p.rangeStart.getTime())return we;if(p.rangeEnd&&e.getTime()===p.rangeEnd.getTime())return ye;if(p.rangeEnd&&e>p.rangeStart&&e<p.rangeEnd)return $e}})(r),"data-testid":"day-of-week",onClick:C,children:[y,g&&0!==k.length&&e(De,{})]})})})),Ce=(e,t)=>e.getMonth()!==t,ke=(e,t)=>new Date(e,t+1,0).getDate();const Se=(e,t)=>e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear(),ve=(e,t,n)=>{const a=ke(t,e),r=function(e,t){return new Date(e,t,1).getDay()}(t,e);let o;o=n?(7+r-1)%7:(7+r)%7;const{month:i,year:s}=((e,t)=>0===e?{month:11,year:t-1}:{month:e-1,year:t})(e,t),{month:d,year:l}=((e,t)=>11===e?{month:0,year:t+1}:{month:e+1,year:t})(e,t),c=ke(s,i),h=Array.from({length:o},((e,t)=>new Date(s,i,c-o+1+t))),g=Array.from({length:a},((n,a)=>new Date(t,e,a+1))),m=a+o,p=7*Math.ceil(6)-m,u=Array.from({length:p},((e,t)=>{const n=new Date(l,d,t+1);return n.getMonth()===d?n:null})).filter((e=>null!==e));return[...h,...g,...u]};var Me;!function(e){e[e.Week=1]="Week",e[e.Month=2]="Month",e[e.Year=3]="Year"}(Me||(Me={}));const Ee=({theme:e})=>e.spaces.m,We=g.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(1, 1fr);
  width: fit-content;
`,Te=g(We)`
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: baseline;
`,Le=g(j)`
  padding: ${Ee}px;
  flex-direction: column;
`,Fe=g.p`
  ${R}

  align-self: flex-start;
  padding-left: ${Ee}px;
`,{Week:Ae,Month:Be,Year:Ve}=Me,Ye=a=>{const{type:r,isMondayFirst:o,isWeekendDate:i,isWithRange:s,minDate:l,maxDate:c,isTodosEnabled:h,isHolidayDate:g}=a,{firstDateOfWeek:m,selectedDate:p,selectedMonth:u,selectedYear:f}=B(),x=d((()=>r===Ae?(e=>Array.from({length:7},((t,n)=>{const a=new Date(e);return a.setDate(e.getDate()+n),a})))(m):r===Be?ve(u,f,o):void 0),[m,u,f,o,r]),D=d((()=>{if(r===Ve)return((e,t=!1)=>Array.from({length:b},((n,a)=>ve(a,e,t))))(f,o)}),[r,f,o]);return t(n,{children:[x&&e(We,{"data-testid":"day-of-week-grid",children:x.map((t=>e(be,{dayOfWeek:t,isDisabled:Ce(t,u),isHoliday:g&&g(t),isSelected:Se(t,p),isTodosEnabled:h,isWeekend:i&&i(t),isWithRange:s,maxDate:c,minDate:l},t.getTime())))}),r===Ve&&D&&e(Te,{"data-testid":"day-of-week-grid-year",children:D.map((n=>{const a=n[7].getMonth();return t(Le,{children:[e(Fe,{children:$[a]}),e(Ke,{isMondayFirst:o}),e(We,{children:n.map((t=>e(be,{dayOfWeek:t,isDisabled:Ce(t,a),isHoliday:g&&g(t),isSelected:Se(t,p),isTodosEnabled:h,isWeekend:i&&i(t),isWithRange:s,maxDate:c,minDate:l},t.getTime())))})]},n[7].getTime())}))})]})};const He={calendar:"data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg id='Icon / Field / Calendar' clip-path='url(%23clip0_1_7)'%3e%3cpath id='Vector' d='M8.2 9.59999C7.97333 9.59999 7.78347 9.52319 7.6304 9.36959C7.4768 9.21652 7.4 9.02666 7.4 8.79999C7.4 8.57332 7.4768 8.38319 7.6304 8.22959C7.78347 8.07652 7.97333 7.99999 8.2 7.99999C8.42667 7.99999 8.6168 8.07652 8.7704 8.22959C8.92347 8.38319 9 8.57332 9 8.79999C9 9.02666 8.92347 9.21652 8.7704 9.36959C8.6168 9.52319 8.42667 9.59999 8.2 9.59999ZM5 9.59999C4.77333 9.59999 4.5832 9.52319 4.4296 9.36959C4.27653 9.21652 4.2 9.02666 4.2 8.79999C4.2 8.57332 4.27653 8.38319 4.4296 8.22959C4.5832 8.07652 4.77333 7.99999 5 7.99999C5.22667 7.99999 5.4168 8.07652 5.5704 8.22959C5.72347 8.38319 5.8 8.57332 5.8 8.79999C5.8 9.02666 5.72347 9.21652 5.5704 9.36959C5.4168 9.52319 5.22667 9.59999 5 9.59999ZM11.4 9.59999C11.1733 9.59999 10.9835 9.52319 10.8304 9.36959C10.6768 9.21652 10.6 9.02666 10.6 8.79999C10.6 8.57332 10.6768 8.38319 10.8304 8.22959C10.9835 8.07652 11.1733 7.99999 11.4 7.99999C11.6267 7.99999 11.8165 8.07652 11.9696 8.22959C12.1232 8.38319 12.2 8.57332 12.2 8.79999C12.2 9.02666 12.1232 9.21652 11.9696 9.36959C11.8165 9.52319 11.6267 9.59999 11.4 9.59999ZM8.2 12.8C7.97333 12.8 7.78347 12.7232 7.6304 12.5696C7.4768 12.4165 7.4 12.2267 7.4 12C7.4 11.7733 7.4768 11.5835 7.6304 11.4304C7.78347 11.2768 7.97333 11.2 8.2 11.2C8.42667 11.2 8.6168 11.2768 8.7704 11.4304C8.92347 11.5835 9 11.7733 9 12C9 12.2267 8.92347 12.4165 8.7704 12.5696C8.6168 12.7232 8.42667 12.8 8.2 12.8ZM5 12.8C4.77333 12.8 4.5832 12.7232 4.4296 12.5696C4.27653 12.4165 4.2 12.2267 4.2 12C4.2 11.7733 4.27653 11.5835 4.4296 11.4304C4.5832 11.2768 4.77333 11.2 5 11.2C5.22667 11.2 5.4168 11.2768 5.5704 11.4304C5.72347 11.5835 5.8 11.7733 5.8 12C5.8 12.2267 5.72347 12.4165 5.5704 12.5696C5.4168 12.7232 5.22667 12.8 5 12.8ZM11.4 12.8C11.1733 12.8 10.9835 12.7232 10.8304 12.5696C10.6768 12.4165 10.6 12.2267 10.6 12C10.6 11.7733 10.6768 11.5835 10.8304 11.4304C10.9835 11.2768 11.1733 11.2 11.4 11.2C11.6267 11.2 11.8165 11.2768 11.9696 11.4304C12.1232 11.5835 12.2 11.7733 12.2 12C12.2 12.2267 12.1232 12.4165 11.9696 12.5696C11.8165 12.7232 11.6267 12.8 11.4 12.8ZM2.6 16C2.16 16 1.7832 15.8435 1.4696 15.5304C1.15653 15.2168 1 14.84 1 14.4V3.19999C1 2.75999 1.15653 2.38346 1.4696 2.07039C1.7832 1.75679 2.16 1.59999 2.6 1.59999H3.4V-1.04904e-05H5V1.59999H11.4V-1.04904e-05H13V1.59999H13.8C14.24 1.59999 14.6168 1.75679 14.9304 2.07039C15.2435 2.38346 15.4 2.75999 15.4 3.19999V14.4C15.4 14.84 15.2435 15.2168 14.9304 15.5304C14.6168 15.8435 14.24 16 13.8 16H2.6ZM2.6 14.4H13.8V6.39999H2.6V14.4Z' fill='%23AAAAAA'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_1_7'%3e%3crect width='16' height='16' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",clear:"data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg id='Icon / Field / Clear'%3e%3cpath id='Vector' d='M12.9872 3.04239C10.2573 0.319202 5.77739 0.319202 3.04745 3.04239C0.317516 5.76559 0.317516 10.2344 3.04745 12.9576C5.77739 15.6808 10.1873 15.6808 12.9172 12.9576C15.6471 10.2344 15.7171 5.76559 12.9872 3.04239ZM9.97728 10.9327L8.01733 8.97756L6.05738 10.9327L5.0774 9.95511L7.03735 8L5.0774 6.04489L6.05738 5.06733L8.01733 7.02244L9.97728 5.06733L10.9573 6.04489L8.99731 8L10.9573 9.95511L9.97728 10.9327Z' fill='%23AAAAAA'/%3e%3c/g%3e%3c/svg%3e",close:"data:image/svg+xml,%3csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48px' height='48px' viewBox='0%2c0%2c256%2c256'%3e%3cg fill='%23ad1313' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'%3e%3cg transform='translate(0%2c0) scale(10.66667%2c10.66667)'%3e%3cpath d='M4.70703%2c3.29297l-1.41406%2c1.41406l7.29297%2c7.29297l-7.29297%2c7.29297l1.41406%2c1.41406l7.29297%2c-7.29297l7.29297%2c7.29297l1.41406%2c-1.41406l-7.29297%2c-7.29297l7.29297%2c-7.29297l-1.41406%2c-1.41406l-7.29297%2c7.29297z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",nextGrid:"data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg id='Icon / Calendar / Next'%3e%3cpath id='Vector' d='M4.27337 4L3.33337 4.94L6.38671 8L3.33337 11.06L4.27337 12L8.27337 8L4.27337 4Z' fill='black'/%3e%3cpath id='Vector_2' d='M8.66668 4L7.72668 4.94L10.78 8L7.72668 11.06L8.66668 12L12.6667 8L8.66668 4Z' fill='black'/%3e%3c/g%3e%3c/svg%3e",prevGrid:"data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg id='Icon / Calendar / Prev'%3e%3cpath id='Vector' d='M11.7266 12L12.6666 11.06L9.61329 8L12.6666 4.94L11.7266 4L7.72663 8L11.7266 12Z' fill='black'/%3e%3cpath id='Vector_2' d='M7.33332 12L8.27332 11.06L5.21998 8L8.27331 4.94L7.33331 4L3.33332 8L7.33332 12Z' fill='black'/%3e%3c/g%3e%3c/svg%3e"},Ie="nextGreed",Ne=g(j)`
  padding: ${({theme:e})=>e.spaces.s}px 0;
  width: 100%;
  min-width: 224px;
  justify-content: space-between;
`,Oe=g(G)`
  width: 16px;
  height: 16px;
`,ze=g.h1`
  ${R}

  font-size: ${({theme:e})=>e.fonts.fontSize.m}px;
  font-weight: ${({theme:e})=>e.fonts.fontWeight.l};
  cursor: pointer;
`,{Week:Re,Month:Ze,Year:Ge}=Me,{prevGrid:je,nextGrid:Je}=He,_e=a.memo((n=>{const{type:a,minDate:r,maxDate:o,isMondayFirst:i}=n,{selectedDate:d,firstDateOfWeek:c,selectedMonth:h,selectedYear:g,setFirstDateOfWeek:m,setSelectedMonth:p,setSelectedYear:u}=B();l((()=>{m(k(d,i))}),[i,d,m]);const f=a===Ge?`${g}`:`${$[h]} ${g}`,x=s((e=>()=>{let t=h,n=g;const i=c;a===Ze&&(e===Ie?(t=(h+1)%b,n=11===h?g+1:g):(t=(h-1+b)%b,n=0===h?g-1:g)),a===Re&&(e===Ie?i.setDate(i.getDate()+7):i.setDate(i.getDate()-7),t=c.getMonth(),n=c.getFullYear(),m(new Date(i))),a===Ge&&(e===Ie?n++:n--);const s=new Date(n,t);(!r||s>=r)&&(!o||s<=o)&&(p(t),u(n))}),[c,o,r,h,g,m,p,u,a]);return t(Ne,{children:[e(Oe,{"data-testid":"prev-button",onClick:x("prevGreed"),children:e(J,{src:je})}),e(ze,{"data-testid":"grid-slider",children:f}),e(Oe,{"data-testid":"next-button",onClick:x(Ie),children:e(J,{src:Je})})]})})),Pe=g.div`
  ${R}

  font-size: ${({theme:e})=>e.fonts.fontSize.m}px;
  font-weight: ${({theme:e})=>e.fonts.fontWeight.l};
  background-color: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.black};
  padding: ${({theme:e})=>e.spaces.m}px;
  width: 32px;
  height: 32px;
`,qe=a.memo((({weekday:t})=>e(Pe,{children:t}))),Ke=a.memo((({isMondayFirst:t})=>{const n=d((()=>{const e=Object.values(y);return t?[...e.slice(1),e[0]]:e}),[t]);return e(j,{children:n.map((t=>e(qe,{weekday:t},t)))})})),Qe=(e,t)=>{l((()=>{if(!t)return;const n=n=>{e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}}),[e,t])},Ue=({theme:e})=>e.spaces.m,Xe=({theme:e})=>e.spaces.s,et=g(j)`
  flex-direction: column;
  align-items: flex-start;
`,tt=g.label`
  ${R}

  font-size: ${({theme:e})=>e.fonts.fontSize.l}px;
`,nt=g(j)`
  border: 1px solid ${({theme:e})=>e.colors.gray};
  padding: ${Ue}px;
  margin: ${Ue}px 0;
  gap: ${Xe}px;
  width: 246px;
  justify-content: flex-start;
  border-radius: 8px;
  position: relative;
`,at=g(j)`
  gap: ${Xe}px;
`,rt=g.span`
  ${R}

  font-size: ${({theme:e})=>e.fonts.fontSize.s}px;
  font-weight: ${({theme:e})=>e.fonts.fontWeight.s};
  color: ${({theme:e})=>e.colors.red};
`,ot=g.div`
  position: absolute;
  top: 56%;
`,{calendar:it,clear:st}=He,dt=a.memo((({label:n,rangeValue:a,Calendar:r})=>{const[o,d]=i(""),[h,g]=i(""),[m,p]=i(!1),u=c(null);Qe(u,(()=>{g(""),d(M(f)),p(!1)}));const{selectedDate:f}=B(),{setRange:x}=D();l((()=>{d(M(f))}),[f]);const w=s((()=>{g(""),d(M(f)),p((e=>!e))}),[f,p]),y=s((()=>{g(""),d(""),x({rangeStart:void 0,rangeEnd:void 0}),p(!1)}),[x]);return t(et,{children:[t(at,{children:[e(tt,{children:n}),h&&e(rt,{children:h})]}),t(nt,{children:[e(J,{"data-testid":"calendar-icon-button",src:it,onClick:w}),e(ut,{inputValue:a||o,setError:g,setInputValue:d,setIsCalendarOpen:p}),o&&e(J,{"data-testid":"clear-icon-button",src:st,onClick:y})]}),e(ot,{ref:u,children:m&&e(r,{})})]})})),lt=g(j)`
  gap: ${({theme:e})=>e.spaces.m}px;
  flex-direction: row;
`;a.memo((({Calendar:n})=>{const{range:a}=D(),r=a?.rangeStart?M(a.rangeStart):"",o=a?.rangeEnd?M(a.rangeEnd):"";return e(q,{children:t(lt,{children:[e(dt,{Calendar:n,label:"From",rangeValue:r}),e(dt,{Calendar:n,label:"To",rangeValue:o})]})})}));const ct="Enter Date in dd/mm/yyyy format",ht="/",gt=/^[0-9/]*$/,mt=g(P)`
  margin: 0;
`,pt=a.memo((t=>{const{inputValue:n,setInputValue:a,setError:r,setIsCalendarOpen:o}=t,{setSelectedDate:i,setSelectedMonth:d,setSelectedYear:l}=B(),c=s((e=>{r(""),"Backspace"===e.key&&n.endsWith(ht)&&a(n.slice(0,-1))}),[n,r,a]),h=s((()=>{o(!0)}),[]),g=s((e=>{r(""),o(!0);const t=e.target.value;if(!gt.test(t))return e.preventDefault(),void r(ct);if(t.length>=10){a(t.substring(0,10));const e=t.split(ht),n=parseInt(e[0]),o=parseInt(e[1])-1,s=parseInt(e[2]);if(s>9999)return void r(ct);const c=new Date(s,o,n);c.getDate()!==n||c.getMonth()!==o||c.getFullYear()!==s?r("Invalid Date"):(i(c),d(o),l(s))}2===t.length||5===t.length?a(t+ht):a(t)}),[r,a,o,i,d,l]);return e(mt,{"data-testid":"date-picker-input",placeholder:"Coose Date",type:"text",value:n,onChange:g,onFocus:h,onKeyDown:c})}));var ut=pt;const ft=g(j)`
  flex-direction: column;
`,xt=g.p`
  ${R}

  color: ${({theme:e})=>e.colors.red};
`,Dt=g.span`
  ${R}

  text-align: center;
`;class wt extends h{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){this.setState({errorInfo:t})}render(){const{hasError:n,error:a,errorInfo:r}=this.state;return n?t(ft,{"data-testid":"error-boundary",children:[e(_,{children:"An error has occured"}),e(xt,{children:a&&a.toString()}),e(Dt,{children:"(╯°□°）╯︵ ┻━┻"}),e(Dt,{children:r&&r.componentStack})]}):this.props.children}}const yt=({theme:e})=>e.spaces.m,$t=g(j)`
  gap: ${yt}px;
  width: 100%;
`,bt=g(j)`
  border: 1px solid ${({theme:e})=>e.colors.lightGray};
  margin: ${yt}px 0;
  width: 100%;
  justify-content: flex-start;
  border-radius: 8px;
`,Ct=g(G)`
  background-color: ${({theme:e})=>e.colors.darkBlue};
  color: ${({theme:e})=>e.colors.white};
  width: 100px;
  height: 40px;
  border-radius: 8px;
`,kt=a.memo((({todoText:n,onChange:a,onAddTask:r})=>{const o=()=>{r()};return t($t,{children:[e(bt,{children:e(P,{placeholder:"Enter todo text",type:"text",value:n,onChange:e=>{a(e)},onKeyDown:e=>{"Enter"===e.key&&o()}})}),e(Ct,{onClick:o,children:"Add task"})]})})),St=({theme:e})=>e.spaces.m,vt=g(j)`
  border: 1px solid ${({theme:e})=>e.colors.lightGray};
  gap: ${St}px;
  padding: ${St}px;
  justify-content: flex-start;
  width: 100%;
  border-radius: 8px;
`,Mt=g.p`
  ${R}

  text-decoration: ${({$isDone:e})=>e?"line-through":"none"};
  width: 100%;
  max-width: 433px;
  word-wrap: break-word;
`,Et=g(G)`
  &:hover {
    color: ${({theme:e})=>e.colors.red};
  }
`,Wt=a.memo((n=>{const{id:a,todoText:r,isDone:o,setTodos:i}=n,{selectedDate:d}=B(),l=s((()=>{const e=d.toDateString(),t=X(e).map((e=>e.id===a?{...e,isDone:!e.isDone}:e));i(t),ee(e,t)}),[a,d,i]),c=s((()=>{const e=d.toDateString(),t=X(e).filter((e=>e.id!==a));i(t),ee(e,t)}),[a,d,i]);return t(vt,{children:[e("input",{checked:o,type:"checkbox",onChange:l}),e(Mt,{$isDone:o,children:r}),e(Et,{onClick:c,children:"Delete"})]})})),Tt=g(j)`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`,Lt=g(j)`
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
`,Ft=g(G)`
  align-self: flex-end;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.15);
  }
`,{close:At}=He,Bt=a.memo((({children:n,onClose:a})=>{const r=c(null);Qe(r,a);return e(Tt,{children:t(Lt,{ref:r,children:[e(Ft,{"data-testid":"modal-close-button",onClick:()=>{a()},children:e(J,{src:At})}),n]})})})),Vt=g(j)`
  gap: ${({theme:e})=>e.spaces.m}px;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  max-height: 350px;
  overflow: auto;
`,Yt=a.memo((({onClose:n})=>{const[a,r]=i(""),[o,d]=i([]),{selectedDate:c}=B();l((()=>{const e=X(c.toDateString());e&&d(e)}),[c]);const h=s((()=>{n()}),[n]),g=s((e=>{r(e.target.value)}),[]),m=s((()=>{if(""!==a.trim()){const e=c.toDateString(),t=[...o],n={id:String((new Date).getTime()),todoText:a,isDone:!1};t.push(n),d(t),ee(e,t),r("")}}),[a,o,c]),p=o.map((({id:t,...n})=>e(Wt,{id:t,setTodos:d,...n},t)));return t(Bt,{"data-testid":"todo-modal",onClose:h,children:[e(_,{children:"Todos for {Date}".replace("{Date}",c.toDateString())}),e(kt,{todoText:a,onAddTask:m,onChange:g}),e(Vt,{children:0!==o.length?p:"Add some tasks"})]})})),Ht=g(j)`
  background-color: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.gray};
  border-bottom: ${({$isRangeExist:e,$isTodosEnabled:t})=>(e||t)&&"none"};
  border-radius: ${({$isRangeExist:e,$isTodosEnabled:t})=>e||t?"8px 8px 0 0":"8px"};
  padding: 10px;
  flex-direction: column;
  width: fit-content;
`,{Month:It,Week:Nt}=Me,Ot=n=>{const{type:a=It,isMondayFirst:r,isWeekendDate:o,isWithRange:i,minDate:d,maxDate:l,isTodosEnabled:c,isHolidayDate:h}=n,{range:g,setRange:m}=D(),p=s((()=>{m&&m(void 0)}),[m]),u=i&&Boolean(g?.rangeStart)&&Boolean(g?.rangeEnd);return e(q,{children:e(wt,{children:t(A,{children:[t(Ht,{$isRangeExist:u,$isTodosEnabled:c,"data-testid":"calendar",children:[e(_e,{isMondayFirst:r,maxDate:l,minDate:d,type:a}),(a===Nt||a===It)&&e(Ke,{isMondayFirst:r}),e(Ye,{isHolidayDate:h,isMondayFirst:r,isTodosEnabled:c,isWeekendDate:o,isWithRange:i,maxDate:l,minDate:d,type:a})]}),u&&e(U,{$isTodosEnabled:c,title:"Clear Range",onButtonClick:p})]})})})};class zt{calendar;constructor(){this.calendar=Ot}addDecorator(e){this.calendar=e(this.calendar)}getCalendar(){return this.calendar}}const Rt=t=>{const n=n=>e(t,{...n,isHolidayDate:v}),a=t.displayName||t.name;return n.displayName=`withHolidays(${a})`,n},Zt=t=>{const n=n=>{const{minDate:a,maxDate:r}=D();return e(t,{...n,maxDate:r,minDate:a})},a=t.displayName||t.name;return n.displayName=`withRange(${a})`,n},Gt=t=>{const n=n=>e(t,{...n,isMondayFirst:!0}),a=t.displayName||t.name;return n.displayName=`withMondayFirst(${a})`,n},jt=t=>{const n=n=>e(t,{...n,isWithRange:!0}),a=t.displayName||t.name;return n.displayName=`withRange(${a})`,n};const Jt=a=>{const r=r=>{const[o,d]=i(!1),{selectedDate:h}=B(),g=function(e="todo-portal-wrapper"){const t=c(null);return l((()=>{let n=document.getElementById(e),a=!1;return n||(a=!0,n=document.createElement("div"),n.id=e,document.body.appendChild(n)),t.current=n,()=>{a&&n?.parentNode&&n.parentNode.removeChild(n)}}),[e]),e=>{if(t.current)return f.createPortal(e,t.current)}}(),m=s((()=>{d(!0)}),[]),p=s((()=>{d(!1)}),[]),u=0!==X(h.toDateString()).length;return t(n,{children:[e(a,{...r,isTodosEnabled:!0}),e(U,{title:u?"View Tasks":"Add Task",onButtonClick:m}),o&&g(e(Yt,{onClose:p}))]})},o=a.displayName||a.name;return r.displayName=`withTodo(${o})`,r},_t=t=>{const n=n=>e(t,{...n,isWeekendDate:S}),a=t.displayName||t.name;return n.displayName=`withWeekendsDays(${a})`,n};export{zt as CalendarService,dt as DatePicker,D as useDate,Rt as withHolidays,Zt as withMinAndMaxDate,Gt as withMondayFirst,jt as withRange,Jt as withTodos,_t as withWeekends};
//# sourceMappingURL=index.es.js.map
