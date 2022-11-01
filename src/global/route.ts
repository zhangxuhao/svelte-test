
const go=(href:string)=>{
    document.location.href = href;
}
const replace=(href:string)=>{
    window.location.replace(href);
}

const back=()=>{
    window.history.back();
}
const route={
    go,
    replace,
    back,
}


export default route