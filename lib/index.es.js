import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import a,{createContext as r,useState as o,useContext as i,useCallback as s,useMemo as d,useEffect as l,useRef as c,Component as h}from"react";import g,{css as m,createGlobalStyle as p,ThemeProvider as u}from"styled-components";import f from"react-dom";const x=new Date(2022,0,1),D=new Date(2035,11,0),w=r({minDate:x,maxDate:D,range:void 0,setMinDate:()=>{},setMaxDate:()=>{},setRange:()=>{}}),y=({children:t})=>{const[n,a]=o(x),[r,i]=o(D),[s,d]=o({rangeStart:void 0,rangeEnd:void 0}),l={minDate:n,maxDate:r,range:s,setMinDate:a,setMaxDate:i,setRange:d};return e(w.Provider,{value:l,children:t})},$=()=>i(w),b={white:"#ffffff",black:"#333333",gray:"#f1f1f1",lightGray:"#aaaaaa",darkBlueHover:"#5185cb",darkBlue:"#2f80ed",blue:"#2f80ed99",lightBlue:"#2f80ed1a",red:"#b91414",orange:"#f97e00"},C={fontFamily:{openSans:"Open Sans"},fontSize:{xl:20,l:15,m:14,s:13},fontWeight:{l:700,m:600,s:400}},k={l:16,m:8,s:4},S={colors:{...b},fonts:{...C},spaces:{...k}},v=m`
  display: flex;
`,M=m`
  ${v}

  flex-direction: column;
`,E=m`
  justify-content: center;
  align-items: center;
`,W=m`
  font-size: ${C.fontSize.s}px;
  font-weight: ${C.fontWeight.m};
  font-style: normal;
  line-height: normal;
`,T=p`
    * {
        font-family: ${C.fontFamily.openSans};
        box-sizing: border-box;
        user-select: none;
        text-decoration: none;
        list-style: none;
        outline: none;
        margin: 0;
        padding: 0;
    }
`,L=g.button`
  ${M}
  ${E}
  ${W}
  
  background: transparent;
  border: none;
  cursor: pointer;
`,F=g.div`
  ${v}
  ${E}
  
  cursor: default;
`,A=g.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`,B=g.h1`
  ${W}

  font-size:  ${C.fontSize.xl}px;
  font-weight: ${C.fontWeight.l};
`,V=g.input`
  ${W}

  margin: ${k.m}px;
  font-size: ${C.fontSize.l}px;
  font-weight: ${C.fontWeight.s};
  width: 100%;
  border: none;
  background: transparent;
`,Y=({children:a})=>t(n,{children:[e(T,{}),e(u,{theme:S,children:a})]}),H=({theme:e})=>e.colors.gray,I=g(L)`
  ${W}

  padding: ${({theme:e})=>e.spaces.s}px 0;
  border: 1px solid ${H};
  background-color: ${({theme:e})=>e.colors.white};
  border-bottom: ${({$isTodosEnabled:e})=>e&&"none"};
  border-radius: ${({$isTodosEnabled:e})=>e?"0":"0 0 8px 8px"};
  min-width: 246px;
  justify-content: space-between;

  &:hover {
    background-color: ${H};
  }
`,O=a.memo((({title:t,onButtonClick:n,$isTodosEnabled:a})=>e(I,{$isTodosEnabled:a,"data-testid":"calendar-button",onClick:n,children:t})));var z;!function(e){e.Start="Start",e.Between="Between",e.End="End"}(z||(z={}));const N={Sunday:"Su",Monday:"Mo",Tuesday:"Tu",Wednesday:"We",Thursday:"Th",Friday:"Fr",Saturday:"Sa"};var R;!function(e){e[e.January=0]="January",e[e.February=1]="February",e[e.March=2]="March",e[e.April=3]="April",e[e.May=4]="May",e[e.June=5]="June",e[e.July=6]="July",e[e.August=7]="August",e[e.September=8]="September",e[e.October=9]="October",e[e.November=10]="November",e[e.December=11]="December"}(R||(R={}));const Z=12,G=[{name:"New Year's Day",date:new Date("2022-01-01")},{name:"Orthodox Christmas Eve",date:new Date("2022-01-06")},{name:"Orthodox Christmas Day",date:new Date("2022-01-07")},{name:"Defender of the Fatherland Day",date:new Date("2022-02-23")},{name:"International Women's Day",date:new Date("2022-03-08")},{name:"March Equinox",date:new Date("2022-03-20")},{name:"International Labor Day",date:new Date("2022-05-01")},{name:"Commemoration Day",date:new Date("2022-05-03")},{name:"Victory Day",date:new Date("2022-05-09")},{name:"June Solstice",date:new Date("2022-06-21")},{name:"Independence Day",date:new Date("2022-07-03")},{name:"September Equinox",date:new Date("2022-09-03")},{name:"Mother's Day",date:new Date("2022-10-14")},{name:"October Revolution Day",date:new Date("2022-11-07")},{name:"Christmas Eve",date:new Date("2022-12-24")},{name:"Christmas Day",date:new Date("2022-12-25")},{name:"New Year's Eve",date:new Date("2022-12-31")}],j=(e,t=!1)=>{const n=new Date(e);if(t){const e=n.getDay(),t=0===e?6:e-1;n.setDate(n.getDate()-t)}else n.setDate(n.getDate()-n.getDay());return n},J=e=>0===e.getDay()||6===e.getDay(),P=e=>G.some((t=>e.getDate()===t.date.getDate()&&e.getMonth()===t.date.getMonth())),_=e=>`${e.getDate().toString().padStart(2,"0")}/${(e.getMonth()+1).toString().padStart(2,"0")}/${e.getFullYear().toString()}`,q=new Date,K=q.getMonth(),Q=q.getFullYear(),U=j(q),X=r({firstDateOfWeek:U,selectedDate:q,selectedMonth:K,selectedYear:Q,setFirstDateOfWeek:()=>{},setSelectedDate:()=>{},setSelectedMonth:()=>{},setSelectedYear:()=>{}}),ee=({children:t})=>{const[n,a]=o(U),[r,i]=o(q),[s,d]=o(K),[l,c]=o(Q),h={firstDateOfWeek:n,selectedDate:r,selectedMonth:s,selectedYear:l,setSelectedDate:i,setSelectedMonth:d,setSelectedYear:c,setFirstDateOfWeek:a};return e(X.Provider,{value:h,children:t})},te=()=>i(X);function ne(e){const t=localStorage.getItem(e);return t?JSON.parse(t):[]}function ae(e,t){localStorage.setItem(e,JSON.stringify(t))}const{Start:re,Between:oe,End:ie}=z,{Start:se,Between:de,End:le}=z,{darkBlue:ce,blue:he,lightBlue:ge,white:me,orange:pe,lightGray:ue,red:fe,black:xe}=b,De=({theme:e})=>e.colors.gray,we=({theme:e})=>e.colors.darkBlueHover,ye=g(L)`
  background-color: ${({$isSelected:e,$rangeState:t})=>((e,t)=>e||t===le?ce:t===se?he:t===de?ge:me)(e,t)};
  color: ${({$isSelected:e,$isDisabled:t,$isWeekend:n,$rangeState:a,$isHoliday:r})=>((e,t,n,a,r)=>e||a===se||a===le?me:r?pe:a===de?ce:t?ue:n?fe:xe)(e,t,n,a,r)};
  padding: ${({theme:e})=>e.spaces.m}px;
  border-radius: ${({$rangeState:e})=>(e=>{switch(e){case re:return"8px 0 0 8px";case oe:return"0";case ie:return"0 8px 8px 0";default:return"8px"}})(e)};
  width: 32px;
  height: 38px;

  &:hover {
    background-color: ${({$isSelected:e})=>e?we:De};
  }
`,$e=g.div`
  background-color: ${({theme:e})=>e.colors.orange};
  width: 3px;
  height: 3px;
  border-radius: 50%;
`,{Start:be,End:Ce,Between:ke}=z,Se=a.memo((a=>{const{dayOfWeek:r,isSelected:o=!1,isDisabled:i=!1,isWeekend:d=!1,isWithRange:l=!1,minDate:c,maxDate:h,isTodosEnabled:g=!1,isHoliday:m=!1}=a,{range:p,setRange:u}=$(),{setSelectedDate:f,setSelectedMonth:x,setSelectedYear:D}=te(),w=r.getDate(),y=r.getMonth(),b=r.getFullYear(),C=s((()=>{if((!c||r>=c)&&(!h||r<=h)&&(f(r),x(y),D(b),l))if(p&&(p.rangeStart||p.rangeEnd)){const e=p&&p.rangeStart?p.rangeStart:r,t=r<e?[r,e]:[e,r];u({rangeStart:t[0],rangeEnd:t[1]})}else u({rangeStart:r,rangeEnd:void 0})}),[c,r,h,f,x,y,D,b,l,p,u]),k=ne(r.toDateString());return e(n,{children:t(ye,{$isDisabled:i,$isHoliday:m,$isSelected:o,$isWeekend:d,$rangeState:(e=>{if(p&&p.rangeStart){if(e.getTime()===p.rangeStart.getTime())return be;if(p.rangeEnd&&e.getTime()===p.rangeEnd.getTime())return Ce;if(p.rangeEnd&&e>p.rangeStart&&e<p.rangeEnd)return ke}})(r),"data-testid":"day-of-week",onClick:C,children:[w,g&&0!==k.length&&e($e,{})]})})})),ve=(e,t)=>e.getMonth()!==t,Me=(e,t)=>new Date(e,t+1,0).getDate();const Ee=(e,t)=>e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear(),We=(e,t,n)=>{const a=Me(t,e),r=function(e,t){return new Date(e,t,1).getDay()}(t,e);let o;o=n?(7+r-1)%7:(7+r)%7;const{month:i,year:s}=((e,t)=>0===e?{month:11,year:t-1}:{month:e-1,year:t})(e,t),{month:d,year:l}=((e,t)=>11===e?{month:0,year:t+1}:{month:e+1,year:t})(e,t),c=Me(s,i),h=Array.from({length:o},((e,t)=>new Date(s,i,c-o+1+t))),g=Array.from({length:a},((n,a)=>new Date(t,e,a+1))),m=a+o,p=7*Math.ceil(6)-m,u=Array.from({length:p},((e,t)=>{const n=new Date(l,d,t+1);return n.getMonth()===d?n:null})).filter((e=>null!==e));return[...h,...g,...u]};var Te;!function(e){e[e.Week=1]="Week",e[e.Month=2]="Month",e[e.Year=3]="Year"}(Te||(Te={}));const Le=({theme:e})=>e.spaces.m,Fe=g.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(1, 1fr);
  width: fit-content;
`,Ae=g(Fe)`
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: baseline;
`,Be=g(F)`
  padding: ${Le}px;
  flex-direction: column;
`,Ve=g.p`
  ${W}

  align-self: flex-start;
  padding-left: ${Le}px;
`,{Week:Ye,Month:He,Year:Ie}=Te,Oe=a=>{const{type:r,isMondayFirst:o,isWeekendDate:i,isWithRange:s,minDate:l,maxDate:c,isTodosEnabled:h,isHolidayDate:g}=a,{firstDateOfWeek:m,selectedDate:p,selectedMonth:u,selectedYear:f}=te(),x=d((()=>r===Ye?(e=>Array.from({length:7},((t,n)=>{const a=new Date(e);return a.setDate(e.getDate()+n),a})))(m):r===He?We(u,f,o):void 0),[m,u,f,o,r]),D=d((()=>{if(r===Ie)return((e,t=!1)=>Array.from({length:Z},((n,a)=>We(a,e,t))))(f,o)}),[r,f,o]);return t(n,{children:[x&&e(Fe,{"data-testid":"day-of-week-grid",children:x.map((t=>e(Se,{dayOfWeek:t,isDisabled:ve(t,u),isHoliday:g&&g(t),isSelected:Ee(t,p),isTodosEnabled:h,isWeekend:i&&i(t),isWithRange:s,maxDate:c,minDate:l},t.getTime())))}),r===Ie&&D&&e(Ae,{"data-testid":"day-of-week-grid-year",children:D.map((n=>{const a=n[7].getMonth();return t(Be,{children:[e(Ve,{children:R[a]}),e(Xe,{isMondayFirst:o}),e(Fe,{children:n.map((t=>e(Se,{dayOfWeek:t,isDisabled:ve(t,a),isHoliday:g&&g(t),isSelected:Ee(t,p),isTodosEnabled:h,isWeekend:i&&i(t),isWithRange:s,maxDate:c,minDate:l},t.getTime())))})]},n[7].getTime())}))})]})};const ze={calendar:"data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg id='Icon / Field / Calendar' clip-path='url(%23clip0_1_7)'%3e%3cpath id='Vector' d='M8.2 9.59999C7.97333 9.59999 7.78347 9.52319 7.6304 9.36959C7.4768 9.21652 7.4 9.02666 7.4 8.79999C7.4 8.57332 7.4768 8.38319 7.6304 8.22959C7.78347 8.07652 7.97333 7.99999 8.2 7.99999C8.42667 7.99999 8.6168 8.07652 8.7704 8.22959C8.92347 8.38319 9 8.57332 9 8.79999C9 9.02666 8.92347 9.21652 8.7704 9.36959C8.6168 9.52319 8.42667 9.59999 8.2 9.59999ZM5 9.59999C4.77333 9.59999 4.5832 9.52319 4.4296 9.36959C4.27653 9.21652 4.2 9.02666 4.2 8.79999C4.2 8.57332 4.27653 8.38319 4.4296 8.22959C4.5832 8.07652 4.77333 7.99999 5 7.99999C5.22667 7.99999 5.4168 8.07652 5.5704 8.22959C5.72347 8.38319 5.8 8.57332 5.8 8.79999C5.8 9.02666 5.72347 9.21652 5.5704 9.36959C5.4168 9.52319 5.22667 9.59999 5 9.59999ZM11.4 9.59999C11.1733 9.59999 10.9835 9.52319 10.8304 9.36959C10.6768 9.21652 10.6 9.02666 10.6 8.79999C10.6 8.57332 10.6768 8.38319 10.8304 8.22959C10.9835 8.07652 11.1733 7.99999 11.4 7.99999C11.6267 7.99999 11.8165 8.07652 11.9696 8.22959C12.1232 8.38319 12.2 8.57332 12.2 8.79999C12.2 9.02666 12.1232 9.21652 11.9696 9.36959C11.8165 9.52319 11.6267 9.59999 11.4 9.59999ZM8.2 12.8C7.97333 12.8 7.78347 12.7232 7.6304 12.5696C7.4768 12.4165 7.4 12.2267 7.4 12C7.4 11.7733 7.4768 11.5835 7.6304 11.4304C7.78347 11.2768 7.97333 11.2 8.2 11.2C8.42667 11.2 8.6168 11.2768 8.7704 11.4304C8.92347 11.5835 9 11.7733 9 12C9 12.2267 8.92347 12.4165 8.7704 12.5696C8.6168 12.7232 8.42667 12.8 8.2 12.8ZM5 12.8C4.77333 12.8 4.5832 12.7232 4.4296 12.5696C4.27653 12.4165 4.2 12.2267 4.2 12C4.2 11.7733 4.27653 11.5835 4.4296 11.4304C4.5832 11.2768 4.77333 11.2 5 11.2C5.22667 11.2 5.4168 11.2768 5.5704 11.4304C5.72347 11.5835 5.8 11.7733 5.8 12C5.8 12.2267 5.72347 12.4165 5.5704 12.5696C5.4168 12.7232 5.22667 12.8 5 12.8ZM11.4 12.8C11.1733 12.8 10.9835 12.7232 10.8304 12.5696C10.6768 12.4165 10.6 12.2267 10.6 12C10.6 11.7733 10.6768 11.5835 10.8304 11.4304C10.9835 11.2768 11.1733 11.2 11.4 11.2C11.6267 11.2 11.8165 11.2768 11.9696 11.4304C12.1232 11.5835 12.2 11.7733 12.2 12C12.2 12.2267 12.1232 12.4165 11.9696 12.5696C11.8165 12.7232 11.6267 12.8 11.4 12.8ZM2.6 16C2.16 16 1.7832 15.8435 1.4696 15.5304C1.15653 15.2168 1 14.84 1 14.4V3.19999C1 2.75999 1.15653 2.38346 1.4696 2.07039C1.7832 1.75679 2.16 1.59999 2.6 1.59999H3.4V-1.04904e-05H5V1.59999H11.4V-1.04904e-05H13V1.59999H13.8C14.24 1.59999 14.6168 1.75679 14.9304 2.07039C15.2435 2.38346 15.4 2.75999 15.4 3.19999V14.4C15.4 14.84 15.2435 15.2168 14.9304 15.5304C14.6168 15.8435 14.24 16 13.8 16H2.6ZM2.6 14.4H13.8V6.39999H2.6V14.4Z' fill='%23AAAAAA'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_1_7'%3e%3crect width='16' height='16' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",clear:"data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg id='Icon / Field / Clear'%3e%3cpath id='Vector' d='M12.9872 3.04239C10.2573 0.319202 5.77739 0.319202 3.04745 3.04239C0.317516 5.76559 0.317516 10.2344 3.04745 12.9576C5.77739 15.6808 10.1873 15.6808 12.9172 12.9576C15.6471 10.2344 15.7171 5.76559 12.9872 3.04239ZM9.97728 10.9327L8.01733 8.97756L6.05738 10.9327L5.0774 9.95511L7.03735 8L5.0774 6.04489L6.05738 5.06733L8.01733 7.02244L9.97728 5.06733L10.9573 6.04489L8.99731 8L10.9573 9.95511L9.97728 10.9327Z' fill='%23AAAAAA'/%3e%3c/g%3e%3c/svg%3e",close:"data:image/svg+xml,%3csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='48px' height='48px' viewBox='0%2c0%2c256%2c256'%3e%3cg fill='%23ad1313' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'%3e%3cg transform='translate(0%2c0) scale(10.66667%2c10.66667)'%3e%3cpath d='M4.70703%2c3.29297l-1.41406%2c1.41406l7.29297%2c7.29297l-7.29297%2c7.29297l1.41406%2c1.41406l7.29297%2c-7.29297l7.29297%2c7.29297l1.41406%2c-1.41406l-7.29297%2c-7.29297l7.29297%2c-7.29297l-1.41406%2c-1.41406l-7.29297%2c7.29297z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",nextGrid:"data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg id='Icon / Calendar / Next'%3e%3cpath id='Vector' d='M4.27337 4L3.33337 4.94L6.38671 8L3.33337 11.06L4.27337 12L8.27337 8L4.27337 4Z' fill='black'/%3e%3cpath id='Vector_2' d='M8.66668 4L7.72668 4.94L10.78 8L7.72668 11.06L8.66668 12L12.6667 8L8.66668 4Z' fill='black'/%3e%3c/g%3e%3c/svg%3e",prevGrid:"data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg id='Icon / Calendar / Prev'%3e%3cpath id='Vector' d='M11.7266 12L12.6666 11.06L9.61329 8L12.6666 4.94L11.7266 4L7.72663 8L11.7266 12Z' fill='black'/%3e%3cpath id='Vector_2' d='M7.33332 12L8.27332 11.06L5.21998 8L8.27331 4.94L7.33331 4L3.33332 8L7.33332 12Z' fill='black'/%3e%3c/g%3e%3c/svg%3e"},Ne="nextGreed",Re=g(F)`
  padding: ${({theme:e})=>e.spaces.s}px 0;
  width: 100%;
  min-width: 224px;
  justify-content: space-between;
`,Ze=g(L)`
  width: 16px;
  height: 16px;
`,Ge=g.h1`
  ${W}

  font-size: ${({theme:e})=>e.fonts.fontSize.m}px;
  font-weight: ${({theme:e})=>e.fonts.fontWeight.l};
  cursor: pointer;
`,{Week:je,Month:Je,Year:Pe}=Te,{prevGrid:_e,nextGrid:qe}=ze,Ke=a.memo((n=>{const{type:a,minDate:r,maxDate:o,isMondayFirst:i}=n,{selectedDate:d,firstDateOfWeek:c,selectedMonth:h,selectedYear:g,setFirstDateOfWeek:m,setSelectedMonth:p,setSelectedYear:u}=te();l((()=>{m(j(d,i))}),[i,d,m]);const f=a===Pe?`${g}`:`${R[h]} ${g}`,x=s((e=>()=>{let t=h,n=g;const i=c;a===Je&&(e===Ne?(t=(h+1)%Z,n=11===h?g+1:g):(t=(h-1+Z)%Z,n=0===h?g-1:g)),a===je&&(e===Ne?i.setDate(i.getDate()+7):i.setDate(i.getDate()-7),t=c.getMonth(),n=c.getFullYear(),m(new Date(i))),a===Pe&&(e===Ne?n++:n--);const s=new Date(n,t);(!r||s>=r)&&(!o||s<=o)&&(p(t),u(n))}),[c,o,r,h,g,m,p,u,a]);return t(Re,{children:[e(Ze,{"data-testid":"prev-button",onClick:x("prevGreed"),children:e(A,{src:_e})}),e(Ge,{"data-testid":"grid-slider",children:f}),e(Ze,{"data-testid":"next-button",onClick:x(Ne),children:e(A,{src:qe})})]})})),Qe=g.div`
  ${W}

  font-size: ${({theme:e})=>e.fonts.fontSize.m}px;
  font-weight: ${({theme:e})=>e.fonts.fontWeight.l};
  background-color: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.black};
  padding: ${({theme:e})=>e.spaces.m}px;
  width: 32px;
  height: 32px;
`,Ue=a.memo((({weekday:t})=>e(Qe,{children:t}))),Xe=a.memo((({isMondayFirst:t})=>{const n=d((()=>{const e=Object.values(N);return t?[...e.slice(1),e[0]]:e}),[t]);return e(F,{children:n.map((t=>e(Ue,{weekday:t},t)))})})),et=(e,t)=>{l((()=>{if(!t)return;const n=n=>{e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}}),[e,t])},tt=({theme:e})=>e.spaces.m,nt=({theme:e})=>e.spaces.s,at=g(F)`
  flex-direction: column;
  align-items: flex-start;
`,rt=g.label`
  ${W}

  font-size: ${({theme:e})=>e.fonts.fontSize.l}px;
`,ot=g(F)`
  border: 1px solid ${({theme:e})=>e.colors.gray};
  padding: ${tt}px;
  margin: ${tt}px 0;
  gap: ${nt}px;
  width: 246px;
  justify-content: flex-start;
  border-radius: 8px;
`,it=g(F)`
  gap: ${nt}px;
`,st=g.span`
  ${W}

  font-size: ${({theme:e})=>e.fonts.fontSize.s}px;
  font-weight: ${({theme:e})=>e.fonts.fontWeight.s};
  color: ${({theme:e})=>e.colors.red};
`,{calendar:dt,clear:lt}=ze,ct=a.memo((({label:n,rangeValue:a,Calendar:r})=>{const[i,d]=o(""),[h,g]=o(""),[m,p]=o(!1),u=c(null);et(u,(()=>{g(""),d(_(f)),p(!1)}));const{selectedDate:f}=te(),{setRange:x}=$();l((()=>{d(_(f))}),[f]);const D=s((()=>{g(""),d(_(f)),p((e=>!e))}),[f,p]),w=s((()=>{g(""),d(""),x({rangeStart:void 0,rangeEnd:void 0}),p(!1)}),[x]);return e(Y,{children:t(at,{children:[t(it,{children:[e(rt,{children:n}),h&&e(st,{children:h})]}),t(ot,{children:[e(A,{"data-testid":"calendar-icon-button",src:dt,onClick:D}),e(xt,{inputValue:a||i,setError:g,setInputValue:d,setIsCalendarOpen:p}),i&&e(A,{"data-testid":"clear-icon-button",src:lt,onClick:w})]}),e("div",{ref:u,children:m&&e(r,{})})]})})})),ht=g(F)`
  gap: ${({theme:e})=>e.spaces.m}px;
  flex-direction: row;
`;a.memo((({Calendar:n})=>{const{range:a}=$(),r=a?.rangeStart?_(a.rangeStart):"",o=a?.rangeEnd?_(a.rangeEnd):"";return e(Y,{children:t(ht,{children:[e(ct,{Calendar:n,label:"From",rangeValue:r}),e(ct,{Calendar:n,label:"To",rangeValue:o})]})})}));const gt="Enter Date in dd/mm/yyyy format",mt="/",pt=/^[0-9/]*$/,ut=g(V)`
  margin: 0;
`,ft=a.memo((t=>{const{inputValue:n,setInputValue:a,setError:r,setIsCalendarOpen:o}=t,{setSelectedDate:i,setSelectedMonth:d,setSelectedYear:l}=te(),c=s((e=>{r(""),"Backspace"===e.key&&n.endsWith(mt)&&a(n.slice(0,-1))}),[n,r,a]),h=s((()=>{o(!0)}),[]),g=s((e=>{r(""),o(!0);const t=e.target.value;if(!pt.test(t))return e.preventDefault(),void r(gt);if(t.length>=10){a(t.substring(0,10));const e=t.split(mt),n=parseInt(e[0]),o=parseInt(e[1])-1,s=parseInt(e[2]);if(s>9999)return void r(gt);const c=new Date(s,o,n);c.getDate()!==n||c.getMonth()!==o||c.getFullYear()!==s?r("Invalid Date"):(i(c),d(o),l(s))}2===t.length||5===t.length?a(t+mt):a(t)}),[r,a,o,i,d,l]);return e(ut,{"data-testid":"date-picker-input",placeholder:"Coose Date",type:"text",value:n,onChange:g,onFocus:h,onKeyDown:c})}));var xt=ft;const Dt=g(F)`
  flex-direction: column;
`,wt=g.p`
  ${W}

  color: ${({theme:e})=>e.colors.red};
`,yt=g.span`
  ${W}

  text-align: center;
`;class $t extends h{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){this.setState({errorInfo:t})}render(){const{hasError:n,error:a,errorInfo:r}=this.state;return n?t(Dt,{"data-testid":"error-boundary",children:[e(B,{children:"An error has occured"}),e(wt,{children:a&&a.toString()}),e(yt,{children:"(╯°□°）╯︵ ┻━┻"}),e(yt,{children:r&&r.componentStack})]}):this.props.children}}const bt=({theme:e})=>e.spaces.m,Ct=g(F)`
  gap: ${bt}px;
  width: 100%;
`,kt=g(F)`
  border: 1px solid ${({theme:e})=>e.colors.lightGray};
  margin: ${bt}px 0;
  width: 100%;
  justify-content: flex-start;
  border-radius: 8px;
`,St=g(L)`
  background-color: ${({theme:e})=>e.colors.darkBlue};
  color: ${({theme:e})=>e.colors.white};
  width: 100px;
  height: 40px;
  border-radius: 8px;
`,vt=a.memo((({todoText:n,onChange:a,onAddTask:r})=>{const o=()=>{r()};return t(Ct,{children:[e(kt,{children:e(V,{placeholder:"Enter todo text",type:"text",value:n,onChange:e=>{a(e)},onKeyDown:e=>{"Enter"===e.key&&o()}})}),e(St,{onClick:o,children:"Add task"})]})})),Mt=({theme:e})=>e.spaces.m,Et=g(F)`
  border: 1px solid ${({theme:e})=>e.colors.lightGray};
  gap: ${Mt}px;
  padding: ${Mt}px;
  justify-content: flex-start;
  width: 100%;
  border-radius: 8px;
`,Wt=g.p`
  ${W}

  text-decoration: ${({$isDone:e})=>e?"line-through":"none"};
  width: 100%;
  max-width: 433px;
  word-wrap: break-word;
`,Tt=g(L)`
  &:hover {
    color: ${({theme:e})=>e.colors.red};
  }
`,Lt=a.memo((n=>{const{id:a,todoText:r,isDone:o,setTodos:i}=n,{selectedDate:d}=te(),l=s((()=>{const e=d.toDateString(),t=ne(e).map((e=>e.id===a?{...e,isDone:!e.isDone}:e));i(t),ae(e,t)}),[a,d,i]),c=s((()=>{const e=d.toDateString(),t=ne(e).filter((e=>e.id!==a));i(t),ae(e,t)}),[a,d,i]);return t(Et,{children:[e("input",{checked:o,type:"checkbox",onChange:l}),e(Wt,{$isDone:o,children:r}),e(Tt,{onClick:c,children:"Delete"})]})})),Ft=g(F)`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`,At=g(F)`
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
`,Bt=g(L)`
  align-self: flex-end;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.15);
  }
`,{close:Vt}=ze,Yt=a.memo((({children:n,onClose:a})=>{const r=c(null);et(r,a);return e(Ft,{children:t(At,{ref:r,children:[e(Bt,{"data-testid":"modal-close-button",onClick:()=>{a()},children:e(A,{src:Vt})}),n]})})})),Ht=g(F)`
  gap: ${({theme:e})=>e.spaces.m}px;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  max-height: 350px;
  overflow: auto;
`,It=a.memo((({onClose:n})=>{const[a,r]=o(""),[i,d]=o([]),{selectedDate:c}=te();l((()=>{const e=ne(c.toDateString());e&&d(e)}),[c]);const h=s((()=>{n()}),[n]),g=s((e=>{r(e.target.value)}),[]),m=s((()=>{if(""!==a.trim()){const e=c.toDateString(),t=[...i],n={id:String((new Date).getTime()),todoText:a,isDone:!1};t.push(n),d(t),ae(e,t),r("")}}),[a,i,c]),p=i.map((({id:t,...n})=>e(Lt,{id:t,setTodos:d,...n},t)));return t(Yt,{"data-testid":"todo-modal",onClose:h,children:[e(B,{children:"Todos for {Date}".replace("{Date}",c.toDateString())}),e(vt,{todoText:a,onAddTask:m,onChange:g}),e(Ht,{children:0!==i.length?p:"Add some tasks"})]})})),Ot=g(F)`
  background-color: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.gray};
  border-bottom: ${({$isRangeExist:e,$isTodosEnabled:t})=>(e||t)&&"none"};
  border-radius: ${({$isRangeExist:e,$isTodosEnabled:t})=>e||t?"8px 8px 0 0":"8px"};
  padding: 10px;
  flex-direction: column;
  width: fit-content;
`,{Month:zt,Week:Nt}=Te,Rt=n=>{const{type:a=zt,isMondayFirst:r,isWeekendDate:o,isWithRange:i,minDate:d,maxDate:l,isTodosEnabled:c,isHolidayDate:h}=n,{range:g,setRange:m}=$(),p=s((()=>{m&&m(void 0)}),[m]),u=i&&Boolean(g?.rangeStart)&&Boolean(g?.rangeEnd);return e(Y,{children:t($t,{children:[t(Ot,{$isRangeExist:u,$isTodosEnabled:c,"data-testid":"calendar",children:[e(Ke,{isMondayFirst:r,maxDate:l,minDate:d,type:a}),(a===Nt||a===zt)&&e(Xe,{isMondayFirst:r}),e(Oe,{isHolidayDate:h,isMondayFirst:r,isTodosEnabled:c,isWeekendDate:o,isWithRange:i,maxDate:l,minDate:d,type:a})]}),u&&e(O,{$isTodosEnabled:c,title:"Clear Range",onButtonClick:p})]})})};class Zt{calendar;constructor(){this.calendar=Rt}addDecorator(e){this.calendar=e(this.calendar)}getCalendar(){return this.calendar}}const Gt=t=>{const n=n=>e(t,{...n,isHolidayDate:P}),a=t.displayName||t.name;return n.displayName=`withHolidays(${a})`,n},jt=t=>{const n=n=>e(t,{...n,isMondayFirst:!0}),a=t.displayName||t.name;return n.displayName=`withMondayFirst(${a})`,n},Jt=t=>{const n=n=>e(t,{...n,isWithRange:!0}),a=t.displayName||t.name;return n.displayName=`withRange(${a})`,n};const Pt=n=>{const a=a=>{const[r,i]=o(!1),{selectedDate:d}=te(),h=function(e="todo-portal-wrapper"){const t=c(null);return l((()=>{let n=document.getElementById(e),a=!1;return n||(a=!0,n=document.createElement("div"),n.id=e,document.body.appendChild(n)),t.current=n,()=>{a&&n?.parentNode&&n.parentNode.removeChild(n)}}),[e]),e=>{if(t.current)return f.createPortal(e,t.current)}}(),g=s((()=>{i(!0)}),[]),m=s((()=>{i(!1)}),[]),p=0!==ne(d.toDateString()).length;return t(Y,{children:[e(n,{...a,isTodosEnabled:!0}),e(O,{title:p?"View Tasks":"Add Task",onButtonClick:g}),r&&h(e(It,{onClose:m}))]})},r=n.displayName||n.name;return a.displayName=`withTodo(${r})`,a},_t=t=>{const n=n=>e(t,{...n,isWeekendDate:J}),a=t.displayName||t.name;return n.displayName=`withWeekendsDays(${a})`,n};export{ee as CalendarProvider,Zt as CalendarService,ct as DatePicker,y as DateProvider,$ as useDate,Gt as withHolidays,jt as withMondayFirst,Jt as withRange,Pt as withTodos,_t as withWeekends};
//# sourceMappingURL=index.es.js.map
