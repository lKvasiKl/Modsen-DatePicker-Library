export{default as CalendarService}from"decorators";import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import a,{createContext as r,useContext as o,useRef as i,useEffect as s,useState as l,useCallback as d}from"react";import{Button as c,TodosModal as m,DatePickerInput as h}from"components";import p from"react-dom";import g,{css as w,createGlobalStyle as u,styled as C}from"styled-components";var f,D;!function(e){e.Start="Start",e.Between="Between",e.End="End"}(f||(f={})),function(e){e[e.January=0]="January",e[e.February=1]="February",e[e.March=2]="March",e[e.April=3]="April",e[e.May=4]="May",e[e.June=5]="June",e[e.July=6]="July",e[e.August=7]="August",e[e.September=8]="September",e[e.October=9]="October",e[e.November=10]="November",e[e.December=11]="December"}(D||(D={}));const y=[{name:"New Year's Day",date:new Date("2022-01-01")},{name:"Orthodox Christmas Eve",date:new Date("2022-01-06")},{name:"Orthodox Christmas Day",date:new Date("2022-01-07")},{name:"Defender of the Fatherland Day",date:new Date("2022-02-23")},{name:"International Women's Day",date:new Date("2022-03-08")},{name:"March Equinox",date:new Date("2022-03-20")},{name:"International Labor Day",date:new Date("2022-05-01")},{name:"Commemoration Day",date:new Date("2022-05-03")},{name:"Victory Day",date:new Date("2022-05-09")},{name:"June Solstice",date:new Date("2022-06-21")},{name:"Independence Day",date:new Date("2022-07-03")},{name:"September Equinox",date:new Date("2022-09-03")},{name:"Mother's Day",date:new Date("2022-10-14")},{name:"October Revolution Day",date:new Date("2022-11-07")},{name:"Christmas Eve",date:new Date("2022-12-24")},{name:"Christmas Day",date:new Date("2022-12-25")},{name:"New Year's Eve",date:new Date("2022-12-31")}],x=e=>0===e.getDay()||6===e.getDay(),v=e=>y.some((t=>e.getDate()===t.date.getDate()&&e.getMonth()===t.date.getMonth())),L=e=>`${e.getDate().toString().padStart(2,"0")}/${(e.getMonth()+1).toString().padStart(2,"0")}/${e.getFullYear().toString()}`,b=t=>{const n=n=>e(t,{...n,isHolidayDate:v}),a=t.displayName||t.name;return n.displayName=`withHolidays(${a})`,n},$=r({minDate:new Date(2022,0,1),maxDate:new Date(2035,11,0),range:void 0,setMinDate:()=>{},setMaxDate:()=>{},setRange:()=>{}}),M=()=>o($),k=t=>{const n=n=>{const{minDate:a,maxDate:r}=M();return e(t,{...n,maxDate:r,minDate:a})},a=t.displayName||t.name;return n.displayName=`withRange(${a})`,n},S=t=>{const n=n=>e(t,{...n,isMondayFirst:!0}),a=t.displayName||t.name;return n.displayName=`withMondayFirst(${a})`,n},N=t=>{const n=n=>e(t,{...n,isWithRange:!0}),a=t.displayName||t.name;return n.displayName=`withRange(${a})`,n},V=new Date,A=V.getMonth(),E=V.getFullYear(),Z=r({firstDateOfWeek:((e,t=!1)=>{const n=new Date(e);if(t){const e=n.getDay(),t=0===e?6:e-1;n.setDate(n.getDate()-t)}else n.setDate(n.getDate()-n.getDay());return n})(V),selectedDate:V,selectedMonth:A,selectedYear:E,setFirstDateOfWeek:()=>{},setSelectedDate:()=>{},setSelectedMonth:()=>{},setSelectedYear:()=>{}}),z=()=>o(Z);const H=a=>{const r=r=>{const[o,h]=l(!1),{selectedDate:g}=z(),w=function(e="todo-portal-wrapper"){const t=i(null);return s((()=>{let n=document.getElementById(e),a=!1;return n||(a=!0,n=document.createElement("div"),n.id=e,document.body.appendChild(n)),t.current=n,()=>{a&&n?.parentNode&&n.parentNode.removeChild(n)}}),[e]),e=>{if(t.current)return p.createPortal(e,t.current)}}(),u=d((()=>{h(!0)}),[]),C=d((()=>{h(!1)}),[]),f=0!==function(e){const t=localStorage.getItem(e);return t?JSON.parse(t):[]}(g.toDateString()).length;return t(n,{children:[e(a,{...r,isTodosEnabled:!0}),e(c,{title:f?"View Tasks":"Add Task",onButtonClick:u}),o&&w(e(m,{onClose:C}))]})},o=a.displayName||a.name;return r.displayName=`withTodo(${o})`,r},I=t=>{const n=n=>e(t,{...n,isWeekendDate:x}),a=t.displayName||t.name;return n.displayName=`withWeekendsDays(${a})`,n};const F={calendar:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n<g id="Icon / Field / Calendar" clip-path="url(#clip0_1_7)">\r\n<path id="Vector" d="M8.2 9.59999C7.97333 9.59999 7.78347 9.52319 7.6304 9.36959C7.4768 9.21652 7.4 9.02666 7.4 8.79999C7.4 8.57332 7.4768 8.38319 7.6304 8.22959C7.78347 8.07652 7.97333 7.99999 8.2 7.99999C8.42667 7.99999 8.6168 8.07652 8.7704 8.22959C8.92347 8.38319 9 8.57332 9 8.79999C9 9.02666 8.92347 9.21652 8.7704 9.36959C8.6168 9.52319 8.42667 9.59999 8.2 9.59999ZM5 9.59999C4.77333 9.59999 4.5832 9.52319 4.4296 9.36959C4.27653 9.21652 4.2 9.02666 4.2 8.79999C4.2 8.57332 4.27653 8.38319 4.4296 8.22959C4.5832 8.07652 4.77333 7.99999 5 7.99999C5.22667 7.99999 5.4168 8.07652 5.5704 8.22959C5.72347 8.38319 5.8 8.57332 5.8 8.79999C5.8 9.02666 5.72347 9.21652 5.5704 9.36959C5.4168 9.52319 5.22667 9.59999 5 9.59999ZM11.4 9.59999C11.1733 9.59999 10.9835 9.52319 10.8304 9.36959C10.6768 9.21652 10.6 9.02666 10.6 8.79999C10.6 8.57332 10.6768 8.38319 10.8304 8.22959C10.9835 8.07652 11.1733 7.99999 11.4 7.99999C11.6267 7.99999 11.8165 8.07652 11.9696 8.22959C12.1232 8.38319 12.2 8.57332 12.2 8.79999C12.2 9.02666 12.1232 9.21652 11.9696 9.36959C11.8165 9.52319 11.6267 9.59999 11.4 9.59999ZM8.2 12.8C7.97333 12.8 7.78347 12.7232 7.6304 12.5696C7.4768 12.4165 7.4 12.2267 7.4 12C7.4 11.7733 7.4768 11.5835 7.6304 11.4304C7.78347 11.2768 7.97333 11.2 8.2 11.2C8.42667 11.2 8.6168 11.2768 8.7704 11.4304C8.92347 11.5835 9 11.7733 9 12C9 12.2267 8.92347 12.4165 8.7704 12.5696C8.6168 12.7232 8.42667 12.8 8.2 12.8ZM5 12.8C4.77333 12.8 4.5832 12.7232 4.4296 12.5696C4.27653 12.4165 4.2 12.2267 4.2 12C4.2 11.7733 4.27653 11.5835 4.4296 11.4304C4.5832 11.2768 4.77333 11.2 5 11.2C5.22667 11.2 5.4168 11.2768 5.5704 11.4304C5.72347 11.5835 5.8 11.7733 5.8 12C5.8 12.2267 5.72347 12.4165 5.5704 12.5696C5.4168 12.7232 5.22667 12.8 5 12.8ZM11.4 12.8C11.1733 12.8 10.9835 12.7232 10.8304 12.5696C10.6768 12.4165 10.6 12.2267 10.6 12C10.6 11.7733 10.6768 11.5835 10.8304 11.4304C10.9835 11.2768 11.1733 11.2 11.4 11.2C11.6267 11.2 11.8165 11.2768 11.9696 11.4304C12.1232 11.5835 12.2 11.7733 12.2 12C12.2 12.2267 12.1232 12.4165 11.9696 12.5696C11.8165 12.7232 11.6267 12.8 11.4 12.8ZM2.6 16C2.16 16 1.7832 15.8435 1.4696 15.5304C1.15653 15.2168 1 14.84 1 14.4V3.19999C1 2.75999 1.15653 2.38346 1.4696 2.07039C1.7832 1.75679 2.16 1.59999 2.6 1.59999H3.4V-1.04904e-05H5V1.59999H11.4V-1.04904e-05H13V1.59999H13.8C14.24 1.59999 14.6168 1.75679 14.9304 2.07039C15.2435 2.38346 15.4 2.75999 15.4 3.19999V14.4C15.4 14.84 15.2435 15.2168 14.9304 15.5304C14.6168 15.8435 14.24 16 13.8 16H2.6ZM2.6 14.4H13.8V6.39999H2.6V14.4Z" fill="#AAAAAA"/>\r\n</g>\r\n<defs>\r\n<clipPath id="clip0_1_7">\r\n<rect width="16" height="16" fill="white"/>\r\n</clipPath>\r\n</defs>\r\n</svg>',clear:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n<g id="Icon / Field / Clear">\r\n<path id="Vector" d="M12.9872 3.04239C10.2573 0.319202 5.77739 0.319202 3.04745 3.04239C0.317516 5.76559 0.317516 10.2344 3.04745 12.9576C5.77739 15.6808 10.1873 15.6808 12.9172 12.9576C15.6471 10.2344 15.7171 5.76559 12.9872 3.04239ZM9.97728 10.9327L8.01733 8.97756L6.05738 10.9327L5.0774 9.95511L7.03735 8L5.0774 6.04489L6.05738 5.06733L8.01733 7.02244L9.97728 5.06733L10.9573 6.04489L8.99731 8L10.9573 9.95511L9.97728 10.9327Z" fill="#AAAAAA"/>\r\n</g>\r\n</svg>',close:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48px" height="48px" viewBox="0,0,256,256"><g fill="#ad1313" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="translate(0,0) scale(10.66667,10.66667)"><path d="M4.70703,3.29297l-1.41406,1.41406l7.29297,7.29297l-7.29297,7.29297l1.41406,1.41406l7.29297,-7.29297l7.29297,7.29297l1.41406,-1.41406l-7.29297,-7.29297l7.29297,-7.29297l-1.41406,-1.41406l-7.29297,7.29297z"></path></g></g></svg>',nextGrid:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n<g id="Icon / Calendar / Next">\r\n<path id="Vector" d="M4.27337 4L3.33337 4.94L6.38671 8L3.33337 11.06L4.27337 12L8.27337 8L4.27337 4Z" fill="black"/>\r\n<path id="Vector_2" d="M8.66668 4L7.72668 4.94L10.78 8L7.72668 11.06L8.66668 12L12.6667 8L8.66668 4Z" fill="black"/>\r\n</g>\r\n</svg>',prevGrid:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n<g id="Icon / Calendar / Prev">\r\n<path id="Vector" d="M11.7266 12L12.6666 11.06L9.61329 8L12.6666 4.94L11.7266 4L7.72663 8L11.7266 12Z" fill="black"/>\r\n<path id="Vector_2" d="M7.33332 12L8.27332 11.06L5.21998 8L8.27331 4.94L7.33331 4L3.33332 8L7.33332 12Z" fill="black"/>\r\n</g>\r\n</svg>'},O={openSans:"Open Sans"},B={xl:20,l:15,m:14,s:13},J={l:700,m:600,s:400},W=w`
  display: flex;
`,R=w`
  ${W}

  flex-direction: column;
`,Y=w`
  justify-content: center;
  align-items: center;
`,_=w`
  font-size: ${B.s}px;
  font-weight: ${J.m};
  font-style: normal;
  line-height: normal;
`;u`
    * {
        font-family: ${O.openSans};
        box-sizing: border-box;
        user-select: none;
        text-decoration: none;
        list-style: none;
        outline: none;
        margin: 0;
        padding: 0;
    }
`,g.button`
  ${R}
  ${Y}
  ${_}
  
  background: transparent;
  border: none;
  cursor: pointer;
`;const T=g.div`
  ${W}
  ${Y}
  
  cursor: default;
`,j=g.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;g.h1`
  ${_}

  font-size:  ${B.xl}px;
  font-weight: ${J.l};
`,g.input`
  ${_}

  margin: ${8}px;
  font-size: ${B.l}px;
  font-weight: ${J.s};
  width: 100%;
  border: none;
  background: transparent;
`;const P=({theme:e})=>e.spaces.m,q=({theme:e})=>e.spaces.s,G=C(T)`
  flex-direction: column;
  align-items: flex-start;
`,K=C.label`
  ${_}

  font-size: ${({theme:e})=>e.fonts.fontSize.l}px;
`,Q=C(T)`
  border: 1px solid ${({theme:e})=>e.colors.gray};
  padding: ${P}px;
  margin: ${P}px 0;
  gap: ${q}px;
  width: 246px;
  justify-content: flex-start;
  border-radius: 8px;
  position: relative;
`,U=C(T)`
  gap: ${q}px;
`,X=C.span`
  ${_}

  font-size: ${({theme:e})=>e.fonts.fontSize.s}px;
  font-weight: ${({theme:e})=>e.fonts.fontWeight.s};
  color: ${({theme:e})=>e.colors.red};
`,ee=C.div`
  position: absolute;
  top: 56%;
`,{calendar:te,clear:ne}=F,ae=a.memo((({label:n,rangeValue:a,Calendar:r})=>{const[o,c]=l(""),[m,p]=l(""),[g,w]=l(!1),u=i(null);var C,f;s((()=>{if(!f)return;const e=e=>{C.current&&!C.current.contains(e.target)&&f(e)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[C=u,f=()=>{p(""),c(L(D)),w(!1)}]);const{selectedDate:D}=z(),{setRange:y}=M();s((()=>{c(L(D))}),[D]);const x=d((()=>{p(""),c(L(D)),w((e=>!e))}),[D,w]),v=d((()=>{p(""),c(""),y({rangeStart:void 0,rangeEnd:void 0}),w(!1)}),[y]);return t(G,{children:[t(U,{children:[e(K,{children:n}),m&&e(X,{children:m})]}),t(Q,{children:[e(j,{"data-testid":"calendar-icon-button",src:te,onClick:x}),e(h,{inputValue:a||o,setError:p,setInputValue:c,setIsCalendarOpen:w}),o&&e(j,{"data-testid":"clear-icon-button",src:ne,onClick:v})]}),e(ee,{ref:u,children:g&&e(r,{})})]})}));export{ae as DatePicker,M as useDate,b as withHolidays,k as withMinAndMaxDate,S as withMondayFirst,N as withRange,H as withTodos,I as withWeekends};
