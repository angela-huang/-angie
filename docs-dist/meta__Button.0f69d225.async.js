"use strict";(self.webpackChunkgbi_components=self.webpackChunkgbi_components||[]).push([[461],{14361:function(c,e,t){var u;t.r(e),t.d(e,{demos:function(){return P}});var s=t(15009),d=t.n(s),B=t(99289),p=t.n(B),r=t(67294),I=t(4497),v=t(96343),f=t(47975),P={"button-demo-demo1":{component:r.memo(r.lazy(function(){return t.e(570).then(t.bind(t,65984))})),asset:{type:"BLOCK",id:"button-demo-demo1",refAtomIds:["Button"],dependencies:{"index.tsx":{type:"FILE",value:t(87487).Z},react:{type:"NPM",value:"18.3.1"},"gbi-components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",title:"\u9ED8\u8BA4"},context:{react:u||(u=t.t(r,2)),"gbi-components":v},renderOpts:{compile:function(){var a=p()(d()().mark(function l(){var o,i=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(19).then(t.bind(t,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,i));case 3:case"end":return n.stop()}},l)}));function m(){return a.apply(this,arguments)}return m}()}},"button-demo-button":{component:r.memo(r.lazy(function(){return t.e(570).then(t.bind(t,80370))})),asset:{type:"BLOCK",id:"button-demo-button",refAtomIds:["Button"],dependencies:{"index.tsx":{type:"FILE",value:t(31129).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.3"}},entry:"index.tsx",title:"\u9ED8\u8BA42"},context:{react:u||(u=t.t(r,2)),antd:f},renderOpts:{compile:function(){var a=p()(d()().mark(function l(){var o,i=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(19).then(t.bind(t,4019));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,i));case 3:case"end":return n.stop()}},l)}));function m(){return a.apply(this,arguments)}return m}()}}}},96343:function(c,e,t){t.r(e),t.d(e,{Foo:function(){return B},GBIButton:function(){return m}});var u=t(67294),s=t(85893),d=function(o){return(0,s.jsx)("h4",{children:o.title})},B=d,p=t(97857),r=t.n(p),I=t(13769),v=t.n(I),f=t(14726),P=["text"],a=function(o){var i=o.text,E=v()(o,P);return(0,s.jsx)(f.ZP,r()(r()({},E),{},{children:i}))},m=a},73120:function(c,e,t){t.r(e),t.d(e,{texts:function(){return s}});var u=t(4497);const s=[{value:"This is an example component.",paraId:0,tocIndex:0}]},87487:function(c,e){e.Z=`import React from 'react';\r
\r
import { GBIButton } from 'gbi-components';\r
\r
const Demo1 = () => {\r
  return <GBIButton text='Hello World' type='primary' />\r
}\r
\r
export default Demo1`},31129:function(c,e){e.Z=`import React, { type FC } from 'react';\r
\r
import { Button, ButtonProps } from 'antd';\r
\r
export interface IGBIButtonProps extends ButtonProps {\r
  text: string;\r
}\r
const GBIButton: FC<IGBIButtonProps> = ({text, ...antdButtonkProps}) => <Button {...antdButtonkProps }>{text}</Button>;\r
\r
export default GBIButton;\r
`}}]);
