import{C as a,D as r,E as s}from"./index-CGsZ6UvI.js";const o=a("Detail",{state:()=>({hospitalInfo:{},deparmentArr:[]}),actions:{async getHospital(e){let t=await r(e);t.code==200&&(this.hospitalInfo=t.data)},async getDeparment(e){let t=await s(e);t.code==200&&(this.deparmentArr=t.data)}},getters:{}});export{o as u};
