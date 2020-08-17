export default{
    routes:[
        {
            path:"/",
            name:"Home",
            component:()=>import("@/views/Home")
        },
        {
            path:"/login",
            name:"Login",
            component:()=>import("@/views/Login")
        }
    ],
    mode:"history"
}