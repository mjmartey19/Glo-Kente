import { proxy } from "valtio";

const state = proxy({
    intro:true,
    color:'#fff',
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:'./logo.jpg',
    fullDecal:'./logo.jpg'
})

export default state;